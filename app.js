// Page assembly only. Edit section content in sections/*.js instead.
(function(){
  const M = window.Maqam;
  const mainSections = ['hero', 'about', 'services', 'clients', 'achievements', 'projects', 'why-us', 'quality-hse', 'contact'];
  document.getElementById('app').innerHTML =
    M.sections.header() + '<main id="main">' +
    mainSections.map(name => M.sections[name]()).join('\n') +
    '</main>' + M.sections.footer();
  ['header', 'projects', 'services', 'contact', 'achievements'].forEach(name => M.init[name]?.());
})();
