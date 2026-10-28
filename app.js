// ============================================================================
// FILE: app.js
// NEXIA VIRTUAL DESK - INTERACTIVE UI, BILINGUAL ENGINE & WHATSAPP DISPATCHER
// ============================================================================

const appState = {
  lang: "ml",
  selectedRegion: null,
  selectedItems: new Set(),
  customCategoryNotes: {},
  cabinBooking: {
    active: false,
    date: "",
    timeSlot: "",
    purpose: "Online Exam"
  },
  openCategoryIds: new Set(["cat_1_cv"]),
  enquiryRefId: "#NX-" + Math.floor(1000 + Math.random() * 9000),
  lastGeneratedWaUrl: ""
};

// --- BILINGUAL UI DICTIONARY ---
const UI_STRINGS = {
  ml: {
    headerExp: (yrs) => `${yrs} വർഷത്തെ വിശ്വസ്ത ഡിജിറ്റൽ സേവന പാരമ്പര്യം`,
    annivTitle: (yrs) => `സേവന മികവിന്റെ ${yrs}-ാം വാർഷികാഘോഷ നിറവിൽ!`,
    annivDesc: (yrs, est) => `${est} മുതൽ കഴിഞ്ഞ ${yrs} വർഷമായി നേരിട്ട് സന്ദർശിക്കാതെ തന്നെ ഓൺലൈൻ അപേക്ഷകളും, അന്താരാഷ്ട്ര നിലവാരത്തിലുള്ള സിവികളും വാട്സ്ആപ്പിലൂടെ കൃത്യതയോടെ ചെയ്തുനൽകുന്ന താങ്കളുടെ സ്വന്തം ഡിജിറ്റൽ സേവന കേന്ദ്രം.`,
    heroBadge: "100% ഓൺലൈൻ ഡിജിറ്റൽ സേവന കേന്ദ്രം • നേരിട്ട് സന്ദർശിക്കേണ്ടതില്ല",
    heroQuestion: "ഏത് സേവനമാണ് താങ്കൾക്ക് ഞങ്ങളിൽ നിന്ന് ആവശ്യമുള്ളത്?",
    heroSub: "താഴെ നൽകിയിട്ടുള്ള 14 വിഭാഗങ്ങളിൽ നിന്ന് താങ്കൾക്ക് ആവശ്യമുള്ള സേവനങ്ങൾ തിരഞ്ഞെടുക്കുക. ഒന്നിലധികം സേവനങ്ങൾ ഒരേസമയം തിരഞ്ഞെടുക്കാവുന്നതാണ്.",
    cvStep1: "ഘട്ടം 1: ഏത് മേഖലയിലേക്കാണ് താങ്കൾ സിവി നൽകാൻ ഉദ്ദേശിക്കുന്നത്? (ആദ്യം ഇത് തിരഞ്ഞെടുക്കുക)",
    cvStep2: "ഘട്ടം 2: താങ്കൾക്ക് ആവശ്യമുള്ള സിവി / ബയോഡാറ്റ വിഭാഗം തിരഞ്ഞെടുക്കുക",
    cvStep2Locked: "മുകളിലുള്ള ഘട്ടം 1-ൽ നിന്ന് ഒരു മേഖല (Region) തിരഞ്ഞെടുത്ത ശേഷം താഴെയുള്ള സിവി വിഭാഗങ്ങൾ തിരഞ്ഞെടുക്കുക:",
    otherLabel: "മറ്റുള്ളവ / ലിസ്റ്റിൽ ഇല്ലാത്ത സേവനം ആവശ്യമുണ്ടെങ്കിൽ ഇവിടെ രേഖപ്പെടുത്തുക:",
    cabinNotice: "പ്രത്യേക ശ്രദ്ധയ്ക്ക്: ഓൺലൈൻ പരീക്ഷകൾക്കും (Exams) ഇന്റർവ്യൂകൾക്കും (Interviews) മാത്രമാണ് പ്രൈവറ്റ് ക്യാബിൻ അനുവദിക്കുന്നത്. മുൻകൂട്ടിയുള്ള ബുക്കിംഗ് (Advance Booking) നിർബന്ധമാണ്. മറ്റ് ആവശ്യങ്ങൾക്കാണെങ്കിൽ അഡ്മിനുമായി ബന്ധപ്പെട്ട് അനുമതി ഉറപ്പാക്കിയ ശേഷം മാത്രം ബുക്ക് ചെയ്യുക.",
    cabinEnableCheck: "എനിക്ക് ഇന്റർനെറ്റ് ക്യാബിൻ ബുക്ക് ചെയ്യേണ്ടതുണ്ട് (Select Cabin Booking)",
    cabinDateLabel: "ആവശ്യമുള്ള തീയതി (Required Date) *",
    cabinTimeLabel: "ആവശ്യമുള്ള സമയം (Preferred Time Slot) *",
    cabinPurposeLabel: "ആവശ്യം തിരഞ്ഞെടുക്കുക (Purpose) *",
    dockSelected: "സേവനങ്ങൾ തിരഞ്ഞെടുത്തിട്ടുണ്ട്",
    dockSub: "വാട്സ്ആപ്പിലേക്ക് അയക്കാൻ തുടരുക",
    dockProceed: "തുടരുക (Proceed)",
    modalTitle: "താങ്കളുടെ വിവരങ്ങൾ നൽകുക",
    labelName: "താങ്കളുടെ പേര് (Full Name) *",
    labelPhone: "മൊബൈൽ നമ്പർ (Mobile Number) *",
    labelLocation: "സ്ഥലം / ലൊക്കേഷൻ (Location / City) *",
    labelExtra: "മറ്റ് വിവരങ്ങൾ (ഉണ്ടെങ്കിൽ ഇവിടെ എഴുതാം)",
    repNoticePrimary: "താങ്കൾ നൽകിയ വിവരങ്ങൾ വിശദമായി പരിശോധിച്ച ശേഷം, ഞങ്ങളുടെ പ്രതിനിധി വാട്സ്ആപ്പ് ചാറ്റിലൂടെ താങ്കളുമായി ബന്ധപ്പെടുന്നതാണ്.",
    repNoticeSecondary: "താഴെ കാണുന്ന ബട്ടൺ അമർത്തുമ്പോൾ മുകളിലുള്ള സന്ദേശം ഞങ്ങളുടെ ഒഫീഷ്യൽ വാട്സ്ആപ്പിലേക്ക് (+919961850698) പോകുന്നതാണ്.",
    sendWaBtn: "വാട്സ്ആപ്പിലേക്ക് അയക്കുക (Send to WhatsApp)",
    errFillDetails: "ദയവായി താങ്കളുടെ പേര്, മൊബൈൽ നമ്പർ, സ്ഥലം എന്നിവ പൂരിപ്പിക്കുക.",
    postTitle: "താങ്കളുടെ അപേക്ഷാ വിവരങ്ങൾ തയ്യാറായിക്കഴിഞ്ഞു!",
    postDesc: "വാട്സ്ആപ്പിൽ 'Send' ബട്ടൺ അമർത്തി മെസ്സേജ് അയച്ചു എന്ന് ഉറപ്പാക്കുക. താങ്കളുടെ ആവശ്യങ്ങൾ പരിശോധിച്ച ശേഷം ഞങ്ങളുടെ പ്രതിനിധി വാട്സ്ആപ്പിലൂടെ താങ്കളുമായി ബന്ധപ്പെടുന്നതാണ്."
  },
  en: {
    headerExp: (yrs) => `${yrs} Years of Trusted Global Digital Excellence`,
    annivTitle: (yrs) => `Celebrating ${yrs} Years of Digital Service Leadership!`,
    annivDesc: (yrs, est) => `Since ${est}, completing ${yrs} years of empowering clients globally with ATS CVs, online government applications, and corporate registrations completely via WhatsApp without needing an in-person visit.`,
    heroBadge: "100% Online Digital Service Desk • No Physical Visit Required",
    heroQuestion: "Which service do you require from us today?",
    heroSub: "Select your required services from the 14 categories below. You can select multiple services at the same time.",
    cvStep1: "Step 1: Which region are you applying for? (Select Target Region First)",
    cvStep2: "Step 2: Select your required CV / Resume / Biodata class below",
    cvStep2Locked: "Please choose a Target Region in Step 1 above to select your CV format:",
    otherLabel: "Other / Specify your custom requirement in this category:",
    cabinNotice: "Mandatory Notice: Private Internet Cabin is strictly permitted for Online Exams and Interviews only. Advance booking is mandatory. For any other purpose, please contact Admin and confirm approval first.",
    cabinEnableCheck: "I want to book the Private Internet Cabin",
    cabinDateLabel: "Required Date *",
    cabinTimeLabel: "Preferred Time Slot (e.g., 10:00 AM - 12:00 PM) *",
    cabinPurposeLabel: "Select Purpose *",
    dockSelected: "Services Selected",
    dockSub: "Ready to dispatch to WhatsApp",
    dockProceed: "Proceed Enquiry",
    modalTitle: "Enter Your Contact Details",
    labelName: "Your Full Name *",
    labelPhone: "Mobile / WhatsApp Number *",
    labelLocation: "Your Location / City *",
    labelExtra: "Additional Notes or Requirements (Optional)",
    repNoticePrimary: "After thoroughly reviewing your requirements, our representative will connect with you via WhatsApp chat.",
    repNoticeSecondary: "Clicking the button below will open the above message directly in our official WhatsApp (+919961850698).",
    sendWaBtn: "Send to WhatsApp Now",
    errFillDetails: "Please enter your Name, Mobile Number, and Location to proceed.",
    postTitle: "Your Service Request is Ready!",
    postDesc: "Please ensure you have pressed 'Send' inside WhatsApp. After reviewing your details, our representative will get back to you on WhatsApp."
  }
};

