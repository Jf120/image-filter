import { headerLoader } from "./utils.mjs";
import { logOut, getToken } from "./security.mjs";

const inputFile = document.getElementById("image-upload");
const uploadBtn = document.getElementById("upload-btn");
const previewDiv = document.getElementById("preview");

headerLoader();
getToken();
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
        let images = JSON.parse(localStorage.getItem("images")) || [];
        images.push({currentDate, image});
        localStorage.setItem("images", JSON.stringify(images));
        
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