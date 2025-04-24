document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const popupLink = document.getElementById("popup-link");
  const closeBtn = document.getElementById("close-popup");

  const cards = document.querySelectorAll(".faves-card");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      const img = card.querySelector("img");

      const title = card.getAttribute("data-title") || img.alt;
      const description = card.getAttribute("data-description") || "No description provided.";
      const link = card.getAttribute("data-link") || "#";

      popupImg.src = img.src;
      popupImg.alt = title;
      popupTitle.textContent = title;
      popupDescription.textContent = description;
      popupLink.href = link;

      popup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
