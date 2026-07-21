# Vorabinformationen Fasssauna.de

Eigenständiges, druckbares Informationsprojekt der Meisel & Gerken GmbH.
Unabhängig von der Website (kein Bezug zu `site.css`). Jede Seite ist eine
druckbare A4-Datei im Hochformat.

## Aufbau

```text
.
├── broschuere/
│   ├── index.html                       Seite 01 · Deckblatt & Themenübersicht
│   ├── vorbereitung.html                Seite 02 · Vorbereitungen am Bauplatz
│   ├── elektroanschluss.html            Seite 03 · Elektroanschluss
│   ├── holzschutz.html                  Seite 04 · Holzschutz, Thermoholz und Pflege
│   ├── broschuere-gesamt.html           Zusammengeführte HTML-Druckfassung
│   ├── vorlage-fundamentskizze.html     Vorlage · Maße und Details zum Fundament
│   ├── vorlage-kopf-fusszeile.html      Leere A4-Vorlage mit Kopf- und Fußzeile
│   ├── css/
│   │   └── broschuere.css               Gemeinsame Druckstile und Marken-Tokens
│   ├── js/
│   │   └── broschuere.js                Seitenzahlen der Broschürenseiten
│   ├── bilder/                          Bilder der Vorabinformationen
│   └── fundament-skizzen/
│       └── premuim.png                   Technische Fundamentgrafik für Oval Sauna Premium
├── Ausgabe/                             Ausschließlicher Zielordner für PDFs
└── quellen/
    └── anschrieben-key-facts-lang.pdf   Quelldokument, keine erzeugte Ausgabe
```

## Neue Seite anlegen

1. `broschuere/vorlage-kopf-fusszeile.html` kopieren und innerhalb von `broschuere/` sinnvoll benennen, zum Beispiel `lieferung.html`.
2. Titel, linke Kopf-Kennung (`doc-kicker`), rechte Kopf-Kennung (`doc-tag`), Headline, Texte und Bilder einsetzen.
3. Bilder nach `broschuere/bilder/` legen und im einheitlichen 3:2-Format vorbereiten.
4. Die Seite in `broschuere/index.html` eintragen.

## Marke

- Dunkel `#1C1D2C`, Holz `#ae926c`, einheitlich `Segoe UI` für sämtliche Texte.
- Alle Stile liegen zentral in `broschuere/css/broschuere.css`. Nichts inline stylen.
- Die Kopfzeile zeigt links die Einordnung, mittig das Logo und rechts den jeweiligen Abschnitt.
- Der inhaltlich leere Footerbereich ist mit derselben Linie wie der Header abgetrennt. `broschuere/js/broschuere.js` ergänzt ausschließlich auf Broschürenseiten mit `data-page-number` die Seitenzahl; Vorlagen und Beilagen bleiben ohne Seitenzahl.

## Drucken und PDF-Ausgabe

- Erzeugte PDF-Dokumente werden ausnahmslos im Ordner `Ausgabe/` gespeichert. Im Projektstamm und unter `broschuere/` dürfen keine erzeugten PDFs liegen.
- Die zusammengeführte Ausgabedatei heißt verbindlich `Ausgabe/Kundenbroschüre.pdf`.
- Modellbezogene Fundamentskizzen werden als `Ausgabe/Fundament-Skizze-<Vollständiger-Modellname>.pdf` ausgegeben.
- Die leere Kopf- und Fußzeilenvorlage wird als `Ausgabe/Vorlage-Kopf-Fusszeile.pdf` ausgegeben.
- Im Browser über Drucken → Ziel „Als PDF speichern“.
- Papierformat A4, Ränder „Keine“, Hintergrundgrafiken aktivieren.

## Schrift

Die Broschüre verwendet ausschließlich `Segoe UI`. Überschriften, Fließtext,
Kennzeichnungen und Seitennummern unterscheiden sich nur durch Größe,
Schriftschnitt und Laufweite. Dadurch wird in den PDF-Ausgaben nur eine
Schriftfamilie eingebettet; eine externe Schriftdatei ist nicht erforderlich.

## Fundamentskizzen-Beilagen erzeugen

Auf Ansage werden alle Grafiken unter `broschuere/fundament-skizzen/` verarbeitet. Der jeweilige Grafikname wird gemäß `AGENTS.md` einem vollständigen Modellnamen zugeordnet. Die HTML-Beilage wird direkt unter `broschuere/` gespeichert; die PDF-Ausgabe liegt ausschließlich unter `Ausgabe/`.

Beispiel für `premuim.png`:

- `broschuere/fundament-skizze-oval-sauna-premium.html`
- `Ausgabe/Fundament-Skizze-Oval-Sauna-Premium.pdf`

XL-Grafiken erzeugen zusätzlich eine inhaltsgleiche Suuri-Beilage, XL-Vorraum-Grafiken entsprechend eine Suuri-Vorraum-Beilage. Eine später vorhandene eigene Suuri-Grafik hat Vorrang.
