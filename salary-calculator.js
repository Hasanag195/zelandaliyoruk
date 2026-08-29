// NZ maaş/vergi hesaplayıcısı. Oranlar IRD'nin güncel resmi kaynaklarına
// dayanır (2026-08-30 itibarıyla doğrulandı):
// - Gelir vergisi dilimleri (1 Nisan 2025'ten itibaren):
//   ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals
// - ACC işçi primi (2026-27 dönemi, %1.75 / $156,641 tavan):
//   ird.govt.nz/income-tax/income-tax-for-individuals/acc-clients-and-carers/acc-earners-levy-rates
// - Öğrenci kredisi geri ödemesi (%12, $24,128 eşik, dondurulmuş):
//   ird.govt.nz/student-loans/living-in-new-zealand-with-a-student-loan/repaying-my-student-loan-when-i-earn-salary-or-wages
// - IETC (yıllık azami $520, $24,000-$70,000 aralığı, $66,000 üzeri %13 azalma):
//   ird.govt.nz/income-tax/income-tax-for-individuals/individual-tax-credits/independent-earner-tax-credit-ietc
(function () {
  const TAX_BRACKETS = [
    [0, 15600, 0.105],
    [15600, 53500, 0.175],
    [53500, 78100, 0.30],
    [78100, 180000, 0.33],
    [180000, Infinity, 0.39],
  ];
  const ACC_RATE = 0.0175;
  const ACC_CAP = 156641;
  const SL_THRESHOLD = 24128;
  const SL_RATE = 0.12;
  const IETC_MIN = 24000;
  const IETC_FULL_MAX = 66000;
  const IETC_ABATE_END = 70000;
  const IETC_MAX = 520;
  const IETC_ABATE_RATE = 0.13;

  const PERIOD_MULTIPLIER = { year: 1, month: 12, week: 52 };

  function calcIncomeTax(gross) {
    let tax = 0;
    for (const [lo, hi, rate] of TAX_BRACKETS) {
      if (gross > lo) tax += (Math.min(gross, hi) - lo) * rate;
    }
    return tax;
  }

  function calcAcc(gross) {
    return Math.min(gross, ACC_CAP) * ACC_RATE;
  }

  function calcStudentLoan(gross) {
    return gross > SL_THRESHOLD ? (gross - SL_THRESHOLD) * SL_RATE : 0;
  }

  function calcIetc(gross) {
    if (gross < IETC_MIN || gross > IETC_ABATE_END) return 0;
    if (gross <= IETC_FULL_MAX) return IETC_MAX;
    return Math.max(0, IETC_MAX - (gross - IETC_FULL_MAX) * IETC_ABATE_RATE);
  }

  window.initSalaryCalculator = function () {
    const form = document.getElementById("calc-form");
    if (!form) return;

    const grossInput = document.getElementById("calc-gross");
    const periodSelect = document.getElementById("calc-period");
    const ksCheckbox = document.getElementById("calc-ks-enabled");
    const ksRateSelect = document.getElementById("calc-ks-rate");
    const slCheckbox = document.getElementById("calc-sl-enabled");
    const ietcCheckbox = document.getElementById("calc-ietc-enabled");
    const results = document.getElementById("calc-results");
    const fmt = (n) => "$" + n.toLocaleString("en-NZ", { maximumFractionDigits: 0 });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const entered = Math.max(0, Number(grossInput.value) || 0);
      const multiplier = PERIOD_MULTIPLIER[periodSelect.value] || 1;
      const gross = entered * multiplier;

      const tax = calcIncomeTax(gross);
      const acc = calcAcc(gross);
      const ksEnabled = ksCheckbox.checked;
      const ksRate = ksEnabled ? Number(ksRateSelect.value) : 0;
      const kiwiSaver = gross * ksRate;
      const slEnabled = slCheckbox.checked;
      const studentLoan = slEnabled ? calcStudentLoan(gross) : 0;
      const ietcEnabled = ietcCheckbox.checked;
      const ietc = ietcEnabled ? calcIetc(gross) : 0;

      const netYear = gross - tax - acc - kiwiSaver - studentLoan + ietc;
      const effRate = gross > 0 ? ((tax + acc + studentLoan - ietc) / gross) * 100 : 0;

      results.innerHTML = `
        <div class="calc-row"><span>${T("calcResultGross")}</span><strong>${fmt(gross)}</strong></div>
        <div class="calc-row"><span>${T("calcResultTax")}</span><strong>-${fmt(tax)}</strong></div>
        <div class="calc-row"><span>${T("calcResultAcc")}</span><strong>-${fmt(acc)}</strong></div>
        ${ksEnabled ? `<div class="calc-row"><span>${T("calcResultKiwiSaver")}</span><strong>-${fmt(kiwiSaver)}</strong></div>` : ""}
        ${slEnabled ? `<div class="calc-row"><span>${T("calcResultStudentLoan")}</span><strong>-${fmt(studentLoan)}</strong></div>` : ""}
        ${ietcEnabled ? `<div class="calc-row calc-row--credit"><span>${T("calcResultIetc")}</span><strong>+${fmt(ietc)}</strong></div>` : ""}
        <div class="calc-row calc-row--total"><span>${T("calcResultNetYear")}</span><strong>${fmt(netYear)}</strong></div>
        <div class="calc-row"><span>${T("calcResultNetMonth")}</span><strong>${fmt(netYear / 12)}</strong></div>
        <div class="calc-row"><span>${T("calcResultNetWeek")}</span><strong>${fmt(netYear / 52)}</strong></div>
        <div class="calc-row"><span>${T("calcResultRate")}</span><strong>%${effRate.toFixed(1)}</strong></div>
      `;
      results.hidden = false;
    });

    ksCheckbox.addEventListener("change", () => {
      ksRateSelect.disabled = !ksCheckbox.checked;
    });
  };
})();
