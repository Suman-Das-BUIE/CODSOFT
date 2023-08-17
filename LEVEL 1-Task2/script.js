function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var typed = new Typed(".typing", {
    strings: [ "Java Full Stack Developer","Software Engineer", "Developer", "Designer", "Front-End Developer", ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});