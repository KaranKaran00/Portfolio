// THEME TOGGLE
// function toggleTheme(){
//     const html = document.documentElement;
//     const current = html.getAttribute("data-theme");
//     html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
//   }
  
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") || "light";

  if (current === "dark") {
    html.setAttribute("data-theme", "light");
    logo.src = "favicon2.png";
  } else {
    html.setAttribute("data-theme", "dark");
    logo.src = "favicon.png";
  }
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