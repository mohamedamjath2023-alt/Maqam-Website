// WHY-US SECTION — edit this section’s text and HTML here.
(function(){
  const M = window.Maqam;
  const { C, E, icon, mark, logo, nav } = M;

  C.values = [
  {
    "icon": "compass",
    "title": "Multidisciplinary Expertise",
    "text": "Mechanical, civil and electrical services alongside transport manufacturing and industrial support."
  },
  {
    "icon": "shield",
    "title": "HSE Commitment",
    "text": "Safe work planning, competent personnel, PPE compliance and the authority to stop unsafe work."
  },
  {
    "icon": "wrench",
    "title": "Quality & Improvement",
    "text": "A commitment to defect-free products, on-time delivery and continuous improvement of products, processes and services."
  },
  {
    "icon": "headset",
    "title": "Client Commitments",
    "text": "Prompt, reliable support with a focus on customer satisfaction and agreed project requirements."
  }
];

  M.sections["why-us"] = () => `
<section class="why section-light" id="why-us" aria-labelledby="why-title">
<div class="container">
<div class="why-heading">
<p class="eyebrow">
<span>
</span>THE MAQAM COMMITMENT</p>
<h2 id="why-title">The right partner makes<br>all the difference.</h2>
</div>
<div class="value-grid">${C.values.map(v=>`<article class="value-card">
<div class="value-icon">${icon(v.icon)}</div>
<h3>${E(v.title)}</h3>
<p>${E(v.text)}</p>
</article>`).join('')}</div>
</div>
</section>
`;
})();
