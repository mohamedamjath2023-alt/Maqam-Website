// HERO SECTION — edit this section’s text and HTML here.
(function(){
  const M = window.Maqam;
  const { C, E, icon, mark, logo, nav } = M;

  C.hero = {
  "eyebrow": "OIL & GAS · CONSTRUCTION · TRANSPORT",
  "title": "DESIGNING THE",
  "titleSecond": "FUTURE, TODAY.",
  "description": "Engineering, fabrication and field services.\nBuilt around your industrial requirements.",
  "backgroundPhrase": "ENGINEERED IN OMAN.",
  "welcome": "Maqam Engineering Projects SPC",
  "welcomeText": "Design, engineering, supply and execution for oil & gas, construction and transport vehicle applications."
};

  M.sections["hero"] = () => `
<section class="hero" id="home" aria-labelledby="hero-title">
<div class="hero-glow">
</div>
<div class="hero-facet facet-one">
</div>
<div class="hero-facet facet-two">
</div>
<div class="hero-edge">
</div>
<div class="container hero-content">
<p class="eyebrow hero-eyebrow">
<span>
</span>${E(C.hero.eyebrow)}</p>
<h1 id="hero-title">${E(C.hero.title)}<br>${E(C.hero.titleSecond)}</h1>
<div class="hero-bottom">
<p>${E(C.hero.description).replace(/\n/g,'<br>')}</p>
<a class="button button-light" href="#services">Explore our services ${icon('arrow')}</a>
</div>
<p class="hero-location">${icon('pin')}${E(C.company.location)}</p>
</div>
<span class="background-phrase" aria-hidden="true">${E(C.hero.backgroundPhrase)}</span>
<a class="scroll-cue" href="#about" aria-label="Scroll to about us">${icon('down')}</a>
<div class="container welcome-wrap">
<div class="welcome-card">
<div class="welcome-icon">${mark}</div>
<div>
<h2>${E(C.hero.welcome)}</h2>
<p>${E(C.hero.welcomeText)}</p>
</div>
<a href="#contact" class="welcome-cta">Let’s talk ${icon('arrow')}</a>
</div>
</div>
</section>
`;
})();
