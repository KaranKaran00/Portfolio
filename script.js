// THEME TOGGLE
function toggleTheme(){
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  }
  
  // SCROLL TO TOP
  document.addEventListener("DOMContentLoaded", function () {
  
    const btn = document.querySelector(".scroll-top");
  
    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 300 ? "block" : "none";
    });
  
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
  });