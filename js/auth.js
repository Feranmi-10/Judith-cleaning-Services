/* ==================== AUTH LAYER ====================
   Firebase Auth (Email/Password + Google) when configured,
   otherwise a localStorage fallback so the site is testable.
   Auth.profile = { id, name, email, phone, role, photo }
   roles: customer | cleaner | admin
   ===================================================== */

const Auth = {
  user: null,        // raw auth user
  profile: null,     // firestore/local profile with role
  _subs: [],
  _ready: false,

  onChange(cb) {
    this._subs.push(cb);
    if (this._ready) cb(this.profile);
  },
  _emit() { this._ready = true; this._subs.forEach(cb => cb(this.profile)); },

  roleFor(email) {
    return CONFIG.ADMIN_EMAILS.map(e => e.toLowerCase()).includes((email || "").toLowerCase())
      ? "admin" : "customer";
  },

  async _loadProfile(fbUser) {
    const id = fbUser.uid;
    let prof = await DB.getUser(id);
    if (!prof) {
      prof = {
        id,
        name: fbUser.displayName || (fbUser.email || "").split("@")[0],
        email: fbUser.email || "",
        phone: fbUser.phoneNumber || "",
        photo: fbUser.photoURL || "",
        role: this.roleFor(fbUser.email),
        available: true,
        createdAt: Date.now()
      };
      await DB.saveUser(prof);
    } else if (this.roleFor(prof.email) === "admin" && prof.role !== "admin") {
      prof.role = "admin";
      await DB.updateUser(id, { role: "admin" });
    }
    return prof;
  },

  init() {
    if (FB.on) {
      FB.auth.onAuthStateChanged(async (u) => {
        this.user = u;
        this.profile = u ? await this._loadProfile(u) : null;
        this._emit();
      });
    } else {
      const id = localStorage.getItem("sp_session");
      this.profile = id ? LocalDB.get("users").find(x => x.id === id) || null : null;
      this.user = this.profile;
      setTimeout(() => this._emit(), 0);
    }
  },

  /* ---------- sign in / up ---------- */
  async google() {
    if (FB.on) {
      const provider = new firebase.auth.GoogleAuthProvider();
      await FB.auth.signInWithPopup(provider);
      return;
    }
    throw new Error("Google sign-in needs Firebase keys in js/config.js. Use email sign-up to test local mode.");
  },

  async signup(name, email, pass, phone) {
    if (FB.on) {
      const cred = await FB.auth.createUserWithEmailAndPassword(email, pass);
      await cred.user.updateProfile({ displayName: name });
      await DB.saveUser({
        id: cred.user.uid, name, email, phone: phone || "",
        role: this.roleFor(email), photo: "", available: true, createdAt: Date.now()
      });
      return;
    }
    // local fallback
    const users = LocalDB.get("users");
    if (users.some(u => u.email === email)) throw new Error("An account with this email already exists.");
    const prof = { id: uid(), name, email, phone: phone || "", pass: btoa(pass), role: this.roleFor(email), photo: "", available: true, createdAt: Date.now() };
    LocalDB.add("users", prof);
    localStorage.setItem("sp_session", prof.id);
    this.profile = prof; this.user = prof; this._emit();
  },

  async login(email, pass) {
    if (FB.on) { await FB.auth.signInWithEmailAndPassword(email, pass); return; }
    const prof = LocalDB.get("users").find(u => u.email === email && u.pass === btoa(pass));
    if (!prof) throw new Error("Invalid email or password.");
    localStorage.setItem("sp_session", prof.id);
    this.profile = prof; this.user = prof; this._emit();
  },

  async reset(email) {
    if (FB.on) { await FB.auth.sendPasswordResetEmail(email); return; }
    throw new Error("Password reset requires Firebase to be configured.");
  },

  async logout() {
    if (FB.on) await FB.auth.signOut();
    localStorage.removeItem("sp_session");
    this.profile = null; this.user = null; this._emit();
    location.href = "index.html";
  },

  /* redirect helper for protected pages */
  require(roles, cb) {
    this.onChange(p => {
      if (!p) { location.href = "login.html?next=" + encodeURIComponent(location.pathname.split("/").pop() + location.search); return; }
      if (roles && !roles.includes(p.role)) { location.href = Auth.homeFor(p.role); return; }
      cb(p);
    });
  },

  homeFor(role) {
    return role === "admin" ? "admin.html" : role === "cleaner" ? "cleaner.html" : "dashboard.html";
  }
};