// --- RENDER DYNAMIC ANNIVERSARY SVG BADGE ---
function renderAnniversarySvg(years) {
  return `
    <svg viewBox="0 0 140 140" width="114" height="114">
      <defs>
        <linearGradient id="goldNeon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff3b0" />
          <stop offset="50%" stop-color="#ffab00" />
          <stop offset="100%" stop-color="#ff6d00" />
        </linearGradient>
        <linearGradient id="cyanRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00f2fe" />
          <stop offset="100%" stop-color="#b535f6" />
        </linearGradient>
      </defs>
      <circle cx="70" cy="70" r="62" fill="none" stroke="url(#cyanRing)" stroke-width="2.5" stroke-dasharray="8 6">
        <animateTransform attributeName="transform" type="rotate" from="0 70 70" to="360 70 70" dur="24s" repeatCount="indefinite"/>
      </circle>
      <polygon points="70,12 120,41 120,99 70,128 20,99 20,41" fill="rgba(10, 16, 34, 0.9)" stroke="url(#goldNeon)" stroke-width="3"/>
      <text x="70" y="68" text-anchor="middle" fill="url(#goldNeon)" font-family="Outfit, sans-serif" font-weight="800" font-size="38">${years}</text>
      <text x="70" y="88" text-anchor="middle" fill="#ffffff" font-family="Outfit, sans-serif" font-weight="700" font-size="10" letter-spacing="2">YEARS OF</text>
      <text x="70" y="102" text-anchor="middle" fill="#00f2fe" font-family="Outfit, sans-serif" font-weight="800" font-size="9" letter-spacing="1.5">EXCELLENCE</text>
    </svg>
  `;
}

