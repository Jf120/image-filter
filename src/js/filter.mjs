import { headerLoader } from "./utils.mjs";
import { logOut, getToken } from "./security.mjs";

export function start() {
    document.querySelector(".filter-select").style.display = "block";
}

export function applySepiaFilter(canvas, context) {

    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < imageData.data.length; i += 4) {
        var r = imageData.data[i];
        var g = imageData.data[i + 1];
        var b = imageData.data[i + 2];

      imageData.data[i] = Math.min(255, 0.393 * r + 0.769 * g + 0.189 * b);
      imageData.data[i + 1] = Math.min(255, 0.349 * r + 0.686 * g + 0.168 * b);
      imageData.data[i + 2] = Math.min(255, 0.272 * r + 0.534 * g + 0.131 * b);
    }

    context.putImageData(imageData, 0, 0);
}

export function applyGrayscaleFilter(canvas, context) {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;

    for (var i = 0; i < pixels.length; i += 4) {
      // Calculate the average value of the red, green, and blue channels
        var avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;

      // Set the red, green, and blue channels to the average value
        pixels[i] = avg;
        pixels[i + 1] = avg;
        pixels[i + 2] = avg;
    }

    // Put the modified pixel data back onto the canvas
    context.putImageData(imageData, 0, 0);
}

headerLoader(); 
getToken();
const logOutButton = document.getElementById("logOut");

logOutButton.addEventListener("click", logOut);