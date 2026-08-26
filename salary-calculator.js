// NZ maaş/vergi hesaplayıcısı. Oranlar IRD'nin güncel (2025-2026) resmi
// dilimlerine dayanır: ird.govt.nz/income-tax/income-tax-for-individuals/
// tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals
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

  window.initSalaryCalculator = function () {
    const form = document.getElementById("calc-form");
    if (!form) return;

    const grossInput = document.getElementById("calc-gross");
    const ksCheckbox = document.getElementById("calc-ks-enabled");
    const ksRateSelect = document.getElementById("calc-ks-rate");
    const results = document.getElementById("calc-results");
    const fmt = (n) => "$" + n.toLocaleString("en-NZ", { maximumFractionDigits: 0 });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const gross = Math.max(0, Number(grossInput.value) || 0);
      const tax = calcIncomeTax(gross);
      const acc = calcAcc(gross);
      const ksEnabled = ksCheckbox.checked;
      const ksRate = ksEnabled ? Number(ksRateSelect.value) : 0;
      const kiwiSaver = gross * ksRate;
      const netYear = gross - tax - acc - kiwiSaver;
      const effRate = gross > 0 ? ((tax + acc) / gross) * 100 : 0;

      results.innerHTML = `
        <div class="calc-row"><span>${T("calcResultGross")}</span><strong>${fmt(gross)}</strong></div>
        <div class="calc-row"><span>${T("calcResultTax")}</span><strong>-${fmt(tax)}</strong></div>
        <div class="calc-row"><span>${T("calcResultAcc")}</span><strong>-${fmt(acc)}</strong></div>
        ${ksEnabled ? `<div class="calc-row"><span>${T("calcResultKiwiSaver")}</span><strong>-${fmt(kiwiSaver)}</strong></div>` : ""}
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
