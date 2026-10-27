/* ==================== DATA LAYER ====================
   Uses Firestore when configured, else localStorage.
   Collections: services, bookings, reviews, promos,
                messages, users, gallery
   ===================================================== */

const DEFAULT_SERVICES = [
  { id: "standard",  icon: "broom", name: "Standard Home Cleaning", base: 15000, perBedroom: 3000, perBathroom: 2500, duration: "2–4 hrs",
    desc: "Routine cleaning for homes: dusting, sweeping, mopping, bathrooms, kitchen surfaces and trash removal.",
    features: ["Dusting all surfaces","Sweeping & mopping floors","Bathroom cleaning & sanitizing","Kitchen wipe-down","Trash removal","Bed making"], popular: true },
  { id: "deep",      icon: "sparkles", name: "Deep Cleaning", base: 35000, perBedroom: 5000, perBathroom: 4000, duration: "4–8 hrs",
    desc: "Intensive top-to-bottom cleaning including baseboards, behind appliances, grout scrubbing and detailed sanitizing.",
    features: ["Everything in Standard","Baseboards & door frames","Behind/under appliances","Tile & grout scrubbing","Interior windows","Light fixtures & fans"], popular: true },
  { id: "movein",    icon: "box", name: "Move-In / Move-Out", base: 45000, perBedroom: 6000, perBathroom: 4500, duration: "5–9 hrs",
    desc: "Complete empty-home cleaning so you move into a spotless space or leave one behind for your deposit.",
    features: ["Full deep clean of empty home","Inside all cabinets & wardrobes","Inside fridge & oven","Walls spot-cleaning","Windows & tracks","Balconies"] },
  { id: "office",    icon: "building", name: "Office Cleaning", base: 25000, perBedroom: 4000, perBathroom: 3000, duration: "2–6 hrs",
    desc: "Professional workspace cleaning: desks, floors, restrooms, kitchenettes and reception areas. Rooms = offices/sections.",
    features: ["Workstation sanitizing","Floor care","Restroom restocking & cleaning","Kitchenette cleaning","Glass & partitions","Waste disposal"] },
  { id: "postconstruction", icon: "tool", name: "Post-Construction", base: 60000, perBedroom: 8000, perBathroom: 5000, duration: "1–2 days",
    desc: "Heavy-duty cleanup after building or renovation: dust, paint spots, debris and final sparkle clean.",
    features: ["Debris & dust removal","Paint/cement spot removal","Window & frame detailing","Floor scrubbing & polishing","Fixture polishing","Final sparkle pass"] },
  { id: "sofa",      icon: "sofa", name: "Sofa & Upholstery", base: 20000, perBedroom: 0, perBathroom: 0, duration: "1–3 hrs",
    desc: "Steam and shampoo cleaning for sofas, chairs, mattresses and curtains. Price covers a standard 5-seater set.",
    features: ["Deep vacuum","Stain treatment","Steam/shampoo wash","Deodorizing","Fast-dry finish"] },
  { id: "carpet",    icon: "layers", name: "Carpet & Rug Cleaning", base: 12000, perBedroom: 0, perBathroom: 0, duration: "1–2 hrs",
    desc: "Professional washing and drying for carpets and rugs. Price covers one large rug or room carpet.",
    features: ["Dry soil extraction","Shampoo wash","Stain & odor removal","Quick drying"] },
  { id: "fumigation", icon: "bug", name: "Fumigation & Pest Control", base: 18000, perBedroom: 2000, perBathroom: 1500, duration: "1–2 hrs",
    desc: "Safe fumigation against mosquitoes, cockroaches, rodents and other pests for homes and offices.",
    features: ["Full-premises treatment","Safe certified chemicals","Mosquito, roach & rodent control","Post-treatment advice"] }
];

