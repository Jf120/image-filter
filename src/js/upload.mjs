import { headerLoader, goToPage } from "./utils.mjs";
import { logOut, getToken } from "./security.mjs";

const inputFile = document.getElementById("image-upload");
const uploadBtn = document.getElementById("upload-btn");
const previewDiv = document.getElementById("preview");
let storage = JSON.parse(localStorage.getItem("storage")) || {}; 


headerLoader();
getToken();
const logo = document.getElementById("gotopage");
logo.addEventListener("click",goToPage);
const logOutButton = document.getElementById("logOut");

// Add an event listener to the "a" tag
logOutButton.addEventListener("click", logOut);

uploadBtn.addEventListener("click", () => {
    const file = inputFile.files[0];
    if (!file) {
        alert("Please select an image to upload.");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        let date = new Date();
	    let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        const dataURL = reader.result;
        const image = dataURL.split(",")[1];
        // const blob = dataURLtoBlob(dataURL);
        // const imageUrl = URL.createObjectURL(blob);
        const token = localStorage.getItem("token");
        
        if (storage && storage[token]) {
            // If storage[token] already exists, push the new image to it
            storage[token].push({currentDate, image});
        } else {
            // If storage[token] does not exist, create a new array with the new image
            storage[token] = [{currentDate, image}];
        }

        localStorage.setItem("storage", JSON.stringify(storage));
        
        previewDiv.innerHTML = `<img src="${dataURL}">`;
    };
        reader.readAsDataURL(file);
});

function dataURLtoBlob(dataURL) {
        const parts = dataURL.split(";base64,");
        const contentType = parts[0].split(":")[1];
        const raw = window.atob(parts[1]);
        const rawLength = raw.length;
        const uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
        return new Blob([uInt8Array], { type: contentType });
}