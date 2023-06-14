const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thankyou");
const submitButton = document.querySelector(".submit_btn");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
