// JD STUDIO IA — ARQUITETURA (v2)
// Base: página de moda (ju-studio-moda). Padrão em ../PADRAO_PAGINA.md

const WA_NUMBER = "5541992511523";

// ---------------------------------------------------------------------------
// 1. Textos
// ---------------------------------------------------------------------------
const translations = {
  pt: {
    nav_projetos: "Projetos",
    nav_ba: "Antes e depois",
    nav_metodo: "Direção",
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
    scene_aria: "Ir para a cena",

    proj_badge: "Projetos",
    proj_title: "Quatro casas. Nenhuma foi <span class=\"yellow-text\">construída</span>.",
    proj_desc: "Filmes de conceito, feitos para mostrar o que a direção faz com um projeto antes da primeira pedra. Passe de uma casa à outra e abra o filme para assistir com som.",
    grid_notice: "Projetos autorais de visualização, produzidos com IA e direção humana para demonstração de portfólio. Não representam obras executadas.",
    proj_cta: "Quero um filme assim para o meu projeto",
    meta_trilha: "Com trilha",
    watch_sound: "Assistir com som",
    watch: "Assistir o filme",

    ba_badge: "Percepção de valor",
    ba_title: "Mesmo imóvel. Outra <span class=\"yellow-text\">percepção</span>.",
    ba_desc: "Arraste e veja a Villa Maris ir da obra bruta à casa ambientada. É o mesmo espaço, no mesmo enquadramento.",
    ba_tab_living: "Living",
    ba_tab_hall: "Hall",
    ba_before: "Antes",
    ba_after: "Depois",
    ba_cta: "Quero ver isso no meu projeto",
    ba_range: "Comparar antes e depois",

    met_badge: "Direção",
    met_title: "A diferença não está no render. Está na <span class=\"yellow-text\">direção</span>.",
    met_p1: "Todo escritório tem render. Poucos têm um filme que faz o cliente se imaginar dentro da casa.",
    met_p2: "A direção decide o que aparece primeiro, quanto tempo a luz fica na parede, quando alguém entra em cena e qual música sustenta o silêncio. É isso que transforma um tour em desejo.",
    pr_1_t: "Abre na textura",
    pr_1_p: "Pedra, madeira, água. O material aparece antes da fachada — é o que faz sentir antes de entender.",
    pr_2_t: "A luz conta a história",
    pr_2_p: "Da luz fria do espaço vazio à luz quente de quando alguém chega. A hora do dia vira narrativa.",
    pr_3_t: "A trilha sustenta o silêncio",
    pr_3_p: "Imagem e música montadas juntas. O ritmo é o que transforma um tour em vontade de estar lá.",
    pr_4_t: "Fiel ao seu projeto",
    pr_4_p: "Planta, proporção, material e acabamento preservados. A direção muda a percepção, não o projeto.",
    pr_1_l: "Ver os projetos",
    pr_2_l: "Ver o antes e depois",
    pr_3_l: "Assistir com som",
    pr_4_l: "Enviar meu projeto",

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
    wa_ba: "Olá! Vi o antes e depois da Villa Maris e quero ver isso no meu projeto.",
    wa_como: "Olá! Quero enviar o meu projeto para a JD Studio IA.",
    wa_final: "Olá! Quero fazer o meu cliente sentir o projeto. Podemos conversar?",
    wa_modal: "Olá! Vi o filme {name} no site da JD Studio IA e quero um assim para o meu projeto."
  },

  en: {
    nav_projetos: "Projects",
    nav_ba: "Before & after",
    nav_metodo: "Direction",
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
    scene_aria: "Go to scene",

    proj_badge: "Projects",
    proj_title: "Four houses. None of them was <span class=\"yellow-text\">built</span>.",
    proj_desc: "Concept films, made to show what direction does to a project before the first stone is laid. Move from one house to the next and open the film to watch it with sound.",
    grid_notice: "Original visualization projects, produced with AI and human direction as a portfolio demonstration. They do not depict completed buildings.",
    proj_cta: "I want a film like this for my project",
    meta_trilha: "With soundtrack",
    watch_sound: "Watch with sound",
    watch: "Watch the film",

    ba_badge: "Perceived value",
    ba_title: "Same property. A different <span class=\"yellow-text\">perception</span>.",
    ba_desc: "Drag to see Villa Maris go from bare structure to a lived-in home. It is the same space, from the same viewpoint.",
    ba_tab_living: "Living room",
    ba_tab_hall: "Hall",
    ba_before: "Before",
    ba_after: "After",
    ba_cta: "I want to see this in my project",
    ba_range: "Compare before and after",

    met_badge: "Direction",
    met_title: "The difference isn't in the render. It's in the <span class=\"yellow-text\">direction</span>.",
    met_p1: "Every studio has renders. Few have a film that makes the client picture themselves inside the house.",
    met_p2: "Direction decides what appears first, how long the light rests on a wall, when someone enters the frame and which music holds the silence. That is what turns a walkthrough into desire.",
    pr_1_t: "It opens on texture",
    pr_1_p: "Stone, wood, water. The material comes before the facade — it makes people feel before they understand.",
    pr_2_t: "Light tells the story",
    pr_2_p: "From the cool light of an empty room to the warm light of someone arriving. The time of day becomes the narrative.",
    pr_3_t: "The soundtrack holds the silence",
    pr_3_p: "Image and music cut together. Rhythm is what turns a walkthrough into wanting to be there.",
    pr_4_t: "True to your project",
    pr_4_p: "Plan, proportion, materials and finishes preserved. Direction changes the perception, not the project.",
    pr_1_l: "See the projects",
    pr_2_l: "See the before and after",
    pr_3_l: "Watch with sound",
    pr_4_l: "Send my project",

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
    wa_ba: "Hi! I saw the Villa Maris before and after and I want to see that in my project.",
    wa_como: "Hi! I'd like to send my project to JD Studio IA.",
    wa_final: "Hi! I want my client to feel the project. Can we talk?",
    wa_modal: "Hi! I watched the {name} film on JD Studio IA's page and I want one like it for my project."
  },

  es: {
    nav_projetos: "Proyectos",
    nav_ba: "Antes y después",
    nav_metodo: "Dirección",
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
    scene_aria: "Ir a la escena",

    proj_badge: "Proyectos",
    proj_title: "Cuatro casas. Ninguna fue <span class=\"yellow-text\">construida</span>.",
    proj_desc: "Films conceptuales, hechos para mostrar lo que la dirección hace con un proyecto antes de la primera piedra. Pasa de una casa a la otra y abre el film para verlo con sonido.",
    grid_notice: "Proyectos de visualización propios, producidos con IA y dirección humana para demostración de portafolio. No representan obras ejecutadas.",
    proj_cta: "Quiero un film así para mi proyecto",
    meta_trilha: "Con música",
    watch_sound: "Ver con sonido",
    watch: "Ver el film",

    ba_badge: "Percepción de valor",
    ba_title: "Mismo inmueble. Otra <span class=\"yellow-text\">percepción</span>.",
    ba_desc: "Arrastra y mira la Villa Maris pasar de la obra gruesa a la casa ambientada. Es el mismo espacio, desde el mismo encuadre.",
    ba_tab_living: "Living",
    ba_tab_hall: "Hall",
    ba_before: "Antes",
    ba_after: "Después",
    ba_cta: "Quiero ver esto en mi proyecto",
    ba_range: "Comparar antes y después",

    met_badge: "Dirección",
    met_title: "La diferencia no está en el render. Está en la <span class=\"yellow-text\">dirección</span>.",
    met_p1: "Todo estudio tiene render. Pocos tienen un film que hace que el cliente se imagine dentro de la casa.",
    met_p2: "La dirección decide qué aparece primero, cuánto tiempo la luz se queda en la pared, cuándo alguien entra en escena y qué música sostiene el silencio. Eso convierte un recorrido en deseo.",
    pr_1_t: "Abre en la textura",
    pr_1_p: "Piedra, madera, agua. El material aparece antes que la fachada: hace sentir antes de entender.",
    pr_2_t: "La luz cuenta la historia",
    pr_2_p: "De la luz fría del espacio vacío a la luz cálida de cuando alguien llega. La hora del día se vuelve narrativa.",
    pr_3_t: "La música sostiene el silencio",
    pr_3_p: "Imagen y música montadas juntas. El ritmo convierte un recorrido en ganas de estar ahí.",
    pr_4_t: "Fiel a tu proyecto",
    pr_4_p: "Planta, proporción, material y acabado preservados. La dirección cambia la percepción, no el proyecto.",
    pr_1_l: "Ver los proyectos",
    pr_2_l: "Ver el antes y después",
    pr_3_l: "Ver con sonido",
    pr_4_l: "Enviar mi proyecto",

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
    wa_ba: "¡Hola! Vi el antes y después de la Villa Maris y quiero ver eso en mi proyecto.",
    wa_como: "¡Hola! Quiero enviar mi proyecto a JD Studio IA.",
    wa_final: "¡Hola! Quiero que mi cliente sienta el proyecto. ¿Hablamos?",
    wa_modal: "¡Hola! Vi el film {name} en la página de JD Studio IA y quiero uno así para mi proyecto."
  }
};