// --- INITIALIZATION ---
function initPortal() {
  const cfg = window.NEXIA_CONFIG;
  const yrs = cfg.anniversaryYearCount;

  document.getElementById("gateExpBadge").textContent =
    `ESTABLISHED ${cfg.establishedYear} • ${yrs} YEARS OF EXCELLENCE`;

  const bannerSec = document.getElementById("anniversaryBannerSection");
  if (cfg.showAnniversaryBanner) {
    bannerSec.style.display = "block";
    document.getElementById("annivSvgContainer").innerHTML = renderAnniversarySvg(yrs);
  } else {
    bannerSec.style.display = "none";
  }

  document.getElementById("footerCreditText").textContent = cfg.footerCredit;
  document.getElementById("footerCopyrightText").textContent =
    `Copyright © ${cfg.establishedYear} - ${cfg.currentCopyrightYear} ${cfg.brandName}. All Rights Reserved.`;

  applyTranslations();
}

function selectAppLanguage(lang) {
  setLanguage(lang);
  const gate = document.getElementById("langGateModal");
  gate.style.opacity = "0";
  gate.style.transition = "opacity 0.28s ease";
  setTimeout(() => {
    gate.style.display = "none";
  }, 280);
}

function setLanguage(lang) {
  appState.lang = lang;
  document.getElementById("rockerML").classList.toggle("active", lang === "ml");
  document.getElementById("rockerEN").classList.toggle("active", lang === "en");
  applyTranslations();
}

