// HEADER SECTION — edit this section’s text and HTML here.
(function(){
  const M = window.Maqam;
  const { C, E, icon, mark, logo, nav } = M;

  M.sections["header"] = () => `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header main-site-header" id="site-header">
<div class="nav-inner">
<a class="brand" href="#home" aria-label="Maqam home"><span class="header-identity"><span class="header-identity-name">${E(C.company.name).replace("Projects SPC", '<span class="brand-gold">Projects SPC</span>')}</span><span class="header-identity-arabic" lang="ar" dir="rtl">${E(C.company.arabic).replace("والمشاريع", '<span class="brand-gold">والمشاريع <bdi>ش.ش.و</bdi></span>')}</span></span></a>
<nav class="desktop-nav" aria-label="Main navigation">${nav}</nav>
<a class="header-mark" href="#home" aria-label="Maqam home">${mark}</a>
<button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav">
<span>
</span>
<span>
</span>
</button>
</div>
<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden>${nav}</nav>
</header>
`;

  M.init["header"] = () => {
const header=document.getElementById('site-header'), menuToggle=document.querySelector('.menu-toggle'), mobileNav=document.getElementById('mobile-nav');
const setMenu=open=>{menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobileNav.hidden=!open;header.classList.toggle('menu-open',open)};
menuToggle.addEventListener('click',()=>setMenu(menuToggle.getAttribute('aria-expanded')!=='true'));
mobileNav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){setMenu(false);menuToggle.focus()}});
matchMedia('(min-width: 1181px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>35);window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>{const current=a.hash===`#${entry.target.id}`;a.classList.toggle('current',current);if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})})},{rootMargin:'-15% 0px -60% 0px',threshold:0});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s))}

  };
})();
