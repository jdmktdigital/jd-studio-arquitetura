// JD STUDIO IA — ARQUITETURA
// Base: página de moda (ju-studio-moda). Padrão em ../PADRAO_PAGINA.md

const WA_NUMBER = "5541992511523";

// ---------------------------------------------------------------------------
// 1. Textos
// ---------------------------------------------------------------------------
const translations = {
  pt: {
    nav_projetos: "Projetos",
    nav_metodo: "O método",
    nav_como: "Como funciona",
    nav_contato: "Contato",
    btn_whatsapp: "Falar no WhatsApp",
    menu_open: "Abrir menu",
    menu_close: "Fechar menu",

    hero_badge: "Direção Criativa para Arquitetura",
    hero_headline: "Antes de estar pronto, seu projeto já pode ser <span class=\"yellow-text\">vivenciado</span>.",
    hero_sub: "O render prova que o projeto existe. O filme faz querer morar nele.",
    hero_btn_projetos: "Ver os projetos",
    hero_strip: "Seu cliente aprova o que consegue sentir.",
    hero_scroll: "Role para ver os projetos",

    proj_badge: "Projetos",
    proj_title: "Quatro casas. Nenhuma foi <span class=\"yellow-text\">construída</span>.",
    proj_desc: "Filmes de conceito, feitos para mostrar o que a direção faz com um projeto antes da primeira pedra. Toque em uma casa para assistir com som.",
    grid_notice: "Projetos autorais de visualização, produzidos com IA e direção humana para demonstração de portfólio. Não representam obras executadas.",
    proj_cta: "Quero um filme assim para o meu projeto",
    meta_trilha: "Com trilha",

    met_badge: "Direção",
    met_title: "A diferença não está no render. Está na <span class=\"yellow-text\">direção</span>.",
    met_p1: "Todo escritório tem render. Poucos têm um filme que faz o cliente se imaginar dentro da casa.",
    met_p2: "A direção decide o que aparece primeiro, quanto tempo a luz fica na parede, quando alguém entra em cena e qual música sustenta o silêncio. É isso que transforma um tour em desejo.",
    met_cta: "Conversar sobre o meu projeto",
    pr_1_t: "Abre na textura",
    pr_1_p: "Pedra, madeira, água. O material aparece antes da fachada — é o que faz sentir antes de entender.",
    pr_2_t: "A luz conta a história",
    pr_2_p: "Da luz fria do espaço vazio à luz quente de quando alguém chega. A hora do dia vira narrativa.",
    pr_3_t: "A trilha sustenta o silêncio",
    pr_3_p: "Imagem e música montadas juntas. O ritmo é o que transforma um tour em vontade de estar lá.",
    pr_4_t: "Fiel ao seu projeto",
    pr_4_p: "Planta, proporção, material e acabamento preservados. A direção muda a percepção, não o projeto.",

    how_badge: "Como funciona",
    how_title: "Do arquivo do projeto ao filme <span class=\"yellow-text\">pronto</span>.",
    how_1_t: "Você envia o projeto",
    how_1_p: "Planta, render, modelo 3D ou referência — o que já existir.",
    how_2_t: "A direção é aprovada antes",
    how_2_p: "Luz, percurso, ritmo e trilha. Você aprova a direção e a imagem-chave antes da produção.",
    how_3_t: "Você apresenta",
    how_3_p: "Um filme pronto para a reunião com o cliente, o portfólio do escritório e as redes.",
    how_cta: "Enviar meu projeto",

    cta_badge: "Seu próximo projeto",
    cta_title: "Faça seu cliente <span class=\"yellow-text\">sentir</span> o projeto.",
    cta_desc: "Conte o que você está projetando e vamos conversar sobre o filme dele.",
    cta_btn_wa: "Falar no WhatsApp agora",
    cta_btn_ig: "Ver no Instagram",

    footer_outras: "Outras áreas",
    footer_moda: "Moda &amp; Acessórios →",
    footer_rights: "Todos os direitos reservados.",
    disclaimer: "Todos os projetos desta página são visualizações conceituais criadas pela JD Studio IA com inteligência artificial e direção humana, para demonstração de portfólio. Não representam obras executadas nem constituem informação técnica.",

    modal_sound: "Assista com som — a trilha faz parte do filme.",
    modal_btn: "Quero um filme assim",
    modal_close: "Fechar vídeo",

    wa_default: "Olá! Vim pelo site de arquitetura da JD Studio IA e quero conversar sobre um projeto.",
    wa_hero: "Olá! Quero ver o meu projeto de arquitetura em filme.",
    wa_projetos: "Olá! Vi os projetos no site da JD Studio IA e quero um filme assim para o meu.",
    wa_metodo: "Olá! Quero conversar sobre a direção de um filme para o meu projeto.",
    wa_como: "Olá! Quero enviar o meu projeto para a JD Studio IA.",
    wa_final: "Olá! Quero fazer o meu cliente sentir o projeto. Podemos conversar?",
    wa_modal: "Olá! Vi o filme {name} no site da JD Studio IA e quero um assim para o meu projeto."
  },

  en: {
    nav_projetos: "Projects",
    nav_metodo: "The method",
    nav_como: "How it works",
    nav_contato: "Contact",
    btn_whatsapp: "Chat on WhatsApp",
    menu_open: "Open menu",
    menu_close: "Close menu",

    hero_badge: "Creative Direction for Architecture",
    hero_headline: "Before it's built, your project can already be <span class=\"yellow-text\">experienced</span>.",
    hero_sub: "A render proves the project exists. A film makes people want to live in it.",
    hero_btn_projetos: "See the projects",
    hero_strip: "Your client approves what they can feel.",
    hero_scroll: "Scroll to see the projects",

    proj_badge: "Projects",
    proj_title: "Four houses. None of them was <span class=\"yellow-text\">built</span>.",
    proj_desc: "Concept films, made to show what direction does to a project before the first stone is laid. Tap a house to watch it with sound.",
    grid_notice: "Original visualization projects, produced with AI and human direction as a portfolio demonstration. They do not depict completed buildings.",
    proj_cta: "I want a film like this for my project",
    meta_trilha: "With soundtrack",

    met_badge: "Direction",
    met_title: "The difference isn't in the render. It's in the <span class=\"yellow-text\">direction</span>.",
    met_p1: "Every studio has renders. Few have a film that makes the client picture themselves inside the house.",
    met_p2: "Direction decides what appears first, how long the light rests on a wall, when someone enters the frame and which music holds the silence. That is what turns a walkthrough into desire.",
    met_cta: "Talk about my project",
    pr_1_t: "It opens on texture",
    pr_1_p: "Stone, wood, water. The material comes before the facade — it makes people feel before they understand.",
    pr_2_t: "Light tells the story",
    pr_2_p: "From the cool light of an empty room to the warm light of someone arriving. The time of day becomes the narrative.",
    pr_3_t: "The soundtrack holds the silence",
    pr_3_p: "Image and music cut together. Rhythm is what turns a walkthrough into wanting to be there.",
    pr_4_t: "True to your project",
    pr_4_p: "Plan, proportion, materials and finishes preserved. Direction changes the perception, not the project.",

    how_badge: "How it works",
    how_title: "From project files to a <span class=\"yellow-text\">finished</span> film.",
    how_1_t: "You send the project",
    how_1_p: "Plans, renders, a 3D model or references — whatever already exists.",
    how_2_t: "Direction is approved first",
    how_2_p: "Light, path, rhythm and music. You approve the direction and the key image before production starts.",
    how_3_t: "You present",
    how_3_p: "A film ready for the client meeting, your studio portfolio and social media.",
    how_cta: "Send my project",

    cta_badge: "Your next project",
    cta_title: "Make your client <span class=\"yellow-text\">feel</span> the project.",
    cta_desc: "Tell us what you're designing and let's talk about its film.",
    cta_btn_wa: "Chat on WhatsApp now",
    cta_btn_ig: "See on Instagram",

    footer_outras: "Other areas",
    footer_moda: "Fashion &amp; Accessories →",
    footer_rights: "All rights reserved.",
    disclaimer: "Every project on this page is a conceptual visualization created by JD Studio IA with artificial intelligence and human direction, as a portfolio demonstration. They do not depict completed buildings and are not technical information.",

    modal_sound: "Watch with sound — the music is part of the film.",
    modal_btn: "I want a film like this",
    modal_close: "Close video",

    wa_default: "Hi! I found JD Studio IA's architecture page and I'd like to talk about a project.",
    wa_hero: "Hi! I'd like to see my architecture project as a film.",
    wa_projetos: "Hi! I saw the projects on JD Studio IA's page and I want a film like this for mine.",
    wa_metodo: "Hi! I'd like to talk about directing a film for my project.",
    wa_como: "Hi! I'd like to send my project to JD Studio IA.",
    wa_final: "Hi! I want my client to feel the project. Can we talk?",
    wa_modal: "Hi! I watched the {name} film on JD Studio IA's page and I want one like it for my project."
  },

  es: {
    nav_projetos: "Proyectos",
    nav_metodo: "El método",
    nav_como: "Cómo funciona",
    nav_contato: "Contacto",
    btn_whatsapp: "Hablar por WhatsApp",
    menu_open: "Abrir menú",
    menu_close: "Cerrar menú",

    hero_badge: "Dirección Creativa para Arquitectura",
    hero_headline: "Antes de estar listo, tu proyecto ya puede ser <span class=\"yellow-text\">vivido</span>.",
    hero_sub: "El render prueba que el proyecto existe. El film hace querer vivir en él.",
    hero_btn_projetos: "Ver los proyectos",
    hero_strip: "Tu cliente aprueba lo que puede sentir.",
    hero_scroll: "Desliza para ver los proyectos",

    proj_badge: "Proyectos",
    proj_title: "Cuatro casas. Ninguna fue <span class=\"yellow-text\">construida</span>.",
    proj_desc: "Films conceptuales, hechos para mostrar lo que la dirección hace con un proyecto antes de la primera piedra. Toca una casa para verla con sonido.",
    grid_notice: "Proyectos de visualización propios, producidos con IA y dirección humana para demostración de portafolio. No representan obras ejecutadas.",
    proj_cta: "Quiero un film así para mi proyecto",
    meta_trilha: "Con música",

    met_badge: "Dirección",
    met_title: "La diferencia no está en el render. Está en la <span class=\"yellow-text\">dirección</span>.",
    met_p1: "Todo estudio tiene render. Pocos tienen un film que hace que el cliente se imagine dentro de la casa.",
    met_p2: "La dirección decide qué aparece primero, cuánto tiempo la luz se queda en la pared, cuándo alguien entra en escena y qué música sostiene el silencio. Eso convierte un recorrido en deseo.",
    met_cta: "Hablar sobre mi proyecto",
    pr_1_t: "Abre en la textura",
    pr_1_p: "Piedra, madera, agua. El material aparece antes que la fachada: hace sentir antes de entender.",
    pr_2_t: "La luz cuenta la historia",
    pr_2_p: "De la luz fría del espacio vacío a la luz cálida de cuando alguien llega. La hora del día se vuelve narrativa.",
    pr_3_t: "La música sostiene el silencio",
    pr_3_p: "Imagen y música montadas juntas. El ritmo convierte un recorrido en ganas de estar ahí.",
    pr_4_t: "Fiel a tu proyecto",
    pr_4_p: "Planta, proporción, material y acabado preservados. La dirección cambia la percepción, no el proyecto.",

    how_badge: "Cómo funciona",
    how_title: "Del archivo del proyecto al film <span class=\"yellow-text\">listo</span>.",
    how_1_t: "Envías el proyecto",
    how_1_p: "Planta, render, modelo 3D o referencia: lo que ya exista.",
    how_2_t: "La dirección se aprueba antes",
    how_2_p: "Luz, recorrido, ritmo y música. Apruebas la dirección y la imagen clave antes de la producción.",
    how_3_t: "Presentas",
    how_3_p: "Un film listo para la reunión con el cliente, el portafolio del estudio y las redes.",
    how_cta: "Enviar mi proyecto",

    cta_badge: "Tu próximo proyecto",
    cta_title: "Haz que tu cliente <span class=\"yellow-text\">sienta</span> el proyecto.",
    cta_desc: "Cuéntanos qué estás proyectando y hablemos de su film.",
    cta_btn_wa: "Hablar por WhatsApp ahora",
    cta_btn_ig: "Ver en Instagram",

    footer_outras: "Otras áreas",
    footer_moda: "Moda y Accesorios →",
    footer_rights: "Todos los derechos reservados.",
    disclaimer: "Todos los proyectos de esta página son visualizaciones conceptuales creadas por JD Studio IA con inteligencia artificial y dirección humana, para demostración de portafolio. No representan obras ejecutadas ni constituyen información técnica.",

    modal_sound: "Míralo con sonido: la música es parte del film.",
    modal_btn: "Quiero un film así",
    modal_close: "Cerrar video",

    wa_default: "¡Hola! Llegué por la página de arquitectura de JD Studio IA y quiero hablar sobre un proyecto.",
    wa_hero: "¡Hola! Quiero ver mi proyecto de arquitectura en un film.",
    wa_projetos: "¡Hola! Vi los proyectos en la página de JD Studio IA y quiero un film así para el mío.",
    wa_metodo: "¡Hola! Quiero hablar sobre la dirección de un film para mi proyecto.",
    wa_como: "¡Hola! Quiero enviar mi proyecto a JD Studio IA.",
    wa_final: "¡Hola! Quiero que mi cliente sienta el proyecto. ¿Hablamos?",
    wa_modal: "¡Hola! Vi el film {name} en la página de JD Studio IA y quiero uno así para mi proyecto."
  }
};

