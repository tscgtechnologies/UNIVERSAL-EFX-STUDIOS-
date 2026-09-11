/**
 * UNIVERSAL EFX STUDIOS PVT LTD
 * Client-Side JavaScript (Vanilla JS - No Frameworks)
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNav();
  initActiveNavLink();
  initHeroVideo();
  initBeforeAfterSlider();
  initPortfolioModal();
  initPortfolioFilter();
  initContactForm();
  initFaqAccordion();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Sticky Header
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (!hamburgerBtn || !mobileDrawer) return;

  const toggleMenu = () => {
    const isOpen = mobileDrawer.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    hamburgerBtn.classList.add("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileDrawer.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    hamburgerBtn.classList.remove("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  hamburgerBtn.addEventListener("click", toggleMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close on Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Before / After VFX Comparison Slider
   -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
  const container = document.getElementById("beforeAfterContainer");
  const beforeWrapper = document.getElementById("beforeWrapper");
  const sliderHandle = document.getElementById("sliderHandle");

  if (!container || !beforeWrapper || !sliderHandle) return;

  let isDragging = false;

  const updateSliderPosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;

    // Clamp between 2% and 98%
    let percentage = (offsetX / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;

    beforeWrapper.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    sliderHandle.style.left = `${percentage}%`;
    sliderHandle.setAttribute("aria-valuenow", Math.round(percentage).toString());
  };

  // Mouse events
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) isDragging = false;
  });

  // Touch events (Mobile & Tablet)
  container.addEventListener(
    "touchstart",
    (e) => {
      isDragging = true;
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    },
    { passive: true }
  );

  window.addEventListener("touchend", () => {
    if (isDragging) isDragging = false;
  });

  // Keyboard accessibility
  sliderHandle.setAttribute("tabindex", "0");
  sliderHandle.setAttribute("role", "slider");
  sliderHandle.setAttribute("aria-label", "VFX Before and After Comparison Slider");
  sliderHandle.setAttribute("aria-valuemin", "0");
  sliderHandle.setAttribute("aria-valuemax", "100");
  sliderHandle.setAttribute("aria-valuenow", "50");

  sliderHandle.addEventListener("keydown", (e) => {
    const currentPos = parseFloat(sliderHandle.style.left || "50");
    let newPos = currentPos;

    if (e.key === "ArrowLeft") {
      newPos = Math.max(2, currentPos - 5);
    } else if (e.key === "ArrowRight") {
      newPos = Math.min(98, currentPos + 5);
    }

    if (newPos !== currentPos) {
      e.preventDefault();
      beforeWrapper.style.clipPath = `inset(0 ${100 - newPos}% 0 0)`;
      sliderHandle.style.left = `${newPos}%`;
      sliderHandle.setAttribute("aria-valuenow", Math.round(newPos).toString());
    }
  });
}

/* --------------------------------------------------------------------------
   4. Portfolio Projects Modal
   -------------------------------------------------------------------------- */