function applyTranslations() {
  const cfg = window.NEXIA_CONFIG;
  const yrs = cfg.anniversaryYearCount;
  const t = UI_STRINGS[appState.lang];

  document.getElementById("headerExpLine").textContent = t.headerExp(yrs);
  document.getElementById("annivMonthTag").textContent = cfg.anniversaryMonthText[appState.lang];
  document.getElementById("annivHeadline").textContent = t.annivTitle(yrs);
  document.getElementById("annivDescription").textContent = t.annivDesc(yrs, cfg.establishedYear);

  document.getElementById("heroBadgeText").textContent = t.heroBadge;
  document.getElementById("heroQuestionTitle").textContent = t.heroQuestion;
  document.getElementById("heroInstructionSub").textContent = t.heroSub;

  document.getElementById("footerExpTag").textContent = `${yrs}+ Years Experience`;
  document.getElementById("dockSubText").textContent = t.dockSub;
  document.getElementById("dockProceedBtnText").textContent = t.dockProceed;

  document.getElementById("modalHeaderTitle").textContent = t.modalTitle;
  document.getElementById("labelClientName").textContent = t.labelName;
  document.getElementById("labelClientPhone").textContent = t.labelPhone;
  document.getElementById("labelClientLocation").textContent = t.labelLocation;
  document.getElementById("labelCustomNote").textContent = t.labelExtra;
  document.getElementById("repNoticePrimary").textContent = t.repNoticePrimary;
  document.getElementById("repNoticeSecondary").textContent = t.repNoticeSecondary;
  document.getElementById("sendWaBtnLabel").textContent = t.sendWaBtn;

  document.getElementById("postSubmitTitle").textContent = t.postTitle;
  document.getElementById("postSubmitDesc").textContent = t.postDesc;

  renderCategoriesList();
  updateDockCounter();
}

