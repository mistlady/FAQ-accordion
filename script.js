document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  document.querySelectorAll(".questions").forEach((question) => {
    const button = question.querySelector("button");
    const img = button.querySelector("img");
    const dd = question.querySelector("dd");

    if (dd) {
      dd.style.display = "none"; 
    }
    button.addEventListener("click", () => {
      if (dd && dd.style.display === "none") {
        dd.style.display = "block";
        img.src = "./assets/images/icon-minus.svg";
        container.classList.add("expanded");
      } else if (dd) {
        dd.style.display = "none";
        img.src = "./assets/images/icon-plus.svg";
        if (
          ![...document.querySelectorAll("dd")].some(
            (el) => el.style.display === "block"
          )
        ) {
          container.classList.remove("expanded");
        }
      }
    });
  });
});
