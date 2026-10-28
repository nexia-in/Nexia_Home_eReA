// ============================================================================
// FILE: content.js
// NEXIA VIRTUAL DESK - MASTER CONFIGURATION & SERVICE CATALOG
// ഭാവിയിൽ വാർഷിക നമ്പർ മാറ്റാനും സർവീസുകൾ എഡിറ്റ് ചെയ്യാനും ഈ ഫയൽ മാത്രം മാറ്റിയാൽ മതി.
// ============================================================================

window.NEXIA_CONFIG = {
  // --- ANNIVERSARY & EXPERIENCE CONTROL ---
  showAnniversaryBanner: true,     // ബാനർ ഓഫ് ചെയ്യാൻ false എന്ന് മാറ്റുക
  anniversaryYearCount: 17,        // അടുത്ത വർഷം ഇത് 18 എന്ന് മാറ്റിയാൽ എല്ലായിടത്തും തനിയെ മാറും
  establishedYear: 2009,
  currentCopyrightYear: 2026,
  anniversaryMonthText: {
    en: "NOVEMBER SPECIAL EDITION",
    ml: "നവംബർ വാർഷികപ്പതിപ്പ്"
  },

  // --- WHATSAPP & BRAND DETAILS ---
  whatsappNumber: "919961850698",
  brandName: "NEXIA VIRTUAL DESK",
  footerCredit: "Created by Nexia Tech | Nexia Virtual Desk",

  // --- TARGET REGIONS FOR CATEGORY 1 (2-STEP CV CREATION) ---
  cvRegions: [
    { id: "reg_india", en: "India Only (Local & National)", ml: "ഇന്ത്യയിലേക്ക് മാത്രം (ലോക്കൽ & നാഷണൽ)" },
    { id: "reg_india_intl", en: "India & International", ml: "ഇന്ത്യയും വിദേശ രാജ്യങ്ങളും" },
    { id: "reg_gcc", en: "UAE & Arab / GCC Countries", ml: "യുഎഇ / അറബ് (ഗൾഫ്) രാജ്യങ്ങൾ" },
    { id: "reg_europass", en: "Europass Standard Region", ml: "യൂറോപാസ് മേഖല (Europass)" },
    { id: "reg_eu", en: "European Union (EU / UK / Schengen)", ml: "യൂറോപ്യൻ യൂണിയൻ (EU / UK)" },
    { id: "reg_global", en: "USA / Canada / Australia / Worldwide", ml: "മറ്റ് വിദേശ രാജ്യങ്ങൾ (Worldwide)" }
  ],

  // --- ALL 14 SERVICE CATEGORIES ---
  categories: [
    {
      id: "cat_1_cv",
      num: "01",
      type: "cv_two_step",
      title_en: "Global CV, Resume & Biodata Creation",
      title_ml: "സിവി, റെസ്യൂമെ, ബയോഡാറ്റ നിർമ്മാണം",
      sub_en: "Step 1: Choose Target Region -> Step 2: Select CV Class",
      sub_ml: "ആദ്യം സിവി നൽകുന്ന മേഖല തിരഞ്ഞെടുക്കുക, തുടർന്ന് സിവി വിഭാഗം തിരഞ്ഞെടുക്കുക",
      otherPlaceholder_en: "Specify any other CV / Resume requirement...",
      otherPlaceholder_ml: "മറ്റ് സിവി ആവശ്യങ്ങൾ ഇവിടെ എഴുതുക...",
      items: [
        { id: "cv_ats_full", en: "Fully ATS Friendly CV (International Standard)", ml: "ഫുള്ളി എ.ടി.എസ് സിവി (Fully ATS CV)" },
        { id: "cv_europass", en: "Official Europass CV Format", ml: "യൂറോപാസ് സിവി (Europass CV)" },
        { id: "cv_semi_graph", en: "Semi-Graphical ATS CV", ml: "സെമി ഗ്രാഫിക്കൽ എ.ടി.എസ് സിവി (Semi-Graphical ATS CV)" },
        { id: "cv_full_graph", en: "Fully Graphical Executive CV", ml: "ഫുള്ളി ഗ്രാഫിക്കൽ സിവി (Fully Graphical CV)" },
        { id: "cv_classic", en: "Classic Professional Resume", ml: "ക്ലാസിക് റെസ്യൂമെ (Classic Resume)" },
        { id: "cv_cover", en: "Tailored Cover Letter", ml: "കവർ ലെറ്റർ (Cover Letter)" },
        { id: "cv_biodata", en: "Standard / Marriage Bio-data", ml: "സാധാരണ / വിവാഹ ബയോഡാറ്റ (Bio-data)" },
        { id: "cv_portfolio", en: "Digital & PDF Career Portfolio", ml: "പ്രൊഫഷണൽ പോർട്ട്ഫോളിയോ (Portfolio)" }
      ]
    },
    {
      id: "cat_2_profiles",
      num: "02",
      type: "standard",
      title_en: "Online Career Profile Creation (LinkedIn & Global)",
      title_ml: "ഓൺലൈൻ തൊഴിൽ പ്രൊഫൈൽ നിർമ്മാണം (LinkedIn മുതലായവ)",
      sub_en: "Verified global job portal profiles & optimization",
      sub_ml: "വിദേശത്തും സ്വദേശത്തും ജോലി ലഭിക്കാൻ സഹായിക്കുന്ന ഓൺലൈൻ പ്രൊഫൈലുകൾ",
      otherPlaceholder_en: "Type any other job portal profile you need...",
      otherPlaceholder_ml: "മറ്റ് പ്രൊഫൈൽ സേവനങ്ങൾ ആവശ്യമുണ്ടെങ്കിൽ ഇവിടെ എഴുതുക...",
      items: [
        { id: "pr_linkedin", en: "LinkedIn Profile Creation & SEO Optimization", ml: "ലിങ്ക്ഡ്ഇൻ പ്രൊഫൈൽ ഒപ്റ്റിമൈസേഷൻ (LinkedIn)" },
        { id: "pr_indeed", en: "Indeed Worldwide Account Setup", ml: "ഇൻഡീഡ് വേൾഡ് വൈഡ് അക്കൗണ്ട് (Indeed Worldwide)" },
        { id: "pr_glassdoor", en: "Glassdoor Verified Profile", ml: "ഗ്ലാസ്ഡോർ പ്രൊഫൈൽ (Glassdoor Profile)" },
        { id: "pr_xing", en: "XING Profile (Germany / Austria / Switzerland)", ml: "സിംഗ് പ്രൊഫൈൽ (XING - Germany/Austria/Switzerland)" },
        { id: "pr_bayt", en: "Bayt & Naukrigulf Profiles (Middle East / GCC)", ml: "ബെയ്റ്റ് & നൗക്രിഗൾഫ് പ്രൊഫൈലുകൾ (Bayt & Naukrigulf - GCC)" },
        { id: "pr_eures", en: "EURES & Eurojobs Accounts (European Union)", ml: "യൂറോപ്യൻ യൂണിയൻ പ്രൊഫൈലുകൾ (EURES & Eurojobs)" },
        { id: "pr_upwork", en: "Upwork / Fiverr Freelance Specialist Profile", ml: "അപ്‌വർക്ക് സ്പെഷ്യലിസ്റ്റ് പ്രൊഫൈൽ (Upwork Profile)" },
        { id: "pr_flexjobs", en: "FlexJobs & We Work Remotely Alerts Setup", ml: "റിമോട്ട് ജോബ് പ്രൊഫൈലുകൾ (FlexJobs & We Work Remotely)" },
        { id: "pr_wellfound", en: "Wellfound (AngelList Talent) Startup Profile", ml: "വെൽഫൗണ്ട് അക്കൗണ്ട് (Wellfound Account)" },
        { id: "pr_dice", en: "Dice Tech & IT Career Profile", ml: "ഡൈസ് ഐ.ടി പ്രൊഫൈൽ (Dice Profile)" },
        { id: "pr_naukri", en: "Naukri.com / Foundit (Monster) India Profile", ml: "നൗക്രി / ഫൗണ്ടിറ്റ് പ്രൊഫൈലുകൾ (Naukri / Foundit)" }
      ]
    },
    {
      id: "cat_3_kerala_jobs",
      num: "03",
      type: "standard",
      title_en: "Kerala Government Job Applications",
      title_ml: "കേരള സർക്കാർ തൊഴിൽ അന്വേഷണങ്ങൾ & അപേക്ഷകൾ",
      sub_en: "e.g., Kerala PSC, Devaswom Board, High Court, KSEB, KTDC etc.",
      sub_ml: "ഉദാ: PSC, ദേവസ്വം ബോർഡ്, ഹൈക്കോടതി, മറ്റ് കേരള സർക്കാർ ഒഴിവുകൾ",
      otherPlaceholder_en: "Write the Kerala Govt job you want to apply for...",
      otherPlaceholder_ml: "താങ്കൾക്ക് അപേക്ഷിക്കേണ്ട കേരള സർക്കാർ ജോലി ഇവിടെ എഴുതുക...",
      items: [
        { id: "kj_psc_otr", en: "Kerala PSC One Time Registration & Renewal", ml: "കേരള പി.എസ്.സി വൺ ടൈം രജിസ്ട്രേഷൻ & പുതുക്കൽ" },
        { id: "kj_psc_exam", en: "Kerala PSC Exam Applications & Confirmation", ml: "പി.എസ്.സി പരീക്ഷാ അപേക്ഷകളും കൺഫർമേഷനും" },
        { id: "kj_devaswom", en: "Kerala Devaswom Recruitment Board (KDRB)", ml: "കേരള ദേവസ്വം റിക്രൂട്ട്മെന്റ് ബോർഡ് അപേക്ഷകൾ" },
        { id: "kj_highcourt", en: "High Court of Kerala & Judicial Recruitment", ml: "കേരള ഹൈക്കോടതി തൊഴിൽ അപേക്ഷകൾ" },
        { id: "kj_psu", en: "Kerala State PSUs / Boards / Corporations", ml: "മറ്റ് കേരള സർക്കാർ ബോർഡുകൾ / കോർപ്പറേഷനുകൾ" }
      ]
    },
    {
      id: "cat_4_central_jobs",
      num: "04",
      type: "standard",
      title_en: "Central Government & Defense Job Applications",
      title_ml: "കേന്ദ്ര സർക്കാർ തൊഴിൽ അന്വേഷണങ്ങൾ & അപേക്ഷകൾ",
      sub_en: "e.g., SSC, UPSC, Railway (RRB), Indian Coast Guard, Army, Banking etc.",
      sub_ml: "ഉദാ: SSC, UPSC, റെയിൽവേ, കോസ്റ്റ് ഗാർഡ്, ആർമി, ബാങ്കിംഗ് മുതലായവ",
      otherPlaceholder_en: "Write the Central Govt / Defense job you need...",
      otherPlaceholder_ml: "താങ്കൾക്ക് അപേക്ഷിക്കേണ്ട കേന്ദ്ര സർക്കാർ ജോലി ഇവിടെ എഴുതുക...",
      items: [
        { id: "cj_ssc", en: "SSC Applications (CGL, CHSL, MTS, GD Constable)", ml: "എസ്.എസ്.സി അപേക്ഷകൾ (SSC CGL, CHSL, MTS, GD)" },
        { id: "cj_defense", en: "Indian Coast Guard, Army (Agniveer), Navy & Airforce", ml: "ഇന്ത്യൻ കോസ്റ്റ് ഗാർഡ്, ആർമി, നേവി, എയർഫോഴ്സ്" },
        { id: "cj_railway", en: "Railway Recruitment Board (RRB NTPC, Group D, ALP)", ml: "റെയിൽവേ റിക്രൂട്ട്മെന്റ് ബോർഡ് (RRB) അപേക്ഷകൾ" },
        { id: "cj_upsc", en: "UPSC Civil Services, NDA, CDS & CAPF Exams", ml: "യു.പി.എസ്.സി (UPSC) പരീക്ഷാ അപേക്ഷകൾ" },
        { id: "cj_bank", en: "IBPS, SBI, RBI & Nationalized Bank Recruitments", ml: "ബാങ്കിംഗ് തൊഴിൽ അപേക്ഷകൾ (IBPS / SBI / RBI)" },
        { id: "cj_post", en: "India Post GDS & Central PSU Recruitments", ml: "പോസ്റ്റ് ഓഫീസ് (GDS) & മറ്റ് കേന്ദ്ര പൊതുമേഖലാ അപേക്ഷകൾ" }
      ]
    },
    {
      id: "cat_5_kerala_certs",
      num: "05",
      type: "standard",
      title_en: "Kerala Government Certificate Services",
      title_ml: "കേരള സർക്കാർ സർട്ടിഫിക്കറ്റ് സേവനങ്ങൾ",
      sub_en: "e.g., Encumbrance (EC), Family Membership, Legal Heirship, Income, Caste etc.",
      sub_ml: "ഉദാ: കുടിക്കട സർട്ടിഫിക്കറ്റ്, ഫാമിലി സർട്ടിഫിക്കറ്റ്, ലീഗൽ ഹയർഷിപ്പ് മുതലായവ",
      otherPlaceholder_en: "Which certificate do you need? Write here...",
      otherPlaceholder_ml: "ഏത് സർട്ടിഫിക്കറ്റ് ആണ് താങ്കൾക്ക് വേണ്ടത്? ഇവിടെ എഴുതുക...",
      items: [
        { id: "kc_ec", en: "Encumbrance Certificate (EC / Kudikkada Certificate)", ml: "കുടിക്കട സർട്ടിഫിക്കറ്റ് (Encumbrance Certificate - EC)" },
        { id: "kc_family", en: "Family Membership Certificate", ml: "ഫാമിലി മെമ്പർഷിപ്പ് സർട്ടിഫിക്കറ്റ് (Family Certificate)" },
        { id: "kc_heir", en: "Legal Heirship Certificate", ml: "അനന്തരാവകാശ സർട്ടിഫിക്കറ്റ് (Legal Heirship Certificate)" },
        { id: "kc_income", en: "Income Certificate (e-District)", ml: "വരുമാന സർട്ടിഫിക്കറ്റ് (Income Certificate)" },
        { id: "kc_caste", en: "Caste / Community / Non-Creamy Layer Certificate", ml: "ജാതി / കമ്മ്യൂണിറ്റി / നോൺ-ക്രീമിലെയർ സർട്ടിഫിക്കറ്റ്" },
        { id: "kc_nativity", en: "Nativity / Domicile / Residence Certificate", ml: "നേറ്റിവിറ്റി / ഡൊമിസൈൽ സർട്ടിഫിക്കറ്റ് (Nativity)" },
        { id: "kc_possession", en: "Possession Certificate & Location Sketch", ml: "കൈവശാവകാശ സർട്ടിഫിക്കറ്റ് & ലൊക്കേഷൻ സ്കെച്ച്" },
        { id: "kc_ksmart_bmd", en: "Birth / Death / Marriage Certificates (K-SMART)", ml: "ജനന / മരണ / വിവാഹ സർട്ടിഫിക്കറ്റുകൾ (K-SMART)" },
        { id: "kc_onesame", en: "One and the Same Certificate", ml: "വൺ ആൻഡ് ദി സെയിം സർട്ടിഫിക്കറ്റ് (One and the Same)" },
        { id: "kc_life", en: "Jeevan Pramaan (Digital Life Certificate for Pensioners)", ml: "ലൈഫ് സർട്ടിഫിക്കറ്റ് - ജീവൻ പ്രമാൺ (പെൻഷൻകാർക്ക്)" }
      ]
    },
    {
      id: "cat_6_kerala_biz",
      num: "06",
      type: "standard",
      title_en: "Kerala Govt Business & Non-Business Registrations",
      title_ml: "കേരള സർക്കാർ ബിസിനസ്സ് & ഇതര രജിസ്ട്രേഷനുകൾ",
      sub_en: "e.g., Shop & Trade License (K-SMART), Labour Registration, K-SWIFT, Land Tax etc.",
      sub_ml: "ഉദാ: പഞ്ചായത്ത്/മുൻസിപ്പാലിറ്റി ഷോപ്പ് ലൈസൻസ്, തൊഴിൽ വകുപ്പ് രജിസ്ട്രേഷൻ മുതലായവ",
      otherPlaceholder_en: "Specify your Kerala registration / license requirement...",
      otherPlaceholder_ml: "കേരള സർക്കാർ സംബന്ധമായ മറ്റ് രജിസ്ട്രേഷൻ ആവശ്യങ്ങൾ ഇവിടെ എഴുതുക...",
      items: [
        { id: "kb_ksmart_trade", en: "Panchayat / Municipality Trade & Shop License (K-SMART)", ml: "പഞ്ചായത്ത് / മുൻസിപ്പാലിറ്റി ഷോപ്പ് & ബിസിനസ്സ് ലൈസൻസ് (K-SMART)" },
        { id: "kb_labour", en: "Kerala Labour Dept (Shops & Commercial Establishments)", ml: "തൊഴിൽ വകുപ്പ് രജിസ്ട്രേഷൻ (Labour Registration)" },
        { id: "kb_kswift", en: "K-SWIFT Industrial Single Window Clearance", ml: "കെ-സ്വിഫ്റ്റ് ബിസിനസ്സ് അനുമതികൾ (K-SWIFT)" },
        { id: "kb_pcb", en: "Kerala Pollution Control Board (PCB) Consent", ml: "മലിനീകരണ നിയന്ത്രണ ബോർഡ് (PCB) രജിസ്ട്രേഷൻ" },
        { id: "kb_rev_tax", en: "Online Land Tax, Building Tax & Mutation (Pokkuvaravu)", ml: "ഭൂനികുതി, കെട്ടിടനികുതി, പോക്കുവരവ് സേവനങ്ങൾ" }
      ]
    },
    {
      id: "cat_7_central_biz",
      num: "07",
      type: "standard",
      title_en: "Central Govt Business & Statutory Registrations",
      title_ml: "കേന്ദ്ര സർക്കാർ ബിസിനസ്സ് & ഇതര രജിസ്ട്രേഷനുകൾ",
      sub_en: "e.g., FSSAI Food License, MSME (Udyam), GeM Portal, Import Export Code etc.",
      sub_ml: "ഉദാ: FSSAI ഫുഡ് ലൈസൻസ്, MSME ഉദ്യം, GeM പോർട്ടൽ, GST മുതലായവ",
      otherPlaceholder_en: "Specify any other Central Govt registration...",
      otherPlaceholder_ml: "മറ്റ് കേന്ദ്ര സർക്കാർ രജിസ്ട്രേഷൻ ആവശ്യങ്ങൾ ഇവിടെ എഴുതുക...",
      items: [
        { id: "cb_msme", en: "MSME / Udyam Enterprise Registration & Certificate", ml: "എം.എസ്.എം.ഇ / ഉദ്യം രജിസ്ട്രേഷൻ (MSME Udyam)" },
        { id: "cb_fssai", en: "FSSAI Food Safety Registration & State/Central License", ml: "എഫ്.എസ്.എസ്.എ.ഐ ഫുഡ് ലൈസൻസ് (FSSAI Registration)" },
        { id: "cb_gem", en: "GeM (Government e-Marketplace) Seller & OEM Onboarding", ml: "ജെം പോർട്ടൽ രജിസ്ട്രേഷൻ (GeM Portal Registration)" },
        { id: "cb_iec", en: "DGFT Import Export Code (IEC) Registration", ml: "ഇംപോർട്ട് എക്സ്പോർട്ട് കോഡ് (IEC Registration)" },
        { id: "cb_epfo", en: "EPFO / ESIC / Shram Suvidha & UAN Services", ml: "ഇ.പി.എഫ് (PF) / യു.എ.എൻ / ഇ.എസ്.ഐ സേവനങ്ങൾ" }
      ]
    },
    {
      id: "cat_8_central_edu",
      num: "08",
      type: "standard",
      title_en: "Central Govt / Out-of-Kerala Education Applications",
      title_ml: "കേന്ദ്ര സർക്കാർ / കേരളത്തിന് പുറത്തുള്ള വിദ്യാഭ്യാസ പദ്ധതി അപേക്ഷകൾ",
      sub_en: "e.g., IGNOU, CUET, NEET, JEE, National Scholarship (NSP), Interstate Universities",
      sub_ml: "ഉദാ: IGNOU, CUET, NEET, JEE, നാഷണൽ സ്കോളർഷിപ്പ്, ഇതര സംസ്ഥാന യൂണിവേഴ്സിറ്റികൾ",
      otherPlaceholder_en: "Specify Central / Out-of-State course or university...",
      otherPlaceholder_ml: "മറ്റ് കേന്ദ്ര / ഇതര സംസ്ഥാന വിദ്യാഭ്യാസ അപേക്ഷകൾ ഇവിടെ എഴുതുക...",
      items: [
        { id: "ce_ignou", en: "IGNOU Admission, Re-Registration & Exam Form", ml: "ഇന്ദിരാഗാന്ധി ഓപ്പൺ യൂണിവേഴ്സിറ്റി (IGNOU) അപേക്ഷകൾ" },
        { id: "ce_cuet", en: "CUET (UG / PG) Central Universities Entrance", ml: "കേന്ദ്ര യൂണിവേഴ്സിറ്റി പ്രവേശന പരീക്ഷ (CUET UG/PG)" },
        { id: "ce_neet_jee", en: "NEET, JEE Main, UGC-NET, CSIR-NET & GATE Applications", ml: "NEET, JEE, UGC-NET, GATE പ്രവേശന പരീക്ഷാ അപേക്ഷകൾ" },
        { id: "ce_nsp", en: "National Scholarship Portal (NSP) Applications", ml: "നാഷണൽ സ്കോളർഷിപ്പ് പോർട്ടൽ (NSP) അപേക്ഷകൾ" },
        { id: "ce_other_uni", en: "Out-of-Kerala Universities Admission & Verification", ml: "കേരളത്തിന് പുറത്തുള്ള മറ്റ് യൂണിവേഴ്സിറ്റി അഡ്മിഷനുകൾ" }
      ]
    },
    {
      id: "cat_9_kerala_edu",
      num: "09",
      type: "standard",
      title_en: "Kerala Govt / Inside-Kerala Education & Scholarships",
      title_ml: "കേരള സർക്കാർ / കേരളത്തിനകത്തുള്ള വിദ്യാഭ്യാസ പദ്ധതി അപേക്ഷകൾ",
      sub_en: "e.g., Plus One Single Window, KEAM, Calicut/Kerala/MG University, E-Grantz etc.",
      sub_ml: "ഉദാ: പ്ലസ് വൺ ഏകജാലകം, KEAM, യൂണിവേഴ്സിറ്റി അഡ്മിഷനുകൾ, സ്കോളർഷിപ്പുകൾ",
      otherPlaceholder_en: "Specify Kerala admission, university or scholarship...",
      otherPlaceholder_ml: "കേരളത്തിലെ മറ്റ് അഡ്മിഷൻ / സ്കോളർഷിപ്പ് ആവശ്യങ്ങൾ ഇവിടെ എഴുതുക...",
      items: [
        { id: "ke_plusone", en: "Plus One Single Window (HSCAP) & VHSE Admission", ml: "പ്ലസ് വൺ ഏകജാലക അഡ്മിഷൻ (HSCAP)" },
        { id: "ke_keam", en: "KEAM Engineering / Pharmacy / Medical & Option Registration", ml: "കീം (KEAM) അപേക്ഷയും ഓപ്ഷൻ രജിസ്ട്രേഷനും" },
        { id: "ke_uni", en: "Calicut, Kerala, MG, Kannur University UG/PG Admissions", ml: "കാലിക്കറ്റ്, കേരള, എം.ജി, കണ്ണൂർ യൂണിവേഴ്സിറ്റി അഡ്മിഷനുകൾ" },
        { id: "ke_lbs", en: "LBS Nursing, Paramedical & Polytechnic Admissions", ml: "എൽ.ബി.എസ് (LBS) നഴ്സിംഗ്, പാരാമെഡിക്കൽ & പോളിടെക്നിക്" },
        { id: "ke_scholarship", en: "E-Grantz, Minority & State Scholarship Applications", ml: "ഇ-ഗ്രാന്റ്സ് (E-Grantz) & മറ്റ് സംസ്ഥാന സ്കോളർഷിപ്പുകൾ" }
      ]
    },
    {
      id: "cat_10_passport_id",
      num: "10",
      type: "standard",
      title_en: "Passport, Driving License & Citizen ID Services",
      title_ml: "പാസ്പോർട്ട്, ഡ്രൈവിംഗ് ലൈസൻസ് മുതലായ സർവീസുകൾ",
      sub_en: "e.g., Fresh/Renewal Passport, PCC, Parivahan Driving License, PAN Card, Voter ID",
      sub_ml: "ഉദാ: പാസ്പോർട്ട്, PCC, ഡ്രൈവിംഗ് ലൈസൻസ്, പാൻ കാർഡ്, വോട്ടർ ഐഡി മുതലായവ",
      otherPlaceholder_en: "Specify any other ID card or Travel service...",
      otherPlaceholder_ml: "മറ്റ് ഐ.ഡി കാർഡ് / പാസ്പോർട്ട് സേവനങ്ങൾ ഇവിടെ എഴുതുക...",
      items: [
        { id: "id_passport", en: "Fresh Passport, Re-issue / Renewal & Tatkal Appointments", ml: "പുതിയ പാസ്പോർട്ട് / പുതുക്കൽ / തത്കാൽ അപേക്ഷകൾ" },
        { id: "id_pcc", en: "Police Clearance Certificate (PCC - Passport Seva & Thuna)", ml: "പോലീസ് ക്ലിയറൻസ് സർട്ടിഫിക്കറ്റ് (PCC)" },
        { id: "id_dl", en: "Driving License (Learner's, Renewal, Address Change - Parivahan)", ml: "ഡ്രൈവിംഗ് ലൈസൻസ് സേവനങ്ങൾ (പുതുക്കൽ, ലേണേഴ്സ്, അഡ്രസ്സ് മാറ്റം)" },
        { id: "id_pan", en: "New PAN Card & PAN Correction (As per Aadhaar)", ml: "പുതിയ പാൻ കാർഡ് & തെറ്റുതിരുത്തൽ (PAN Card Services)" },
        { id: "id_voter", en: "Voter ID Registration, Correction & PVC Card Order", ml: "വോട്ടർ ഐഡി രജിസ്ട്രേഷനും തിരുത്തലുകളും" }
      ]
    },
    {
      id: "cat_11_insurance",
      num: "11",
      type: "standard",
      title_en: "Vehicle Insurance & RC Related Services",
      title_ml: "വാഹന ഇൻഷുറൻസ് & അനുബന്ധ സർവീസുകൾ",
      sub_en: "Authorized PBP Partner - Instant Two-Wheeler, Four-Wheeler & Commercial Policies",
      sub_ml: "അംഗീകൃത PBP പാർട്ണർ - ഇരുചക്ര, നാലുചക്ര വാഹന ഇൻഷുറൻസും ആർ.സി സേവനങ്ങളും",
      otherPlaceholder_en: "Enter Vehicle Number or specific insurance need...",
      otherPlaceholder_ml: "വാഹന നമ്പറോ മറ്റ് ഇൻഷുറൻസ് വിവരങ്ങളോ ഇവിടെ എഴുതുക...",
      items: [
        { id: "ins_2w", en: "Two-Wheeler Insurance (Full Cover / Third Party)", ml: "ഇരുചക്ര വാഹന ഇൻഷുറൻസ് (Two-Wheeler Insurance)" },
        { id: "ins_4w", en: "Four-Wheeler / Private Car Insurance", ml: "നാലുചക്ര വാഹന ഇൻഷുറൻസ് (Car Insurance)" },
        { id: "ins_comm", en: "Commercial / Goods / Passenger Vehicle Insurance", ml: "ടാക്സി / ഗുഡ്സ് / കൊമേഴ്സ്യൽ വാഹന ഇൻഷുറൻസ്" },
        { id: "ins_rc", en: "RC Ownership Transfer, Hypothecation & Tax Services", ml: "ആർ.സി ഉടമസ്ഥാവകാശം മാറ്റൽ, ലോൺ ക്ലിയറൻസ് & ടാക്സ്" }
      ]
    },
    {
      id: "cat_12_print_media",
      num: "12",
      type: "standard",
      title_en: "Printing, Documentation, Designing & Data Recovery",
      title_ml: "പ്രിന്റ്, ഡോക്യുമെന്റേഷൻ, ഡിസൈനിംഗ് & ഡാറ്റാ സർവീസുകൾ",
      sub_en: "Album Printing, Project Work, Graphic Design, CD Writing, CD to Pendrive Recovery",
      sub_ml: "പ്രിന്റിംഗ്, പ്രോജക്റ്റ് നിർമ്മാണം, ഡിജിറ്റൽ ഡിസൈനിംഗ്, സിഡി റൈറ്റിംഗ്, സിഡി ടു പെൻഡ്രൈവ്",
      otherPlaceholder_en: "Describe your printing, design or data recovery work...",
      otherPlaceholder_ml: "പ്രിന്റിംഗ്, ഡിസൈനിംഗ് സംബന്ധമായ മറ്റ് ആവശ്യങ്ങൾ ഇവിടെ എഴുതുക...",
      items: [
        { id: "pr_print_scan", en: "High-Speed Color / B&W Laser Printing & HD Scanning", ml: "ഹൈ-ക്വാളിറ്റി പ്രിന്റിംഗ് & ഡോക്യുമെന്റ് സ്കാനിംഗ്" },
        { id: "pr_album", en: "Offline Document Album Printing & Spiral Binding", ml: "ഡോക്യുമെന്റ് ആൽബം പ്രിന്റിംഗ് & ബൈൻഡിംഗ്" },
        { id: "pr_project", en: "School / College / Academic Project Creation & Formatting", ml: "സ്കൂൾ / കോളേജ് പ്രോജക്റ്റ് നിർമ്മാണവും ഫോർമാറ്റിംഗും" },
        { id: "pr_design", en: "Digital Graphic Designing (Posters, Notices, Flyers, Cards)", ml: "ഡിജിറ്റൽ ഡിസൈനിംഗ് (പോസ്റ്ററുകൾ, നോട്ടീസുകൾ, കാർഡുകൾ)" },
        { id: "pr_cd_write", en: "CD / DVD Writing & Media Archiving", ml: "സി.ഡി / ഡി.വി.ഡി റൈറ്റിംഗ് (CD / DVD Writing)" },
        { id: "pr_cd_pendrive", en: "CD / DVD to Pendrive Data Transfer & Recovery", ml: "സി.ഡിയിൽ നിന്ന് പെൻഡ്രൈവിലേക്ക് മാറ്റൽ (CD to Pendrive Recovery)" }
      ]
    },
    {
      id: "cat_13_other",
      num: "13",
      type: "custom_only",
      title_en: "Other Digital & Online Services",
      title_ml: "മറ്റ് സേവനങ്ങൾ (Other Services)",
      sub_en: "Need a service not listed above? Write your exact requirement below",
      sub_ml: "മുകളിൽ ഇല്ലാത്ത ഏതൊരു ഓൺലൈൻ സേവനവും താഴെ നേരിട്ട് എഴുതി ഞങ്ങളെ അറിയിക്കാം",
      otherPlaceholder_en: "Type the exact online / digital service you are looking for...",
      otherPlaceholder_ml: "താങ്കൾക്ക് ആവശ്യമുള്ള സേവനം വിശദമായി ഇവിടെ ടൈപ്പ് ചെയ്യുക...",
      items: []
    },
    {
      id: "cat_14_cabin",
      num: "14",
      type: "cabin_booking",
      title_en: "Private Internet User Cabin Booking",
      title_ml: "ഇന്റർനെറ്റ് യൂസർ ക്യാബിൻ ബുക്കിംഗ് (Internet Cabin)",
      sub_en: "Strictly for Online Exams & Interviews | Advance Booking Mandatory",
      sub_ml: "ഓൺലൈൻ പരീക്ഷകൾക്കും ഇന്റർവ്യൂകൾക്കും മാത്രം | മുൻകൂട്ടിയുള്ള ബുക്കിംഗ് നിർബന്ധമാണ്",
      items: []
    }
  ]
};