// --- RENDER ALL 14 CATEGORIES ---
function renderCategoriesList() {
  const cfg = window.NEXIA_CONFIG;
  const container = document.getElementById("categoriesContainer");
  const lang = appState.lang;
  const t = UI_STRINGS[lang];

  container.innerHTML = cfg.categories.map((cat) => {
    const isOpen = appState.openCategoryIds.has(cat.id);
    const catCount = getCategorySelectionCount(cat);
    const hasSel = catCount > 0;
    const title = lang === "ml" ? cat.title_ml : cat.title_en;
    const sub = lang === "ml" ? cat.sub_ml : cat.sub_en;

    let bodyHtml = "";

    if (cat.type === "cv_two_step") {
      const regionsHtml = cfg.cvRegions.map((reg) => {
        const isRegSelected = appState.selectedRegion === reg.id;
        const regLabel = lang === "ml" ? reg.ml : reg.en;
        return `
          <button type="button" class="skeuo-region-chip ${isRegSelected ? "selected" : ""}" onclick="selectCvRegion('${reg.id}')">
            <span class="radio-led"></span>
            <span>${regLabel}</span>
          </button>
        `;
      }).join("");

      const cvItemsHtml = cat.items.map((item) => {
        const isChecked = appState.selectedItems.has(item.id);
        const itemLabel = lang === "ml" ? item.ml : item.en;
        return `
          <div class="skeuo-service-tile ${isChecked ? "checked" : ""}" onclick="toggleServiceItem('${item.id}')">
            <div class="tile-led-box">✓</div>
            <span class="tile-label-text">${itemLabel}</span>
          </div>
        `;
      }).join("");

      const otherVal = appState.customCategoryNotes[cat.id] || "";
      const otherPh = lang === "ml" ? cat.otherPlaceholder_ml : cat.otherPlaceholder_en;

      bodyHtml = `
        <div class="step-instruction-bar">${t.cvStep1}</div>
        <div class="region-grid">${regionsHtml}</div>
        <div class="step-instruction-bar">${appState.selectedRegion ? t.cvStep2 : t.cvStep2Locked}</div>
        <div class="service-items-grid">${cvItemsHtml}</div>
        <div class="cat-other-box">
          <label class="cat-other-label">${t.otherLabel}</label>
          <input type="text" class="skeuo-input" value="${escapeHtml(otherVal)}" placeholder="${escapeHtml(otherPh)}" oninput="updateCategoryNote('${cat.id}', this.value)" />
        </div>
      `;
    } else if (cat.type === "standard") {
      const itemsHtml = cat.items.map((item) => {
        const isChecked = appState.selectedItems.has(item.id);
        const itemLabel = lang === "ml" ? item.ml : item.en;
        return `
          <div class="skeuo-service-tile ${isChecked ? "checked" : ""}" onclick="toggleServiceItem('${item.id}')">
            <div class="tile-led-box">✓</div>
            <span class="tile-label-text">${itemLabel}</span>
          </div>
        `;
      }).join("");

      const otherVal = appState.customCategoryNotes[cat.id] || "";
      const otherPh = lang === "ml" ? cat.otherPlaceholder_ml : cat.otherPlaceholder_en;

      bodyHtml = `
        <div class="service-items-grid">${itemsHtml}</div>
        <div class="cat-other-box">
          <label class="cat-other-label">${t.otherLabel}</label>
          <input type="text" class="skeuo-input" value="${escapeHtml(otherVal)}" placeholder="${escapeHtml(otherPh)}" oninput="updateCategoryNote('${cat.id}', this.value)" />
        </div>
      `;
    } else if (cat.type === "custom_only") {
      const otherVal = appState.customCategoryNotes[cat.id] || "";
      const otherPh = lang === "ml" ? cat.otherPlaceholder_ml : cat.otherPlaceholder_en;
      bodyHtml = `
        <div class="cat-other-box" style="margin-top: 10px; border-top: none;">
          <label class="cat-other-label">${t.otherLabel}</label>
          <textarea class="skeuo-textarea" rows="3" placeholder="${escapeHtml(otherPh)}" oninput="updateCategoryNote('${cat.id}', this.value)">${escapeHtml(otherVal)}</textarea>
        </div>
      `;
    } else if (cat.type === "cabin_booking") {
      const cb = appState.cabinBooking;
      bodyHtml = `
        <div class="cabin-warning-banner">
          <span class="cabin-warn-icon">⚠️</span>
          <p class="cabin-warn-text">${t.cabinNotice}</p>
        </div>
        <div class="skeuo-service-tile ${cb.active ? "checked" : ""}" onclick="toggleCabinBooking()" style="margin-bottom: 16px;">
          <div class="tile-led-box">✓</div>
          <span class="tile-label-text">${t.cabinEnableCheck}</span>
        </div>
        <div class="cabin-form-grid">
          <div class="input-field-group">
            <label>${t.cabinDateLabel}</label>
            <input type="date" class="skeuo-input" value="${escapeHtml(cb.date)}" onchange="updateCabinField('date', this.value)" />
          </div>
          <div class="input-field-group">
            <label>${t.cabinTimeLabel}</label>
            <input type="text" class="skeuo-input" placeholder="e.g., 10:30 AM - 12:30 PM" value="${escapeHtml(cb.timeSlot)}" oninput="updateCabinField('timeSlot', this.value)" />
          </div>
          <div class="input-field-group">
            <label>${t.cabinPurposeLabel}</label>
            <select class="skeuo-select" onchange="updateCabinField('purpose', this.value)">
              <option value="Online Exam" ${cb.purpose === "Online Exam" ? "selected" : ""}>Online Exam (ഓൺലൈൻ പരീക്ഷ)</option>
              <option value="Online Interview" ${cb.purpose === "Online Interview" ? "selected" : ""}>Online Interview (ഓൺലൈൻ ഇന്റർവ്യൂ)</option>
              <option value="Other (Requires Admin Approval)" ${cb.purpose === "Other (Requires Admin Approval)" ? "selected" : ""}>Other - Subject to Admin Approval</option>
            </select>
          </div>
        </div>
      `;
    }

    return `
      <article class="liquid-glass cat-card ${isOpen ? "open" : ""} ${hasSel ? "has-selection" : ""}" id="card_${cat.id}">
        <button type="button" class="cat-header-btn" onclick="toggleCategoryAccordion('${cat.id}')">
          <div class="cat-left-cluster">
            <div class="skeuo-num-badge">${cat.num}</div>
            <div>
              <span class="cat-title-main">${title}</span>
              <span class="cat-title-sub">${sub}</span>
            </div>
          </div>
          <div class="cat-right-cluster">
            <span class="cat-count-pill">${catCount} Selected</span>
            <div class="skeuo-chevron">▼</div>
          </div>
        </button>
        <div class="cat-body">${bodyHtml}</div>
      </article>
    `;
  }).join("");
}

