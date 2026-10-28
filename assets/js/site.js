const footer = document.querySelector(".fc-footer");
if (footer)
  footer.innerHTML = `<div class="footer-shell"><div class="footer-main"><div><div class="footer-brand-row"><span class="footer-sng-mini">◉SNG</span><a class="fc-logo" href="index.html">Zapplivery</a></div><div class="footer-company-card"><div class="footer-company-label">Um produto da</div><div class="footer-sng-mark"><i>◉</i>SNG <small>SYNER GROUP</small></div><p><strong>Zapplivery é um produto da SNG Synergroup.</strong><br>Parte do ecossistema de soluções SNG para rastreabilidade, observabilidade e inteligência aplicada aos processos empresariais.</p></div><p class="footer-tagline">Rastreabilidade de operações externas para entregas, serviços de campo, chegadas e retiradas.</p><nav class="footer-nav"><a href="solucoes.html">Soluções</a><a href="como-funciona.html">Como funciona</a><a href="aplicacoes.html">Mercado</a><a href="contato.html">Contato</a></nav></div><div class="footer-contact"><div class="footer-title">Contato &amp; Redes</div><div class="footer-contact-box"><a href="https://wa.me/5511982024537?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Zapplivery." target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 16l-2 2 .7-3A7 7 0 1 1 8 16z"/></svg><span>WhatsApp: (11) 98202-4537</span></a><a href="mailto:contato@zapplivery.com.br"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg><span>contato@zapplivery.com.br</span></a><a href="https://www.sng.com.br/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10z"/></svg><span>sng.com.br</span></a><hr><a href="https://www.linkedin.com/company/sngtecnologia/posts/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path fill="#27577d" d="M7 9h2.5v8H7zm1.2-3A1.5 1.5 0 1 1 8 9a1.5 1.5 0 0 1 .2-3M11 9h2.4v1.1c.7-1 3.6-1.8 3.6 2.7V17h-2.5v-3.7c0-2-2.2-1.9-2.2 0V17H11z"/></svg><span>LinkedIn</span></a><a href="https://www.instagram.com/sngtecnologia/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg><span>@sngtecnologia</span></a></div></div></div><div class="footer-copyright"><span>© 2026 SNG Synergroup · Zapplivery.</span><span>Rastreabilidade que transforma operação em controle.</span></div></div>`;
if (footer) {
  const footerIcons = {
    whatsapp:
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.69 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.206 8.206 0 0 1-5.82 2.42c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.08.81.82-2.99-.19-.31c-.8-1.28-1.23-2.77-1.23-4.3 0-4.55 3.69-8.24 8.24-8.24zm4.52 10.97c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.81-.81.98-.15.17-.31.19-.56.06-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
  };
  const whatsappIcon = footer.querySelector('a[href^="https://wa.me/"] svg');
  const linkedinIcon = footer.querySelector('a[href*="linkedin.com"] svg');
  if (whatsappIcon) whatsappIcon.outerHTML = footerIcons.whatsapp;
  if (linkedinIcon) linkedinIcon.outerHTML = footerIcons.linkedin;
}
if (footer) {
  footer.id = "contato";
  document.querySelectorAll("a").forEach((link) => {
    if (link.textContent.trim() === "Contato") link.href = "#contato";
  });
}
const sngMark = document.querySelector(".footer-sng-mark");
if (sngMark)
  sngMark.innerHTML =
    '<img src="assets/images/logo-sng-synergroup.png" alt="SNG Synergroup" width="1772" height="355" loading="lazy">';
const menu = document.querySelector(".fc-menu"),
  nav = document.querySelector(".fc-nav");
if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
  nav
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open")),
    );
}
const shot = document.querySelector("#platform-shot"),
  shotLabel = document.querySelector("#shot-label"),
  shotDescription = document.querySelector("#shot-description");
document.querySelectorAll(".fc-tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".fc-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    if (shot) {
      shot.classList.add("is-switching");
      window.setTimeout(() => {
        shot.addEventListener(
          "load",
          () => shot.classList.remove("is-switching"),
          { once: true },
        );
        shot.src = tab.dataset.shot;
        if (shot.complete) shot.classList.remove("is-switching");
      }, 180);
    }
    window.setTimeout(() => {
      if (shotLabel && tab.dataset.label)
        shotLabel.textContent = tab.dataset.label;
      if (shotDescription && tab.dataset.description)
        shotDescription.textContent = tab.dataset.description;
    }, 140);
  }),
);
const form = document.querySelector("#contact-form");
if (form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const msg =
      "Olá, equipe Zapplivery!\n\n" +
      [...data]
        .filter(([k]) => k !== "consentimento")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
    window.open(
      "https://wa.me/5511982024537?text=" + encodeURIComponent(msg),
      "_blank",
      "noopener,noreferrer",
    );
  });

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const header = document.querySelector(".fc-header");
const updateHeader = () =>
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealGroups = [
  ".fc-hero > *",
  ".fc-page-hero > *",
  ".fc-intro > *",
  ".fc-grid-4 article",
  ".fc-card",
  ".fc-process article",
  ".fc-system-layout > *",
  ".fc-table",
  ".fc-chips span",
  ".fc-contact > *",
  ".fc-cta-band > *",
];
const revealItems = [...document.querySelectorAll(revealGroups.join(","))];

revealItems.forEach((item, index) => {
  item.classList.add("reveal-item");
  item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
});

if (!reducedMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
