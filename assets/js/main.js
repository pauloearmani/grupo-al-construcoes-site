/* ============================================================
   GRUPO AL CONSTRUÇÕES — main.js
   Responsável por:
   1. Injetar a navbar em todas as páginas
   2. Injetar o footer em todas as páginas
   3. Sistema de troca de idiomas (PT / EN / ES)
   4. Menu mobile
   ============================================================ */

// ── 1. TRADUÇÕES ────────────────────────────────────────────

const T = {
  pt: {
    // Navbar
    nav_home:    "Home",
    nav_about:   "Sobre",
    nav_contact: "Contato",
    nav_cta:     "Solicitar Orçamento",

    // Footer
    footer_desc:   "Engenharia civil com foco em planejamento, qualidade e segurança em cada projeto que entregamos.",
    footer_addr:   "Rod. Joaquim Caiado ES 289, s/n° — Pechincha — Atílio Vivácqua/ES",
    footer_links:  "Links Rápidos",
    footer_social: "Siga nas Redes",
    footer_rights: "Todos os direitos reservados",

    // ── SOBRE ──
    hero_eyebrow_sobre: "✦ Quem Somos",
    hero_title_sobre:   "Sobre o Grupo AL Construções",
    hero_sub_sobre:     "Anos de experiência construindo com qualidade, segurança e compromisso com a excelência em cada projeto.",

    mvv_label: "Nossa Essência", mvv_title: "Missão, Visão e Valores",
    mvv_sub:   "Os princípios que guiam cada decisão, cada obra e cada relacionamento que construímos.",
    mvv_m_title: "Missão",   mvv_m_text: "Fornecer soluções de engenharia e construção civil com excelência técnica, priorizando gestão de projetos, segurança e sustentabilidade em todas as etapas.",
    mvv_v_title: "Visão",    mvv_v_text: "Ser referência no setor da construção civil, reconhecida pela qualidade das obras entregues, pela inovação e pelo compromisso com um ambiente mais sustentável.",
    mvv_val_title: "Valores",mvv_val_text: "Ética, segurança, compromisso com prazos, respeito às pessoas e ao meio ambiente — pilares inegociáveis em tudo o que fazemos.",

    gal_label: "Obras em movimento", gal_title: "Nossos Projetos em Campo",
    gal_sub:   "Registros do nosso dia a dia — execução com segurança, qualidade e compromisso com o prazo.",

    pil_label: "Diferenciais", pil_title: "Nossos Pilares",
    pil_sub:   "Os fundamentos que sustentam a qualidade e a confiabilidade de cada entrega.",
    pil_1_title: "Tecnologia",            pil_1_text: "Aplicação de processos e controle tecnológico em todas as etapas da obra, garantindo precisão e eficiência.",
    pil_2_title: "Insumos de Qualidade",  pil_2_text: "Materiais selecionados e fornecedores homologados para garantir durabilidade e alto padrão construtivo.",
    pil_3_title: "Planejamento",          pil_3_text: "Gestão rigorosa de prazo, custo e segurança, com foco total em resultados e satisfação do cliente.",

    how_label: "Metodologia", how_title: "Como Trabalhamos",
    how_sub:   "Processo estruturado e eficiente, do levantamento técnico até a entrega final.",
    step_lbl_1:"ETAPA 01", step_1: "Levantamento técnico e definição de escopo do projeto",
    step_lbl_2:"ETAPA 02", step_2: "Planejamento de prazos, custos e segurança (SSMA)",
    step_lbl_3:"ETAPA 03", step_3: "Mobilização de equipe e preparação do canteiro de obras",
    step_lbl_4:"ETAPA 04", step_4: "Execução com controle de qualidade rigoroso em campo",
    step_lbl_5:"ETAPA 05", step_5: "Controle tecnológico e monitoramento contínuo de SSMA",
    step_lbl_6:"ETAPA 06", step_6: "Comissionamento, entrega técnica e pós-obra",

    cta_title: "Pronto para começar seu projeto?",
    cta_sub:   "Fale conosco e receba uma proposta personalizada para sua obra.",
    cta_btn:   "Solicitar Orçamento",

    // ── HOME ──
    hero_eyebrow_home: "✦ Bem-vindo à A.L. Construções",
    hero_title_home:   "Construindo com Qualidade e Segurança",
    hero_sub_home:     "Soluções completas em engenharia civil para obras residenciais, comerciais e industriais.",

    // ── CONTATO ──
    hero_eyebrow_contato: "✦ Fale Conosco",
    hero_title_contato:   "Entre em Contato",
    hero_sub_contato:     "Estamos prontos para ouvir sobre seu projeto e apresentar a melhor solução.",
  },

  en: {
    nav_home:    "Home",
    nav_about:   "About Us",
    nav_contact: "Contact",
    nav_cta:     "Request a Quote",

    footer_desc:   "Civil engineering focused on planning, quality, and safety in every project we deliver.",
    footer_addr:   "Rod. Joaquim Caiado ES 289, s/n° — Pechincha — Atílio Vivácqua/ES",
    footer_links:  "Quick Links",
    footer_social: "Follow Us",
    footer_rights: "All rights reserved",

    hero_eyebrow_sobre: "✦ Who We Are",
    hero_title_sobre:   "About Grupo AL Construções",
    hero_sub_sobre:     "Years of experience building with quality, safety, and a commitment to excellence in every project.",

    mvv_label: "Our Essence", mvv_title: "Mission, Vision & Values",
    mvv_sub:   "The principles that guide every decision, every project, and every relationship we build.",
    mvv_m_title: "Mission", mvv_m_text: "To provide engineering and civil construction solutions with technical excellence, prioritizing project management, safety, and sustainability at every stage.",
    mvv_v_title: "Vision",  mvv_v_text: "To be a benchmark in the civil construction sector, recognized for the quality of delivered projects, innovation, and commitment to a more sustainable environment.",
    mvv_val_title: "Values",mvv_val_text: "Ethics, safety, commitment to deadlines, respect for people and the environment — non-negotiable pillars in everything we do.",

    gal_label: "Works in progress", gal_title: "Our Projects in the Field",
    gal_sub:   "Records from our daily operations — execution with safety, quality, and deadline commitment.",

    pil_label: "Our Differentials", pil_title: "Our Pillars",
    pil_sub:   "The foundations that uphold the quality and reliability of every delivery.",
    pil_1_title: "Technology",        pil_1_text: "Application of technological processes and controls at every stage, ensuring precision and efficiency.",
    pil_2_title: "Quality Materials", pil_2_text: "Selected materials and qualified suppliers to guarantee durability and high construction standards.",
    pil_3_title: "Planning",          pil_3_text: "Rigorous management of deadlines, costs, and safety, with a total focus on results and client satisfaction.",

    how_label: "Methodology", how_title: "How We Work",
    how_sub:   "A structured and efficient process, from technical assessment to final delivery.",
    step_lbl_1:"STEP 01", step_1: "Technical survey and project scope definition",
    step_lbl_2:"STEP 02", step_2: "Scheduling, cost planning and safety management",
    step_lbl_3:"STEP 03", step_3: "Team mobilization and construction site preparation",
    step_lbl_4:"STEP 04", step_4: "Execution with rigorous quality control on site",
    step_lbl_5:"STEP 05", step_5: "Technological control and continuous safety monitoring",
    step_lbl_6:"STEP 06", step_6: "Commissioning, technical handover and post-project support",

    cta_title: "Ready to start your project?",
    cta_sub:   "Contact us and receive a personalized proposal for your project.",
    cta_btn:   "Request a Quote",

    hero_eyebrow_home: "✦ Welcome to A.L. Construções",
    hero_title_home:   "Building with Quality and Safety",
    hero_sub_home:     "Complete civil engineering solutions for residential, commercial, and industrial projects.",

    hero_eyebrow_contato: "✦ Get in Touch",
    hero_title_contato:   "Contact Us",
    hero_sub_contato:     "We are ready to hear about your project and present the best solution.",
  },

  es: {
    nav_home:    "Inicio",
    nav_about:   "Sobre Nosotros",
    nav_contact: "Contacto",
    nav_cta:     "Solicitar Presupuesto",

    footer_desc:   "Ingeniería civil con enfoque en planificación, calidad y seguridad en cada proyecto que entregamos.",
    footer_addr:   "Rod. Joaquim Caiado ES 289, s/n° — Pechincha — Atílio Vivácqua/ES",
    footer_links:  "Enlaces Rápidos",
    footer_social: "Síguenos",
    footer_rights: "Todos los derechos reservados",

    hero_eyebrow_sobre: "✦ Quiénes Somos",
    hero_title_sobre:   "Sobre Grupo AL Construções",
    hero_sub_sobre:     "Años de experiencia construyendo con calidad, seguridad y compromiso con la excelencia en cada proyecto.",

    mvv_label: "Nuestra Esencia", mvv_title: "Misión, Visión y Valores",
    mvv_sub:   "Los principios que guían cada decisión, cada obra y cada relación que construimos.",
    mvv_m_title: "Misión",  mvv_m_text: "Proveer soluciones de ingeniería y construcción civil con excelencia técnica, priorizando la gestión de proyectos, la seguridad y la sostenibilidad en todas las etapas.",
    mvv_v_title: "Visión",  mvv_v_text: "Ser referencia en el sector de la construcción civil, reconocida por la calidad de las obras entregadas, la innovación y el compromiso con un entorno más sostenible.",
    mvv_val_title: "Valores",mvv_val_text: "Ética, seguridad, compromiso con los plazos, respeto a las personas y al medio ambiente — pilares innegociables en todo lo que hacemos.",

    gal_label: "Obras en movimiento", gal_title: "Nuestros Proyectos en Campo",
    gal_sub:   "Registros de nuestro día a día — ejecución con seguridad, calidad y compromiso con el plazo.",

    pil_label: "Diferenciales", pil_title: "Nuestros Pilares",
    pil_sub:   "Los fundamentos que sostienen la calidad y la confiabilidad de cada entrega.",
    pil_1_title: "Tecnología",             pil_1_text: "Aplicación de procesos y control tecnológico en todas las etapas de la obra, garantizando precisión y eficiencia.",
    pil_2_title: "Materiales de Calidad",  pil_2_text: "Materiales seleccionados y proveedores homologados para garantizar durabilidad y alto estándar constructivo.",
    pil_3_title: "Planificación",          pil_3_text: "Gestión rigurosa de plazos, costos y seguridad, con enfoque total en resultados y satisfacción del cliente.",

    how_label: "Metodología", how_title: "Cómo Trabajamos",
    how_sub:   "Proceso estructurado y eficiente, desde el levantamiento técnico hasta la entrega final.",
    step_lbl_1:"ETAPA 01", step_1: "Levantamiento técnico y definición del alcance del proyecto",
    step_lbl_2:"ETAPA 02", step_2: "Planificación de plazos, costos y seguridad (SSMA)",
    step_lbl_3:"ETAPA 03", step_3: "Movilización del equipo y preparación del sitio de obra",
    step_lbl_4:"ETAPA 04", step_4: "Ejecución con riguroso control de calidad en campo",
    step_lbl_5:"ETAPA 05", step_5: "Control tecnológico y monitoreo continuo de SSMA",
    step_lbl_6:"ETAPA 06", step_6: "Puesta en marcha, entrega técnica y soporte postventa",

    cta_title: "¿Listo para comenzar su proyecto?",
    cta_sub:   "Contáctenos y reciba una propuesta personalizada para su obra.",
    cta_btn:   "Solicitar Presupuesto",

    hero_eyebrow_home: "✦ Bienvenido a A.L. Construções",
    hero_title_home:   "Construyendo con Calidad y Seguridad",
    hero_sub_home:     "Soluciones completas de ingeniería civil para obras residenciales, comerciales e industriales.",

    hero_eyebrow_contato: "✦ Contáctenos",
    hero_title_contato:   "Póngase en Contacto",
    hero_sub_contato:     "Estamos listos para escuchar sobre su proyecto y presentar la mejor solución.",
  }
};

