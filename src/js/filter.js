import { headerLoader } from "./utils.mjs";

export function showImage(image) {
    const img = document.querySelector(".show-image");

    img.innerHTML = template(image);
}

function template(imageData) {
    let img = `<div class="filter-picture">
    <img src="data:image/jpeg;base64,${imageData}" width="600" height="400">
</div>`;

    return img;
}

headerLoader(); 