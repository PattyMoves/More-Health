// More Health KI-Proxy: hält den Anthropic-Key als Secret und lässt nur
// Anfragen von erlaubten Seiten (ALLOWED_ORIGINS) durch.
const MAX_PROMPT = 4000;
const MAX_TOKENS = 2500;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    const ok = allowed.includes(origin);
    const cors = {
      'Access-Control-Allow-Origin': ok ? origin : 'null',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };
    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

    if (request.method === 'OPTIONS') return new Response(null, { status: ok ? 204 : 403, headers: cors });
    if (!ok) return json({ error: 'Origin nicht erlaubt' }, 403);
    if (request.method !== 'POST') return json({ error: 'Nur POST' }, 405);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'Ungültiges JSON' }, 400); }
    const prompt = typeof body.prompt === 'string' ? body.prompt : '';
    if (!prompt || prompt.length > MAX_PROMPT) return json({ error: 'Prompt fehlt oder ist zu lang' }, 400);
    const maxTokens = Math.min(Number(body.max_tokens) || 1000, MAX_TOKENS);

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: env.MODEL || 'claude-sonnet-5-5',
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return json({ error: (data.error && data.error.message) || 'KI-Fehler ' + res.status }, 502);
    const text = (data.content || []).map(c => c.text || '').join('');
    return json({ text });
  },
};
