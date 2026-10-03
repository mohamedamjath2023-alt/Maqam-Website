// CONTACT SECTION — edit this section’s text and HTML here.
(function(){
  const M = window.Maqam;
  const { C, E, icon, mark, logo, nav } = M;

  M.sections["contact"] = () => `
<section class="contact section-dark" id="contact" aria-labelledby="contact-title">
<div class="container contact-grid">
<div class="contact-copy">
<p class="eyebrow">
<span>
</span>LET’S CONNECT</p>
<h2 id="contact-title">Your next project<br>starts with a<br>
<span>conversation.</span>
</h2>
<div class="contact-company-name">
<span lang="ar" dir="rtl">${E(C.company.arabic)}</span>
<strong>${E(C.company.name)}</strong>
</div>
<p class="contact-intro">Tell us what you need. We’re here to explore how Maqam can support your next step.</p>
<div class="contact-person">
<span class="person-initials">MS</span>
<div>
<strong>${E(C.company.contact)}</strong>
<span>${E(C.company.department)}</span>
</div>
</div>
<div class="contact-details">
<a href="tel:${E(C.company.phone.replace(/\s/g,''))}">${icon('phone')}${E(C.company.phone)}</a>
<a href="mailto:${E(C.company.email)}">${icon('mail')}${E(C.company.email)}</a>
<div>${icon('pin')}<span>${E(C.company.address)}</span>
</div>
<a href="https://${E(C.company.website)}" target="_blank" rel="noopener noreferrer">${icon('globe')}${E(C.company.website)}</a>
</div>
</div>
<div class="contact-right">
<form class="contact-form" id="contact-form">
<h3>Let’s hear about your project.</h3>
<p class="form-subtitle">Share a few details and prepare your enquiry.</p>
<div class="form-row">
<label>Full name <span>*</span>
<input name="name" autocomplete="name" placeholder="Your name" required maxlength="120">
</label>
<label>Phone number<input name="phone" type="tel" autocomplete="tel" placeholder="+968" maxlength="40">
</label>
</div>
<label>Email address <span>*</span>
<input name="email" type="email" autocomplete="email" placeholder="you@company.com" required maxlength="254">
</label>
<label>Your message <span>*</span>
<textarea name="message" id="enquiry-message" rows="4" placeholder="Tell us about your requirements…" required maxlength="4000">
</textarea>
</label>
<button class="button button-gradient" type="submit">Prepare email enquiry ${icon('arrow')}</button>
<p class="form-note">Opens a draft in your email app. Your enquiry is sent only when you send that email.</p>
<div id="form-status" class="form-status" role="status" hidden>
</div>
<button type="button" class="copy-enquiry" id="copy-enquiry" hidden>Copy enquiry instead</button>
</form>
<div class="map-placeholder" aria-label="Office location">
<div class="map-pin">${icon('pin')}</div>
<div>
<strong>Al Hail South, Muscat</strong>
<span>View our office location on Google Maps</span>
</div>
<a href="https://maps.app.goo.gl/VS88WKQQTMbpBRfm9" target="_blank" rel="noopener noreferrer" aria-label="Open office location in Google Maps">${icon('arrow')}</a>
</div>
</div>
</div>
</section>
`;

  M.init["contact"] = () => {
let enquiryText='';
document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const data=new FormData(form),name=String(data.get('name')).trim(),email=String(data.get('email')).trim(),message=String(data.get('message')).trim();if(!name||!message){const field=!name?form.elements.name:form.elements.message;field.setCustomValidity('Please enter your details.');field.reportValidity();field.addEventListener('input',()=>field.setCustomValidity(''),{once:true});return;}enquiryText=`Hello ${C.company.contact},\n\n${message}\n\nName: ${name}\nEmail: ${email}\nPhone: ${String(data.get('phone')).trim()||'Not provided'}\n\nSent from the Maqam Engineering Projects website.`;const mailto=`mailto:${C.company.email}?subject=${encodeURIComponent('Project enquiry — '+name.replace(/[\r\n]/g,' '))}&body=${encodeURIComponent(enquiryText)}`;const status=document.getElementById('form-status');status.hidden=false;status.textContent='Your enquiry is ready. Send it from your email app, or copy it below and email '+C.company.email+'.';document.getElementById('copy-enquiry').hidden=false;const anchor=document.createElement('a');anchor.href=mailto;anchor.click();});
document.getElementById('copy-enquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(enquiryText);document.getElementById('form-status').textContent='Enquiry copied. Paste it into an email to '+C.company.email+'.';}catch{document.getElementById('form-status').textContent='Copy is unavailable in this browser. Please copy your message above and email '+C.company.email+'.';}});

// A project detail page can prefill the main contact form without sending anything.
const selectedScope=new URLSearchParams(window.location.search).get('scope');
if(selectedScope){const selected=C.projects.find(p=>p.slug===selectedScope);if(selected)document.getElementById('enquiry-message').value=`I would like to discuss ${selected.title.toLowerCase()}.\n\n`;}

  };
})();
