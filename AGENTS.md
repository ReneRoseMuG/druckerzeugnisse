# Projektregeln

## PDF-Ausgabe

Alle neu erzeugten oder aktualisierten PDF-Dokumente müssen im Projektordner `Ausgabe/` gespeichert werden. Im Projektstamm und im Ordner `broschuere/` dürfen keine erzeugten PDF-Dateien abgelegt werden. PDF-Quelldokumente bleiben in `quellen/`.

## Einheitliche Druckschrift

Alle Broschüren-, Vorlagen- und Beilagenseiten verwenden ausschließlich `Segoe UI`. Überschriften, Fließtext, Kennzeichnungen, Seitennummern und bisherige Monospace-Bereiche nutzen dieselbe Schriftfamilie; Unterschiede werden nur über Schriftgröße, Schriftschnitt und Laufweite erzeugt. Neu exportierte PDFs dürfen keine zweite Schriftfamilie einbetten.

## Fundamentskizzen-Beilagen

Wenn die Erzeugung der Fundamentskizzen-Beilagen angefordert wird, werden alle Grafikdateien in `broschuere/fundament-skizzen/` verarbeitet. Für jedes erkannte Modell entstehen aus `broschuere/vorlage-fundamentskizze.html`:

- `broschuere/fundament-skizze-<vollstaendiger-modellname>.html`
- `Ausgabe/Fundament-Skizze-<Vollständiger-Modellname>.pdf`

Der Dateiname der Grafik bestimmt das Modell. Groß-/Kleinschreibung, Leerzeichen, Bindestriche und Unterstriche werden bei der Erkennung ignoriert. Die bekannte Schreibweise `premuim` wird als `Premium` behandelt.

| Erkannter Modellname | Vollständiger Modellname |
| --- | --- |
| Premium, premuim | Oval Sauna Premium |
| Palkkio | Oval Sauna Palkkio |
| Kolmikko | Oval Sauna Kolmikko |
| XL | Fasssauna XL |
| XL Vorraum | Fasssauna XL Vorraum |
| Suuri | Fasssauna Suuri |
| Suuri Vorraum | Fasssauna Suuri Vorraum |
| Standard | Fasssauna Standard |
| Standard Vorraum | Fasssauna Standard Vorraum |

Zusatzableitungen:

- Aus der Grafik für `XL` wird zusätzlich die Beilage `Fasssauna Suuri` erzeugt.
- Aus der Grafik für `XL Vorraum` wird zusätzlich die Beilage `Fasssauna Suuri Vorraum` erzeugt.
- Falls später eine eigene Suuri-Grafik vorhanden ist, hat diese für die betreffende Suuri-Beilage Vorrang.

In jeder erzeugten HTML-Seite wird der vorhandene Modell-Titel auf `Fundamentskizze für: <vollständiger Modellname>` gesetzt. Direkt darunter wird die zugeordnete Grafik vollständig und unbeschnitten eingebunden. Unmittelbar unter der Skizze steht der feste Satz `Alle Maße sind Millimeter Angaben`. Weitere Bildunterschriften oder Zusatztexte werden nicht ergänzt. Die Vorlage selbst bleibt ohne eingebettete Skizze. Nach der HTML-Erzeugung wird jede Seite einzeln als A4-PDF exportiert und ausschließlich in `Ausgabe/` gespeichert.
