/* ============================================================
   Produktbroschüre Fasssauna.de — gemeinsame Bausteine.
   Der Footer bleibt inhaltlich leer. Nur Broschürenseiten mit
   data-page-number erhalten unten rechts ihre Seitenzahl.
   Vorlagen und Beilagen bleiben ohne Seitenzahl.
   ============================================================ */
(function () {
  "use strict";

  function render() {
    var feet = document.querySelectorAll('footer[data-footer]');
    for (var i = 0; i < feet.length; i++) {
      var sheet = feet[i].closest('.sheet');
      var pageNumber = sheet ? sheet.getAttribute('data-page-number') : '';
      feet[i].innerHTML = pageNumber
        ? '<span class="page-number" aria-label="Seite ' + pageNumber + '">' + pageNumber + '</span>'
        : '';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
