# More Health

Persönliches Diabetes-Protokoll als einzelne Web-Seite (`index.html`): Blutzucker, Mahlzeiten (BE/KE), geschätzter HbA1c, Erinnerungen und KI-Funktionen (Rezepte, Tagesplan, GI-Datenbank).

## Daten
Alle Einträge werden nur lokal im Browser gespeichert (`localStorage`). Unter „Protokoll“ lassen sie sich als CSV exportieren oder komplett löschen.

## KI einrichten (Cloudflare Worker)
Die KI-Funktionen laufen über einen eigenen kleinen Worker im Ordner `worker/`, der den Anthropic-API-Key geheim hält.

1. `cd worker && npx wrangler login`
2. `npx wrangler secret put ANTHROPIC_API_KEY` (Key aus der Anthropic Console einfügen)
3. In `wrangler.toml` unter `ALLOWED_ORIGINS` die Adresse der Seite eintragen, dann `npx wrangler deploy`
4. Die ausgegebene Worker-URL in `index.html` bei `const API_URL=''` eintragen.

Hinweis: Die App ersetzt keine ärztliche Beratung.
