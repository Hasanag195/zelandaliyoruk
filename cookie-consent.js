// Google Analytics yalnızca ziyaretçi "Kabul et" derse yüklenir.
(function () {
  var ID = "G-XW92XXGXXT";
  var KEY = "zy_cookie_choice";
  var loaded = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  function isEn() {
    return window.__FORCE_LANG === "en" || location.pathname.indexOf("/en/") === 0;
  }
  var TX = isEn()
    ? { msg: "We use Google Analytics cookies to see which pages are useful, only if you allow it. The site works the same either way.", yes: "Accept", no: "Reject", more: "Privacy Policy", link: "Cookie preferences", href: "/en/privacy.html" }
    : { msg: "Hangi sayfaların işe yaradığını görmek için, yalnızca izin verirsen Google Analytics çerezleri kullanıyoruz. Site iki durumda da aynı çalışır.", yes: "Kabul et", no: "Reddet", more: "Gizlilik Politikası", link: "Çerez tercihleri", href: "/privacy.html" };

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAnalytics() {
    window["ga-disable-" + ID] = false;
    if (loaded) return;
    loaded = true;
    window.gtag("js", new Date());
    window.gtag("config", ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
  }

  function stopAnalytics() {
    window["ga-disable-" + ID] = true;
    var host = location.hostname.replace(/^www\./, "");
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name.indexOf("_ga") !== 0) return;
      ["", "; domain=" + host, "; domain=." + host].forEach(function (d) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + d;
      });
    });
  }

  function closeBanner() {
    var old = document.getElementById("zy-cookie");
    if (old) old.remove();
  }

  function choose(v) {
    write(v);
    closeBanner();
    if (v === "yes") loadAnalytics(); else stopAnalytics();
  }

  function showBanner() {
    closeBanner();
    var box = document.createElement("div");
    box.id = "zy-cookie";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", TX.link);
    box.style.cssText = "position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;background:#fff;color:#14201a;border:1px solid #e7e1d3;border-radius:18px;box-shadow:0 24px 64px rgba(20,32,26,.18);padding:16px 18px;font-size:14px;line-height:1.45";
    var p = document.createElement("p");
    p.style.margin = "0 0 12px";
    p.textContent = TX.msg + " ";
    var a = document.createElement("a");
    a.href = TX.href;
    a.textContent = TX.more;
    a.style.color = "#0c4a30";
    p.appendChild(a);
    var row = document.createElement("div");
    row.style.cssText = "display:flex;gap:10px";
    [[TX.no, "no"], [TX.yes, "yes"]].forEach(function (b) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = b[0];
      btn.style.cssText = "flex:1;min-height:44px;border-radius:12px;border:1px solid #0c4a30;background:#fff;color:#0c4a30;font:inherit;font-weight:600;cursor:pointer";
      btn.addEventListener("click", function () { choose(b[1]); });
      row.appendChild(btn);
    });
    box.appendChild(p);
    box.appendChild(row);
    document.body.appendChild(box);
  }

  function addFooterLink() {
    var foot = document.querySelector(".site-footer .container") || document.querySelector(".site-footer");
    if (!foot) return;
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = TX.link;
    a.addEventListener("click", function (e) { e.preventDefault(); showBanner(); });
    foot.appendChild(document.createTextNode(" · "));
    foot.appendChild(a);
  }

  function start() {
    addFooterLink();
    var v = read();
    if (v === "yes") loadAnalytics();
    else if (v !== "no") showBanner();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
