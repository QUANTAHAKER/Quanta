(function () {
  'use strict';

  // ===== CÓDIGOS DE PAÍS (E.164) Y LONGITUD DE TELÉFONO =====
  // Longitudes típicas (dígitos del número nacional). Si no está, se usa min: 7, max: 15.
  var PHONE_LENGTH_BY_COUNTRY = {
    '1': { min: 10, max: 10 }, '7': { min: 10, max: 10 }, '20': { min: 9, max: 9 }, '27': { min: 9, max: 9 },
    '30': { min: 10, max: 10 }, '31': { min: 9, max: 9 }, '32': { min: 9, max: 9 }, '33': { min: 9, max: 9 },
    '34': { min: 9, max: 9 }, '36': { min: 9, max: 9 }, '39': { min: 9, max: 11 }, '40': { min: 10, max: 10 },
    '41': { min: 9, max: 9 }, '43': { min: 10, max: 13 }, '44': { min: 10, max: 11 }, '45': { min: 8, max: 8 },
    '46': { min: 9, max: 10 }, '47': { min: 8, max: 8 }, '48': { min: 9, max: 9 }, '49': { min: 10, max: 11 },
    '51': { min: 9, max: 9 }, '52': { min: 10, max: 10 }, '53': { min: 8, max: 8 }, '54': { min: 10, max: 11 },
    '55': { min: 10, max: 11 }, '56': { min: 9, max: 9 }, '57': { min: 10, max: 10 }, '58': { min: 10, max: 10 },
    '60': { min: 9, max: 10 }, '61': { min: 9, max: 9 }, '62': { min: 10, max: 12 }, '63': { min: 10, max: 10 },
    '64': { min: 9, max: 10 }, '65': { min: 8, max: 8 }, '66': { min: 9, max: 9 }, '81': { min: 10, max: 10 },
    '82': { min: 9, max: 10 }, '84': { min: 9, max: 10 }, '86': { min: 11, max: 11 }, '90': { min: 10, max: 10 },
    '91': { min: 10, max: 10 }, '92': { min: 10, max: 10 }, '93': { min: 9, max: 9 }, '94': { min: 9, max: 9 },
    '98': { min: 10, max: 10 }, '212': { min: 9, max: 9 }, '213': { min: 9, max: 9 }, '216': { min: 8, max: 8 },
    '218': { min: 9, max: 10 }, '220': { min: 7, max: 7 }, '221': { min: 9, max: 9 }, '222': { min: 8, max: 8 },
    '223': { min: 8, max: 8 }, '224': { min: 9, max: 9 }, '225': { min: 10, max: 10 }, '226': { min: 8, max: 8 },
    '227': { min: 8, max: 8 }, '228': { min: 8, max: 8 }, '229': { min: 8, max: 9 }, '230': { min: 8, max: 8 },
    '231': { min: 7, max: 9 }, '232': { min: 8, max: 8 }, '233': { min: 9, max: 9 }, '234': { min: 10, max: 11 },
    '235': { min: 8, max: 8 }, '236': { min: 8, max: 8 }, '237': { min: 9, max: 9 }, '238': { min: 7, max: 7 },
    '239': { min: 7, max: 7 }, '240': { min: 9, max: 9 }, '241': { min: 8, max: 8 }, '242': { min: 9, max: 9 },
    '243': { min: 9, max: 9 }, '244': { min: 9, max: 9 }, '245': { min: 7, max: 7 }, '248': { min: 7, max: 7 },
    '249': { min: 9, max: 9 }, '250': { min: 9, max: 9 }, '251': { min: 9, max: 9 }, '252': { min: 8, max: 9 },
    '253': { min: 8, max: 8 }, '254': { min: 9, max: 9 }, '255': { min: 9, max: 9 }, '256': { min: 9, max: 9 },
    '257': { min: 8, max: 8 }, '258': { min: 9, max: 9 }, '260': { min: 9, max: 9 }, '261': { min: 9, max: 9 },
    '262': { min: 9, max: 10 }, '263': { min: 9, max: 9 }, '264': { min: 9, max: 9 }, '265': { min: 9, max: 9 },
    '266': { min: 8, max: 8 }, '267': { min: 7, max: 7 }, '268': { min: 8, max: 8 }, '269': { min: 7, max: 7 },
    '290': { min: 4, max: 4 }, '291': { min: 7, max: 7 }, '297': { min: 8, max: 8 }, '298': { min: 6, max: 6 },
    '299': { min: 6, max: 6 }, '350': { min: 8, max: 8 }, '351': { min: 9, max: 9 }, '352': { min: 9, max: 9 },
    '353': { min: 9, max: 9 }, '354': { min: 7, max: 7 }, '355': { min: 8, max: 9 }, '356': { min: 8, max: 8 },
    '357': { min: 8, max: 8 }, '358': { min: 9, max: 10 }, '359': { min: 9, max: 9 }, '370': { min: 8, max: 8 },
    '371': { min: 8, max: 8 }, '372': { min: 7, max: 8 }, '373': { min: 8, max: 8 }, '374': { min: 8, max: 8 },
    '375': { min: 9, max: 9 }, '376': { min: 6, max: 9 }, '377': { min: 8, max: 9 }, '378': { min: 10, max: 10 },
    '379': { min: 10, max: 10 }, '380': { min: 9, max: 9 }, '381': { min: 8, max: 9 }, '382': { min: 8, max: 8 },
    '383': { min: 8, max: 9 }, '385': { min: 8, max: 9 }, '386': { min: 8, max: 8 }, '387': { min: 8, max: 8 },
    '389': { min: 8, max: 8 }, '420': { min: 9, max: 9 }, '421': { min: 9, max: 9 }, '423': { min: 7, max: 7 },
    '500': { min: 5, max: 5 }, '501': { min: 7, max: 7 }, '502': { min: 8, max: 8 }, '503': { min: 8, max: 8 },
    '504': { min: 8, max: 8 }, '505': { min: 8, max: 8 }, '506': { min: 8, max: 8 }, '507': { min: 8, max: 8 },
    '508': { min: 6, max: 6 }, '509': { min: 8, max: 8 }, '590': { min: 9, max: 9 }, '591': { min: 9, max: 9 },
    '592': { min: 7, max: 7 }, '593': { min: 9, max: 9 }, '594': { min: 6, max: 9 }, '595': { min: 9, max: 9 },
    '596': { min: 9, max: 9 }, '597': { min: 6, max: 7 }, '598': { min: 8, max: 8 }, '599': { min: 7, max: 8 },
    '670': { min: 7, max: 8 }, '672': { min: 6, max: 6 }, '673': { min: 7, max: 7 }, '674': { min: 7, max: 7 },
    '675': { min: 8, max: 8 }, '676': { min: 5, max: 5 }, '677': { min: 7, max: 7 }, '678': { min: 7, max: 7 },
    '679': { min: 7, max: 7 }, '680': { min: 7, max: 7 }, '681': { min: 6, max: 6 }, '682': { min: 5, max: 5 },
    '683': { min: 4, max: 4 }, '685': { min: 7, max: 7 }, '686': { min: 8, max: 8 }, '687': { min: 6, max: 6 },
    '688': { min: 5, max: 6 }, '690': { min: 4, max: 4 }, '691': { min: 7, max: 7 }, '692': { min: 7, max: 7 },
    '850': { min: 10, max: 10 }, '852': { min: 8, max: 8 }, '853': { min: 8, max: 8 }, '855': { min: 8, max: 9 },
    '856': { min: 8, max: 9 }, '880': { min: 10, max: 10 }, '886': { min: 9, max: 9 }, '960': { min: 7, max: 7 },
    '961': { min: 7, max: 8 }, '962': { min: 9, max: 9 }, '963': { min: 9, max: 9 }, '964': { min: 10, max: 10 },
    '965': { min: 8, max: 8 }, '966': { min: 9, max: 9 }, '967': { min: 9, max: 9 }, '968': { min: 8, max: 8 },
    '970': { min: 9, max: 9 }, '971': { min: 9, max: 9 }, '972': { min: 9, max: 9 }, '973': { min: 8, max: 8 },
    '974': { min: 8, max: 8 }, '975': { min: 8, max: 8 }, '976': { min: 8, max: 8 }, '977': { min: 10, max: 10 },
    '992': { min: 9, max: 9 }, '993': { min: 8, max: 8 }, '994': { min: 9, max: 9 }, '995': { min: 9, max: 9 },
    '996': { min: 9, max: 9 }, '998': { min: 9, max: 9 }, '211': { min: 9, max: 9 }, '689': { min: 8, max: 8 }
  };

  function getPhoneLengthForCountry(code) {
    if (!code) return { min: 7, max: 15 };
    var c = String(code).replace(/\D/g, '');
    return PHONE_LENGTH_BY_COUNTRY[c] || { min: 7, max: 15 };
  }

  var COUNTRY_LIST = [
    { code: '93', name: 'Afganistán' }, { code: '355', name: 'Albania' }, { code: '213', name: 'Argelia' },
    { code: '376', name: 'Andorra' }, { code: '244', name: 'Angola' }, { code: '1', name: 'Antigua y Barbuda' },
    { code: '966', name: 'Arabia Saudita' }, { code: '54', name: 'Argentina' }, { code: '374', name: 'Armenia' },
    { code: '297', name: 'Aruba' }, { code: '61', name: 'Australia' }, { code: '43', name: 'Austria' },
    { code: '994', name: 'Azerbaiyán' }, { code: '1', name: 'Bahamas' }, { code: '973', name: 'Baréin' },
    { code: '880', name: 'Bangladesh' }, { code: '1', name: 'Barbados' }, { code: '375', name: 'Bielorrusia' },
    { code: '32', name: 'Bélgica' }, { code: '501', name: 'Belice' }, { code: '229', name: 'Benín' },
    { code: '1', name: 'Bermudas' }, { code: '975', name: 'Bután' }, { code: '591', name: 'Bolivia' },
    { code: '387', name: 'Bosnia y Herzegovina' }, { code: '267', name: 'Botsuana' }, { code: '55', name: 'Brasil' },
    { code: '673', name: 'Brunéi' }, { code: '359', name: 'Bulgaria' }, { code: '226', name: 'Burkina Faso' },
    { code: '257', name: 'Burundi' }, { code: '855', name: 'Camboya' }, { code: '237', name: 'Camerún' },
    { code: '1', name: 'Canadá' }, { code: '238', name: 'Cabo Verde' }, { code: '1', name: 'Islas Caimán' },
    { code: '236', name: 'República Centroafricana' }, { code: '235', name: 'Chad' }, { code: '56', name: 'Chile' },
    { code: '86', name: 'China' }, { code: '357', name: 'Chipre' }, { code: '57', name: 'Colombia' },
    { code: '269', name: 'Comoras' }, { code: '242', name: 'Congo' }, { code: '243', name: 'Congo (R.D.)' },
    { code: '82', name: 'Corea del Sur' }, { code: '850', name: 'Corea del Norte' }, { code: '506', name: 'Costa Rica' },
    { code: '225', name: 'Costa de Marfil' }, { code: '385', name: 'Croacia' }, { code: '53', name: 'Cuba' },
    { code: '599', name: 'Curazao' }, { code: '45', name: 'Dinamarca' }, { code: '253', name: 'Yibuti' },
    { code: '1', name: 'Dominica' }, { code: '1', name: 'República Dominicana' }, { code: '593', name: 'Ecuador' },
    { code: '20', name: 'Egipto' }, { code: '503', name: 'El Salvador' }, { code: '971', name: 'Emiratos Árabes Unidos' },
    { code: '291', name: 'Eritrea' }, { code: '372', name: 'Estonia' }, { code: '268', name: 'Esuatini' },
    { code: '251', name: 'Etiopía' }, { code: '500', name: 'Islas Malvinas' }, { code: '679', name: 'Fiyi' },
    { code: '358', name: 'Finlandia' }, { code: '33', name: 'Francia' }, { code: '594', name: 'Guayana Francesa' },
    { code: '689', name: 'Polinesia Francesa' }, { code: '241', name: 'Gabón' }, { code: '220', name: 'Gambia' },
    { code: '995', name: 'Georgia' }, { code: '233', name: 'Ghana' }, { code: '350', name: 'Gibraltar' },
    { code: '30', name: 'Grecia' }, { code: '299', name: 'Groenlandia' }, { code: '1', name: 'Granada' },
    { code: '590', name: 'Guadalupe' }, { code: '502', name: 'Guatemala' }, { code: '44', name: 'Guernsey' },
    { code: '224', name: 'Guinea' }, { code: '245', name: 'Guinea-Bisáu' }, { code: '592', name: 'Guyana' },
    { code: '509', name: 'Haití' }, { code: '504', name: 'Honduras' }, { code: '852', name: 'Hong Kong' },
    { code: '36', name: 'Hungría' }, { code: '354', name: 'Islandia' }, { code: '91', name: 'India' },
    { code: '62', name: 'Indonesia' }, { code: '98', name: 'Irán' }, { code: '964', name: 'Irak' },
    { code: '353', name: 'Irlanda' }, { code: '44', name: 'Isla de Man' }, { code: '972', name: 'Israel' },
    { code: '39', name: 'Italia' }, { code: '1', name: 'Jamaica' }, { code: '81', name: 'Japón' },
    { code: '44', name: 'Jersey' }, { code: '962', name: 'Jordania' }, { code: '7', name: 'Kazajistán' },
    { code: '254', name: 'Kenia' }, { code: '686', name: 'Kiribati' }, { code: '965', name: 'Kuwait' },
    { code: '996', name: 'Kirguistán' }, { code: '856', name: 'Laos' }, { code: '266', name: 'Lesoto' },
    { code: '371', name: 'Letonia' }, { code: '961', name: 'Líbano' }, { code: '231', name: 'Liberia' },
    { code: '218', name: 'Libia' }, { code: '423', name: 'Liechtenstein' }, { code: '370', name: 'Lituania' },
    { code: '352', name: 'Luxemburgo' }, { code: '853', name: 'Macao' }, { code: '389', name: 'Macedonia del Norte' },
    { code: '261', name: 'Madagascar' }, { code: '265', name: 'Malaui' }, { code: '60', name: 'Malasia' },
    { code: '960', name: 'Maldivas' }, { code: '223', name: 'Malí' }, { code: '356', name: 'Malta' },
    { code: '692', name: 'Islas Marshall' }, { code: '596', name: 'Martinica' }, { code: '222', name: 'Mauritania' },
    { code: '230', name: 'Mauricio' }, { code: '52', name: 'México' }, { code: '691', name: 'Micronesia' },
    { code: '373', name: 'Moldavia' }, { code: '377', name: 'Mónaco' }, { code: '976', name: 'Mongolia' },
    { code: '382', name: 'Montenegro' }, { code: '1', name: 'Montserrat' }, { code: '212', name: 'Marruecos' },
    { code: '258', name: 'Mozambique' }, { code: '95', name: 'Myanmar' }, { code: '264', name: 'Namibia' },
    { code: '674', name: 'Nauru' }, { code: '977', name: 'Nepal' }, { code: '505', name: 'Nicaragua' },
    { code: '227', name: 'Níger' }, { code: '234', name: 'Nigeria' }, { code: '683', name: 'Niue' },
    { code: '47', name: 'Noruega' }, { code: '64', name: 'Nueva Zelanda' }, { code: '968', name: 'Omán' },
    { code: '31', name: 'Países Bajos' }, { code: '680', name: 'Palaos' }, { code: '970', name: 'Palestina' },
    { code: '507', name: 'Panamá' }, { code: '675', name: 'Papúa Nueva Guinea' }, { code: '595', name: 'Paraguay' },
    { code: '51', name: 'Perú' }, { code: '63', name: 'Filipinas' }, { code: '48', name: 'Polonia' },
    { code: '351', name: 'Portugal' }, { code: '1', name: 'Puerto Rico' }, { code: '974', name: 'Catar' },
    { code: '44', name: 'Reino Unido' }, { code: '250', name: 'Ruanda' }, { code: '40', name: 'Rumanía' },
    { code: '7', name: 'Rusia' }, { code: '262', name: 'Reunión' }, { code: '685', name: 'Samoa' },
    { code: '378', name: 'San Marino' }, { code: '239', name: 'Santo Tomé y Príncipe' }, { code: '221', name: 'Senegal' },
    { code: '381', name: 'Serbia' }, { code: '248', name: 'Seychelles' }, { code: '232', name: 'Sierra Leona' },
    { code: '65', name: 'Singapur' }, { code: '1', name: 'Sint Maarten' }, { code: '963', name: 'Siria' },
    { code: '252', name: 'Somalia' }, { code: '94', name: 'Sri Lanka' }, { code: '27', name: 'Sudáfrica' },
    { code: '211', name: 'Sudán del Sur' }, { code: '249', name: 'Sudán' }, { code: '46', name: 'Suecia' },
    { code: '41', name: 'Suiza' }, { code: '597', name: 'Surinam' },
    { code: '886', name: 'Taiwán' }, { code: '992', name: 'Tayikistán' },
    { code: '255', name: 'Tanzania' }, { code: '66', name: 'Tailandia' }, { code: '670', name: 'Timor Oriental' },
    { code: '228', name: 'Togo' }, { code: '690', name: 'Tokelau' }, { code: '676', name: 'Tonga' },
    { code: '1', name: 'Trinidad y Tobago' }, { code: '216', name: 'Túnez' }, { code: '993', name: 'Turkmenistán' },
    { code: '90', name: 'Turquía' }, { code: '688', name: 'Tuvalu' }, { code: '256', name: 'Uganda' },
    { code: '380', name: 'Ucrania' }, { code: '598', name: 'Uruguay' }, { code: '998', name: 'Uzbekistán' },
    { code: '678', name: 'Vanuatu' }, { code: '379', name: 'Ciudad del Vaticano' }, { code: '58', name: 'Venezuela' },
    { code: '84', name: 'Vietnam' }, { code: '1', name: 'Islas Vírgenes' }, { code: '681', name: 'Wallis y Futuna' },
    { code: '967', name: 'Yemen' }, { code: '260', name: 'Zambia' }, { code: '263', name: 'Zimbabue' }
  ];

  function fillCountrySelect(selectEl) {
    if (!selectEl || selectEl.tagName !== 'SELECT') return;
    var current = selectEl.value || '57';
    selectEl.innerHTML = '';
    COUNTRY_LIST.forEach(function (c) {
      var opt = document.createElement('option');
      opt.value = c.code;
      opt.textContent = '+' + c.code + ' ' + c.name;
      if (c.code === current) opt.selected = true;
      selectEl.appendChild(opt);
    });
  }

  function applyPhoneLengthToInput(telInput, countryCode) {
    if (!telInput) return;
    var len = getPhoneLengthForCountry(countryCode);
    telInput.minLength = len.min;
    telInput.maxLength = len.max;
    telInput.pattern = '[0-9\\s\\-]{' + len.min + ',' + len.max + '}';
    telInput.title = 'Número sin indicativo (' + len.min + '-' + len.max + ' dígitos)';
  }

  function setupPhoneCountrySelect(selectEl, telInput) {
    if (!selectEl || !telInput) return;
    fillCountrySelect(selectEl);
    applyPhoneLengthToInput(telInput, selectEl.value);
    selectEl.addEventListener('change', function () {
      applyPhoneLengthToInput(telInput, selectEl.value);
      if (telInput.setCustomValidity) telInput.setCustomValidity('');
      var ev = new Event('input', { bubbles: true });
      telInput.dispatchEvent(ev);
    });
  }

  // ===== PANTALLA DE CARGA: ruedita hasta que todo cargue =====
  function hidePageLoader() {
    var loader = document.getElementById('pageLoader');
    if (loader) loader.classList.add('loaded');
    document.body.classList.add('loaded');
  }
  if (document.readyState === 'complete') {
    hidePageLoader();
  } else {
    window.addEventListener('load', hidePageLoader);
    setTimeout(hidePageLoader, 4000);
  }

  // ===== NAVBAR: sombra rosada al hacer scroll =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    function updateNavbar() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

  // ===== HERO: luz que sigue al mouse =====
  var heroSection = document.getElementById('inicio');
  var mouseLight = document.getElementById('heroMouseLight');
  if (heroSection && mouseLight) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = heroSection.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      mouseLight.style.left = x + 'px';
      mouseLight.style.top = y + 'px';
    });
    heroSection.addEventListener('mouseleave', function () {
      mouseLight.style.left = '50%';
      mouseLight.style.top = '50%';
    });
  }

  // ===== HERO: partículas flotantes =====
  var particlesContainer = document.getElementById('hero-particles');
  if (particlesContainer) {
    var particleCount = 18;
    for (var i = 0; i < particleCount; i++) {
      var p = document.createElement('span');
      p.className = 'hero-floating-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.width = (4 + Math.random() * 6) + 'px';
      p.style.height = p.style.width;
      p.style.animationDuration = (6 + Math.random() * 8) + 's';
      p.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(p);
    }
  }

  // ===== HERO VISUAL: más partículas detrás de la imagen + iluminación (glow en CSS) =====
  var visualParticlesContainer = document.getElementById('hero-visual-particles');
  if (visualParticlesContainer) {
    var visualParticleCount = 42;
    for (var j = 0; j < visualParticleCount; j++) {
      var vp = document.createElement('span');
      vp.className = 'hero-visual-particle';
      vp.style.left = Math.random() * 100 + '%';
      vp.style.top = Math.random() * 100 + '%';
      vp.style.width = (3 + Math.random() * 5) + 'px';
      vp.style.height = vp.style.width;
      vp.style.animationDuration = (8 + Math.random() * 10) + 's';
      vp.style.animationDelay = Math.random() * 6 + 's';
      visualParticlesContainer.appendChild(vp);
    }
  }

  // ===== MENÚ MÓVIL COLAPSABLE =====
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en un enlace (navegación)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ===== SELECTORES DE PAÍS (todos los países + longitud por país) =====
  (function () {
    var quoteCountry = document.getElementById('quoteTelefonoCountry');
    var quoteTel = document.getElementById('quoteTelefono');
    var contactCountry = document.getElementById('numero_country');
    var contactTel = document.getElementById('numero');
    if (quoteCountry && quoteTel) {
      setupPhoneCountrySelect(quoteCountry, quoteTel);
      quoteCountry.value = '57';
      applyPhoneLengthToInput(quoteTel, '57');
    }
    if (contactCountry && contactTel) {
      setupPhoneCountrySelect(contactCountry, contactTel);
      contactCountry.value = '57';
      applyPhoneLengthToInput(contactTel, '57');
    }
  })();

  // ===== SCROLL SUAVE (refuerzo para navegación por anclas) =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      if (this.classList.contains('js-open-quote-modal')) return; // manejado por modal
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== MODAL COTIZACIÓN =====
  var QUOTE_BASE_PRICE = 3254;
  var industryFactors = {
    'muebles-madera': 1.00, 'papel-carton': 1.00, 'construccion': 1.00,
    'plasticos': 1.10, 'textiles': 1.10, 'alimentos': 1.10, 'cosmeticos': 1.10,
    'metalmecanica': 1.15, 'maquinaria': 1.15, 'vehiculos': 1.15, 'electrodomesticos': 1.15,
    'quimicos': 1.20, 'otro': 1.20
  };
  var companySizeFactors = { '50-90': 0.90, '91-150': 1.00, '151-300': 1.10, '301-500': 1.20, '500+': 1.50 };
  var productionStaffFactors = { '0-20': 0.95, '21-50': 1.00, '51-100': 1.10, '100+': 1.20 };

  var quoteModal = document.getElementById('quoteModal');
  var quoteForm = document.getElementById('quoteForm');
  var quoteFormScreen = document.getElementById('quoteFormScreen');
  var quotePaymentScreen = document.getElementById('quotePaymentScreen');
  var quoteSuccess = document.getElementById('quoteSuccess');
  var quoteModalClose = document.getElementById('quoteModalClose');
  var quoteBtnSend = document.getElementById('quoteBtnSend');
  var quoteBtnBack = document.getElementById('quoteBtnBack');

  var lastQuoteBasePrice = 0;
  var lastPaymentOptions = { A: {}, B: {}, D: {} };

  var QUOTE_FORM_DRAFT_KEY = 'quanta_quote_form_draft';

  function saveQuoteFormDraft() {
    if (!quoteForm) return;
    try {
      var countryEl = document.getElementById('quoteTelefonoCountry');
      var draft = {
        nombre: (document.getElementById('quoteNombre') && document.getElementById('quoteNombre').value) || '',
        email: (document.getElementById('quoteEmail') && document.getElementById('quoteEmail').value) || '',
        telefono_country: (countryEl && countryEl.value) ? countryEl.value : '57',
        telefono: (document.getElementById('quoteTelefono') && document.getElementById('quoteTelefono').value) || '',
        empresa: (document.getElementById('quoteEmpresa') && document.getElementById('quoteEmpresa').value) || '',
        nit: (document.getElementById('quoteNit') && document.getElementById('quoteNit').value) || '',
        industria: (document.getElementById('quoteIndustria') && document.getElementById('quoteIndustria').value) || '',
        tamanoEmpresa: (document.getElementById('quoteTamano') && document.getElementById('quoteTamano').value) || '',
        personalProduccion: (document.getElementById('quotePersonal') && document.getElementById('quotePersonal').value) || ''
      };
      sessionStorage.setItem(QUOTE_FORM_DRAFT_KEY, JSON.stringify(draft));
    } catch (e) { /* ignore */ }
  }

  function loadQuoteFormDraft() {
    if (!quoteForm) return false;
    try {
      var raw = sessionStorage.getItem(QUOTE_FORM_DRAFT_KEY);
      if (!raw) return false;
      var draft = JSON.parse(raw);
      var nombre = document.getElementById('quoteNombre');
      var email = document.getElementById('quoteEmail');
      var country = document.getElementById('quoteTelefonoCountry');
      var telefono = document.getElementById('quoteTelefono');
      var empresa = document.getElementById('quoteEmpresa');
      var nit = document.getElementById('quoteNit');
      var industria = document.getElementById('quoteIndustria');
      var tamano = document.getElementById('quoteTamano');
      var personal = document.getElementById('quotePersonal');
      if (nombre) nombre.value = draft.nombre || '';
      if (email) email.value = draft.email || '';
      if (country) country.value = (draft.telefono_country && /^\d+$/.test(String(draft.telefono_country))) ? draft.telefono_country : '57';
      if (telefono) telefono.value = draft.telefono || '';
      if (country && telefono) applyPhoneLengthToInput(telefono, country.value);
      if (empresa) empresa.value = draft.empresa || '';
      if (nit) nit.value = draft.nit || '';
      if (industria) industria.value = draft.industria || '';
      if (tamano) tamano.value = draft.tamanoEmpresa || '';
      if (personal) personal.value = draft.personalProduccion || '';
      return true;
    } catch (e) { return false; }
  }

  function clearQuoteFormDraft() {
    try { sessionStorage.removeItem(QUOTE_FORM_DRAFT_KEY); } catch (e) { }
  }

  function openQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.add('is-open');
    quoteModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (quoteFormScreen) {
      quoteFormScreen.classList.add('modal-screen-active');
    }
    if (quotePaymentScreen) {
      quotePaymentScreen.classList.remove('modal-screen-active');
      quotePaymentScreen.setAttribute('aria-hidden', 'true');
    }
    if (quoteForm) {
      quoteForm.style.display = '';
      quoteForm.reset();
      var loaded = loadQuoteFormDraft();
      if (!loaded) { /* ya hicimos reset */ }
      if (typeof setQuoteSubmitButtonState === 'function') setQuoteSubmitButtonState();
    }
    if (quoteSuccess) {
      quoteSuccess.hidden = true;
      quoteSuccess.setAttribute('aria-hidden', 'true');
    }
  }

  function showQuoteThankYouAndClose() {
    if (quotePaymentScreen) {
      quotePaymentScreen.classList.remove('modal-screen-active');
      quotePaymentScreen.setAttribute('aria-hidden', 'true');
    }
    if (quoteSuccess) {
      quoteSuccess.hidden = false;
      quoteSuccess.classList.add('modal-screen-active');
      quoteSuccess.setAttribute('aria-hidden', 'false');
    }
    setTimeout(function () {
      closeQuoteModal();
    }, 5000);
  }

  function closeQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.remove('is-open');
    quoteModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (quoteSuccess) {
      quoteSuccess.hidden = true;
      quoteSuccess.classList.remove('modal-screen-active');
      quoteSuccess.setAttribute('aria-hidden', 'true');
    }
    if (quotePaymentScreen) {
      quotePaymentScreen.classList.remove('modal-screen-active');
      quotePaymentScreen.setAttribute('aria-hidden', 'true');
    }
  }

  function formatEstimate(num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function formatCurrency(amount) {
    return '$' + formatEstimate(amount) + ' USD';
  }

  function calculateEstimate() {
    var industria = document.getElementById('quoteIndustria').value;
    var tamano = document.getElementById('quoteTamano').value;
    var personal = document.getElementById('quotePersonal').value;
    var fi = industryFactors[industria];
    var ft = companySizeFactors[tamano];
    var fp = productionStaffFactors[personal];
    if (fi == null || ft == null || fp == null) return null;
    return QUOTE_BASE_PRICE * fi * ft * fp;
  }

  if (quoteModal) {
    document.querySelectorAll('[data-modal="quote"]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openQuoteModal();
      });
    });
    if (quoteModalClose) quoteModalClose.addEventListener('click', closeQuoteModal);
    quoteModal.addEventListener('click', function (e) {
      if (e.target === quoteModal) closeQuoteModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && quoteModal && quoteModal.classList.contains('is-open')) closeQuoteModal();
    });
  }

  // ===== MODAL COMPARACIÓN DE LICENCIAS =====
  var licenciasModal = document.getElementById('licenciasModal');
  var licenciasModalClose = document.getElementById('licenciasModalClose');
  var btnPromociones = document.getElementById('btnPromociones');
  function openLicenciasModal() {
    if (!licenciasModal) return;
    licenciasModal.classList.add('active');
    licenciasModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLicenciasModal() {
    if (!licenciasModal) return;
    licenciasModal.classList.remove('active');
    licenciasModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  var promocionesModal = document.getElementById('promocionesModal');
  var promocionesModalClose = document.getElementById('promocionesModalClose');
  var promocionesBtnVolver = document.getElementById('promocionesBtnVolver');

  function openPromocionesModal() {
    closeLicenciasModal();
    if (promocionesModal) {
      promocionesModal.classList.add('active');
      promocionesModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePromocionesModal() {
    if (promocionesModal) {
      promocionesModal.classList.remove('active');
      promocionesModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // Delegación: solo la tarjeta de Licenciamiento abre el modal (igual que cotización con data-modal="quote")
  document.body.addEventListener('click', function (e) {
    var card = e.target.closest('.js-open-licencias-modal');
    if (!card) return;
    e.preventDefault();
    e.stopPropagation();
    openLicenciasModal();
  }, false);
  document.body.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target.closest('.js-open-licencias-modal');
    if (!card) return;
    e.preventDefault();
    e.stopPropagation();
    openLicenciasModal();
  }, false);
  if (licenciasModalClose) {
    licenciasModalClose.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeLicenciasModal();
    });
  }
  if (licenciasModal) {
    var licenciasModalContent = licenciasModal.querySelector('.licencias-modal');
    if (licenciasModalContent) {
      licenciasModalContent.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (promocionesModal && promocionesModal.classList.contains('active')) {
      e.preventDefault();
      e.stopPropagation();
      closePromocionesModal();
    } else if (licenciasModal && licenciasModal.classList.contains('active')) {
      e.preventDefault();
      e.stopPropagation();
      closeLicenciasModal();
    }
  });
  if (promocionesModalClose) {
    promocionesModalClose.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closePromocionesModal();
    });
  }
  if (promocionesModal) {
    promocionesModal.addEventListener('click', function (e) {
      if (e.target === promocionesModal) closePromocionesModal();
    });
    var promocionesContent = promocionesModal.querySelector('.promociones-modal');
    if (promocionesContent) {
      promocionesContent.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  }
  if (promocionesBtnVolver) {
    promocionesBtnVolver.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closePromocionesModal();
    });
  }
  var promocionesBtnCotizar = document.getElementById('promocionesBtnCotizar');
  if (promocionesBtnCotizar) {
    promocionesBtnCotizar.addEventListener('click', function () {
      closePromocionesModal();
    });
  }
  if (btnPromociones) {
    btnPromociones.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openPromocionesModal();
    });
  }

  var quoteFormHint = document.getElementById('quoteFormHint');

  function isQuoteContactValid() {
    var nombre = document.getElementById('quoteNombre');
    var email = document.getElementById('quoteEmail');
    var telefono = document.getElementById('quoteTelefono');
    var countrySelect = document.getElementById('quoteTelefonoCountry');
    if (!nombre || !email || !telefono) return false;
    if (!nombre.value.trim()) return false;
    if (!email.value.trim() || !email.validity.valid) return false;
    var digits = (telefono.value || '').replace(/\D/g, '');
    var country = (countrySelect && countrySelect.value) ? countrySelect.value : '57';
    var len = getPhoneLengthForCountry(country);
    return digits.length >= len.min && digits.length <= len.max;
  }

  function getQuoteContactMissing() {
    var missing = [];
    var nombre = document.getElementById('quoteNombre');
    var email = document.getElementById('quoteEmail');
    var telefono = document.getElementById('quoteTelefono');
    var countrySelect = document.getElementById('quoteTelefonoCountry');
    if (!nombre || !email || !telefono) return missing;
    if (!nombre.value.trim()) missing.push('nombre completo');
    if (!email.value.trim()) missing.push('correo');
    else if (!email.validity.valid) missing.push('correo con formato válido (ej: nombre@correo.com)');
    var digits = (telefono.value || '').replace(/\D/g, '');
    var country = (countrySelect && countrySelect.value) ? countrySelect.value : '57';
    var len = getPhoneLengthForCountry(country);
    if (digits.length < len.min || digits.length > len.max) missing.push('teléfono con ' + len.min + ' a ' + len.max + ' dígitos');
    return missing;
  }

  var quoteConsentDatos = document.getElementById('quoteConsentDatos');
  var quoteConsentPublicidad = document.getElementById('quoteConsentPublicidad');

  function updateQuoteFormHint() {
    if (!quoteFormHint) return;
    var missing = getQuoteContactMissing();
    if (missing.length > 0) {
      quoteFormHint.textContent = 'Para continuar: ' + missing.join(', ') + '.';
      return;
    }
    if (quoteConsentDatos && !quoteConsentDatos.checked) {
      quoteFormHint.textContent = 'Debes aceptar el tratamiento de datos para continuar.';
      return;
    }
    quoteFormHint.textContent = '';
  }

  function areQuoteEstimateFieldsValid() {
    var empresa = document.getElementById('quoteEmpresa');
    var industria = document.getElementById('quoteIndustria');
    var tamano = document.getElementById('quoteTamano');
    var personal = document.getElementById('quotePersonal');
    if (!empresa || !industria || !tamano || !personal) return false;
    if (!empresa.value.trim()) return false;
    if (!industria.value) return false;
    if (!tamano.value) return false;
    if (!personal.value) return false;
    return true;
  }

  function canSubmitQuoteForm() {
    return isQuoteContactValid() && areQuoteEstimateFieldsValid() && quoteConsentDatos && quoteConsentDatos.checked;
  }

  function focusFirstInvalidContactField() {
    var nombre = document.getElementById('quoteNombre');
    var email = document.getElementById('quoteEmail');
    var telefono = document.getElementById('quoteTelefono');
    var countrySelect = document.getElementById('quoteTelefonoCountry');
    var empresa = document.getElementById('quoteEmpresa');
    var industria = document.getElementById('quoteIndustria');
    var tamano = document.getElementById('quoteTamano');
    var personal = document.getElementById('quotePersonal');
    if (!nombre || !email || !telefono) return;
    if (!nombre.value.trim()) { nombre.focus(); nombre.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (!email.value.trim() || !email.validity.valid) { email.focus(); email.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    var digits = (telefono.value || '').replace(/\D/g, '');
    var country = (countrySelect && countrySelect.value) ? countrySelect.value : '57';
    var len = getPhoneLengthForCountry(country);
    var phoneOk = digits.length >= len.min && digits.length <= len.max;
    if (!phoneOk) { telefono.focus(); telefono.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (empresa && !empresa.value.trim()) { empresa.focus(); empresa.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (industria && !industria.value) { industria.focus(); industria.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (tamano && !tamano.value) { tamano.focus(); tamano.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    if (personal && !personal.value) { personal.focus(); personal.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
  }

  function setQuoteSubmitButtonState() {
    updateQuoteFormHint();
    var btn = quoteForm ? quoteForm.querySelector('button[type="submit"]') : null;
    if (btn) btn.disabled = !canSubmitQuoteForm();
  }

  if (quoteForm) {
    var quoteNombre = document.getElementById('quoteNombre');
    var quoteEmail = document.getElementById('quoteEmail');
    var quoteTelefono = document.getElementById('quoteTelefono');
    var quoteEmpresa = document.getElementById('quoteEmpresa');
    var quoteIndustria = document.getElementById('quoteIndustria');
    var quoteTamano = document.getElementById('quoteTamano');
    var quotePersonal = document.getElementById('quotePersonal');
    var quoteTelefonoCountry = document.getElementById('quoteTelefonoCountry');
    function saveDraftAndUpdateButton() {
      saveQuoteFormDraft();
      setQuoteSubmitButtonState();
    }
    [quoteNombre, quoteEmail, quoteTelefono, quoteEmpresa, quoteIndustria, quoteTamano, quotePersonal, quoteTelefonoCountry].forEach(function (el) {
      if (el) {
        el.addEventListener('input', saveDraftAndUpdateButton);
        el.addEventListener('change', saveDraftAndUpdateButton);
      }
    });
    if (quoteConsentDatos) {
      quoteConsentDatos.addEventListener('change', setQuoteSubmitButtonState);
    }
    if (quoteConsentPublicidad) {
      quoteConsentPublicidad.addEventListener('change', setQuoteSubmitButtonState);
    }
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var telEl = document.getElementById('quoteTelefono');
      var countryEl = document.getElementById('quoteTelefonoCountry');
      if (telEl && countryEl) {
        var digits = (telEl.value || '').replace(/\D/g, '');
        var country = countryEl.value || '57';
        var len = getPhoneLengthForCountry(country);
        var valid = digits.length >= len.min && digits.length <= len.max;
        telEl.setCustomValidity(valid ? '' : 'El teléfono debe tener entre ' + len.min + ' y ' + len.max + ' dígitos.');
      }
      if (!this.checkValidity()) {
        updateQuoteFormHint();
        focusFirstInvalidContactField();
        this.reportValidity();
        return;
      }
      if (quoteConsentDatos && !quoteConsentDatos.checked) {
        updateQuoteFormHint();
        quoteConsentDatos.focus();
        return;
      }
      var basePrice = calculateEstimate();
      if (basePrice == null) return;
      lastQuoteBasePrice = basePrice;

      var leadData = {
        nombre: document.getElementById('quoteNombre').value,
        email: document.getElementById('quoteEmail').value,
        telefono: getQuoteFullPhone(),
        empresa: document.getElementById('quoteEmpresa') ? document.getElementById('quoteEmpresa').value.trim() : '',
        nit: document.getElementById('quoteNit') ? document.getElementById('quoteNit').value.trim() : '',
        industria: document.getElementById('quoteIndustria').value,
        tamanoEmpresa: document.getElementById('quoteTamano').value,
        personalProduccion: document.getElementById('quotePersonal').value,
        precioBase: basePrice
      };
      console.log('\u2713 Cotización paso 1 - calculando estimación');
      enviarLeadInicial(leadData).catch(function (err) {
        console.error('Error al enviar lead inicial:', err);
      });

      var optA = { total: basePrice * 0.9, installments: 1, installmentAmount: basePrice * 0.9, nombreOpcion: '1 pago contado' };
      var optB = { total: basePrice * 0.95, installments: 2, installmentAmount: (basePrice * 0.95) / 2, nombreOpcion: '2 pagos durante implementación' };
      var optD = { total: basePrice * 1.20, installments: 12, installmentAmount: (basePrice * 1.20) / 12, nombreOpcion: '12 pagos mensuales (post-implementación)' };
      lastPaymentOptions = { A: optA, B: optB, D: optD };

      var elA = document.getElementById('paymentPriceA');
      var elB = document.getElementById('paymentPriceB');
      var elD = document.getElementById('paymentPriceD');
      if (elA) elA.textContent = formatCurrency(optA.total);
      if (elB) elB.textContent = '2 cuotas de ' + formatCurrency(optB.installmentAmount) + ' cada una';
      if (elD) elD.textContent = '12 cuotas de ' + formatCurrency(optD.installmentAmount) + ' cada una';

      var elAC = document.getElementById('paymentPriceACard');
      var elBC = document.getElementById('paymentPriceBCard');
      var elDC = document.getElementById('paymentPriceDCard');
      if (elAC) elAC.textContent = formatCurrency(optA.total);
      if (elBC) elBC.textContent = '2 cuotas de ' + formatCurrency(optB.installmentAmount);
      if (elDC) elDC.textContent = '12 cuotas de ' + formatCurrency(optD.installmentAmount);

      var radios = document.querySelectorAll('input[name="paymentPlan"]');
      radios.forEach(function (r) { r.checked = false; });
      document.querySelectorAll('.payment-option').forEach(function (r) { r.classList.remove('selected'); });

      clearQuoteFormDraft();
      quoteFormScreen.classList.remove('modal-screen-active');
      quoteFormScreen.querySelector('form').style.display = 'none';
      quotePaymentScreen.classList.add('modal-screen-active');
      quotePaymentScreen.setAttribute('aria-hidden', 'false');
    });
    setQuoteSubmitButtonState();
  }

  if (quoteBtnBack) {
    quoteBtnBack.addEventListener('click', function () {
      quotePaymentScreen.classList.remove('modal-screen-active');
      quotePaymentScreen.setAttribute('aria-hidden', 'true');
      quoteFormScreen.classList.add('modal-screen-active');
      if (quoteForm) quoteForm.style.display = '';
    });
  }

  document.querySelectorAll('.payment-option').forEach(function (row) {
    row.addEventListener('click', function (e) {
      if (e.target.tagName === 'INPUT') return;
      document.querySelectorAll('.payment-option').forEach(function (r) { r.classList.remove('selected'); });
      this.classList.add('selected');
      var radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  document.querySelectorAll('input[name="paymentPlan"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      document.querySelectorAll('.payment-option').forEach(function (r) { r.classList.remove('selected'); });
      var row = radio.closest('.payment-option');
      if (row) row.classList.add('selected');
    });
  });

  function getQuoteFullPhone() {
    var countryEl = document.getElementById('quoteTelefonoCountry');
    var numberEl = document.getElementById('quoteTelefono');
    var countryCode = (countryEl && countryEl.value) ? countryEl.value : '57';
    var digits = (numberEl && numberEl.value) ? numberEl.value.replace(/\D/g, '') : '';
    return digits ? '+' + countryCode + digits : '';
  }

  function getQuotePayload() {
    var selected = document.querySelector('input[name="paymentPlan"]:checked');
    var optionId = selected ? selected.value : null;
    var opt = optionId ? lastPaymentOptions[optionId] : null;
    var quoteEmpresa = document.getElementById('quoteEmpresa');
    var quoteNit = document.getElementById('quoteNit');
    return {
      nombre: document.getElementById('quoteNombre').value,
      email: document.getElementById('quoteEmail').value,
      telefono: getQuoteFullPhone(),
      empresa: quoteEmpresa ? quoteEmpresa.value.trim() : '',
      nit: quoteNit ? quoteNit.value.trim() : '',
      industria: document.getElementById('quoteIndustria').value,
      tamanoEmpresa: document.getElementById('quoteTamano').value,
      personalProduccion: document.getElementById('quotePersonal').value,
      precioBase: lastQuoteBasePrice,
      opcionPago: optionId || null,
      nombreOpcion: opt ? opt.nombreOpcion : null,
      valorCuota: opt ? opt.installmentAmount : null,
      numeroCuotas: opt ? opt.installments : null,
      totalAPagar: opt ? opt.total : null,
      aceptaPublicidad: quoteConsentPublicidad ? quoteConsentPublicidad.checked : false,
      fecha: new Date().toISOString()
    };
  }

  var industryLabels = {
    'muebles-madera': 'Muebles y madera', 'papel-carton': 'Papel, cartón e impresión',
    'construccion': 'Construcción industrializada', 'plasticos': 'Plásticos y derivados',
    'textiles': 'Textiles y confecciones', 'alimentos': 'Alimentos y bebidas',
    'cosmeticos': 'Cosméticos y cuidado personal', 'metalmecanica': 'Metalmecánica',
    'maquinaria': 'Maquinaria y equipos', 'vehiculos': 'Vehículos y autopartes',
    'electrodomesticos': 'Electrodomésticos y electrónica', 'quimicos': 'Químicos y farmacéuticos',
    'otro': 'Otro / no clasificado'
  };

  function translateIndustry(code) {
    return industryLabels[code] || code || '—';
  }

  function getPaymentOptionName(option) {
    var names = { 'A': '1 pago contado (-10%)', 'B': '2 pagos durante implementación (-5%)', 'C': '12 pagos mensuales (+20%)', 'D': '12 pagos mensuales (+20%)' };
    return names[option] || option || '—';
  }

  function enviarLeadInicial(data) {
    console.log('Enviando lead inicial...');
    var WEBHOOK_URL = 'https://hook.us2.make.com/t13pwfqkes7brwbac19stmloeys2x421';
    var formData = {
      nombre: data.nombre,
      correo: data.email,
      numero: data.telefono,
      cargo: 'No especificado',
      empresa: data.empresa || 'No especificada',
      nit: data.nit || 'No especificado',
      industria: data.industria,
      tamanoEmpresa: data.tamanoEmpresa,
      personalProduccion: data.personalProduccion,
      precioBase: data.precioBase != null ? Number(data.precioBase).toFixed(2) : '',
      totalAPagar: data.precioBase != null ? Number(data.precioBase).toFixed(2) : '',
      opcionPago: 'Pendiente',
      mensaje: 'Lead inicial - Precio base: USD ' + (data.precioBase != null ? Number(data.precioBase).toFixed(2) : ''),
      fecha: new Date().toLocaleString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      fuente: 'Cotización - Paso 1',
      tipo: 'Lead'
    };
    return fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(function () {
      console.log('Lead inicial enviado');
    });
  }

  function showSuccessMessage(title, message) {
    var notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = '<div class="notification-icon">\u2713</div><div class="notification-content"><h4>' + title + '</h4><p>' + message + '</p></div>';
    document.body.appendChild(notification);
    setTimeout(function () { notification.remove(); }, 5000);
  }

  function showErrorMessage(title, message) {
    var notification = document.createElement('div');
    notification.className = 'notification error';
    notification.innerHTML = '<div class="notification-icon">!</div><div class="notification-content"><h4>' + title + '</h4><p>' + message + '</p></div>';
    document.body.appendChild(notification);
    setTimeout(function () { notification.remove(); }, 5000);
  }

  function drawPaymentOption(doc, x, y, letra, titulo, descuento, descripcion, cuotas, total, isSelected, isDiscount) {
    var cardWidth = 170;
    var cardHeight = 24;
    if (isSelected) {
      doc.setFillColor(253, 242, 248);
      doc.rect(x - 1.5, y - 1.5, cardWidth + 3, cardHeight + 3, 'F');
      doc.setDrawColor(255, 27, 141);
      doc.setLineWidth(1.2);
      doc.rect(x, y, cardWidth, cardHeight, 'S');
    } else {
      doc.setFillColor(255, 255, 255);
      doc.rect(x, y, cardWidth, cardHeight, 'F');
      doc.setDrawColor(220, 220, 220);
      doc.setLineWidth(0.4);
      doc.rect(x, y, cardWidth, cardHeight, 'S');
    }
    if (isSelected) { doc.setFillColor(255, 27, 141); } else { doc.setFillColor(200, 200, 200); }
    doc.rect(x, y, 3.5, cardHeight, 'F');
    if (isSelected) { doc.setFillColor(255, 27, 141); } else { doc.setFillColor(150, 150, 150); }
    doc.circle(x + 15, y + 12, 4.2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(letra, x + 15, y + 13.5, { align: 'center' });
    doc.setTextColor(isSelected ? 26 : 100, isSelected ? 26 : 100, isSelected ? 26 : 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(titulo.substring(0, 45), x + 24, y + 7.5);
    var badgeWidth = 26;
    if (isDiscount === true) {
      doc.setFillColor(37, 211, 102);
    } else if (isDiscount === false) {
      doc.setFillColor(255, 140, 66);
    } else {
      doc.setFillColor(158, 158, 158);
    }
    if (typeof doc.roundedRect === 'function') {
      doc.roundedRect(x + cardWidth - badgeWidth - 3, y + 3, badgeWidth, 6, 1.5, 1.5, 'F');
    } else {
      doc.rect(x + cardWidth - badgeWidth - 3, y + 3, badgeWidth, 6, 'F');
    }
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    var descuentoTexto = String(descuento).replace(/\u2212/g, '-').substring(0, 6);
    doc.text(descuentoTexto, x + cardWidth - badgeWidth / 2 - 3, y + 7, { align: 'center' });
    doc.setTextColor(isSelected ? 100 : 150, isSelected ? 100 : 150, isSelected ? 100 : 150);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.text(descripcion.substring(0, 50), x + 24, y + 13.5);
    if (isSelected) { doc.setTextColor(255, 27, 141); } else { doc.setTextColor(150, 150, 150); }
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    var cuotasLines = doc.splitTextToSize(cuotas, 128);
    doc.text(cuotasLines, x + 24, y + 18);
    doc.setTextColor(isSelected ? 120 : 170, isSelected ? 120 : 170, isSelected ? 120 : 170);
    doc.setFontSize(6);
    doc.setFont('helvetica', 'normal');
    doc.text(total, x + 24, y + 22);
  }

  function downloadQuotePdf(payload) {
    var JsPDFConstructor = (window.jspdf && (window.jspdf.jsPDF || window.jspdf.default)) || window.jsPDF;
    if (typeof JsPDFConstructor === 'undefined') {
      console.warn('jsPDF no cargado');
      return;
    }
    var bannerImg = new Image();
    bannerImg.onload = function () {
      try {
        var bannerW = 210;
        var bannerH = 55;
        var scalePx = 4;
        var cW = Math.round(bannerW * scalePx);
        var cH = Math.round(bannerH * scalePx);
        var c = document.createElement('canvas');
        c.width = cW;
        c.height = cH;
        var ctx = c.getContext('2d');
        var img = bannerImg;
        var scale = Math.max(cW / img.naturalWidth, cH / img.naturalHeight);
        var w = img.naturalWidth * scale;
        var h = img.naturalHeight * scale;
        var x = (cW - w) / 2;
        var y = (cH - h) / 2;
        ctx.drawImage(img, x, y, w, h);
        var bannerDataUrl = c.toDataURL('image/png');
        buildQuotePdf(payload, bannerDataUrl);
      } catch (e) {
        buildQuotePdf(payload, null);
      }
    };
    bannerImg.onerror = function () {
      buildQuotePdf(payload, null);
    };
    bannerImg.src = '/assets/images/illustrations/banner_coti.png';
  }

  function buildQuotePdf(payload, bannerDataUrl) {
    var JsPDFConstructor = (window.jspdf && (window.jspdf.jsPDF || window.jspdf.default)) || window.jsPDF;
    var doc = new JsPDFConstructor();
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var marginL = 20;
    var marginR = 20;
    var contentW = pageW - marginL - marginR;
    var MARGIN_BOTTOM = 36;
    var SECTION_SPACING = 10;
    var bannerH = 55;
    var MARGIN_TOP = bannerH + 14;
    var y = 0;

    function checkPageBreak(currentY, requiredSpace) {
      if (currentY + requiredSpace > pageH - MARGIN_BOTTOM) {
        doc.addPage();
        return 20;
      }
      return currentY;
    }

    var ref = 'Ref. ' + (payload.fecha ? new Date(payload.fecha).getTime().toString().slice(-8) : String(Date.now()).slice(-8));
    var fechaStr = payload.fecha ? new Date(payload.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }) : new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

    // === BANNER: solo imagen banner_coti.png cubriendo toda el área ===
    if (bannerDataUrl) {
      doc.addImage(bannerDataUrl, 'PNG', 0, 0, pageW, bannerH, undefined, 'FAST');
      doc.setFontSize(7);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(120, 120, 120);
      doc.text(ref + ' | ' + fechaStr, pageW / 2, bannerH + 6, { align: 'center' });
      y = MARGIN_TOP;
    } else {
      doc.setFillColor(10, 10, 10);
      doc.rect(0, 0, pageW, 48, 'F');
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(200, 200, 200);
      doc.text('Cotización', pageW / 2, 28, { align: 'center' });
      doc.text(ref + ' | ' + fechaStr, pageW / 2, 36, { align: 'center' });
      y = 48;
    }

    // === Información del cliente ===
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 27, 141);
    doc.text('Información del cliente', marginL, y);
    y += 1.5;
    doc.setDrawColor(255, 27, 141);
    doc.setLineWidth(0.4);
    doc.line(marginL, y, marginL + contentW, y);
    y += 8;

    var col1X = marginL;
    var col2X = marginL + contentW / 2 + 5;
    var rowH = 7;
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(117, 117, 117);
    doc.text('Empresa', col1X, y);
    doc.text('NIT', col2X, y);
    y += 4;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 26, 26);
    doc.text((payload.empresa || '—').toString().substring(0, 35), col1X, y);
    doc.text((payload.nit || '—').toString().substring(0, 28), col2X, y);
    y += rowH;
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(117, 117, 117);
    doc.text('Nombre', col1X, y);
    doc.text('Industria', col2X, y);
    y += 4;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 26, 26);
    doc.text((payload.nombre || '—').toString().substring(0, 35), col1X, y);
    doc.text(translateIndustry(payload.industria).substring(0, 28), col2X, y);
    y += rowH;
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(117, 117, 117);
    doc.text('Email', col1X, y);
    doc.text('Tamaño de empresa', col2X, y);
    y += 4;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 26, 26);
    doc.text((payload.email || '—').toString().substring(0, 35), col1X, y);
    doc.text((payload.tamanoEmpresa || '—').toString().substring(0, 28), col2X, y);
    y += rowH;
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(117, 117, 117);
    doc.text('Teléfono', col1X, y);
    doc.text('Personal en producción', col2X, y);
    y += 4;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 26, 26);
    doc.text((payload.telefono || '—').toString(), col1X, y);
    doc.text((payload.personalProduccion || '—').toString().substring(0, 28), col2X, y);
    y += 12;

    // === Desglose de implementación (tabla una sola fila) ===
    y = checkPageBreak(y, 60);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 27, 141);
    doc.text('Desglose de implementación', marginL, y);
    y += 1.5;
    doc.setDrawColor(255, 27, 141);
    doc.setLineWidth(0.4);
    doc.line(marginL, y, marginL + contentW, y);
    y += 6;

    var fi = industryFactors[payload.industria] != null ? industryFactors[payload.industria] : 1;
    var ft = companySizeFactors[payload.tamanoEmpresa] != null ? companySizeFactors[payload.tamanoEmpresa] : 1;
    var fp = productionStaffFactors[payload.personalProduccion] != null ? productionStaffFactors[payload.personalProduccion] : 1;
    var paso4 = QUOTE_BASE_PRICE * fi * ft * fp;
    var precioImplementacion = Math.round(paso4 * 100) / 100;

    if (typeof doc.autoTable === 'function') {
      doc.autoTable({
        startY: y,
        head: [['Concepto', 'Subtotal (USD)']],
        body: [['Implementación (precio base)', formatCurrency(precioImplementacion)]],
        margin: { left: marginL, right: marginR },
        tableWidth: contentW,
        theme: 'grid',
        headStyles: {
          fillColor: [255, 27, 141],
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 10,
          cellPadding: 5,
          halign: 'left'
        },
        bodyStyles: {
          textColor: [26, 26, 26],
          fontSize: 10,
          cellPadding: 5,
          fillColor: [255, 255, 255],
          lineColor: [230, 230, 230],
          lineWidth: 0.5,
          fontStyle: 'bold'
        },
        columnStyles: {
          0: { cellWidth: 110, halign: 'left' },
          1: { cellWidth: 70, halign: 'right' }
        }
      });
      y = doc.lastAutoTable.finalY + SECTION_SPACING;
    } else {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(26, 26, 26);
      doc.text('Implementación (precio base): ' + formatCurrency(precioImplementacion), marginL, y + 5);
      y += SECTION_SPACING + 8;
    }

    // === Opciones de pago disponibles (solo A, B, C) ===
    y = checkPageBreak(y, 88);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 27, 141);
    doc.text('Opciones de pago disponibles', marginL, y);
    y += 1.5;
    doc.setDrawColor(255, 27, 141);
    doc.setLineWidth(0.4);
    doc.line(marginL, y, marginL + contentW, y);
    y += 8;

    var opcionA = { total: Math.round(precioImplementacion * 0.9 * 100) / 100, cuotas: 1, cuotaValor: Math.round(precioImplementacion * 0.9 * 100) / 100 };
    var opcionB = { total: Math.round(precioImplementacion * 0.95 * 100) / 100, cuotas: 2, cuotaValor: Math.round((precioImplementacion * 0.95 / 2) * 100) / 100 };
    var opcionC = { total: Math.round(precioImplementacion * 1.2 * 100) / 100, cuotas: 12, cuotaValor: Math.round((precioImplementacion * 1.2 / 12) * 100) / 100 };

    drawPaymentOption(doc, marginL, y, 'A', '1 pago contado', '-10%', '100% antes de iniciar implementación', '1 pago de ' + formatCurrency(opcionA.cuotaValor), 'Total: ' + formatCurrency(opcionA.total), payload.opcionPago === 'A', true);
    y += 26;
    drawPaymentOption(doc, marginL, y, 'B', '2 pagos durante implementación', '-5%', '50% al inicio + 50% al finalizar', '2 cuotas de ' + formatCurrency(opcionB.cuotaValor) + ' cada una', 'Total: ' + formatCurrency(opcionB.total), payload.opcionPago === 'B', true);
    y += 26;
    drawPaymentOption(doc, marginL, y, 'C', '12 pagos mensuales', '+20%', 'Mensuales durante implementación', '12 cuotas de ' + formatCurrency(opcionC.cuotaValor) + ' cada una', 'Total: ' + formatCurrency(opcionC.total), payload.opcionPago === 'C', false);
    y += 26;
    y += SECTION_SPACING;

    // === Notas importantes ===
    y = checkPageBreak(y, 50);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 27, 141);
    doc.text('Notas importantes', marginL, y);
    y += 1.5;
    doc.setDrawColor(255, 27, 141);
    doc.setLineWidth(0.4);
    doc.line(marginL, y, marginL + contentW, y);
    y += 8;

    var notas = [
      'Esta es una estimación de acuerdo a algunos parámetros de la industria; sin embargo, la cotización oficial la debe entregar el equipo de ventas.',
      'Valor de configuración inicial, incluyendo puesta en marcha y capacitación.',
      'El licenciamiento de usuarios se cotiza por separado según número de licencias.',
      'Validez de esta cotización: 30 días calendario.',
      'Precios expresados en dólares estadounidenses (USD).',
      'Valores sujetos a IVA vigente según normativa tributaria aplicable.'
    ];
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(66, 66, 66);
    notas.forEach(function (nota, index) {
      doc.setFillColor(255, 27, 141);
      doc.circle(marginL + 2, y + 1.2, 1, 'F');
      var lines = doc.splitTextToSize(nota, 165);
      doc.text(lines, marginL + 6, y + 1.5);
      y += lines.length * 4 + 3;
    });
    y += 6;

    // === FOOTER similar al de la página (línea rosa, bloques Oficina / WhatsApp / Síguenos, copyright) ===
    var footerH = 32;
    var footerY = pageH - footerH;
    doc.setDrawColor(255, 27, 141);
    doc.setLineWidth(0.5);
    doc.line(0, footerY, pageW, footerY);
    doc.setFillColor(10, 10, 10);
    doc.rect(0, footerY, pageW, footerH, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.setTextColor(255, 27, 141);
    doc.text('OFICINA', marginL, footerY + 5);
    doc.text('WHATSAPP', marginL + 58, footerY + 5);
    doc.text('SÍGUENOS', marginL + 116, footerY + 5);
    doc.setFontSize(7);
    doc.setTextColor(200, 200, 200);
    doc.text('Av. El Dorado #68C - 61 — Of. 909 y 910', marginL, footerY + 11);
    doc.text('+57 321 2129898', marginL + 58, footerY + 11);
    doc.text('LinkedIn, Facebook, Instagram, TikTok', marginL + 116, footerY + 11);
    doc.setFontSize(6);
    doc.setTextColor(150, 150, 150);
    doc.text('© 2026 Quanta by Apalliance. Todos los derechos reservados.', marginL, footerY + 22);
    var now = new Date().toLocaleString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    doc.text('Generado el ' + now, pageW - marginR, footerY + 22, { align: 'right' });

    doc.save('cotizacion-quanta.pdf');
  }

  var quoteBtnPdf = document.getElementById('quoteBtnPdf');
  if (quoteBtnPdf) {
    quoteBtnPdf.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('\u2713 Cotización paso 2 - generando PDF y enviando');
      var payload = getQuotePayload();
      var originalText = quoteBtnPdf.textContent;
      quoteBtnPdf.style.pointerEvents = 'none';
      quoteBtnPdf.textContent = 'Generando y enviando...';

      var totalAPagar = payload.totalAPagar != null ? Number(payload.totalAPagar) : 0;
      var valorCuota = payload.valorCuota != null ? Number(payload.valorCuota) : 0;
      var numeroCuotas = payload.numeroCuotas != null ? Number(payload.numeroCuotas) : 0;
      var precioBase = payload.precioBase != null ? Number(payload.precioBase) : 0;

      var formData = {
        nombre: payload.nombre,
        correo: payload.email,
        numero: payload.telefono,
        cargo: 'No especificado',
        empresa: payload.empresa || 'No especificada',
        nit: payload.nit || 'No especificado',
        industria: payload.industria,
        tamanoEmpresa: payload.tamanoEmpresa,
        personalProduccion: payload.personalProduccion,
        precioBase: precioBase.toFixed(2),
        opcionPago: payload.opcionPago || '',
        totalAPagar: totalAPagar.toFixed(2),
        valorCuota: valorCuota.toFixed(2),
        numeroCuotas: numeroCuotas,
        mensaje: 'Cotización completa. Total: USD ' + totalAPagar.toFixed(2),
        fecha: new Date().toLocaleString('es-CO', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        fuente: 'Cotización - Paso 2',
        tipo: 'Cotización'
      };

      console.log('Datos cotización a enviar:', formData);
      console.log('Enviando a webhook...');
      fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(function (response) {
          console.log('Cotización enviada correctamente', response);
          showSuccessMessage('\u2713 \u00a1Cotización generada con \u00e9xito!', 'Hemos enviado tu cotización a nuestro equipo comercial. Te contactaremos pronto.');
        })
        .catch(function (err) {
          console.error('\u2717 Error cotización webhook:', err);
          showErrorMessage('No pudimos enviar la cotización automáticamente.', 'Pero puedes descargar el PDF ahora. Nos pondremos en contacto contigo.');
        })
        .finally(function () {
          try {
            if (typeof window.onQuoteDownloadPdf === 'function') {
              window.onQuoteDownloadPdf(payload);
            } else {
              downloadQuotePdf(payload);
            }
          } catch (err) {
            console.warn('PDF:', err);
          }
          quoteBtnPdf.style.pointerEvents = '';
          quoteBtnPdf.textContent = originalText;
          setTimeout(function () { showQuoteThankYouAndClose(); }, 80);
        });
    });
  }

  var quoteBtnWhatsapp = document.getElementById('quoteBtnWhatsapp');
  if (quoteBtnWhatsapp) {
    quoteBtnWhatsapp.addEventListener('click', function (e) {
      e.preventDefault();
      var href = quoteBtnWhatsapp.getAttribute('href');
      if (href) window.open(href, '_blank', 'noopener,noreferrer');
      showQuoteThankYouAndClose();
    });
  }

  // ===== ANIMACIÓN FADE-IN AL HACER SCROLL =====
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: mostrar todos al cargar
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ===== FORMULARIO DE CONTACTO (sección contacto) =====
  var MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/t13pwfqkes7brwbac19stmloeys2x421';
  var CONTACT_WEBHOOK_URL = 'https://hook.us2.make.com/oxe9w5t2u5pkgfn7oe0a71umt71ngfnh?Key=Content-Type&Value=application/json';

  window.handleContactSubmit = function (event) {
    event.preventDefault();
    console.log('\u2713 Formulario de contacto enviado');

    var form = event.target;
    var submitBtn = form.querySelector('.contact-submit-btn') || form.querySelector('.submit-btn');
    var btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
    var formMessage = form.querySelector('.form-message') || document.getElementById('contactFormMessage');

    var countryCode = (form.numero_country && form.numero_country.value) ? form.numero_country.value : '57';
    var numberDigits = (form.numero && form.numero.value) ? form.numero.value.replace(/\D/g, '') : '';
    var len = getPhoneLengthForCountry(countryCode);
    if (numberDigits.length < len.min || numberDigits.length > len.max) {
      if (formMessage) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'El teléfono debe tener entre ' + len.min + ' y ' + len.max + ' dígitos para el país seleccionado.';
        formMessage.style.display = 'block';
      }
      if (form.numero) form.numero.focus();
      return false;
    }

    if (formMessage) formMessage.style.display = 'none';
    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Enviando...';
    }
    var originalText = btnText ? btnText.textContent : 'Enviar mensaje';

    var fullPhone = numberDigits ? '+' + countryCode + ' ' + numberDigits.replace(/(\d{3})(?=\d)/g, '$1 ') : '';

    var formData = {
      nombre: form.nombre ? form.nombre.value.trim() : '',
      correo: form.correo ? form.correo.value.trim() : '',
      numero: fullPhone,
      cargo: form.cargo ? form.cargo.value.trim() : '',
      empresa: form.empresa ? form.empresa.value.trim() : '',
      nit: (form.nit && form.nit.value) ? form.nit.value.trim() : 'No proporcionado',
      mensaje: (form.mensaje && form.mensaje.value) ? form.mensaje.value.trim() : 'Sin mensaje',
      fecha: new Date().toLocaleString('es-CO', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      fuente: 'Formulario Contacto',
      tipo: 'Contacto'
    };

    console.log('Datos a enviar:', formData);

    function showResult(success, message) {
      if (formMessage) {
        formMessage.className = 'form-message ' + (success ? 'success' : 'error');
        formMessage.textContent = message;
        formMessage.style.display = 'block';
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Enviar mensaje';
      }
      setTimeout(function () {
        if (formMessage) formMessage.style.display = 'none';
      }, 5000);
    }

    console.log('Enviando a webhook...');
    fetch(CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(function (response) {
        console.log('Enviado correctamente', response);
        form.reset();
        showResult(true, '\u2713 \u00a1Mensaje enviado con \u00e9xito! Nos pondremos en contacto pronto.');
      })
      .catch(function (err) {
        console.error('\u2717 Error al enviar:', err);
        showResult(false, '\u2717 Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o cont\u00e1ctanos directamente.');
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (btnText) btnText.textContent = 'Enviar mensaje';
        }
      });

    return false;
  };

  // ===== UNIVERSIDAD QUANTA: filtros y modal de artículos =====
  var filterBtns = document.querySelectorAll('.filter-btn');
  var blogCards = document.querySelectorAll('.blog-card');

  if (filterBtns.length && blogCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var category = btn.getAttribute('data-category');
        blogCards.forEach(function (card) {
          var cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            card.style.animation = 'blogCardFadeIn 0.4s ease';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  document.body.addEventListener('click', function (e) {
    var cardBtn = e.target.closest('.card-btn[data-article]');
    if (!cardBtn) return;
    e.preventDefault();
    var articleId = cardBtn.getAttribute('data-article');
    if (articleId) openArticleModal(articleId);
  });

  window.closeArticleModal = function () {
    var modal = document.querySelector('.article-modal');
    if (modal) {
      modal.classList.remove('active');
      setTimeout(function () {
        modal.remove();
        document.body.style.overflow = '';
      }, 300);
    }
  };

  function openArticleModal(articleId) {
    var articles = {
      'mrp-que-es': {
        title: '¿Qué es un MRP y para qué sirve en manufactura?',
        category: 'MRP & ERP',
        content: '<h3>¿Qué es un MRP?</h3><p>Un MRP (Material Requirements Planning) es un sistema de planificación de requerimientos de materiales diseñado para ayudar a las empresas manufactureras a determinar qué producir, cuánto producir y cuándo producirlo.</p><p>Su función principal es asegurar que los materiales correctos estén disponibles en el momento adecuado, evitando tanto quiebres de inventario como excesos innecesarios de stock.</p><h3>Elementos clave de un MRP</h3><p>Un MRP trabaja a partir de tres elementos clave:</p><ul><li>La demanda (pedidos de clientes o pronósticos)</li><li>La lista de materiales (BOM – Bill of Materials)</li><li>Los inventarios actuales y tiempos de entrega</li></ul><p>Con esta información, el sistema calcula automáticamente las necesidades de compra y producción, generando órdenes planificadas que permiten mantener la operación fluida y alineada con la demanda real.</p><h3>Beneficios en manufactura</h3><p>En empresas manufactureras, un MRP permite:</p><ul><li>Reducir inventarios improductivos</li><li>Evitar paradas de planta por falta de materiales</li><li>Mejorar la planificación de producción</li><li>Aumentar la eficiencia operativa</li></ul><p>Sin embargo, el MRP se enfoca principalmente en materiales y producción. No integra de manera completa otras áreas como finanzas, ventas o talento humano.</p>'
      },
      'mrp-diferencias': {
        title: 'Diferencias entre un MRP I y MRP II',
        category: 'MRP & ERP',
        content: '<h3>¿Qué es un MRP I?</h3><p>El MRP I (Material Requirements Planning) es un sistema de planificación de requerimientos de materiales desarrollado para resolver un problema fundamental en manufactura: saber qué materiales se necesitan, en qué cantidad y en qué momento.</p><p>El MRP I se basa en tres elementos clave:</p><ul><li>Plan maestro de producción (qué se va a fabricar y cuándo)</li><li>Lista de materiales (BOM)</li><li>Inventarios disponibles y tiempos de entrega</li></ul><h3>¿Qué es un MRP II?</h3><p>El MRP II (Manufacturing Resource Planning) es una evolución del MRP I. Mientras que el primero se enfoca únicamente en materiales, el MRP II amplía el alcance hacia la planificación integral de los recursos de manufactura.</p><p>El MRP II no solo responde qué materiales se necesitan, sino también:</p><ul><li>Qué capacidad productiva está disponible</li><li>Qué carga de trabajo tendrá cada centro de trabajo</li><li>Cómo impactan los planes de producción en costos y finanzas</li><li>Cómo se alinean ventas, producción y compras</li></ul><h3>Diferencias clave</h3><p><strong>MRP I responde:</strong> ¿Tenemos los materiales necesarios?</p><p><strong>MRP II responde:</strong> ¿Tenemos los materiales, la capacidad y la viabilidad financiera para ejecutar el plan?</p>'
      },
      'erp-vs-mrp': {
        title: '¿Qué es un ERP y cómo se diferencia de un MRP?',
        category: 'MRP & ERP',
        content: '<h3>¿Qué es un ERP?</h3><p>Un ERP (Enterprise Resource Planning) es un sistema integral de gestión empresarial que conecta todas las áreas de la organización en una sola plataforma.</p><p>Mientras que un MRP se centra en la planificación de materiales y producción, un ERP abarca procesos como:</p><ul><li>Finanzas y contabilidad</li><li>Compras</li><li>Inventarios</li><li>Producción</li><li>Ventas</li><li>Talento humano</li><li>Reportes y analítica</li></ul><h3>La principal diferencia</h3><p><strong>El MRP responde:</strong> ¿Cómo planifico mis materiales y producción?</p><p><strong>El ERP responde:</strong> ¿Cómo gestiono toda mi empresa de forma integrada?</p><h3>Ejemplo práctico</h3><p>En una empresa manufacturera, un ERP permite que la información fluya entre áreas:</p><ul><li>Una orden de venta impacta producción</li><li>Producción impacta inventarios</li><li>Inventarios impactan compras</li><li>Todo impacta contabilidad en tiempo real</li></ul><p>Esto elimina reprocesos, reduce errores manuales y mejora la toma de decisiones con información centralizada.</p>'
      },
      'industria40': {
        title: 'Industria 4.0: qué es y cómo aplicarla en manufactura',
        category: 'Industria 4.0',
        content: '<h3>¿Qué es la Industria 4.0?</h3><p>La Industria 4.0 representa la cuarta revolución industrial. Se basa en la digitalización e integración inteligente de los procesos productivos mediante tecnología.</p><p>No se trata únicamente de automatización o robots. Se trata de conectar datos, procesos y personas para lograr mayor eficiencia, trazabilidad y control.</p><h3>Pilares de la Industria 4.0</h3><ul><li>Digitalización de procesos</li><li>Integración de información en tiempo real</li><li>Analítica de datos</li><li>Automatización inteligente</li><li>Trazabilidad completa de la operación</li></ul><h3>Aplicación práctica</h3><p>Para una empresa manufacturera, aplicar Industria 4.0 significa:</p><ul><li>Tener visibilidad en tiempo real de inventarios y producción</li><li>Eliminar procesos manuales y hojas de cálculo aisladas</li><li>Medir desempeño con indicadores confiables</li><li>Tomar decisiones basadas en datos, no en suposiciones</li></ul><p>La transformación no necesariamente comienza con grandes inversiones en maquinaria avanzada. Muchas veces empieza con algo más fundamental: <strong>ordenar y digitalizar la operación</strong>.</p>'
      },
      'quanta-industria40': {
        title: '¿Cómo encaja Quanta dentro de la Industria 4.0?',
        category: 'Industria 4.0',
        content: '<h3>Quanta: Tu puerta a la digitalización</h3><p>Quanta es una plataforma diseñada para ayudar a empresas manufactureras a dar el paso hacia la digitalización estructurada de su operación.</p><p>En el marco de la Industria 4.0, Quanta actúa como el sistema que integra y organiza los procesos clave del negocio:</p><ul><li>Planeación de producción</li><li>Control de inventarios</li><li>Gestión de compras</li><li>Órdenes de trabajo</li><li>Reportes e indicadores</li><li>Integración entre áreas</li><li>Gestión del ecosistema en la nube</li></ul><h3>Eliminando el caos operativo</h3><p>Al centralizar la información en una sola plataforma, Quanta elimina la dependencia de múltiples archivos de Excel y procesos manuales desconectados.</p><p>Esto permite:</p><ul><li>Trazabilidad completa desde la orden hasta la entrega</li><li>Mayor control sobre costos y márgenes</li><li>Planeación basada en datos reales</li><li>Escalabilidad operativa</li></ul><h3>El primer paso estructural</h3><p>La Industria 4.0 no es solo tecnología avanzada. Es orden, integración y visibilidad. Quanta habilita ese primer paso estructural que muchas empresas manufactureras necesitan para modernizar su gestión.</p>'
      },
      'mto-vs-mts': {
        title: 'Make to Order vs Make to Stock: el problema no es el modelo',
        category: 'Estrategia',
        content: '<h3>El dilema que no es dilema</h3><p>En teoría suena muy bonito: "nosotros somos Make to Order" o "trabajamos Make to Stock".</p><p>En la práctica, la mayoría de empresas no tiene claro qué está haciendo realmente. Y eso se nota en inventarios inflados, entregas tarde y discusiones internas entre ventas y producción.</p><h3>Make to Order</h3><p>Produces cuando tienes el pedido. No fabricas nada si no está vendido. Es típico cuando el producto cambia mucho o cuando cada cliente pide algo distinto.</p><p>El atractivo es obvio: no tienes producto terminado acumulado. No tienes plata quieta en una bodega.</p><p><strong>Pero aquí viene la parte incómoda:</strong> si no tienes control fino de materiales, tiempos y capacidad, el modelo se vuelve caótico. Empiezan las compras urgentes, los cambios de programación y las entregas que se corren.</p><h3>Make to Stock</h3><p>Produces antes de vender. Te anticipas a la demanda. Eso te permite responder rápido y no hacer esperar al cliente.</p><p>El riesgo aquí no es operativo, es financiero. Si proyectas mal, te quedas con inventario que no rota. Y ese inventario no solo ocupa espacio; está consumiendo flujo de caja todos los días.</p><h3>La verdadera causa del problema</h3><p>Lo curioso es que muchas empresas dicen que son Make to Order, pero igual tienen inventarios grandes. O dicen que son Make to Stock, pero viven produciendo por urgencias.</p><p><strong>En realidad, operan un híbrido, pero sin sistema que lo sostenga.</strong></p><h3>El modelo no es el enemigo</h3><p>Si sabes exactamente:</p><ul><li>Qué tienes disponible</li><li>Qué está comprometido</li><li>Qué capacidad real tienes esta semana</li><li>Cómo impacta cada orden en tus costos</li></ul><p>Entonces puedes operar cualquiera de los dos modelos con tranquilidad.</p><p>Pero si esa información está repartida en Excel, en la cabeza de alguien o en reportes atrasados, el modelo deja de ser estrategia y se vuelve improvisación.</p><p><strong>Y la improvisación casi siempre termina afectando el margen.</strong></p>'
      }
    };

    var article = articles[articleId];
    if (!article) return;

    var modal = document.createElement('div');
    modal.className = 'article-modal';
    modal.innerHTML = '<div class="article-modal-content">' +
      '<button type="button" class="article-close" aria-label="Cerrar">\u2715</button>' +
      '<div class="article-header">' +
        '<span class="article-category">' + article.category + '</span>' +
        '<h2 class="article-title">' + article.title + '</h2>' +
      '</div>' +
      '<div class="article-body">' + article.content + '</div>' +
      '<div class="article-footer">' +
        '<a href="https://calendly.com/jcaro-qpalliance/demo-quanta" target="_blank" rel="noopener" class="article-cta">\u00bfTe interesa implementar esto? Agenda una demo</a>' +
      '</div>' +
    '</div>';

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    var closeBtn = modal.querySelector('.article-close');
    if (closeBtn) closeBtn.addEventListener('click', window.closeArticleModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) window.closeArticleModal();
    });
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape') {
        window.closeArticleModal();
        document.removeEventListener('keydown', onEsc);
      }
    });

    requestAnimationFrame(function () {
      modal.classList.add('active');
    });
  }

  // ===== PARTÍCULAS FLOTANTES GLOBALES =====
  function createFloatingParticles() {
    var particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);

    for (var i = 0; i < 30; i++) {
      var particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  createFloatingParticles();
})();
