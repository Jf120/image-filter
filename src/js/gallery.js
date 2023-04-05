import { headerLoader } from "./utils.mjs";
import { showImage } from "./filter.js";

function renderLocalStorageImages() {
  const imageGalleryDiv = document.querySelector(".image-list");

  // Retrieve the array of image URLs from LocalStorage
  const images = JSON.parse(localStorage.getItem("images")) || [];

  // Loop through the array of image URLs and display the images
  images.forEach((imageData) => {
    // const li = document.createElement("li");
    // const img = document.createElement("img");
    // img.src = "data:image/jpeg;base64," + imageData;
    // li.appendChild(img);
    imageGalleryDiv.innerHTML += template(imageData);
  });
}

let imagesforFilter = document.getElementsByClassName("picture");
for (var i = 0; i < imagesforFilter.length; i++) {
  imagesforFilter[i].addEventListener("click", function() {
    showSrc(this);
  });
}
function showSrc(img) {
  let src = img.src;
  location.replace("../filters/index.html");
  showImage(src);
}

function template(imageData) {
  let img = `<div class="picture">
  <img src="data:image/jpeg;base64,${imageData.image}" width="600" height="400">
  <div class="desc">${imageData.currentDate}</div>
</div>`;

  return img;
}

headerLoader();
renderLocalStorageImages();
