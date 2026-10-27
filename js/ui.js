/* ==================== SVG ICON SYSTEM (no emojis) ==================== */
const ICONS = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="12" x2="8.01" y2="12"/><line x1="12" y1="12" x2="12.01" y2="12"/><line x1="16" y1="12" x2="16.01" y2="12"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  "x-circle": '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  wallet: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  truck: '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  edit: '<path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  chart: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  bug: '<circle cx="12" cy="13" r="5"/><path d="M12 8V5M8.5 9 6 6.5M15.5 9 18 6.5M7 13H4M20 13h-3M8.5 17 6 19.5M15.5 17 18 19.5"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>',
  broom: '<path d="M19 3l-8.5 8.5"/><path d="M10 11l3 3-4.5 6L4 15.5z"/><path d="M5.5 17.5 8 20"/>',
  sofa: '<path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M2 13a2 2 0 0 1 4 0v1h12v-1a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M5 19v2M19 19v2"/>',
  droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
  "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  gem: '<polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/><path d="M2 9h20"/><path d="M12 22 8 9l4-6 4 6-4 13z"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
  navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>'
};

/* Legacy map: services saved earlier with emoji icons still render as SVG */
const EMOJI_ICON_MAP = { "🧹": "broom", "✨": "sparkles", "📦": "box", "🏢": "building", "🏗": "tool", "🛋": "sofa", "🧼": "layers", "🦟": "bug", "🧽": "droplet" };

const UI_ICON = {
  icon(name, size = 16) {
    return `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.droplet}</svg>`;
  },
  svcIcon(val, size = 16) {
    const name = ICONS[val] ? val : (EMOJI_ICON_MAP[val] || "droplet");
    return this.icon(name, size);
  },
  hydrate(root) {
    if (root.matches && root.matches("i[data-icon]")) {
      root.outerHTML = this.icon(root.dataset.icon, +root.dataset.size || 16);
      return;
    }
    (root.querySelectorAll ? root.querySelectorAll("i[data-icon]") : []).forEach(el => {
      el.outerHTML = this.icon(el.dataset.icon, +el.dataset.size || 16);
    });
  }
};

/* ==================== SHARED UI ==================== */

