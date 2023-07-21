// 1: select the animals select element and store it in a variable
const animalSelect = document.querySelector("#animals");
// 2: select the breeds select element and store it in a variable
const breedSelect = document.querySelector("#breeds");
// 3: select all of the option elements with a [data-breed] attribute and store them in a variable
const breedOptions = document.querySelectorAll("option[data-breed]");

// 4: add an event listener on the animals select element that listens for a "change" event
animalSelect.addEventListener("change", () => {
  // 5: start a loop to iterate over each breed option
  breedOptions.forEach((option) => {
    // 6: check if the animals select value is NOT equal to the current breed option's [data-breed] attribute value
    if (animalSelect.value !== option.getAttribute("data-breed")) {
      // 7: if they are not equal, hide the current breed option
      option.hidden = true;
    } else {
      // 8: if they are equal, unhide (or show) the current breed option
      option.hidden = false;
    }
  });

  // 9. check if the breeds select value is NOT equal to an empty string
  if (breedSelect.value !== "") {
    // 10. if it's not an empty string, set the breeds select value to the second option's value
    breedSelect.value = "reselect";
  }
});

// TESTING TIP: Select an animal, select a matching breed, then change
// the animal again, see if the breed also changes to "Please choose again"

//==============================================================================//
//====================DON'T CHANGE THE CODE BELOW===============================//
//==============================================================================//
const form = document.querySelector("#form");
const message = document.querySelector("#message");
message.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isMatch =
    (document.querySelector("#animals").value.includes("Dogs") &&
      document.querySelector("#breeds").value.includes("Dogs")) ||
    (document.querySelector("#animals").value.includes("Cats") &&
      document.querySelector("#breeds").value.includes("Cats"));

  if (isMatch) {
    updateMessage("WOOHOO! The animal / breeds match!", isMatch);
    message.style.display = "inherit";
  } else {
    updateMessage("OOPS! The animal / breeds don't match!", isMatch);
    message.style.display = "inherit";
  }
});

function updateMessage(text, isMatch) {
  message.className = "";
  message.textContent = text;
  if (isMatch) {
    message.classList.add("success");
  } else {
    message.classList.add("error");
  }

  message.offsetHeight;
  message.classList.add("message");
}