const PORTFOLIO_DATA = {
  roto: {
    category: "Rotoscoping",
    title: "Project 01: Character & Hair Isolation",
    image: "assets/images/project-rotoscopy.jpg",
    description:
      "High-precision rotoscoping shot requiring pixel-accurate edge extraction of an actress in fast motion. Intricate multi-layered Bezier splines capture organic hair movement, garment silhouettes, and motion blur boundaries, producing production-ready alpha mattes for complex VFX integration.",
    specs: [
      { label: "Format / Resolution", value: "4K DCI (4096 x 2160)" },
      { label: "Core Techniques", value: "Hair Edge Work, Motion Blur Mattes" },
      { label: "Industry Pipeline", value: "Silhouette FX, Foundry Nuke, Mocha" },
    ],
  },
  cleanup: {
    category: "Cleanup / Paint",
    title: "Project 02: Rig, Crane & Wire Removal",
    image: "assets/images/project-cleanup.jpg",
    description:
      "Advanced plate restoration and rig cleanup on an explosive tactical sequence. Digital paint-out of heavy camera cranes, overhead safety wires, boom microphones, and track rails while seamlessly reconstructing dynamic desert terrain, smoke plumes, and authentic film grain texture.",
    specs: [
      { label: "Format / Resolution", value: "4K UHD Cinema Plate" },
      { label: "Core Techniques", value: "Wire Removal, Plate Restoration, Clean Plates" },
      { label: "Industry Pipeline", value: "Foundry Nuke, Photoshop, Mocha Pro" },
    ],
  },
  matchmove: {
    category: "Matchmove",
    title: "Project 03: 3D Camera & Scene Tracking",
    image: "assets/images/project-matchmove.jpg",
    description:
      "Precision 3D camera matchmove solving for a bustling urban intersection shot on anamorphic glass. Generated sub-pixel accurate 3D point clouds, solved lens distortion profiles, and reconstructed planar ground coordinates to ensure seamless placement of CG assets with zero camera slip.",
    specs: [
      { label: "Format / Resolution", value: "Arri Alexa Mini LF 4.5K" },
      { label: "Core Techniques", value: "3D Camera Solving, Lens Distortion, Survey Points" },
      { label: "Industry Pipeline", value: "3DEqualizer, PFTrack, Autodesk Maya" },
    ],
  },
  compositing: {
    category: "Compositing",
    title: "Project 04: Multi-Pass CG Robotic Integration",
    image: "assets/images/project-compositing.jpg",
    description:
      "Full multi-pass CGI integration blending a complex mechanical robotic unit into wet city street footage. Composited beauty, diffuse, specular, ambient occlusion, depth passes, and contact shadows with hyper-accurate reflections of surrounding neon signage and ground moisture.",
    specs: [
      { label: "Format / Resolution", value: "4K DCI Multi-Channel EXR" },
      { label: "Core Techniques", value: "CG Integration, Keying, Color Matching" },
      { label: "Industry Pipeline", value: "Foundry NukeX, ACEScg Color Pipeline" },
    ],
  },
  vfx: {
    category: "VFX Shot",
    title: "Project 05: Sci-Fi Environment Extension",
    image: "assets/images/project-vfx-shot.jpg",
    description:
      "Epic matte painting and 2.5D camera projection shot extending a practical coastal cliff into a towering futuristic metropolis. Integrated golden hour volumetric atmospheric fog, complex architectural lighting passes, and airborne traffic matching the live-action plate's camera move.",
    specs: [
      { label: "Format / Resolution", value: "Cinemascope 2.39:1 (4K Master)" },
      { label: "Core Techniques", value: "Digital Matte Painting, 2.5D Projection" },
      { label: "Industry Pipeline", value: "Photoshop DMP, Nuke, Maya" },
    ],
  },
  post: {
    category: "Post Production",
    title: "Project 06: Commercial Automotive Finishing",
    image: "assets/images/project-post-production.jpg",
    description:
      "Commercial grade post-production finishing for high-speed automotive film. Detailed surface cleanups, enhanced metallic paint reflections, anamorphic streak flares, and calibrated film color grading tailored for luxury commercial broadcast.",
    specs: [
      { label: "Format / Resolution", value: "UHD 3840 x 2160 Broadcast Master" },
      { label: "Core Techniques", value: "Beauty Retouch, Lens Flares, Color Timing" },
      { label: "Industry Pipeline", value: "DaVinci Resolve Studio, Foundry Nuke" },
    ],
  },
};