function getCategorySelectionCount(cat) {
  let count = 0;
  if (cat.items && cat.items.length) {
    cat.items.forEach((it) => {
      if (appState.selectedItems.has(it.id)) count++;
    });
  }
  if (appState.customCategoryNotes[cat.id] && appState.customCategoryNotes[cat.id].trim() !== "") {
    count++;
  }
  if (cat.type === "cabin_booking") {
    if (appState.cabinBooking.active || appState.cabinBooking.date || appState.cabinBooking.timeSlot) {
      count++;
    }
  }
  return count;
}

function getTotalSelectionsCount() {
  let total = appState.selectedItems.size;
  Object.values(appState.customCategoryNotes).forEach((val) => {
    if (val && val.trim() !== "") total++;
  });
  if (appState.cabinBooking.active || appState.cabinBooking.date || appState.cabinBooking.timeSlot) {
    total++;
  }
  return total;
}

function toggleCategoryAccordion(catId) {
  if (appState.openCategoryIds.has(catId)) {
    appState.openCategoryIds.delete(catId);
  } else {
    appState.openCategoryIds.add(catId);
  }
  renderCategoriesList();
}

function selectCvRegion(regId) {
  appState.selectedRegion = appState.selectedRegion === regId ? null : regId;
  renderCategoriesList();
  updateDockCounter();
}

function toggleServiceItem(itemId) {
  if (appState.selectedItems.has(itemId)) {
    appState.selectedItems.delete(itemId);
  } else {
    appState.selectedItems.add(itemId);
  }
  renderCategoriesList();
  updateDockCounter();
}