// ── 2. NAVBAR ───────────────────────────────────────────────

function injectNavbar(activePage) {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  nav.innerHTML = `
    <a href="index.html" class="nav-logo">
      <img src="assets/images/logo.png" alt="Grupo AL Construções" class="nav-logo-img"/>
      Grupo <span>AL Construções</span>
    </a>

    <div class="nav-right">
      <ul class="nav-links" id="nav-menu">
        <li><a href="index.html"   class="${activePage === 'home'    ? 'active' : ''}" data-i18n="nav_home">Home</a></li>
        <li><a href="sobre.html"   class="${activePage === 'sobre'   ? 'active' : ''}" data-i18n="nav_about">Sobre</a></li>
        <li><a href="contato.html" class="${activePage === 'contato' ? 'active' : ''}" data-i18n="nav_contact">Contato</a></li>
        <li><a href="contato.html" class="nav-cta" data-i18n="nav_cta">Solicitar Orçamento</a></li>
      </ul>

      <div class="lang-switcher" id="lang-switcher">
        <button class="lang-btn active" onclick="setLang('pt', this)" title="Português">🇧🇷</button>
        <button class="lang-btn"        onclick="setLang('en', this)" title="English">🇺🇸</button>
        <button class="lang-btn"        onclick="setLang('es', this)" title="Español">🇪🇸</button>
      </div>

      <button class="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Menu mobile
  document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    document.getElementById('nav-menu').classList.toggle('mobile-open');
    document.getElementById('lang-switcher').classList.toggle('mobile-open');
  });
}

// ── 3. FOOTER ───────────────────────────────────────────────

function injectFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>Grupo AL Construções</h3>
          <p data-i18n="footer_desc">Engenharia civil com foco em planejamento, qualidade e segurança em cada projeto que entregamos.</p>
          <div class="footer-contact">
            <div>📞 <a href="tel:+552835381204">(28) 3538-1204</a></div>
            <div>✉️ <a href="mailto:al_construcoes@hotmail.com">al_construcoes@hotmail.com</a></div>
            <div>📍 <span data-i18n="footer_addr">Rod. Joaquim Caiado ES 289, s/n° Localidade de Pechincha - Atílio Vivácqua/ES</span></div>
          </div>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_links">Links Rápidos</h4>
          <ul>
            <li><a href="index.html"   data-i18n="nav_home">Home</a></li>
            <li><a href="sobre.html"   data-i18n="nav_about">Sobre</a></li>
            <li><a href="contato.html" data-i18n="nav_contact">Contato</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_social">Siga nas Redes</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/gilcimar-silva-batista-177a653b7/" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        © 2026 Grupo AL Construções —
        <span data-i18n="footer_rights">Todos os direitos reservados</span>
      </div>
    </div>
  `;
}

// ── 4. SISTEMA DE IDIOMAS ────────────────────────────────────

let currentLang = localStorage.getItem('lang') || 'pt';

function setLang(lang, btn) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyLang();

  // Atualiza botão ativo
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    // Ativa o botão correto ao carregar a página
    document.querySelectorAll('.lang-btn').forEach(b => {
      if (b.getAttribute('onclick').includes(`'${lang}'`)) b.classList.add('active');
    });
  }

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
}

function applyLang() {
  const t = T[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
}

// ── 5. INICIALIZAÇÃO ─────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Detecta qual página está ativa pelo atributo no <body>
  const page = document.body.getAttribute('data-page') || 'home';

  injectNavbar(page);
  injectFooter();

  // Aplica idioma salvo
  setLang(currentLang, null);
});