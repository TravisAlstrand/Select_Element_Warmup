/* ================================================================================== */
/* ========================= DYNAMIC SELECT MENUS PRACTICE ========================== */
/* ================================================================================== */

// 1: select the animals select element and store it in a variable

// 2: select the breeds select element and store it in a variable

// 3: select all of the option elements with a [data-breed] attribute and store them in a variable

// 4: add an event listener on the animals select element that listens for the "change" event

//   5: start a loop to iterate over each breed option

//     6: check if the animals select value is not equal to the current breed option's data-breed attribute value

//       7: if they are not equal, hide the current breed option

//       8: if they are equal, do not hide (or show) the current breed option

//   9. check if the breeds select value is NOT equal to an empty string

//     10. if it's not an empty string, set the breeds select value to the second option's value

// TESTING TIP: Select an animal, select a matching breed, then change
// the animal again, see if the breed also changes to "Please choose again"

//==============================================================================//
//==================== DON'T CHANGE THE CODE BELOW =============================//
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
