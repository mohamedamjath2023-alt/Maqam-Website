// FOOTER SECTION — edit this section’s text and HTML here.
(function(){
  const M = window.Maqam;
  const { C, E, icon, mark, logo, nav } = M;

  C.social = {
  "linkedin": "",
  "instagram": ""
};

  M.sections["footer"] = () => `
<footer>
<div class="container">
<div class="footer-top">
<a class="footer-brand" href="#home" aria-label="Maqam home">${mark}${logo}</a>
<nav aria-label="Footer navigation">${nav}</nav>
<div class="socials">${['linkedin','instagram'].map(s=>C.social[s]&&/^https:\/\//.test(C.social[s])?`<a href="${E(C.social[s])}" target="_blank" rel="noopener noreferrer" aria-label="Maqam on ${s}">${icon(s)}</a>`:`<span class="social-placeholder" tabindex="0" aria-label="${s} profile coming soon">${icon(s)}<span class="social-tooltip">${s==='linkedin'?'LinkedIn':'Instagram'} · Coming soon</span>
</span>`).join('')}</div>
</div>
<div class="footer-bottom">
<p>© 2026 Maqam Engineering Projects SPC. All rights reserved.</p>
<span lang="ar" dir="rtl">${E(C.company.arabic)}</span>
<a href="#home">Back to top ${icon('arrow')}</a>
</div>
</div>
</footer>
`;
})();
