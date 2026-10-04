// ABOUT SECTION — edit this section’s text and HTML here.
(function(){
  const M = window.Maqam;
  const { C, E, icon, mark, logo, nav } = M;

  C.about = {
  "ownerImage": "assets/owner-portrait.jpeg",
  "ownerLabel": "Director",
  "title": "Engineering across\nindustries.",
  "text": "Maqam Engineering Projects SPC is an Omani multidisciplinary engineering company based in Al Hail South, Muscat. Our service portfolio supports the oil & gas, construction and transportation industries.",
  "second": "We undertake design, engineering, supply, fabrication, blasting and painting, testing, installation, maintenance and refurbishment. Our broader services include civil construction, electrical works, chemical supply, waste management, manpower and inspection support.",
  "vision": "To establish local and international leadership through high-quality, reliable and advanced specialised products and services for the oil & gas sector.",
  "mission": "To advance our oil & gas services, honour client commitments with prompt and reliable solutions, and create sustainable value through operational excellence and an uncompromising commitment to health, safety and the environment."
};

  M.sections["about"] = () => `
<section class="about section-light" id="about" aria-labelledby="about-title">
<div class="container about-grid">
<div class="about-visual">
<img src="assets/brochure/industrial-plant.jpg" alt="Industrial plant photograph from the Maqam company brochure" width="1200" height="900" loading="lazy">
<div class="image-tint">
</div>
<div class="image-caption">
<span class="small-label">ROOTED IN OMAN</span>
<p>Oil & gas.<br>Construction. Transport.</p>
<span class="caption-location">${icon('pin')}Muscat · Sultanate of Oman</span>
</div>
<span class="photo-note">Company brochure</span>
</div>
<div class="about-copy">
<p class="eyebrow">
<span>
</span>GET TO KNOW MAQAM</p>
<h2 id="about-title">${E(C.about.title).replace(/\n/g,'<br>')}</h2>
<p>${E(C.about.text)}</p>
<p>${E(C.about.second)}</p>


<a class="text-link" href="#contact">Let’s build a working relationship ${icon('arrow')}</a>
</div>
</div>
<div class="container leadership-grid">
<figure class="owner-card">
<div class="owner-photo"><img src="${E(C.about.ownerImage)}" alt="Director of Maqam Engineering Projects SPC" width="899" height="1599" loading="lazy"></div>
<figcaption><span class="owner-kicker">OUR LEADERSHIP</span><h3>${E(C.about.ownerLabel)}</h3><p>Maqam Engineering Projects SPC</p></figcaption>
</figure>
<div class="leadership-purpose"><article class="director-message" aria-labelledby="director-message-title">
<p class="eyebrow"><span></span>OUR LEADERSHIP</p>
<h2 id="director-message-title">Message from the Director</h2>
<p class="director-welcome">Welcome to Maqam Engineering Projects.</p>
<p>Since our inception, we have committed ourselves to building foundations that stand the test of time. As a multi-disciplinary contracting firm, Maqam Engineering Projects has grown by consistently adapting to the evolving demands of our clients and the environment. We believe that true engineering excellence is achieved through a precise blend of technical expertise, strict safety protocols, and a continuous focus on project delivery.</p>
<p>Our operations span four key sectors that form the backbone of modern infrastructure:</p>
<ul class="director-sectors"><li>Mechanical Contracting</li><li>Civil Contracting</li><li>Electrical Contracting</li><li>Waste Management</li></ul>
<p class="director-philosophy">Every contract we undertake is guided by a simple philosophy: <strong>Do it right the first time.</strong></p>
<p>We work closely with our partners, stakeholders, and community leaders to transform blueprint concepts into real-world landmarks. By maintaining an exceptionally skilled workforce and leveraging modern engineering techniques, we ensure that every milestone we hit complies with top international standards.</p>
<p>Looking ahead, we aim to remain a trusted partner in development across the region. We thank our clients for their unwavering trust, and our dedicated team for turning our corporate vision into an absolute reality.</p>
</article></div>
<div class="leadership-direction"><p class="eyebrow"><span></span>OUR DIRECTION</p>
<h2>Driven by purpose.<br>Built on commitment.</h2>
<div class="mission-vision"><div><h3>Our vision</h3><p>${E(C.about.vision)}</p></div><div><h3>Our mission</h3><p>${E(C.about.mission)}</p></div></div>
</div>
</div>
</section>
`;
})();
