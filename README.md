# More Health

Ernährungs-App für den Alltag mit Diabetes, als einzelne Web-App (`index.html`), installierbar auf dem Handy-Homescreen.

- **Heute**: Kohlenhydrate und BE des Tages, häufige Mahlzeiten mit einem Tipp nochmal eintragen, Blutzucker-Verlauf, Rezept-Idee
- **KH-Rechner**: Barcode-Scanner (Kamera oder Nummer eintippen, Daten von Open Food Facts), Lebensmittel suchen, Menge in Gramm anpassen, KH, BE (12 g) und KE (10 g) pro Mahlzeit, dazu kcal, Eiweiß und Fett (ca.); Foto zu jedem Lebensmittel, Kategorie „Unterwegs“ mit typischen Portionen (Döner, Pizza, Sushi …); eigene Lebensmittel anlegen
- **Rezepte**: Tagesplan aus Frühstück, Mittag- und Abendessen mit Summe in KH, BE, KE, kcal, Eiweiß und Fett (ca.), auf Wunsch im Vergleich zum eigenen Tagesbedarf; „Leichte Vorschläge“ (bis 3 BE pro Portion), 24 Rezepte aus verschiedenen Küchen (asiatisch, orientalisch, afrikanisch, europäisch, griechisch, italienisch) mit Bildern und Küchen-Filter, Mengenangaben, KH/BE/KE pro Portion, Portionen skalierbar, Favoriten
- **Tagebuch**: Blutzucker, Mahlzeiten und Notizen pro Tag, Wochenübersicht, CSV-Export
- **Alltag**: Erinnerungen (als tägliche Termine im Handy-Kalender und als Hinweis auf „Heute“), Kalorien- und Makro-Rechner (allgemeiner Richtwert nach Mifflin-St Jeor × Bewegung, Verteilung wählbar), eigener Notfallplan (nur was mit dem eigenen Diabetes-Team besprochen ist), Muster über 7/14/30 Tage als reine Beobachtung, Bericht zum Kopieren für den Arzttermin, Schätzhilfe unterwegs, Tausch-Ideen

Alle Einträge werden nur lokal im Browser gespeichert (`localStorage`). Die App gibt bewusst keine Therapie-, Medikamenten- oder Insulinempfehlungen; Blutzuckerwerte werden nur relativ zum selbst eingetragenen Zielbereich markiert.

Nährwerte sind Durchschnittswerte pro 100 g und können je nach Produkt abweichen.

Der Barcode-Scanner nutzt die eingebaute Barcode-Erkennung des Browsers, sonst [ZXing](https://github.com/zxing-js/library) (`vendor/`, Apache-2.0). Produktdaten: [Open Food Facts](https://world.openfoodfacts.org) (ODbL).
