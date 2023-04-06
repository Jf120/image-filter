import { headerLoader, goToPage } from "./utils.mjs";
import { logOut, getToken } from "./security.mjs";
import { start, applySepiaFilter, applyGrayscaleFilter } from "./filter.mjs";

function renderLocalStorageImages() {
  const imageGalleryDiv = document.querySelector(".image-list");

  const storage = JSON.parse(localStorage.getItem("storage")) || {};
  const token = localStorage.getItem("token");

  if (storage[token]) {
    console.log(storage[token]);
    storage[token].forEach((imageData) => {
      imageGalleryDiv.innerHTML += template(imageData);
    });
  }
}

function template(imageData) {
  let img = `<div class="picture">
  <img class="imagetoFilter" src="data:image/jpeg;base64,${imageData.image}" width="600" height="400">
  <div class="desc">${imageData.currentDate}</div>
</div>`;

  return img;
}

headerLoader();
getToken();
const logo = document.getElementById("gotopage");
logo.addEventListener("click",goToPage);
renderLocalStorageImages();
const logOutButton = document.getElementById("logOut");
logOutButton.addEventListener("click", logOut);

const gallery = document.querySelectorAll(".imagetoFilter");

gallery.forEach(image => {
  image.addEventListener("click", showImageOnCanvas);
});

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });

function showImageOnCanvas(event) {
  document.querySelector(".preview").style.display = "block";
  document.querySelector(".image-list").style.gridColumn = "2"
  const image = event.target;
  const img = new Image();
  img.src = image.src;
  img.onload = function() {

    canvas.width = img.width * 0.4;
    canvas.height = img.height * 0.4;
    ctx.drawImage(img, 0, 0, img.width * 0.4, img.height * 0.4);
  };
  localStorage.setItem("img", JSON.stringify(img));
  start();
}

let filterSelect = document.getElementById("filter-select");
filterSelect.addEventListener("change", function() {
  let filterValue = filterSelect.value;

  if (filterValue === "sepia") {
    applySepiaFilter(canvas, ctx);
  } else if (filterValue === "grayscale") {
    applyGrayscaleFilter(canvas, ctx);
  };
});