/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Scott Green
  Date: December 6, 2024
  Filename: chefs.js (it's actually script.js)
*/

"use strict";

// Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {name: "John Salinas", specialty: "Steak", weakness: "Cake", restaurantLocation: "Phoenix, AZ"},
  {name: "Lilly Armstrong", specialty: "Salmon", weakness: "Soup", restaurantLocation: "Austin, TX"},
  {name: "Rene Escobar", specialty: "Enchiladas", weakness: "Dinner Rolls", restaurantLocation: "San Diego, CA"}
];

// Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout( () => { // Set a timeout of 2 seconds
      if (Math.random() < 0.5) {  // Should succeed 50% of the time
        resolve(chefs[0]);
      } else {
        reject("There was an error retrieving information for Chef 1");
      }
    }, 2000);
  });
}

// Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout( () => { // Set a timeout of 3 seconds
      if (Math.random() < 0.5) {  // Should succeed 50% of the time
        resolve(chefs[1]);
      } else {
        reject("There was an error retrieving information for Chef 2");
      }
    }, 3000);
  });
}

// Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout( () => { // Set a timeout of 4 seconds
      if (Math.random() < 0.5) {  // Should succeed 50% of the time
        resolve(chefs[2]);
      } else {
        reject("There was an error retrieving information for Chef 3");
      }
    }, 4000);
  });
}

// Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then( (results) => {
  let counter = 1;  // Counter for which chef we are processing

  // Process each of the promises
  results.forEach( (result) => {
    if(result.status === "fulfilled") { // Promised succeeded
      document.getElementById("chef" + counter).innerHTML = `<h2>Chef ${result.value.name}</h2>
                                                               <p>Specialty: ${result.value.specialty}</p>
                                                               <p>Weakness: ${result.value.weakness}</p>
                                                               <p>Location: ${result.value.restaurantLocation}</p><br>`;
    } else {  // Promise failed
      console.log("rejected: " + result.reason + "    counter: " + counter);
      document.getElementById("chef" + counter).innerHTML = `<h2>Chef ${counter}</h2>
                                                               <p>${result.reason}</p><br>`;
    }

    ++counter;
  });
});