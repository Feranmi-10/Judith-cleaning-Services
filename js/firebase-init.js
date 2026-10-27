/* Initializes Firebase if keys are present in config.js.
   Exposes:  FB.on (bool), FB.auth, FB.db  */
const FB = { on: false, auth: null, db: null };

(function () {
  try {
    if (typeof firebase !== "undefined" && CONFIG.FIREBASE.apiKey) {
      firebase.initializeApp(CONFIG.FIREBASE);
      FB.auth = firebase.auth();
      FB.db = firebase.firestore();
      FB.on = true;
    }
  } catch (e) {
    console.warn("Firebase init failed — running in local mode.", e);
  }
})();

/* EmailJS init */
(function () {
  try {
    if (typeof emailjs !== "undefined" && CONFIG.EMAILJS.publicKey) {
      emailjs.init({ publicKey: CONFIG.EMAILJS.publicKey });
    }
  } catch (e) { console.warn("EmailJS init failed", e); }
})();

/* Mail helper — silently no-ops if EmailJS isn't configured */
const Mail = {
  async send(toName, toEmail, subject, message) {
    if (!CONFIG.EMAILJS.publicKey || typeof emailjs === "undefined") {
      console.log("[Mail skipped — EmailJS not configured]", subject, toEmail);
      return false;
    }
    try {
      await emailjs.send(CONFIG.EMAILJS.serviceId, CONFIG.EMAILJS.templateId, {
        to_name: toName, to_email: toEmail, subject, message
      });
      return true;
    } catch (e) { console.warn("Mail failed", e); return false; }
  }
};

/* Cloudinary helper — falls back to a local data-URL if not configured */
const Cloud = {
  configured() { return !!(CONFIG.CLOUDINARY.cloudName && CONFIG.CLOUDINARY.uploadPreset); },
  async upload(file) {
    if (!this.configured()) {
      return new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result);
        r.onerror = rej;
        r.readAsDataURL(file);
      });
    }
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", CONFIG.CLOUDINARY.uploadPreset);
    const resp = await fetch(
      `https://api.cloudinary.com/v1_1/${CONFIG.CLOUDINARY.cloudName}/image/upload`,
      { method: "POST", body: fd }
    );
    if (!resp.ok) throw new Error("Cloudinary upload failed");
    const data = await resp.json();
    return data.secure_url;
  }
};