function updateCategoryNote(catId, value) {
  appState.customCategoryNotes[catId] = value;
  const card = document.getElementById(`card_${catId}`);
  const catObj = window.NEXIA_CONFIG.categories.find((c) => c.id === catId);
  if (card && catObj) {
    const c = getCategorySelectionCount(catObj);
    card.classList.toggle("has-selection", c > 0);
    const pill = card.querySelector(".cat-count-pill");
    if (pill) pill.textContent = `${c} Selected`;
  }
  updateDockCounter();
}

function toggleCabinBooking() {
  appState.cabinBooking.active = !appState.cabinBooking.active;
  renderCategoriesList();
  updateDockCounter();
}

function updateCabinField(field, val) {
  appState.cabinBooking[field] = val;
  if (val && val.trim() !== "") {
    appState.cabinBooking.active = true;
  }
  updateDockCounter();
}

function updateDockCounter() {
  const total = getTotalSelectionsCount();
  const dock = document.getElementById("selectionDock");
  const orb = document.getElementById("selectedCounterOrb");
  const t = UI_STRINGS[appState.lang];

  orb.textContent = total;
  document.getElementById("dockTitleText").textContent =
    appState.lang === "ml" ? `${total} ${t.dockSelected}` : `${total} ${t.dockSelected}`;

  if (total > 0) {
    dock.classList.add("visible");
  } else {
    dock.classList.remove("visible");
  }
}

function clearAllSelections() {
  appState.selectedRegion = null;
  appState.selectedItems.clear();
  appState.customCategoryNotes = {};
  appState.cabinBooking = { active: false, date: "", timeSlot: "", purpose: "Online Exam" };
  renderCategoriesList();
  updateDockCounter();
}

// --- CHECKOUT & LIVE WHATSAPP PREVIEW ---
function openCheckoutModal() {
  document.getElementById("formErrorBanner").style.display = "none";
  document.getElementById("checkoutModal").style.display = "flex";
  refreshWhatsAppPreview();
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").style.display = "none";
}

function detectClientLocation() {
  const locInput = document.getElementById("clientLocationInput");
  const btn = document.getElementById("geoDetectBtn");
  if (!navigator.geolocation) {
    locInput.placeholder = "Please type your location manually";
    return;
  }
  btn.textContent = "⏳ Locating...";
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await res.json();
        const city = data.address.city || data.address.town || data.address.village || data.address.suburb || "";
        const state = data.address.state || "";
        locInput.value = [city, state].filter(Boolean).join(", ") || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      } catch (e) {
        locInput.value = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
      }
      btn.textContent = "📍 Auto-Locate";
      refreshWhatsAppPreview();
    },
    () => {
      btn.textContent = "📍 Auto-Locate";
      locInput.focus();
    }
  );
}

function buildWhatsAppMessageText() {
  const cfg = window.NEXIA_CONFIG;
  const name = document.getElementById("clientNameInput").value.trim() || "[Your Name]";
  const phone = document.getElementById("clientPhoneInput").value.trim() || "[Mobile Number]";
  const loc = document.getElementById("clientLocationInput").value.trim() || "[Location]";
  const extra = document.getElementById("clientCustomNote").value.trim();

  let lines = [];
  lines.push(`*NEXIA VIRTUAL DESK - SERVICE ENQUIRY*`);
  lines.push(`Ref ID: ${appState.enquiryRefId}`);
  lines.push(`----------------------------------`);
  lines.push(`*Name:* ${name}`);
  lines.push(`*Mobile:* ${phone}`);
  lines.push(`*Location:* ${loc}`);
  lines.push(`----------------------------------`);
  lines.push(`*SELECTED SERVICES:*`);

  if (appState.selectedRegion) {
    const regObj = cfg.cvRegions.find((r) => r.id === appState.selectedRegion);
    if (regObj) {
      lines.push(`• *Target CV Region:* ${regObj.en}`);
    }
  }

  cfg.categories.forEach((cat) => {
    const chosenInCat = [];
    if (cat.items && cat.items.length) {
      cat.items.forEach((it) => {
        if (appState.selectedItems.has(it.id)) {
          chosenInCat.push(it.en);
        }
      });
    }
    const customNote = (appState.customCategoryNotes[cat.id] || "").trim();

    if (chosenInCat.length > 0 || customNote) {
      lines.push(`\n*[${cat.num}] ${cat.title_en}:*`);
      chosenInCat.forEach((itemTitle) => {
        lines.push(`  - ${itemTitle}`);
      });
      if (customNote) {
        lines.push(`  - *Specified Requirement:* ${customNote}`);
      }
    }
  });

  if (appState.cabinBooking.active || appState.cabinBooking.date || appState.cabinBooking.timeSlot) {
    lines.push(`\n*[14] Private Internet Cabin Booking:*`);
    lines.push(`  - *Purpose:* ${appState.cabinBooking.purpose}`);
    lines.push(`  - *Required Date:* ${appState.cabinBooking.date || "Not specified"}`);
    lines.push(`  - *Preferred Time:* ${appState.cabinBooking.timeSlot || "Not specified"}`);
  }

  if (extra) {
    lines.push(`\n*Additional Client Note:* ${extra}`);
  }

  lines.push(`----------------------------------`);
  lines.push(`Please review my requirements and connect with me.`);
  return lines.join("\n");
}

