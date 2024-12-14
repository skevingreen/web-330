/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Scott Green
  Date: December 9, 2024
  Filename: script.js
*/

"use strict";

const movies = [
  // Movie objects
  {title:"Evil Dead", director:"Sam Raimi", releaseYear:"1981", synopsis:"Five college friends journey to a remote cabin for a much needed vacation.  While there, they discover a mysterious book and audio tape that unleash terrible horrors."},
  {title:"Phantasm", director:"Don Coscarelli", releaseYear:"1979", synopsis:"A teenage boy and his brother investigate strange acts being performed at the funeral home by the Tall Man and his evil minions."},
  {title:"Alien", director:"Ridley Scott", releaseYear:"1979", synopsis:"The crew of the commercial space vessel Nostromo respond to a distress signal and are attacked by an alien life-form.  After making a retreat to their ship, they soon learn that they are no longer alone onboard."}
];

// Retrieve a movie object based on the passed in title
function fetchMovie(title) {
  let count = -1;
  let index = -1; // index of the movie we are looking for

  for (const movie of movies) {
    count++;  // increase the index for each loop

    // if we find the movie title we're looking for, break out of the loop
    if (movie.title === title) {
      index = count;
      break;
    }
  }


  return new Promise((resolve, reject) => {
    if (index !== -1) {
      setTimeout(() => {
        resolve(movies[index]);
      }, 1000);
    } else {
      reject("Movie not found");
    }
  })

}

async function displayMovie() {
  let movieName = document.querySelector("input").value;
  let movieObject;

  try {
    movieObject = await fetchMovie(movieName);

    document.getElementById("movie-title").textContent = movieObject.title;
    document.getElementById("movie-director").textContent = `Director: ${movieObject.director}`;
    document.getElementById("movie-year").textContent = `Year Released: ${movieObject.releaseYear}`;
    document.getElementById("movie-synopsis").textContent = `Synopsis: ${movieObject.synopsis}`;
  } catch (error) {
    console.log("error: " + error);
    document.getElementById("movie-title").textContent = `Movie Not Found`
    document.getElementById("movie-director").textContent = `Director: unknown`;
    document.getElementById("movie-year").textContent = `Year Released: unknown`;
    document.getElementById("movie-synopsis").textContent = `Synopsis: unknown`;
  }
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault();
  await displayMovie();
});
