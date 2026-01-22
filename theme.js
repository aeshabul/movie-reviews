document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.querySelector(".trailer-overlay");
  const iframe = document.querySelector(".trailer-frame");
  const closeBtn = document.querySelector(".trailer-close");

  document.querySelectorAll("[data-trailer]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      iframe.src = btn.dataset.trailer + "?autoplay=1";
      overlay.classList.add("active");
      document.body.style.overflow="hidden";
    });
  });

  function close(){
    overlay.classList.remove("active");
    iframe.src="";
    document.body.style.overflow="";
  }

  closeBtn.onclick = close;
  overlay.onclick = e => e.target===overlay && close();

  // Theme toggle
  const toggle=document.getElementById("themeToggle");
  toggle.onclick=()=>{
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme==="dark" ? "light" : "dark";
  };

});