// ---------------------------------------------------------------------------
// 2. Projetos
// Formato e áudio medidos com ffprobe em 29/09/2026. `sound: false` = o arquivo
// final não tem faixa de áudio; nesse caso a página não promete trilha.
// ---------------------------------------------------------------------------
const projects = [
  {
    id: "moretti-home",
    name: "Moretti Home",
    src: "/videos/moretti-home.mp4",
    poster: "/posters/moretti-home.jpg",
    sound: true,
    type: { pt: "Residência tropical", en: "Tropical residence", es: "Residencia tropical" },
    line: {
      pt: "A casa respira antes de alguém chegar.",
      en: "The house breathes before anyone arrives.",
      es: "La casa respira antes de que alguien llegue."
    }
  },
  {
    id: "soleil-home",
    name: "Soleil Home",
    src: "/videos/soleil-home.mp4",
    poster: "/posters/soleil-home.jpg",
    sound: true,
    type: { pt: "Residência mediterrânea", en: "Mediterranean residence", es: "Residencia mediterránea" },
    line: {
      pt: "A luz faz a decoração.",
      en: "Light does the furnishing.",
      es: "La luz hace la decoración."
    }
  },
  {
    id: "casa-serena",
    name: "Casa Serena",
    src: "/videos/casa-serena.mp4",
    poster: "/posters/casa-serena.jpg",
    sound: false,
    type: { pt: "Villa à beira-mar", en: "Seaside villa", es: "Villa frente al mar" },
    line: {
      pt: "O pôr do sol também está na planta.",
      en: "The sunset is part of the plan.",
      es: "El atardecer también está en el plano."
    }
  },
  {
    id: "villa-maris",
    name: "Villa Maris",
    src: "/videos/villa-maris.mp4",
    poster: "/posters/villa-maris.jpg",
    sound: true,
    type: { pt: "Antes & depois", en: "Before & after", es: "Antes y después" },
    line: {
      pt: "Mesmo imóvel. Outra percepção.",
      en: "Same property. A different perception.",
      es: "Mismo inmueble. Otra percepción."
    }
  }
];

