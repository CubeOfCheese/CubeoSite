var myButton = document.getElementById('change-user');
var myHeading = document.querySelector('h5');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Have Fun ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Have Fun ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
};