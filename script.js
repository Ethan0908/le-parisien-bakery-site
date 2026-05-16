const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = nav ? nav.querySelectorAll("a") : [];
const mediaQuery = window.matchMedia("(max-width: 720px)");

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("is-open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", (event) => {
      if (!event.matches) {
        setOpen(false);
      }
    });
  }

  setOpen(false);
}