/* ---------- local storage engine ---------- */
const LocalDB = {
  key: "sp_db",
  all() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
  get(col) { return this.all()[col] || []; },
  set(col, arr) { const d = this.all(); d[col] = arr; localStorage.setItem(this.key, JSON.stringify(d)); },
  add(col, obj) { const a = this.get(col); a.push(obj); this.set(col, a); return obj.id; },
  update(col, id, patch) { this.set(col, this.get(col).map(x => x.id === id ? { ...x, ...patch } : x)); },
  remove(col, id) { this.set(col, this.get(col).filter(x => x.id !== id)); }
};

const uid = () => "id" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

const DB = {
  fb: () => FB.on,

  /* ----- generic helpers (firestore) ----- */
  async _col(col) {
    const snap = await FB.db.collection(col).get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  /* ----- services ----- */
  async getServices() {
    if (!FB.on) {
      const local = LocalDB.get("services");
      return local.length ? local : DEFAULT_SERVICES;
    }
    try {
      const list = await this._col("services");
      return list.length ? list : DEFAULT_SERVICES;
    } catch { return DEFAULT_SERVICES; }
  },
  async getService(id) { return (await this.getServices()).find(s => s.id === id); },
  async saveService(s) {
    if (!s.id) s.id = uid();
    if (FB.on) await FB.db.collection("services").doc(s.id).set(s, { merge: true });
    else {
      const list = LocalDB.get("services").length ? LocalDB.get("services") : [...DEFAULT_SERVICES];
      const i = list.findIndex(x => x.id === s.id);
      i >= 0 ? list[i] = { ...list[i], ...s } : list.push(s);
      LocalDB.set("services", list);
    }
    return s.id;
  },
  async deleteService(id) {
    if (FB.on) await FB.db.collection("services").doc(id).delete();
    else {
      const list = LocalDB.get("services").length ? LocalDB.get("services") : [...DEFAULT_SERVICES];
      LocalDB.set("services", list.filter(x => x.id !== id));
    }
  },
  async seedServices() { for (const s of DEFAULT_SERVICES) await this.saveService({ ...s }); },

  /* ----- quote engine ----- */
  quote({ service, bedrooms = 0, bathrooms = 0, addons = [], frequency = "once", area = "" }) {
    if (!service) return null;
    let subtotal = Number(service.base) || 0;
    subtotal += (Number(service.perBedroom) || 0) * bedrooms;
    subtotal += (Number(service.perBathroom) || 0) * bathrooms;
    let addonTotal = 0;
    addons.forEach(id => {
      const a = CONFIG.ADDONS.find(x => x.id === id);
      if (a) addonTotal += a.price;
    });
    subtotal += addonTotal;
    const travelFee = CONFIG.AREAS[area] ?? 0;
    const freq = CONFIG.FREQUENCIES.find(f => f.id === frequency) || CONFIG.FREQUENCIES[0];
    const discount = Math.round(subtotal * freq.discount);
    const total = subtotal - discount + travelFee;
    return { subtotal, addonTotal, travelFee, discount, discountLabel: freq.label, total };
  },

  /* ----- bookings ----- */
  async createBooking(b) {
    b.id = b.id || "BK" + Date.now().toString().slice(-8);
    b.createdAt = Date.now();
    b.status = b.status || "pending";
    if (FB.on) await FB.db.collection("bookings").doc(b.id).set(b);
    else LocalDB.add("bookings", b);
    return b.id;
  },
  async getBooking(id) {
    if (FB.on) {
      const d = await FB.db.collection("bookings").doc(id).get();
      return d.exists ? { id: d.id, ...d.data() } : null;
    }
    return LocalDB.get("bookings").find(b => b.id === id) || null;
  },
  watchBooking(id, cb) {
    if (FB.on) return FB.db.collection("bookings").doc(id).onSnapshot(d => cb(d.exists ? { id: d.id, ...d.data() } : null));
    cb(LocalDB.get("bookings").find(b => b.id === id) || null);
    return () => {};
  },
  async updateBooking(id, patch) {
    if (FB.on) await FB.db.collection("bookings").doc(id).update(patch);
    else LocalDB.update("bookings", id, patch);
  },
  async myBookings(uidOrEmail) {
    const all = await this.allBookings();
    return all.filter(b => b.userId === uidOrEmail || (b.customer && b.customer.email === uidOrEmail));
  },
  async cleanerBookings(cleanerId) {
    return (await this.allBookings()).filter(b => b.cleanerId === cleanerId);
  },
  async allBookings() {
    let list = FB.on ? await this._col("bookings") : LocalDB.get("bookings");
    return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  },

  /* ----- reviews ----- */
  async addReview(r) { r.id = uid(); r.createdAt = Date.now(); r.approved = false;
    if (FB.on) await FB.db.collection("reviews").doc(r.id).set(r); else LocalDB.add("reviews", r); return r.id; },
  async getReviews(approvedOnly = true) {
    let list = FB.on ? await this._col("reviews") : LocalDB.get("reviews");
    if (approvedOnly) list = list.filter(r => r.approved);
    return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  },
  async updateReview(id, patch) { FB.on ? await FB.db.collection("reviews").doc(id).update(patch) : LocalDB.update("reviews", id, patch); },
  async deleteReview(id) { FB.on ? await FB.db.collection("reviews").doc(id).delete() : LocalDB.remove("reviews", id); },

  /* ----- promos ----- */
  async getPromo(code) {
    code = (code || "").trim().toUpperCase();
    if (!code) return null;
    let list = FB.on ? await this._col("promos") : LocalDB.get("promos");
    return list.find(p => p.code === code && p.active) || null;
  },
  async listPromos() { return FB.on ? await this._col("promos") : LocalDB.get("promos"); },
  async savePromo(p) { if (!p.id) p.id = uid(); p.code = p.code.toUpperCase();
    FB.on ? await FB.db.collection("promos").doc(p.id).set(p, { merge: true }) : (LocalDB.get("promos").some(x=>x.id===p.id) ? LocalDB.update("promos", p.id, p) : LocalDB.add("promos", p)); },
  async deletePromo(id) { FB.on ? await FB.db.collection("promos").doc(id).delete() : LocalDB.remove("promos", id); },

  /* ----- contact messages ----- */
  async saveMessage(m) { m.id = uid(); m.createdAt = Date.now(); m.read = false;
    FB.on ? await FB.db.collection("messages").doc(m.id).set(m) : LocalDB.add("messages", m); },
  async listMessages() {
    const list = FB.on ? await this._col("messages") : LocalDB.get("messages");
    return list.sort((a, b) => b.createdAt - a.createdAt);
  },
  async updateMessage(id, patch) { FB.on ? await FB.db.collection("messages").doc(id).update(patch) : LocalDB.update("messages", id, patch); },

  /* ----- users ----- */
  async listUsers(role) {
    let list = FB.on ? await this._col("users") : LocalDB.get("users");
    if (role) list = list.filter(u => u.role === role);
    return list;
  },
  async getUser(id) {
    if (FB.on) { const d = await FB.db.collection("users").doc(id).get(); return d.exists ? { id: d.id, ...d.data() } : null; }
    return LocalDB.get("users").find(u => u.id === id) || null;
  },
  async saveUser(u) {
    if (FB.on) await FB.db.collection("users").doc(u.id).set(u, { merge: true });
    else { LocalDB.get("users").some(x => x.id === u.id) ? LocalDB.update("users", u.id, u) : LocalDB.add("users", u); }
  },
  async updateUser(id, patch) { FB.on ? await FB.db.collection("users").doc(id).set(patch, { merge: true }) : LocalDB.update("users", id, patch); },

  /* ----- gallery (before/after pairs) ----- */
  async listGallery() {
    const list = FB.on ? await this._col("gallery") : LocalDB.get("gallery");
    return list.sort((a, b) => b.createdAt - a.createdAt);
  },
  async addGallery(g) { g.id = uid(); g.createdAt = Date.now();
    FB.on ? await FB.db.collection("gallery").doc(g.id).set(g) : LocalDB.add("gallery", g); },
  async deleteGallery(id) { FB.on ? await FB.db.collection("gallery").doc(id).delete() : LocalDB.remove("gallery", id); }
};
