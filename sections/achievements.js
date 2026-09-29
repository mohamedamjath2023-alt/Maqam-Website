// ACHIEVEMENTS — count is calculated from the completed project records.
(function(){
 const M=window.Maqam;
 const completed=()=>M.C.projects.filter(p=>p.type==='completed'&&p.status==='Completed project').length;
 M.sections.achievements=()=>`<section class="achievements" id="achievements" aria-labelledby="achievements-title"><div class="container achievements-layout"><div class="achievements-copy"><p class="eyebrow"><span></span>EXPERIENCE IN ACTION</p><h2 id="achievements-title">Commitment delivered.<br>Project after project.</h2><p>From canopy installations to fabrication, construction and site improvements, our work reflects a commitment to reliable execution.</p><a class="text-link" href="#projects">Explore our project experience ${M.icon('arrow')}</a></div><div class="achievement-total"><span class="achievement-number" data-project-count="${completed()}" aria-hidden="true">${completed()}</span><span class="achievement-label" aria-hidden="true">Projects successfully completed</span><span class="sr-only">${completed()} projects successfully completed.</span><span class="achievement-rule" aria-hidden="true"></span><p>Across our documented project portfolio</p></div></div></section>`;
 M.init.achievements=()=>{
  const section=document.getElementById('achievements'),number=document.querySelector('[data-project-count]');
  if(!section||!number)return;
  const target=Number(number.dataset.projectCount),motion=matchMedia('(prefers-reduced-motion: reduce)');
  if(motion.matches||!('IntersectionObserver' in window)||target<2)return;
  let started=false,frame;
  const finish=()=>{if(frame)cancelAnimationFrame(frame);number.textContent=String(target);};
  const observer=new IntersectionObserver(entries=>{if(started||!entries.some(e=>e.isIntersecting))return;started=true;observer.disconnect();if(motion.matches){finish();return;}number.textContent='1';let start;const tick=time=>{if(start===undefined)start=time;const progress=Math.min((time-start)/2100,1);const eased=1-Math.pow(1-progress,3);number.textContent=String(Math.min(target,1+Math.floor((target-1)*eased)));if(progress<1)frame=requestAnimationFrame(tick);else finish();};frame=requestAnimationFrame(tick);},{threshold:0.25});
  observer.observe(section);
  motion.addEventListener?.('change',e=>{if(e.matches){started=true;observer.disconnect();finish();}});
 };
})();
