// 1: select the animals select element and store it in a variable
const animalSelect = document.querySelector("#animals");
// 2: select the breeds select element and store it in a variable
const breedSelect = document.querySelector("#breeds");
// 3: select all of the option elements with a [data-breed] attribute and store them in a variable
const breedOptions = document.querySelectorAll("option[data-breed]");

// 4: add an event listener on the animals select element that listens for a "change" event
animalSelect.addEventListener("change", () => {
  // 5: start a loop to iterate over each breed option
  for (let i = 0; i < breedOptions.length; i++) {
    // 6: check if the animals select value is NOT equal to the current breed option's [data-breed] attribute value
    if (animalSelect.value !== breedOptions[i].getAttribute("data-breed")) {
      // 7: if they are not equal, hide the current breed option
      breedOptions[i].hidden = true;
      breedOptions[i].disabled = true;
    } else {
      // 8: if they are equal, unhide (or show) the current breed option
      breedOptions[i].hidden = false;
      breedOptions[i].disabled = false;
    }
  }

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
const icon = document.querySelector("img");
icon.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isMatch =
    document
      .querySelector("#breeds")
      .value.includes(document.querySelector("#animals").value) &&
    document.querySelector("#animals").value !== "";

  if (isMatch) {
    icon.style.display = "inherit";
  } else {
    icon.style.display = "inherit";
  }
  updateIcon(isMatch);
});

function updateIcon(isMatch) {
  icon.className = "";
  if (isMatch) {
    icon.src = "./images/success.png";
    icon.alt = "form success icon";
  } else {
    icon.src = "./images/error.png";
    icon.alt = "form error icon";
  }
  setTimeout(() => {
    icon.style.display = "none";
  }, 1500);
}
