// QUALITY & HSE — brochure policy summaries and certification progress.
(function(){
  const M=window.Maqam, {E,icon}=M;
  const policy={
    quality:'Maqam is committed to improving its products, processes and services across oil & gas, civil construction and transport vehicle body manufacturing. The quality policy focuses on customer satisfaction, defect-free products and services, on-time delivery and regular review of the Quality Management System.',
    hse:'Safe workplaces, hazard reduction and competent personnel are central to the HSE policy. Management provides resources, training and measurable objectives, while employees, contractors and visitors share responsibility for safe work.',
    commitments:['Safe facilities, equipment and work practices','Risk assessment, training and management accountability','PPE compliance and prompt incident reporting','Stop-work authority for unsafe or environmentally hazardous tasks'],
    certifications:[
      {standard:'ISO 9001:2015',title:'Quality Management',status:'In progress'},
      {standard:'ISO 14001:2015',title:'Environmental Management',status:'In progress'},
      {standard:'ISO 45001:2018',title:'Occupational Health & Safety',status:'In progress'}
    ]
  };
  M.sections['quality-hse']=()=>`<section class="quality-hse section-light" id="quality-hse" aria-labelledby="quality-title"><div class="container"><p class="eyebrow"><span></span>QUALITY, HEALTH, SAFETY & ENVIRONMENT</p><h2 id="quality-title">Standards that guide our work</h2><div class="policy-grid"><article class="policy-card"><div class="value-icon">${icon('compass')}</div><h3>Quality policy</h3><p>${E(policy.quality)}</p></article><article class="policy-card"><div class="value-icon">${icon('shield')}</div><h3>HSE policy</h3><p>${E(policy.hse)}</p><ul>${policy.commitments.map(x=>`<li>${E(x)}</li>`).join('')}</ul></article></div><div class="certification-heading"><h3>Certification progress</h3><p>Certification programmes identified as in progress in the company brochure.</p></div><div class="certification-grid">${policy.certifications.map(c=>`<article><span class="certification-status">${E(c.status)}</span><h4>${E(c.standard)}</h4><p>${E(c.title)}</p></article>`).join('')}</div></div></section>`;
})();
