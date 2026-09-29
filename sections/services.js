// SERVICES SECTION — edit this section’s text and HTML here.
(function(){
  const M = window.Maqam;
  const { C, E, icon, mark, logo, nav } = M;

  C.services = [
  {
    "name": "Mechanical Services",
    "icon": "wrench",
    "description": "Design, fabrication, testing and commissioning of tankers, transport vehicle bodies, storage tanks and steel structures.",
    "image": "assets/brochure/tanker-chassis.jpg",
    "alt": "Tanker body on a rigid chassis",
    "slug": "mechanical-services",
    "id": "mechanical"
  },
  {
    "name": "Civil Services",
    "icon": "compass",
    "description": "Industrial and commercial buildings, foundations, water and sewer networks, civil infrastructure and design support.",
    "image": "assets/brochure/civil-network-works.jpg",
    "alt": "Street-level utility network works",
    "slug": "civil-services",
    "id": "civil"
  },
  {
    "name": "Electrical Services",
    "icon": "circuit",
    "description": "Wiring, distribution panels, lighting, electrical maintenance, solar systems, CCTV and building services.",
    "image": "assets/brochure/building-services.jpg",
    "alt": "Industrial building services and equipment",
    "slug": "electrical-services",
    "id": "electrical"
  },
  {
    "name": "Waste Management Services",
    "icon": "shield",
    "description": "Tank cleaning, sludge processing, wastewater disposal, chemical supply and commercial or industrial waste services.",
    "image": "assets/brochure/waste-tanker.jpg",
    "alt": "Tanker used for waste and liquid handling",
    "slug": "waste-management-services",
    "id": "waste"
  },
  {
    "name": "General Services",
    "icon": "headset",
    "description": "Logistics, rentals, manpower, trenching, building materials, coatings and specialist finishing works.",
    "image": "assets/brochure/steel-canopy.jpg",
    "alt": "Steel canopy and site support works",
    "slug": "general-services",
    "id": "general"
  },
  {
    "name": "Distributor Products",
    "icon": "valve",
    "description": "Specialist sewer and cleaning vehicles, vacuum and jetting pumps, PTOs, valves, nozzles and spare parts.",
    "image": "assets/brochure/whale-vehicle-range.jpg",
    "alt": "Whale cleaning and utility vehicle product range",
    "slug": "distributor-products",
    "id": "products"
  }
];

  M.sections["services"] = () => `
<section class="services section-light" id="services" aria-labelledby="services-title">
<div class="container">
<div class="section-heading">
<div>
<p class="eyebrow">
<span>
</span>WHAT WE DO</p>
<h2 id="services-title">Our services &<br>product portfolio.</h2>
</div>
<p>Six service areas supporting industrial operations, construction projects and specialist transport requirements.</p>
</div>
<div class="service-grid">${C.services.map((s,i)=>`<article class="service-card">
<img class="service-photo" src="${E(s.image)}" alt="${E(s.alt)}" loading="lazy" width="800" height="450">
<div class="service-top">
<div class="service-icon">${icon(s.icon)}</div>
<span class="card-number">0${i+1}</span>
</div>
<h3>${E(s.name)}</h3>
<p>${E(s.description)}</p>
<a href="projects/${E(s.slug)}.html" class="service-link" aria-label="Explore ${E(s.name)}">Explore this service ${icon('arrow')}</a>
</article>`).join('')}</div>
</div>
</section>
`;

  M.init["services"] = () => {
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.getElementById('enquiry-message').value=`I would like to discuss ${link.dataset.service.toLowerCase()}.\n\n`;}));

  };
})();
