// Function with no parameters
var startMyDay = function () {
  return "Time for coffee and a shower!";
};
console.log(startMyDay());

// Function with one parameter

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("chocolate chip"));

// Function with two parameters

var introduce = function (name, occupation) {
  return `My name is ${name} and I am a ${occupation}.`;
};
console.log(introduce("Molly", "developer"));
console.log(introduce("Sarah", "UX designer"));

// Create a Function to Capture Input

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today? ")
  );
  if (numGlasses >= 8) {
    console.log("Great job hydrating today!");
  } else if (numGlasses < 8) {
    console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
  }
};

hydrationFeedback();