// ---------------------------------------------------------------------------
// 2. Projetos
// Duração, formato e áudio medidos com ffprobe. `sound: false` = o arquivo final
// não tem faixa de áudio; nesse caso a página não promete trilha.
// ---------------------------------------------------------------------------
const projects = [
  {
    id: "moretti-home", name: "Moretti Home", duration: "0:21", sound: true,
    type: { pt: "Residência tropical", en: "Tropical residence", es: "Residencia tropical" },
    line: {
      pt: "A casa respira antes de alguém chegar.",
      en: "The house breathes before anyone arrives.",
      es: "La casa respira antes de que alguien llegue."
    }
  },
  {
    id: "soleil-home", name: "Solei Home", duration: "0:38", sound: true,
    type: { pt: "Residência mediterrânea", en: "Mediterranean residence", es: "Residencia mediterránea" },
    line: { pt: "A luz faz a decoração.", en: "Light does the furnishing.", es: "La luz hace la decoración." }
  },
  {
    id: "casa-serena", name: "Casa Serena", duration: "0:45", sound: false,
    type: { pt: "Villa à beira-mar", en: "Seaside villa", es: "Villa frente al mar" },
    line: {
      pt: "O pôr do sol também está na planta.",
      en: "The sunset is part of the plan.",
      es: "El atardecer también está en el plano."
    }
  },
  {
    id: "villa-maris", name: "Villa Maris", duration: "0:31", sound: true,
    type: { pt: "Antes & depois", en: "Before & after", es: "Antes y después" },
    line: {
      pt: "Mesmo imóvel. Outra percepção.",
      en: "Same property. A different perception.",
      es: "Mismo inmueble. Otra percepción."
    }
  }
];

