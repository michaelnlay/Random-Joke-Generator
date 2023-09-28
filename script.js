//get elements
const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#joke-btn");

function generateJoke() {
  // initialize xhr
  const xhr = new XMLHttpRequest();

  //access the open method to the get api request
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  //create event handler for event ready state
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.textContent = JSON.parse(this.responseText).value;
      } else {
        jokeEl.textContent = "Error, please check your API endpoint or codes";
      }
    }
  };
  xhr.send();
}

//add event listener on click to display the joke
jokeBtn.addEventListener("click", generateJoke);

//create another event listner for on page load to load the joke right away
document.addEventListener("DOMContentLoaded", generateJoke);
