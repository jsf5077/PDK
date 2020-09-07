// Here we are building the URL we need to query the database

import { gallery } from "./array.js";

var array = gallery();

console.log(array);

// for (i = 0, i < result.gallery.length; i++; ) {
//   console.log(array[i]);
// }

// var response = result.gallery;
// // var artistURL = $("<a>").attr("href", response.url).append(artistName);
// var info = $("<h2>").text(
//   $("<i>").text(response.info1, $("<span>").text(response.info2))
// );

// var figcaption = $("<figcaption>").text(info);

// var img = $("<img>").attr({
//   src: response.thumbnail,
//   alt: response.imageAlt,
//   class: "img-fluid",
// });

// var figure = $("<figure>")
//   .attr("class", "effect-honey tm-gallery-item")
//   .text(img, figcaption);

// var images = $("<a>").attr("href", response.image).text(figure);

// // console.log(result);
// console.log(response);

// $("#gallery-plug").append(images);
// });
// });

// $(".city").html("<h1>" + response.name + " Weather Details</h1>");
// $(".wind").text("Wind Speed: " + response.wind.speed);
// $(".humidity").text("Humidity: " + response.main.humidity);
// $(".temp").text("Temperature (F) " + response.main.temp);

// // Log the data in the console as well
// console.log("Wind Speed: " + response.wind.speed);
// console.log("Humidity: " + response.main.humidity);
// console.log("Temperature (F): " + response.main.temp);

// /////////////////////////////

// // Constructing HTML containing the artist information
// var artistName = $("<h1>").text(response.name);
// var artistURL = $("<a>").attr("href", response.url).append(artistName);
// var artistImage = $("<img>").attr("src", response.thumb_url);
// var trackerCount = $("<h2>").text(
//   response.tracker_count + " fans tracking this artist"
// );
// var upcomingEvents = $("<h2>").text(
//   response.upcoming_event_count + " upcoming events"
// );
// var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

// // Empty the contents of the artist-div, append the new artist content
// $("#artist-div").empty();
// $("#artist-div").append(
//   artistURL,
//   artistImage,
//   trackerCount,
//   upcomingEvents,
//   goToArtist
// );
// });