function initPortfolioModal() {
  const modalBackdrop = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalImage = document.getElementById("modalImage");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalSpecsContainer = document.getElementById("modalSpecsContainer");

  const cards = document.querySelectorAll(".portfolio-card");
  if (!modalBackdrop || !cards.length) return;

  const openModal = (projectId) => {
    const data = PORTFOLIO_DATA[projectId];
    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;

    modalSpecsContainer.innerHTML = data.specs
      .map(
        (spec) => `
      <div class="spec-item">
        <div class="spec-item-label">${spec.label}</div>
        <div class="spec-item-value">${spec.value}</div>
      </div>
    `
      )
      .join("");

    modalBackdrop.classList.add("is-active");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalBackdrop.classList.remove("is-active");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      openModal(projectId);
    });

    // Keyboard support (Enter key)
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "View project details");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const projectId = card.getAttribute("data-project");
        openModal(projectId);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-active")) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   5. Contact Form Client-Side Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!form) return;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    // Allows optional +, spaces, dashes, digits; minimum 7 digits
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    return cleanPhone.length >= 7;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Form inputs
    const nameInput = document.getElementById("formName");
    const emailInput = document.getElementById("formEmail");
    const phoneInput = document.getElementById("formPhone");
    const serviceInput = document.getElementById("formService");
    const messageInput = document.getElementById("formMessage");

    // Reset error states
    const resetField = (input, errorId) => {
      input.classList.remove("error");
      const errEl = document.getElementById(errorId);
      if (errEl) errEl.classList.remove("visible");
    };

    const setError = (input, errorId, msg) => {
      isValid = false;
      input.classList.add("error");
      const errEl = document.getElementById(errorId);
      if (errEl) {
        errEl.textContent = msg;
        errEl.classList.add("visible");
      }
    };

    resetField(nameInput, "errName");
    resetField(emailInput, "errEmail");
    resetField(phoneInput, "errPhone");
    resetField(serviceInput, "errService");
    resetField(messageInput, "errMessage");

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setError(nameInput, "errName", "Please enter your full name (minimum 2 characters).");
    }

    // Validate Email
    if (!nameInput || !validateEmail(emailInput.value.trim())) {
      setError(emailInput, "errEmail", "Please enter a valid email address.");
    }

    // Validate Phone
    if (!phoneInput.value.trim() || !validatePhone(phoneInput.value.trim())) {
      setError(phoneInput, "errPhone", "Please enter a valid phone or mobile number.");
    }

    // Validate Service Dropdown
    if (!serviceInput.value) {
      setError(serviceInput, "errService", "Please select a primary service required.");
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setError(messageInput, "errMessage", "Please provide project details (minimum 10 characters).");
    }

    if (!isValid) {
      formStatus.className = "form-status error";
      formStatus.textContent = "Please review the highlighted fields and try again.";
      return;
    }

    // Construct formatted WhatsApp message
    const name = nameInput.value.trim();
    const companyInput = document.getElementById("formCompany");
    const company = companyInput ? companyInput.value.trim() : "";
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput.options[serviceInput.selectedIndex].text;
    const message = messageInput.value.trim();

    const whatsappMessage = [
      "*New Project Inquiry - Universal EFX Studios*",
      "",
      `*Name:* ${name}`,
      company ? `*Company:* ${company}` : null,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Service Required:* ${service}`,
      "",
      "*Project Details:*",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const whatsappNumber = "919703026038";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "OPENING WHATSAPP...";
    submitBtn.disabled = true;

    formStatus.className = "form-status success";
    formStatus.style.display = "block";
    formStatus.innerHTML = `
      <strong>Opening WhatsApp...</strong><br>
      Your inquiry has been prepared. If WhatsApp didn't open automatically, 
      <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; font-weight: 700; color: #166534;">
        Click here to chat on WhatsApp &rarr;
      </a>
    `;

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      // On mobile redirect directly, on desktop open new window
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = whatsappUrl;
      } else {
        window.open(whatsappUrl, "_blank");
      }

      form.reset();
    }, 500);
  });
}

/* --------------------------------------------------------------------------
   6. Smooth Anchor Navigation with Sticky Header Offset
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const headerOffset = 85;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Active Navigation Link Highlighting
   -------------------------------------------------------------------------- */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (!linkHref) return;

    const linkPath = linkHref.split("/").pop();

    if (
      linkPath === currentPath ||
      (currentPath === "" && (linkPath === "index.html" || linkPath === "#home"))
    ) {
      link.classList.add("active");
    } else if (linkHref.startsWith("#") && (currentPath === "index.html" || currentPath === "")) {
      // Keep home links
    } else {
      link.classList.remove("active");
    }
  });
}

/* --------------------------------------------------------------------------
   8. Hero Video Player Controls
   -------------------------------------------------------------------------- */
function initHeroVideo() {
  const video = document.getElementById("heroVideo");
  const playBtn = document.getElementById("videoControlBtn");
  if (!video || !playBtn) return;

  const updateButtonState = () => {
    if (video.paused) {
      playBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        <span>Play Reel</span>
      `;
    } else {
      playBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        <span>Pause Reel</span>
      `;
    }
  };

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    updateButtonState();
  });

  video.addEventListener("play", updateButtonState);
  video.addEventListener("pause", updateButtonState);

  // Attempt autoplay muted
  video.muted = true;
  video.play().catch(() => {
    updateButtonState();
  });
}

/* --------------------------------------------------------------------------
   9. Portfolio Category Filtering (portfolio.html)
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".portfolio-card");

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach((card) => {
        const projectType = card.getAttribute("data-project");
        if (filter === "all" || projectType === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   10. FAQ Accordion (contact.html)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Close other items
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove("is-open");
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove("is-open");
      } else {
        item.classList.add("is-open");
      }
    });
  });
}
