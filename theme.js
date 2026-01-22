/* ===============================
   THEME.JS – FINAL STABLE VERSION
   (Only Dark / Light Toggle)
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("themeToggle");
  if(!toggle) return;

  // Load saved theme (optional)
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme){
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  toggle.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    document.documentElement.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
  });

});
