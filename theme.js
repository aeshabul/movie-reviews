// TRAILER POPUP
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-trailer]");
  const overlay = document.querySelector(".trailer-overlay");
  const iframe = document.querySelector(".trailer-frame");
  const closeBtn = document.querySelector(".trailer-close");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-trailer");
      iframe.src = url + "?autoplay=1";
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeTrailer = () => {
    overlay.classList.remove("active");
    iframe.src = "";
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeTrailer);
  overlay.addEventListener("click", e => {
    if(e.target === overlay) closeTrailer();
  });

  document.addEventListener("keydown", e => {
    if(e.key === "Escape") closeTrailer();
  });
});
