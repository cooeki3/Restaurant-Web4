var navContent = document.getElementById("nav-content");
var navLinks = document.getElementById("nav-links");

console.log(navLinks);

function openNav() {
  navContent.style.transition = "opacity 0.7s cubic-bezier(1,.17,.95,.86), width 0.7s ease-in-out";
  navContent.style.width = "100%";
  navLinks.style.opacity = "1";
}

function closeNav() {
  navContent.style.transition = "opacity 0.7s cubic-bezier(.07,.96,.23,.9), width 0.7s ease-in-out";
  navContent.style.width = "0%";
  navLinks.style.opacity = "0";
}