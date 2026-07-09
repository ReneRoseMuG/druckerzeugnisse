/* ============================================================
   Produktbroschüre Fasssauna.de — gemeinsame Bausteine.
   Einzige Pflegestelle für die einheitliche Impressum-Fußzeile.
   Jede Seite bindet dieses Skript ein und trägt einen leeren
   <footer class="doc-foot" data-imprint></footer>; der Inhalt
   wird hier zentral eingesetzt. Ändern = nur diese Datei.
   ============================================================ */
(function () {
  "use strict";

  var IMPRINT = {
    adresse: ["Fasssauna.de", "Meisel & Gerken GmbH", "Barrier Str. 29", "DE-28857 Syke"],
    kontakt: ["Telefon: 04242 / 78088", "info@fasssauna.de", "www.fasssauna.de"],
    bank:    ["Kreissparkasse Syke", "IBAN: DE 3029 1517 0011 2000 47 40", "BIC: BRLADE21SYK"],
    recht:   ["USt-IdNr.: DE114430106", "GF Michael Meisel und Harm Bruns", "AG Walsrode HRB 111349"]
  };

  var LEGAL =
    "Gelieferte Waren bleiben bis zur vollständigen Bezahlung in unserem Eigentum. " +
    "Als Gerichtsstand gilt Syke für beide Teile als vereinbart.";

  /* Einheitliche, druckfeste Linien-Icons (kein externer Font nötig). */
  var ICONS = {
    adresse: '<svg class="imp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10.5V20h12v-9.5"/><path d="M10 20v-5h4v5"/></svg>',
    kontakt: '<svg class="imp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><circle cx="8" cy="10.5" r="2.2"/><path d="M4.6 16.2c.5-1.6 1.8-2.5 3.4-2.5s2.9.9 3.4 2.5"/><path d="M14 9.8h5M14 12.6h5M14 15.4h3"/></svg>',
    bank:    '<svg class="imp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="6.5" ry="2.5"/><path d="M5.5 6v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V6"/><path d="M5.5 11v5c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-5"/></svg>',
    recht:   '<svg class="imp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7.5 21h9M4 7.5h16M8.5 5.6 12 4l3.5 1.6"/><path d="M4 7.5 1.7 12.6a2.8 2.8 0 0 0 4.6 0zM20 7.5l-2.3 5.1a2.8 2.8 0 0 0 4.6 0z"/></svg>'
  };

  function col(key, strongFirst) {
    var lines = IMPRINT[key].map(function (t, i) {
      var cls = (strongFirst && i === 0) ? ' class="imp-strong"' : '';
      return '<span' + cls + '>' + t + '</span>';
    }).join('');
    return '<div class="imp-col">' + ICONS[key] + '<div class="imp-box">' + lines + '</div></div>';
  }

  function render() {
    var html =
      '<div class="imprint">' +
        col('adresse', true) +
        col('kontakt', false) +
        col('bank', true) +
        col('recht', false) +
      '</div>' +
      '<p class="imp-legal">' + LEGAL + '</p>';

    var feet = document.querySelectorAll('footer[data-imprint]');
    for (var i = 0; i < feet.length; i++) { feet[i].innerHTML = html; }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
