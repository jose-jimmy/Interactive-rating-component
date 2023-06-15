const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thankyou");
const submitButton = document.querySelector(".submit_btn");
const rating = document.getElementById("rating");
const ratingContainer = document.querySelector(".rating");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

ratingContainer.addEventListener("click", (event) => {
  //Check if the clicked element is a button
  if (event.target.nodeName === "BUTTON") {
    rating.innerHTML = event.target.innerHTML;
  }
});
