const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal("nav .nav__logo", {
  ...scrollRevealOption,
  origin: "left",
  delay: 300,
});

ScrollReveal().reveal("nav .nav__socials", {
  ...scrollRevealOption,
  origin: "top",
  delay: 300,
});

ScrollReveal().reveal("nav .nav__contact", {
  ...scrollRevealOption,
  origin: "right",
  delay: 300,
});
