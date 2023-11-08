const darkModeSwitch = document.getElementById("switcher");
const bodyTag = document.getElementById("body");

darkModeSwitch.addEventListener("change", () => {
  bodyTag.classList.toggle("dark-mode");
});
