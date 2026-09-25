/* =========================================
   IMANE MALIKI — JAVASCRIPT
   Pas de bibliothèque externe.
========================================= */


/* =========================================
   1. ANNÉE AUTOMATIQUE
========================================= */

// Récupère l'élément qui contient l'année.
const year = document.getElementById("year");

// Affiche automatiquement l'année actuelle.
year.textContent = new Date().getFullYear();


/* =========================================
   2. MENU MOBILE
========================================= */

// On récupère le bouton et le menu.
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

// Lorsque l'utilisateur clique sur le bouton...
menuButton.addEventListener("click", () => {

  // Ajoute ou retire la classe "active".
  navLinks.classList.toggle("active");

  // Permet aux lecteurs d'écran de savoir
  // si le menu est ouvert.
  const isOpen = navLinks.classList.contains("active");

  menuButton.setAttribute("aria-expanded", isOpen);

  // Change le symbole du bouton.
  menuButton.textContent = isOpen ? "×" : "☰";

});


// Lorsque l'utilisateur clique sur un lien,
// on ferme le menu sur mobile.
navLinks.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.textContent = "☰";

  });

});


/* =========================================
   3. ANIMATION AU SCROLL
========================================= */

// On sélectionne les éléments que l'on veut
// faire apparaître progressivement.
const animatedElements = document.querySelectorAll(
  ".section-heading, .timeline-item, .skill-card, .project-card, .award"
);


// IntersectionObserver détecte lorsqu'un élément
// entre dans la zone visible de l'écran.
const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        // Une fois l'animation effectuée,
        // on n'a plus besoin de surveiller l'élément.
        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


// On prépare les éléments avant de les observer.
animatedElements.forEach((element, index) => {

  element.classList.add("reveal");

  // Petit délai entre les éléments
  // pour créer un effet plus élégant.
  element.style.transitionDelay = `${index * 0.04}s`;

  observer.observe(element);

});


/* =========================================
   4. PETIT EFFET SUR LA NAVIGATION
========================================= */

// On récupère la barre de navigation.
const header = document.querySelector(".header");


// Lors du défilement de la page...
window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)";

  } else {

    header.style.boxShadow = "none";

  }

});
