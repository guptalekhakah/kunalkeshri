/* =====================================================================
   KUNAL KESHRI — PORTFOLIO
   PHASE 1 — cursor, nav, scroll-spy, scrubber rail
   (Phase 2 will add: project gallery + image pop-up lightbox)
   (Phase 3 will add: experience timeline reveal, contact interactions,
    scroll-reveal animations across all sections)
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Custom pen-tool cursor ---------------- */
  if (isFinePointer) {
    const nib = document.getElementById('cursorNib');
    const ring = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      nib.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    });

    function animateRing() {
      // lerp the ring toward the pointer for a smooth trailing feel
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets = 'a, button, .btn, .viewfinder, .fab-gallery, .gallery-item, [data-cursor-hover]';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverTargets)) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverTargets)) ring.classList.remove('is-hover');
    });
  }

  /* ---------------- Mobile nav toggle ---------------- */
  const menuToggle = document.getElementById('menuToggle');
  const playbackNav = document.getElementById('playbackNav');
  if (menuToggle && playbackNav) {
    menuToggle.addEventListener('click', () => {
      const open = playbackNav.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open);
    });
    playbackNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        playbackNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------- Build scrubber rail markers from sections ---------------- */
  const sections = Array.from(document.querySelectorAll('.section[data-timecode]'));
  const scrubberTrack = document.querySelector('.scrubber-track');
  const scrubberFill = document.getElementById('scrubberFill');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  const markerEls = sections.map(sec => {
    const mark = document.createElement('div');
    mark.className = 'rail-mark';
    mark.dataset.target = sec.id;
    mark.innerHTML = `<span class="rail-tc mono">${sec.dataset.timecode} ${sec.id.toUpperCase()}</span>`;
    scrubberTrack.appendChild(mark);
    return mark;
  });

  function positionMarkers() {
    const totalH = document.documentElement.scrollHeight - window.innerHeight;
    sections.forEach((sec, i) => {
      const pct = Math.min(100, Math.max(0, (sec.offsetTop / totalH) * 100));
      markerEls[i].style.top = pct + '%';
    });
  }
  positionMarkers();
  window.addEventListener('resize', positionMarkers);

  /* ---------------- Scroll spy: rail fill + active states ---------------- */
  function onScroll() {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
    if (scrubberFill) scrubberFill.style.height = pct + '%';

    let currentId = sections[0]?.id;
    const probeLine = scrollTop + window.innerHeight * 0.35;
    sections.forEach(sec => {
      if (sec.offsetTop <= probeLine) currentId = sec.id;
    });

    markerEls.forEach(m => m.classList.toggle('active', m.dataset.target === currentId));
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${currentId}`));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Featured Work: data + gallery render ---------------- */
  const projects = [
    {
      image: 'images/image2.jpg',
      title: "NEDFi Startup Investment Fest",
      role: 'Brand & Digital Creative Lead · via Priya Communication',
      year: 'Feb 2022 – Mar 2022',
      tags: ['Logo', 'Brochures', '60+ Social Assets', 'Motion'],
      desc: 'Designed the full brand identity — logo, banners, brochures — for North East Venture Fund\u2019s Startup Investment Fest, and produced 60+ social assets plus promotional motion content to draw startups and investors across Northeast India.'
    },
    {
      image: 'images/image3.jpg',
      title: 'BATIC 2024 — Stall & ID System',
      role: 'Brand & Systems Designer · via Priya Communication',
      year: '2024',
      tags: ['360° Stall Branding', 'Automated ID System'],
      desc: 'Executed 360° stall branding — banners, backdrops, signage — from concept to on-site install, and built an in-house automated ID card system with pre-loaded templates and auto-cropping that cut manual work by 90%.'
    },
    {
      image: 'images/Image4.jpg',
      title: 'CEO Assam — Election Awareness',
      role: 'Multimedia Designer, Public Awareness · via Priya Communication',
      year: '2021 – 2024',
      tags: ['PwD Accessibility', 'Explainer Video', 'Social Content'],
      desc: 'Produced PwD (Persons with Disabilities) awareness films promoting inclusive voting, election-procedure explainer videos, and social content for the Chief Electoral Officer, Assam.'
    },
    {
      image: 'images/image5.jpg',
      title: 'Ayushman Bharat — Train Branding',
      role: 'Brand & Production Lead · via Priya Communication',
      year: '2021 – 2024',
      tags: ['Train Wrap', 'Large-Format', 'On-Site Execution'],
      desc: 'Led end-to-end train branding for the Pradhan Mantri Jan Arogya Yojana campaign — measurement, design, production, and on-ground execution.'
    },
    {
      image: 'images/image6.jpg',
      title: 'Jal Jeevan Mission — Meghalaya',
      role: 'Video Documentarian & Motion Designer · via Priya Communication',
      year: '2021 – 2024',
      tags: ['Documentary', '2D/3D Animation', 'Field Shoot'],
      desc: 'Shot on-ground footage of water-supply projects across remote Meghalaya, edited it into short documentaries, and built 2D/3D explanatory animations to simplify technical content for public awareness. https://www.youtube.com/watch?v=0TlEs4Ue1Ho'
    },
    {
      image: 'images/image7.jpg',
      title: 'Purabi Dairy — 360° Branding',
      role: 'Brand & Digital Transformation Designer · via Priya Communication',
      year: '2021 – 2024',
      tags: ['Packaging', '3D Product Mockups', 'Social Reels'],
      desc: 'Delivered a full digital transformation — social videos, reels, promotional shoots, banners, standees, invitations — and revamped Purabi Dairy\u2019s milk and dairy product packaging with photorealistic 3D mockups.'
    }
  ];

  const workGrid = document.getElementById('workGrid');
  if (workGrid) {
    projects.forEach((p, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'work-card';
      card.style.animationDelay = (i * 0.08) + 's';
      card.dataset.index = i;
      card.innerHTML = `
        <div class="work-thumb">
          <span class="work-thumb-tc mono">${String(i + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span>
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <span class="work-thumb-expand mono">VIEW PROJECT</span>
        </div>
        <div class="work-body">
          <p class="work-role mono">${p.role.toUpperCase()}</p>
          <h3>${p.title}</h3>
          <p class="work-year mono">${p.year}</p>
        </div>`;
      card.addEventListener('click', () => openLightbox(i));
      workGrid.appendChild(card);
    });
  }

  /* ---------------- Lightbox: pop/slide open + prev/next + close ---------------- */
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = document.getElementById('lightboxImg');
    const lbTitle = document.getElementById('lightboxTitle');
    const lbRole = document.getElementById('lightboxRole');
    const lbYear = document.getElementById('lightboxYear');
    const lbDesc = document.getElementById('lightboxDesc');
    const lbTags = document.getElementById('lightboxTags');
    const lbTc = document.getElementById('lightboxTc');
    let currentIndex = 0;

    const renderLightbox = (i) => {
      const p = projects[i];
      lbImg.src = p.image;
      lbImg.alt = p.title;
      lbTitle.textContent = p.title;
      lbRole.textContent = p.role.toUpperCase();
      lbYear.textContent = p.year;
      lbDesc.textContent = p.desc;
      lbTc.textContent = `PLAY ${String(i + 1).padStart(2, '0')}:${String(projects.length).padStart(2, '0')}:00`;
      lbTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');
    };

    var openLightbox = (i) => {
      currentIndex = i;
      renderLightbox(i);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    const step = (delta) => {
      currentIndex = (currentIndex + delta + projects.length) % projects.length;
      renderLightbox(currentIndex);
    };

    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxBackdrop')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev')?.addEventListener('click', () => step(-1));
    document.getElementById('lightboxNext')?.addEventListener('click', () => step(1));

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
  }

  /* ---------------- Experience timeline ---------------- */
  const experience = [
    {
      role: 'Brand Identity', company: 'Bitezoria', range: 'May 2026 – Jul 2026',
      meta: 'Freelance · Delhi, India · On-site', current: true,
      points: ['Managed end-to-end interior development and site execution', 'Led all visual branding, print design, and digital LED content', 'Designed and implemented a custom point-of-sale system']
    },
    {
      role: 'Managing Partner', company: 'Dreamz Event', range: 'Apr 2025 – Feb 2026',
      meta: 'Branding & Event Solution · Full-time · India',
      points: ['Co-led a branding and event-solutions venture']
    },
    {
      role: 'Freelance Graphic Designer', company: 'Airbird Aviation', range: 'Dec 2024 – Present',
      meta: 'Freelance', current: true,
      points: ['Coordinate directly with the client, delivering urgent requests in 2–4 hour turnarounds']
    },
    {
      role: 'Brand Designer', company: 'Hotel Gateway Nalbari', range: 'Jan 2024 – Present',
      meta: 'Freelance · Complete Branding Design', current: true,
      points: ['Manage end-to-end client coordination and complete brand design']
    },
    {
      role: 'Creative & Execution', company: 'Karak Chaa', range: 'Feb 2022 – Apr 2026',
      meta: 'Part-time · Guwahati, Assam, India · Hybrid',
      points: ['Conducted location audits and 3D outlet modeling', 'Planned store structure and sizing', 'Delivered branding, packaging design, and product SOP design', 'Managed social media and digital design output']
    },
    {
      role: 'Multimedia Designer', company: 'Priya Communication', range: 'Feb 2021 – Nov 2024',
      meta: 'Freelance · Guwahati, Assam, India · Hybrid',
      points: ['Delivered campaigns, event branding, and advertising', 'Produced social media campaigns, documentaries, and informational videos']
    },
    {
      role: 'Multimedia Designer', company: 'Kuber Techno Craft', range: 'Aug 2019 – Dec 2021',
      meta: 'Full-time · Guwahati, Assam, India · On-site',
      points: ['Designed machinery catalogues and newspaper advertisements', 'Conducted site audits and kitchen plan design', 'Produced 3D plan designs']
    },
    {
      role: 'Professional Development', company: 'Career Break', range: 'Aug 2016 – May 2018',
      meta: 'Guwahati, Assam, India',
      points: ['Completed Retail Management certification', 'Led event management with a team', 'Volunteered with Feeding India', 'Traveled']
    },
    {
      role: 'Senior Graphic Designer', company: 'The Theme Box', range: 'Sep 2014 – Jul 2016',
      meta: 'Birthday / Anniversary Decoration at Home · Full-time · Guwahati, Assam, India · On-site',
      points: ['Delivered graphic design and product design', 'Operated laser-cutting and printing machines', 'Trained staff on CorelDRAW and machine operation']
    },
    {
      role: 'Graphic Designer', company: 'Smita Infotech', range: 'May 2012 – Aug 2014',
      meta: 'Part-time · Guwahati, Assam, India · On-site',
      points: ['Produced graphic design and catalogue design', 'Handled all types of print production']
    }
  ];

  const timelineEl = document.getElementById('timeline');
  if (timelineEl) {
    experience.forEach(job => {
      const item = document.createElement('div');
      item.className = 'timeline-item' + (job.current ? ' is-current' : '');
      item.setAttribute('data-reveal', '');
      item.innerHTML = `
        <span class="timeline-dot"></span>
        <span class="timeline-range mono">${job.range}${job.current ? ' · CURRENT' : ''}</span>
        <h3>${job.role}</h3>
        <span class="timeline-company">${job.company} — ${job.meta}</span>
        <ul>${job.points.map(pt => `<li>${pt}</li>`).join('')}</ul>`;
      timelineEl.appendChild(item);
    });
  }

  /* ---------------- Scroll-reveal (IntersectionObserver) ---------------- */
  const revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }

  /* ---------------- Recalculate rail markers now that dynamic
     content (gallery + timeline) has changed page height ---------------- */
  positionMarkers();
  onScroll();
  window.addEventListener('load', () => { positionMarkers(); onScroll(); });

  /* ---------------- Floating gallery button — "blast" then redirect ---------------- */
  const fab = document.getElementById('galleryFab');
  if (fab) {
    let blasting = false;
    fab.addEventListener('click', (e) => {
      e.preventDefault();
      if (blasting) return;
      blasting = true;

      const dest = fab.getAttribute('href') || 'gallery.html';
      const rect = fab.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // particle burst
      const burst = document.createElement('div');
      burst.className = 'fab-burst';
      burst.style.left = cx + 'px';
      burst.style.top = cy + 'px';
      const colors = ['var(--cyan)', 'var(--magenta)', 'var(--amber)'];
      for (let i = 0; i < 16; i++) {
        const p = document.createElement('span');
        const angle = (Math.PI * 2 * i) / 16;
        const dist = 70 + Math.random() * 50;
        p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        p.style.background = colors[i % colors.length];
        burst.appendChild(p);
      }
      document.body.appendChild(burst);
      fab.classList.add('is-blasting');

      setTimeout(() => { window.location.href = dest; }, 560);
    });
  }

});
