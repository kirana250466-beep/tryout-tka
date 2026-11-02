// Pintu masuk Worker. Permintaan /api/* ditangani oleh API quiz (functions/api/[[route]].js),
// sisanya (index.html, style.css, app.js, gambar) dilayani dari folder public/ lewat Static Assets.
import { onRequest } from "../functions/api/[[route]].js";

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api" || pathname.startsWith("/api/")) {
      return onRequest({ request, env, ctx });
    }
    return env.ASSETS.fetch(request);
  },
};