// Cenas do filme de fundo. Cada cena dura 4s e se funde 0,8s com a seguinte,
// então a cena i começa em i × 3,2s (ver scratch do pipeline: CLIP=4, X=0.8).
const SCENE_STEP = 3.2;
const heroCuts = {
  wide: {
    src: "/videos/hero-seq.mp4",
    total: 20,
    scenes: [
      { name: "Solei Home", pt: "Chegada", en: "Arrival", es: "Llegada" },
      { name: "Solei Home", pt: "Jardim e piscina", en: "Garden and pool", es: "Jardín y piscina" },
      { name: "Solei Home", pt: "Living", en: "Living room", es: "Living" },
      { name: "Moretti Home", pt: "Matéria", en: "Material", es: "Materia" },
      { name: "Moretti Home", pt: "Presença", en: "Presence", es: "Presencia" },
      { name: "Moretti Home", pt: "Água", en: "Water", es: "Agua" }
    ]
  },
  tall: {
    src: "/videos/hero-seq-vertical.mp4",
    total: 16.8,
    scenes: [
      { name: "Casa Serena", pt: "Do alto", en: "From above", es: "Desde lo alto" },
      { name: "Casa Serena", pt: "Piscina", en: "Pool", es: "Piscina" },
      { name: "Casa Serena", pt: "Living", en: "Living room", es: "Living" },
      { name: "Casa Serena", pt: "Pôr do sol", en: "Sunset", es: "Atardecer" },
      { name: "Casa Serena", pt: "Anoitecer", en: "Dusk", es: "Anochecer" }
    ]
  }
};

// ---------------------------------------------------------------------------
// 3. Estado e utilidades
// ---------------------------------------------------------------------------
const LANG_KEY = "jd-arq-lang";
const HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };
let currentLang = "pt";

const t = (key) => translations[currentLang][key] ?? translations.pt[key] ?? "";
const waLink = (message) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const pad2 = (n) => String(n).padStart(2, "0");
const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const HAS_HOVER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const viewportW = () => window.innerWidth || document.documentElement.clientWidth || screen.width || 1920;

function isLightMode() {
  const c = navigator.connection;
  return Boolean((c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ""))) || REDUCED);
}

