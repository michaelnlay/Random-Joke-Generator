// https://api.chucknorris.io
// endpoint to use is https://api.chucknorris.io/jokes/random
// make a request to get the value

//Logics
//use XMLHttpRequest to make a request to an API object

//step 1: initialize xml request
const xhr = new XMLHttpRequest();

//step 2: use open method to access the get request
xhr.open("GET", "https://api.chucknorris.io/jokes/random");

//step 3: Create an event handler for event ready state
//readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection estatlished
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  //   console.log(this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
    //this.responseText returns response as text from the API endpoint
    //JSON.parse is used to convert json string into a regular array

    //create an variable to store the response
    const data = JSON.parse(this.responseText);

    const joke = document.querySelector("#joke");
    joke.textContent = data.value;

    const button = document.querySelector("#joke-btn");
    function buttonClick() {
      const joke = document.querySelector("#joke");
      joke.textContent = data.value;
      console.log("click");
    }

    button.addEventListener("click", buttonClick);
  }
};

xhr.send();
