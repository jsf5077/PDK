import { gallery } from "./array.js";

var array = gallery();

// console.log(array[i]);

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);

  $("#gallery-plug").append(
    "<a href='" +
      array[i].image +
      "'>" +
      "<figure class='effect-honey tm-gallery-item'>" +
      "<img src='img/gallery-tn-06.jpg' alt='" +
      array[i].imageAlt +
      "' class='img-fluid' />" +
      "<figcaption><h2><i>" +
      array[i].info1 +
      "<br><span>" +
      array[i].info2 +
      "</span></i></h2></figcaption></figure>"
  );
}

// $("#gallery-plug").append(
//   "<a href='img/gallery-img-01.jpg'>" +
//     "<figure class='effect-honey tm-gallery-item'>" +
//     "<img src='" +
//     array[i].image +
//     "' alt='" +
//     array[i].imageAlt +
//     "' class='img-fluid' />" +
//     "<figcaption><h2><i>" +
//     array[i].info1 +
//     "<span>" +
//     array[i].info2 +
//     "</span></i></h2></figcaption></figure>"
// );

/* <a href="img/gallery-img-01.jpg">
  <figure class="effect-honey tm-gallery-item">
    <img src="img/gallery-tn-01.jpg" alt="Image 1" class="img-fluid" />
    <figcaption>
      <h2>
        <i>
          Physical Health <span>Exercise!</span>{" "}
        </i>
      </h2>
    </figcaption>
  </figure>
</a>; */