const UI = {
  money(n) { return CONFIG.CURRENCY + (Number(n) || 0).toLocaleString("en-NG"); },
  param(k) { return new URLSearchParams(location.search).get(k); },
  esc(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
  fmtDate(d) {
    if (!d) return "—";
    try { return new Date(d + "T00:00").toLocaleDateString("en-NG", { weekday: "short", day: "numeric", month: "short", year: "numeric" }); }
    catch { return d; }
  },
  star(filled, size = 15) {
    return `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${filled ? "#f5a623" : "none"}" stroke="#f5a623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  },
  stars(n) { return [1, 2, 3, 4, 5].map(i => this.star(i <= Math.round(n))).join(""); },

  toast(msg, type = "ok") {
    let box = document.querySelector(".toasts");
    if (!box) { box = document.createElement("div"); box.className = "toasts"; document.body.appendChild(box); }
    const t = document.createElement("div");
    t.className = "toast " + type;
    t.textContent = msg;
    box.appendChild(t);
    setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 400); }, 3500);
  },

  STATUS: {
    pending:     { label: "Pending confirmation", cls: "s-pending",  step: 0 },
    confirmed:   { label: "Confirmed",            cls: "s-confirmed",step: 1 },
    assigned:    { label: "Cleaner assigned",     cls: "s-assigned", step: 2 },
    on_the_way:  { label: "Cleaner on the way",   cls: "s-otw",      step: 3 },
    in_progress: { label: "Cleaning in progress", cls: "s-progress", step: 4 },
    completed:   { label: "Completed",            cls: "s-done",     step: 5 },
    cancelled:   { label: "Cancelled",            cls: "s-cancel",   step: -1 }
  },
  badge(status) {
    const s = this.STATUS[status] || { label: status, cls: "" };
    return `<span class="badge ${s.cls}">${s.label}</span>`;
  },

  renderChrome() {
    const page = document.body.dataset.page || "";
    const B = CONFIG.BUSINESS;
    const header = document.getElementById("app-header");
    if (header) {
      header.innerHTML = `
      <header class="topbar">
        <div class="container topbar-in">
          <span><i data-icon="phone"></i> ${B.phone}</span>
          <span class="hide-sm"><i data-icon="clock"></i> ${B.hours}</span>
          <span class="hide-sm"><i data-icon="pin"></i> Serving all of Lagos</span>
        </div>
      </header>
      <nav class="nav">
        <div class="container nav-in">
          <a class="brand" href="index.html"><img class="brand-logo" src="https://res.cloudinary.com/dinypexvn/image/upload/v1792828961/judith-site/logo.jpg" alt="${B.name} logo"></a>
          <button class="nav-toggle" aria-label="Menu" onclick="document.querySelector('.nav-links').classList.toggle('open')"><i data-icon="menu" data-size="24"></i></button>
          <div class="nav-links">
            <a href="index.html" class="${page === "home" ? "active" : ""}">Home</a>
            <a href="services.html" class="${page === "services" ? "active" : ""}">Services</a>
            <a href="pricing.html" class="${page === "pricing" ? "active" : ""}">Pricing</a>
            <a href="calculator.html" class="${page === "calculator" ? "active" : ""}">Calculator</a>
            <a href="gallery.html" class="${page === "gallery" ? "active" : ""}">Gallery</a>
            <a href="reviews.html" class="${page === "reviews" ? "active" : ""}">Reviews</a>
            <a href="faq.html" class="${page === "faq" ? "active" : ""}">FAQ</a>
            <a href="contact.html" class="${page === "contact" ? "active" : ""}">Contact</a>
            <span id="nav-auth"><a class="btn btn-ghost btn-sm" href="login.html">Login</a></span>
            <a class="btn btn-primary btn-sm" href="book.html">Book Now</a>
          </div>
        </div>
      </nav>
      ${FB.on ? "" : `<div class="setup-banner container-fluid"><i data-icon="tool"></i> <b>Local mode:</b> data is saved in this browser only. Paste your Firebase / Cloudinary / EmailJS / Paystack keys in <code>js/config.js</code> to go live. See <b>SETUP.md</b>.</div>`}`;
    }

    const footer = document.getElementById("app-footer");
    if (footer) {
      footer.innerHTML = `
      <footer class="footer">
        <div class="container footer-grid">
          <div>
            <img class="brand-logo brand-logo-lg" src="https://res.cloudinary.com/dinypexvn/image/upload/v1792828961/judith-site/logo.jpg" alt="${B.name} logo">
            <p class="muted">${B.tagline}. Trusted, vetted and insured cleaners at your doorstep.</p>
            <p class="muted"><i data-icon="pin"></i> ${B.address}</p>
          </div>
          <div>
            <h4>Company</h4>
            <a href="about.html">About Us</a><a href="services.html">Services</a>
            <a href="gallery.html">Gallery</a><a href="reviews.html">Reviews</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="faq.html">FAQ</a><a href="contact.html">Contact</a>
            <a href="terms.html">Terms &amp; Conditions</a><a href="privacy.html">Privacy Policy</a>
          </div>
          <div>
            <h4>Get Started</h4>
            <a href="book.html">Book a Cleaning</a><a href="calculator.html">Price Calculator</a>
            <a href="login.html">Customer Login</a><a href="cleaner.html">Cleaner Portal</a>
          </div>
        </div>
        <div class="container footer-bottom">© ${new Date().getFullYear()} ${B.name}. All rights reserved.</div>
      </footer>
      <a class="wa-float" target="_blank" rel="noopener"
         href="https://wa.me/${B.whatsapp}?text=${encodeURIComponent("Hello " + B.name + ", I'd like to book a cleaning.")}"
         title="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.7 6L4 29l8.2-1.6c1.2.6 2.5.9 3.8.9 6.6 0 12-5.4 12-12S22.6 3 16 3zm6.1 16.9c-.3.8-1.5 1.5-2.1 1.6-.6.1-1.3.2-3.7-.8-3.1-1.3-5.1-4.4-5.3-4.6-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.7-.6.6c-.2.2-.4.4-.2.7.2.3 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.8.4.1.6.1.8-.1l1.3-1.5c.2-.3.5-.2.8-.1l2.3 1.1c.3.2.5.3.6.4.1.2.1.8-.2 1.6z"/></svg>
      </a>`;
    }

    Auth.onChange(p => {
      const slot = document.getElementById("nav-auth");
      if (!slot) return;
      slot.innerHTML = p
        ? `<a class="btn btn-ghost btn-sm" href="${Auth.homeFor(p.role)}"><i data-icon="user"></i> ${UI.esc(p.name.split(" ")[0])}</a>`
        : `<a class="btn btn-ghost btn-sm" href="login.html">Login</a>`;
    });
  }
};

UI.icon = (n, s) => UI_ICON.icon(n, s);
UI.svcIcon = (v, s) => UI_ICON.svcIcon(v, s);

document.addEventListener("DOMContentLoaded", () => {
  Auth.init();
  UI.renderChrome();
  UI_ICON.hydrate(document.body);
  new MutationObserver(muts => {
    muts.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) UI_ICON.hydrate(n); }));
  }).observe(document.body, { childList: true, subtree: true });
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
