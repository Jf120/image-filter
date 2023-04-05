// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, data);
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function headerLoader() {

  const header = document.querySelector("header");

  const template = `<div class="logo">
  <img
    src="../images/thefullreflexcamera_slr_camera_4626.ico"
    alt="compact camera image for logo"
  />
  <a href="../index.html"> Image<span class="highlight">Filter</span></a>
  </div>
  <div class="uploadIcon">
    <a href="../upload/index.html">
      <img src="../images/-file-upload_90320.png" alt="Upload image" />
    </a>
  </div>`;

  header.innerHTML = template;
}