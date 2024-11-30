/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Scott Green
  Date: November 23, 2024
  Filename: script.js
*/

"use strict";

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  {tableNumber: 1, capacity: 2, isReserved: false},
  {tableNumber: 2, capacity: 4, isReserved: true},
  {tableNumber: 3, capacity: 2, isReserved: true},
  {tableNumber: 4, capacity: 4, isReserved: false},
  {tableNumber: 5, capacity: 2, isReserved: false},
  {tableNumber: 6, capacity: 4, isReserved: false},
  {tableNumber: 7, capacity: 2, isReserved: false},
  {tableNumber: 8, capacity: 4, isReserved: false},
  {tableNumber: 9, capacity: 8, isReserved: false},
  {tableNumber: 10, capacity: 12, isReserved: false}
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here

  if (tableNumber <= 0 || tableNumber > 10) {
    //error - not a valid table number
    callback("Please pick a table number from 1 to 10");
  } else if (tables[tableNumber - 1].isReserved) {
    //error - table is already reserved
    callback("Table " + tableNumber + " has already been reserved by another guest.");
  } else {
    // Mark table as reserved
    tables[tableNumber - 1].isReserved = true;
    setTimeout( () => {
      // Notify customer of successful reservation
      callback("Successfully reserved table " + tableNumber);
    }, time);
  }
}

// Update the web page with status of reservation
function processReservation(message) {
  document.getElementById("message").textContent = message;
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();

    // Get the number of the table to reserve
    let tableNum = document.getElementById("tableNumber").value;

    // Reserve table if available or notify of issue
    reserveTable(tableNum, processReservation, 1000);
  });
