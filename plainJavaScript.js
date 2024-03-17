// This is my plain JavaScript code (does not use React or JSX)

function alertUser() {
    alert("Hello, world!");
  }
  
  // This function will be called when the button is clicked
  function buttonClick() {
    alertUser();
  }
  
  // This function will be called when the page loads
  function pageLoad() {
    // Create the button
    const button = document.createElement("button");
    button.textContent = 'Click me!';
    // Add an event listener to the button
    button.addEventListener("click", buttonClick);

    const myDiv = document.getElementById('myButton');
    myDiv.appendChild(button);
  }
  
  // Call the pageLoad function when the page loads
  window.onload = pageLoad;