// ---------------------------------------------------------------------------
// 3. Estado e utilidades
// ---------------------------------------------------------------------------
const LANG_KEY = "jd-arq-lang";
const HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };
let currentLang = "pt";

const t = (key) => translations[currentLang][key] ?? translations.pt[key] ?? "";

const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Hover real só em desktop; no touch o hover dispara no toque e prende o vídeo
const HAS_HOVER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function isLightMode() {
  const c = navigator.connection;
  return Boolean(
    (c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ""))) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// ---------------------------------------------------------------------------
// 4. Grade de projetos
// ---------------------------------------------------------------------------
function renderGrid() {
  const grid = document.getElementById("video-grid");
  if (!grid) return;
  grid.innerHTML = "";

  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${p.name} — ${p.type[currentLang]}`);

    const sound = p.sound
      ? `<span class="meta-sound"><svg class="icon" aria-hidden="true"><use href="#i-sound"/></svg> ${escapeHtml(t("meta_trilha"))}</span>`
      : "";

    card.innerHTML = `
      <div class="video-preview-wrapper" style="background-image: url('${p.poster}')">
        <span class="video-badge">${escapeHtml(p.type[currentLang])}</span>
        <video muted loop playsinline preload="none" poster="${p.poster}"
               data-src="${p.src}" disablepictureinpicture aria-hidden="true"></video>
        <div class="video-play-overlay">
          <div class="play-icon-circle"><svg class="icon" aria-hidden="true"><use href="#i-play"/></svg></div>
        </div>
      </div>
      <div class="video-info">
        <div class="video-brand">${escapeHtml(p.type[currentLang])}</div>
        <h3 class="video-card-title">${escapeHtml(p.name)}</h3>
        <p class="video-line">${escapeHtml(p.line[currentLang])}</p>
        <div class="video-meta">
          <span>9:16 · Full HD</span>
          ${sound}
        </div>
      </div>
    `;

    const videoEl = card.querySelector("video");
    if (HAS_HOVER && !isLightMode()) {
      videoEl.addEventListener("playing", () => videoEl.classList.add("is-playing"));
      card.addEventListener("mouseenter", () => {
        if (!videoEl.src) videoEl.src = videoEl.dataset.src;
        videoEl.play().catch(() => {});
      });
      card.addEventListener("mouseleave", () => {
        videoEl.pause();
        videoEl.currentTime = 0;
        videoEl.classList.remove("is-playing");
      });
    }

    card.addEventListener("click", () => openModal(p, card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(p, card);
      }
    });

    grid.appendChild(card);
  });
}

// ---------------------------------------------------------------------------
// 5. Modal — o filme abre com som (o clique libera o áudio no navegador)
// ---------------------------------------------------------------------------
const modal = document.getElementById("video-modal");
const player = document.getElementById("modal-player");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalSound = document.getElementById("modal-sound-hint");
const modalClose = document.getElementById("modal-close");
const modalCta = document.getElementById("modal-cta-btn");
let lastFocus = null;

function openModal(p, origin) {
  lastFocus = origin || document.activeElement;
  player.src = p.src;
  player.poster = p.poster;
  player.muted = false;
  modalTitle.textContent = p.name;
  modalCategory.textContent = p.type[currentLang];
  modalSound.hidden = !p.sound;
  modalCta.href = waLink(t("wa_modal").replace("{name}", p.name));

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
  player.play().catch(() => {});
}

function closeModal() {
  if (!modal.classList.contains("active")) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "";
  player.pause();
  player.removeAttribute("src");
  player.load();
  if (lastFocus) lastFocus.focus();
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;
  if (e.key === "Escape") closeModal();
  // Foco preso dentro do modal
  if (e.key === "Tab") {
    const focusables = [...modal.querySelectorAll("button, a[href], video[controls]")];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// ---------------------------------------------------------------------------
// 6. Idioma — persistido e refletido no <html lang>
// ---------------------------------------------------------------------------
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = HTML_LANG[lang];
  try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", String(on));
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = translations[lang][el.dataset.i18n];
    if (value) el.innerHTML = value;
  });

  // Mensagem do WhatsApp acompanha o idioma e o lugar do botão
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(t(`wa_${a.dataset.wa}`) || t("wa_default"));
  });

  modalClose.setAttribute("aria-label", t("modal_close"));
  updateMenuLabel();
  renderGrid();
}

// ---------------------------------------------------------------------------
// 7. Header e menu do celular
// ---------------------------------------------------------------------------
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("mobile-toggle");
const navCenter = document.getElementById("nav-center");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

function updateMenuLabel() {
  const open = navCenter.classList.contains("mobile-active");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", t(open ? "menu_close" : "menu_open"));
}

toggle.addEventListener("click", () => {
  navCenter.classList.toggle("mobile-active");
  updateMenuLabel();
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    navCenter.classList.remove("mobile-active");
    updateMenuLabel();
  })
);

// ---------------------------------------------------------------------------
// 8. Vídeo de fundo — 720p no celular, 1080p no desktop, poster sempre visível
// ---------------------------------------------------------------------------
function initHeroVideo() {
  const v = document.getElementById("hero-video");
  if (!v || isLightMode()) return;

  const w = window.innerWidth || document.documentElement.clientWidth || screen.width || 1920;
  v.src = w <= 768 ? "/videos/hero-moretti-720.mp4" : "/videos/hero-moretti.mp4";

  const tryPlay = () => v.play().catch(() => {});
  v.addEventListener("loadeddata", tryPlay, { once: true });
  v.addEventListener("error", () => v.removeAttribute("src"), { once: true });
  tryPlay();

  // iOS em modo de economia bloqueia autoplay; o primeiro toque destrava
  ["touchstart", "click"].forEach((evt) =>
    document.addEventListener(evt, tryPlay, { once: true, passive: true })
  );
}

// ---------------------------------------------------------------------------
// Início
// ---------------------------------------------------------------------------
document.querySelectorAll(".lang-btn").forEach((btn) =>
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
);

let saved = null;
try { saved = localStorage.getItem(LANG_KEY); } catch (_) {}
setLanguage(saved && translations[saved] ? saved : "pt");
initHeroVideo();