function refreshWhatsAppPreview() {
  const previewEl = document.getElementById("waMessagePreviewText");
  if (previewEl) {
    previewEl.textContent = buildWhatsAppMessageText();
  }
}

function dispatchToWhatsApp() {
  const name = document.getElementById("clientNameInput").value.trim();
  const phone = document.getElementById("clientPhoneInput").value.trim();
  const loc = document.getElementById("clientLocationInput").value.trim();
  const errEl = document.getElementById("formErrorBanner");
  const t = UI_STRINGS[appState.lang];

  if (!name || !phone || !loc) {
    errEl.textContent = t.errFillDetails;
    errEl.style.display = "block";
    return;
  }

  errEl.style.display = "none";
  const msg = buildWhatsAppMessageText();
  const waNum = window.NEXIA_CONFIG.whatsappNumber;
  const waUrl = `https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`;
  appState.lastGeneratedWaUrl = waUrl;

  window.open(waUrl, "_blank", "noopener,noreferrer");

  document.getElementById("checkoutModal").style.display = "none";
  document.getElementById("postSubmitRefBadge").textContent = `ENQUIRY REF: ${appState.enquiryRefId}`;
  document.getElementById("postSubmitModal").style.display = "flex";
}

function retriggerWhatsAppLink() {
  if (appState.lastGeneratedWaUrl) {
    window.open(appState.lastGeneratedWaUrl, "_blank", "noopener,noreferrer");
  }
}

function terminatePortalSession() {
  window.close();
  document.body.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;background:#060913;color:#f1f5f9;font-family:'Plus Jakarta Sans','Noto Sans Malayalam',sans-serif;">
      <div style="max-width:460px;padding:36px 28px;border-radius:26px;background:rgba(16,24,45,0.75);border:1px solid rgba(0,242,254,0.35);box-shadow:0 20px 50px rgba(0,0,0,0.7);">
        <div style="font-size:2.6rem;margin-bottom:12px;">✨</div>
        <h2 style="font-size:1.4rem;margin-bottom:10px;color:#00f2fe;">Thank You • നന്ദി!</h2>
        <p style="font-size:0.92rem;color:#cbd5e1;margin-bottom:16px;">
          താങ്കളുടെ അപേക്ഷാ വിവരങ്ങൾ വാട്സ്ആപ്പിലേക്ക് കൈമാറിയിട്ടുണ്ട്. ഞങ്ങളുടെ പ്രതിനിധി വിവരങ്ങൾ പരിശോധിച്ച ശേഷം താങ്കളുമായി വാട്സ്ആപ്പിൽ ബന്ധപ്പെടുന്നതാണ്.
        </p>
        <p style="font-size:0.78rem;color:#64748b;">You may now safely close this browser tab.</p>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

window.addEventListener("DOMContentLoaded", initPortal);