// select the animals select element and store it in a variable
const animalSelect = document.getElementById("animals");
// select the breeds select element and store it in a variable
const breedSelect = document.getElementById("breeds");
// select all of the option elements with a [data-theme] and store it in a variable
const breedOptions = document.querySelectorAll("option[data-breed]");

// 1: add an event listener on the animals select element
//    that listens for a "change" event
// 2: capture the value of the animals select element and store it in a variable
// 3: start a loop to iterate over each breed option
// 4: check if the animals select value is not equal to the current breed option's
//    data-breed attribute value
// 5: if they are not equal, hide the current breed option
// 6: if they are equal, do not hide the current breed option
// 7: reset the breeds select element's selected option to it's first child element
//   upon each animal "change". This will prevent a mix-match of animals / breeds.

// HINT: Select an animal, then a breed. Then change the animal again...

animalSelect.addEventListener("change", () => {

  const animal = animalSelect.value;

  // breedSelect.firstElementChild.selected = true;

  breedOptions.forEach(option => {
    if (animal !== option.getAttribute("data-breed")) {
      option.hidden = true;
    } else {
      option.hidden = false;
    }
  });

  // ====== FOR LOOP EQUIVALENT ====== //

  // for(let i = 0; i < breedOptions.length; i++) {
  //   if (animal !== breedOptions[i].getAttribute('data-breed')) {
  //     breedOptions[i].hidden = true;
  //   } else {
  //     breedOptions[i].hidden = false;
  //   }
  // }
});

//==============================================================================//
//====================DON'T CHANGE THE CODE BELOW===============================//
//==============================================================================//
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
successMessage.style.display = "none";
errorMessage.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMessage.style.display = "none";
  errorMessage.style.display = "none";
  const isDogAnimal = document.getElementById("animals").value.includes("Dogs");
  const isDogBreed = document.getElementById("breeds").value.includes("dog");
  const isCatAnimal = document.getElementById("animals").value.includes("Cats")
  const isCatBreed = document.getElementById("breeds").value.includes("cat");

  if ((isDogAnimal && isDogBreed) || (isCatAnimal && isCatBreed)) {
    successMessage.style.display = "inherit";
    errorMessage.style.display = "none";
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "inherit";
  }
});