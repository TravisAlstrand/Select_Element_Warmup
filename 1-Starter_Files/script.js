/* ================================================================================== */
/* ===================== SELECT ELEMENT WARM-UP ===================================== */
/* ================================================================================== */

// 1: select the animals select element and store it in a variable

// 2: select the breeds select element and store it in a variable

// 3: select all of the option elements with a [data-theme] and store it in a variable


// 4: add an event listener on the animals select element that listens for the "change" event

// 5: capture the value of the animals select element and store it in a variable

// 6: start a loop to iterate over each breed option

  // 7: check if the animals select value is not equal to the current breed option's data-breed attribute value

  // 8: if they are not equal, hide the current breed option

  // 9: if they are equal, do not hide the current breed option

// 10: reset the breeds select element's selected option to it's first child element
//     upon each animal "change". This will prevent a mix-match of animals / breeds.

// TEST-HINT: Select an animal, then a breed. Then change the animal again...

/* ==== ENTER YOUR CODE BELOW ==== */








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