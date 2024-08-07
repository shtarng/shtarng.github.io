let slider = document.getElementsByClassName("slider")[0];
let slider_accent = document.getElementsByClassName("slider-accent")[0];
let slider_toggle = document.getElementsByClassName("slider-toggle")[0];
let day = document.querySelectorAll(".day");
let night = document.querySelectorAll(".night");

slider_toggle.onclick = toggle;

function toggle() {
  if (slider_toggle.classList.contains("light")) {
    // Replaces slider.light to slider.dark theme
    slider.classList.replace("light", "dark");
    slider_accent.classList.replace("light", "dark");
    slider_toggle.classList.replace("light", "dark");

    night.forEach((a) => (a.style.display = "block"));
    day.forEach((a) => (a.style.display = "none"));
  } else {
    // Replaces slider.dark to slider.light theme
    slider.classList.replace("dark", "light");
    slider_accent.classList.replace("dark", "light");
    slider_toggle.classList.replace("dark", "light");

    day.forEach((a) => (a.style.display = "block"));
    night.forEach((a) => (a.style.display = "none"));
  }
}
