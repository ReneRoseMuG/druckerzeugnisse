# Vorabinformationen Fasssauna.de

Eigenständiges, druckbares Informationsprojekt der Meisel & Gerken GmbH.
Unabhängig von der Website (kein Bezug zu `site.css`). Jede Seite ist eine
druckbare A4-Datei (Hochformat).

## Aufbau

```
broschuere/
├── index.html             Seite 01 · Deckblatt & Themenübersicht
├── vorbereitung.html      Seite 02 · Vorbereitungen am Bauplatz
├── fundament-skizze.html  Seite 03 · Fundament (Schemazeichnung)
├── elektroanschluss.html  Seite 04 · Elektroanschluss (Text folgt)
├── holzschutz.html        Seite 05 · Holzschutz, Thermoholz und Pflege
├── vorlage.html           Blanko-Vorlage für neue Seiten
├── css/
│   └── broschuere.css     Gemeinsame Druckstile + Marken-Tokens + Schrift
├── js/
│   └── broschuere.js      Einheitliche Impressum-Fußzeile (eine Pflegestelle)
├── quellen/
│   └── anschrieben-key-facts-lang.pdf  Quelldokument / Key Facts
└── bilder/                Bilder der Vorabinformationen (3:2)
```

## Neue Seite anlegen

1. `vorlage.html` kopieren und sinnvoll benennen (z. B. `lieferung.html`).
2. Titel, linke Kopf-Kennung (`doc-kicker`), rechte Kopf-Kennung (`doc-tag`), Headline, Texte und Bilder einsetzen.
3. Bilder nach `bilder/` legen, im einheitlichen 3:2-Format, damit sie randfüllend passen.
4. Seite in der Themenübersicht der `index.html` eintragen.

## Marke

- Dunkel `#1C1D2C`, Holz `#ae926c`, klare serifenlose Display-Schrift.
- Alle Stile liegen zentral in `css/broschuere.css`. Nichts inline stylen.
- Die Kopfzeile zeigt links die Einordnung, mittig das Logo und rechts den
  jeweiligen Abschnitt.
- Die einheitliche Fußzeile (Impressum, Bank, Rechtliches) wird zentral aus
  `js/broschuere.js` erzeugt. Jede Seite trägt nur ein leeres
  `<footer class="doc-foot" data-imprint></footer>` und bindet das Skript ein.
  Adressen, Bankdaten o. Ä. **nur** in `js/broschuere.js` ändern.

## Drucken / PDF

- Die zusammengeführte Ausgabedatei heißt verbindlich `Kundenbroschüre.pdf`.
- Im Browser über Drucken → Ziel „Als PDF speichern".
- Papierformat A4, Ränder „Keine", Hintergrundgrafiken aktivieren
  (sonst fehlen Holz-Linie und Bildrahmen).

## Schrift

Die Broschüre verwendet eine serifenlose Systemschrift mit passenden lokalen
Fallbacks. Für den Druck ist deshalb keine externe Schriftdatei erforderlich.