// Vídeos mudos que só carregam e tocam quando entram na tela
const loopObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach(({ target: v, isIntersecting }) => {
        if (isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.35 })
  : null;

function watchLoop(v) {
  if (!loopObserver || isLightMode()) return; // fica só o poster do contêiner
  v.addEventListener("playing", () => v.classList.add("is-playing"), { once: true });
  loopObserver.observe(v);
}

// ---------------------------------------------------------------------------
// 4. Hero — filme de várias cenas, com legenda e barras sincronizadas
// ---------------------------------------------------------------------------
const heroVideo = document.getElementById("hero-video");
const sceneCount = document.getElementById("scene-count");
const sceneLabel = document.getElementById("scene-label");
const sceneBars = document.getElementById("scene-bars");
let heroCut = heroCuts.wide;
let sceneIdx = -1;

function paintSceneLabel(i) {
  const s = heroCut.scenes[i];
  sceneCount.textContent = `${pad2(i + 1)} / ${pad2(heroCut.scenes.length)}`;
  sceneLabel.textContent = `${s.name} · ${s[currentLang]}`;
}

function buildSceneBars() {
  sceneBars.innerHTML = "";
  heroCut.scenes.forEach((s, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "scene-bar";
    b.setAttribute("aria-label", `${t("scene_aria")} ${i + 1}: ${s.name} · ${s[currentLang]}`);
    b.innerHTML = "<i><b></b></i>";
    b.addEventListener("click", () => {
      if (!heroVideo.src) return;
      heroVideo.currentTime = i * SCENE_STEP + 0.85; // logo depois da fusão
      heroVideo.play().catch(() => {});
    });
    sceneBars.appendChild(b);
  });
}

function tickScenes() {
  const time = heroVideo.currentTime || 0;
  const n = heroCut.scenes.length;
  const i = clamp(Math.floor(time / SCENE_STEP), 0, n - 1);
  if (i !== sceneIdx) { sceneIdx = i; paintSceneLabel(i); }
  sceneBars.querySelectorAll("b").forEach((fill, k) => {
    const end = k === n - 1 ? heroCut.total : (k + 1) * SCENE_STEP;
    const p = clamp((time - k * SCENE_STEP) / (end - k * SCENE_STEP), 0, 1);
    fill.style.transform = `scaleX(${p})`;
  });
  requestAnimationFrame(tickScenes);
}

function initHero() {
  heroCut = viewportW() <= 768 ? heroCuts.tall : heroCuts.wide;
  buildSceneBars();
  paintSceneLabel(0);
  if (isLightMode()) { sceneBars.hidden = true; return; } // fica o poster, sem vídeo

  heroVideo.src = heroCut.src;
  const tryPlay = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener("loadeddata", tryPlay, { once: true });
  heroVideo.addEventListener("error", () => heroVideo.removeAttribute("src"), { once: true });
  tryPlay();
  // iOS em modo de economia bloqueia autoplay; o primeiro toque destrava
  ["touchstart", "click"].forEach((evt) =>
    document.addEventListener(evt, tryPlay, { once: true, passive: true })
  );
  requestAnimationFrame(tickScenes);
}

// ---------------------------------------------------------------------------
// 5. Vitrine — a rolagem vertical passa de uma casa à outra na horizontal
// ---------------------------------------------------------------------------
const showcase = document.getElementById("showcase");
const track = document.getElementById("showcase-track");
const showcaseBar = document.getElementById("showcase-bar");
let travel = 0;

function renderShowcase() {
  track.innerHTML = "";
  projects.forEach((p, i) => {
    const panel = document.createElement("article");
    panel.className = "film-panel";
    const sound = p.sound
      ? `<span class="meta-sound"><svg class="icon" aria-hidden="true"><use href="#i-sound"/></svg> ${escapeHtml(t("meta_trilha"))}</span>`
      : "";
    panel.innerHTML = `
      <div class="panel-text">
        <span class="panel-num" aria-hidden="true">${pad2(i + 1)}</span>
        <div class="video-brand">${escapeHtml(p.type[currentLang])}</div>
        <h3 class="panel-name">${escapeHtml(p.name)}</h3>
        <p class="panel-line">${escapeHtml(p.line[currentLang])}</p>
        <div class="panel-meta">
          <span>${p.duration}</span>
          <span>9:16 · Full HD</span>
          ${sound}
        </div>
        <button class="btn-primary panel-btn" type="button">
          <svg class="icon" aria-hidden="true"><use href="#i-play"/></svg>
          <span>${escapeHtml(t(p.sound ? "watch_sound" : "watch"))}</span>
        </button>
      </div>
      <div class="panel-film" style="background-image: url('/posters/${p.id}.jpg')">
        <video class="lazy-loop" muted loop playsinline preload="none"
               data-src="/videos/prev-${p.id}.mp4" disablepictureinpicture aria-hidden="true"></video>
        <div class="video-play-overlay">
          <div class="play-icon-circle"><svg class="icon" aria-hidden="true"><use href="#i-play"/></svg></div>
        </div>
      </div>
    `;
    const btn = panel.querySelector(".panel-btn");
    btn.addEventListener("click", () => openModal(p, btn));
    panel.querySelector(".panel-film").addEventListener("click", () => openModal(p, btn));
    watchLoop(panel.querySelector("video"));
    track.appendChild(panel);
  });
  layoutShowcase();
}

// Trava só onde faz sentido: tela larga, mouse, sem redução de movimento
const canPin = () => HAS_HOVER && !REDUCED && viewportW() > 900;

function layoutShowcase() {
  if (!canPin()) {
    showcase.classList.add("is-free");
    showcase.style.height = "";
    track.style.transform = "";
    travel = 0;
    return;
  }
  showcase.classList.remove("is-free");
  travel = Math.max(0, track.scrollWidth - viewportW());
  showcase.style.height = `${window.innerHeight + travel}px`;
  scrollShowcase();
}

function scrollShowcase() {
  if (!travel) return;
  const rect = showcase.getBoundingClientRect();
  const p = clamp(-rect.top / (showcase.offsetHeight - window.innerHeight), 0, 1);
  track.style.transform = `translate3d(${-p * travel}px, 0, 0)`;
  showcaseBar.style.transform = `scaleX(${p})`;
}

// ---------------------------------------------------------------------------
// 6. Antes e depois
// ---------------------------------------------------------------------------
const ba = document.getElementById("ba");
const baRange = document.getElementById("ba-range");
const baBefore = document.getElementById("ba-before");
const baAfter = document.getElementById("ba-after");
const BA_ALT = {
  living: ["Villa Maris — living em obra bruta", "Villa Maris — living ambientado"],
  hall: ["Villa Maris — hall em obra bruta", "Villa Maris — hall ambientado"]
};

baRange.addEventListener("input", () => ba.style.setProperty("--pos", `${baRange.value}%`));

document.querySelectorAll(".ba-tab").forEach((tab) =>
  tab.addEventListener("click", () => {
    const pair = tab.dataset.pair;
    document.querySelectorAll(".ba-tab").forEach((b) => {
      const on = b === tab;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    baBefore.src = `/antes-depois/${pair}-antes.webp`;
    baAfter.src = `/antes-depois/${pair}-depois.webp`;
    [baBefore.alt, baAfter.alt] = BA_ALT[pair];
    baRange.value = 50;
    ba.style.setProperty("--pos", "50%");
  })
);

// ---------------------------------------------------------------------------
// 7. Modal — o filme abre com som (o clique libera o áudio no navegador)
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
  player.src = `/videos/${p.id}.mp4`;
  player.poster = `/posters/${p.id}.jpg`;
  player.muted = false;
  modalTitle.textContent = p.name;
  modalCategory.textContent = p.type[currentLang];
  modalSound.hidden = !p.sound;
  modalCta.href = waLink(t("wa_modal").replace("{name}", p.name));

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  heroVideo.pause();
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
  if (heroVideo.src) heroVideo.play().catch(() => {});
  if (lastFocus) lastFocus.focus();
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") { // foco preso dentro do modal
    const focusables = [...modal.querySelectorAll("button, a[href], video[controls]")];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

document.querySelectorAll("[data-open]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const p = projects.find((x) => x.id === btn.dataset.open);
    if (p) openModal(p, btn);
  })
);

// ---------------------------------------------------------------------------
// 8. Idioma — persistido e refletido no <html lang>
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
  baRange.setAttribute("aria-label", t("ba_range"));
  updateMenuLabel();
  buildSceneBars();
  paintSceneLabel(Math.max(0, sceneIdx));
  renderShowcase();
}

// ---------------------------------------------------------------------------
// 9. Header e menu do celular
// ---------------------------------------------------------------------------
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("mobile-toggle");
const navCenter = document.getElementById("nav-center");

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

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  scrollShowcase();
}, { passive: true });

window.addEventListener("resize", layoutShowcase);
window.addEventListener("load", layoutShowcase); // fontes e imagens mudam a largura da faixa

// ---------------------------------------------------------------------------
// Início
// ---------------------------------------------------------------------------
document.querySelectorAll(".lang-btn").forEach((btn) =>
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
);

let saved = null;
try { saved = localStorage.getItem(LANG_KEY); } catch (_) {}
initHero();
setLanguage(saved && translations[saved] ? saved : "pt");
document.querySelectorAll("#metodo .lazy-loop, #contato .lazy-loop").forEach(watchLoop);
