// Shared icons, logo lettering and navigation links.
(function(){
'use strict';
const C=window.MAQAM_CONTENT;
const E=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const paths={
arrow:'<path d="M7 17 17 7M7 7h10v10"/>',down:'<path d="M12 4v16m-6-6 6 6 6-6"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',shield:'<path d="M12 3 3 7v5c0 5 9 10 9 10s9-5 9-10V7l-9-4Z"/><path d="m8 12 3 3 5-6"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5 5-3Z"/>',wrench:'<path d="M14 6a6 6 0 0 0-7 7L3 17a2.8 2.8 0 0 0 4 4l4-4a6 6 0 0 0 7-7l-4 4-4-4 4-4Z"/>',valve:'<path d="M3 13h18v7H3zM12 13V6M6 6h12M8 3v6m8-6v6M3 11v11m18-11v11"/>',rig:'<path d="m9 3-5 18m11-18 5 18M9 3h6M3 21h18M7 9h10M5 16h14m-10-7 8 7m-2-7-8 7M12 3v18"/>',circuit:'<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 3v4m6-4v4M9 17v4m6-4v4M3 9h4m-4 6h4m10-6h4m-4 6h4"/><rect x="10" y="10" width="4" height="4"/>',headset:'<path d="M4 13v-2a8 8 0 0 1 16 0v7c0 2-2 3-5 3"/><rect x="2" y="11" width="4" height="7" rx="2"/><rect x="18" y="11" width="4" height="7" rx="2"/><path d="M12 21h3"/>',phone:'<path d="M6 3H3c-2 10 8 20 18 18v-4l-5-2-2 2a14 14 0 0 1-7-7l2-2-3-5Z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 5 10 8L22 5"/>',globe:'<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>',linkedin:'<rect x="3" y="9" width="4" height="12"/><path d="M11 21V9h4v2c3-4 6-1 6 2v8m-6 0v-8"/><circle cx="5" cy="4" r="2"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'};
const icon=n=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[n]||paths.compass}</svg>`;
const mark=`<span class="logo-art"><img src="assets/brochure/maqam-logo.png" alt="MEP — Maqam Engineering Projects logo" width="391" height="396"></span>`;
const links=[['about','About us'],['services','Our services'],['projects','Projects'],['clients','Clients'],['why-us','Why Maqam'],['contact','Contact']];
const nav=links.map(([id,label])=>`<a href="#${id}">${label}</a>`).join('');
const logo=`<span class="wordmark company-wordmark">Maqam Engineering<span class="company-wordmark-sub">Projects SPC</span><span class="company-wordmark-ar" lang="ar" dir="rtl">${E(C.company.arabic)}</span></span>`;

window.Maqam = { C, E, icon, mark, logo, nav, sections: {}, init: {} };
})();
