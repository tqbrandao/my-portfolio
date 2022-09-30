// Mobile Navigation

// const mainNav = document.querySelector(".main-nav");
const headerEl = document.querySelector(".header");
const btnMobileEl = document.querySelector(".btn-mobile-nav");

btnMobileEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// ANIMACAO SUAVE NO SCROLL

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("main-nav--link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// ------------ NAVEGACAO STICKY ----------------

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Dentro da viewport
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
obs.observe(sectionHeroEl);
