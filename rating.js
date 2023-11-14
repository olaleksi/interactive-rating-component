const ratingMenu = document.querySelector(".rating-menu");
const successContainer = document.querySelector(".success-container");
const submitButton = document.getElementById("submit-btn");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const ratingNumber = document.getElementById("rating-number");

submitButton.addEventListener("click", () => {
  ratingMenu.classList.add('hidden');
  successContainer.classList.remove("hidden");
});

rateAgain.addEventListener("click", () => {
  ratingMenu.classList.remove('hidden');
  successContainer.classList.add("hidden");
}); 

ratings.forEach((rating) => {

  rating.addEventListener("click", () => {
    ratingNumber.innerHTML = rating.innerHTML;
  });
});




// Set an event handler on the document so that when
// any element is clicked, the event will bubble up to it
document.addEventListener("click", function(evt){
    // Check to see if it was a button that was clicked
    if(evt.target.classList.contains("btn")){
        // Loop over all the buttons & remove the active class
        ratings.forEach(function(rating){
            rating.classList.remove("active")
        });
         // Make the clicked button have the active class
        evt.target.classList.add("active")
    }

})











