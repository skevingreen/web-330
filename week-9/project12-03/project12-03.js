"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Scott Green
      Date: December 17, 2024

      Filename: project12-03.js
*/

$("article > h2").click(e => {
  let heading = $(e.target);
  let list = $(heading).next();
  let headingImage = $(heading).children("img");

  $(list).slideToggle(500);

  if ($(headingImage).attr("src") === "plus.png") {
    $(headingImage).attr("src", "minus.png")
  } else {
    $(headingImage).attr("src", "plus.png")
  }
})