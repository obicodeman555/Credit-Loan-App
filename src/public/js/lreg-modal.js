function loginRegModal() {
  document.getElementById("modal-trigger").onclick = (event) => {
    event.preventDefault();
    const container = document.querySelector(".modal-container");
    if (container.style.display === "none") container.style.display = "block";
    container.classList.add("modal-animation");
  };
}

function formToggle() {
  const tabBtn = document.querySelectorAll(".tab");
  tabBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const form = btn.parentElement;
      const container = form.parentElement.parentElement.parentElement;
      const tabBtnNumber = btn.dataset.forTab;
      const tabContentRef = container.querySelector(
        `.form-content[data-tab = "${tabBtnNumber}"]`
      );

      container.querySelectorAll(".form-content").forEach((content) => {
        content.classList.remove("form-active");
      });

      tabContentRef.classList.add("form-active");
    });
  });
}

const closeModal = () => {
  const container = document.querySelector(".modal-container");
  container.querySelector(".close-button").onclick = (event) => {
    event.preventDefault();
    container.style.display = "none";
  };
};

loginRegModal();
formToggle();
closeModal();
