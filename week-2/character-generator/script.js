/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Scott Green
  Date: October 28, 2024
  Filename: script.js
*/

"use strict";

// Function to create a character based on provided parameters.
function createCharacter(name, gender, characterClass) {
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  }
}

// Create the character with specified details and display the results.
document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  let name;
  let gender;
  let characterClass;
  let character;
  let output;

  // Get form values
  name = document.getElementById("heroName").value;
  gender = document.getElementById("heroGender").value;
  characterClass = document.getElementById("heroClass").value;

  // Create character
  character = createCharacter(name, gender, characterClass);

  // Display character information
  output = document.getElementById("characterOutput");
  output.innerHTML = `<br><p>Character Information</p>
                      <p>Name: <span id="shadow">${character.getName()}</span></p>
                      <p>Gender: <span id="shadow">${character.getGender()}</span></p>
                      <p>Class: <span id="shadow">${character.getClass()}</span></p>`;
});