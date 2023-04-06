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
    <a href="#" onclick="goToPage()" Image<span class="highlight">Filter</span></a>
  </div>
  <section class="buttons">
    <div class="uploadIcon">
      <a href="../upload/index.html">
        <img src="../images/-file-upload_90320.png" alt="Upload image" />
      </a>
    </div>
    <div class="logOutIcon">
      <a id="logOut" href="../index.html">
        <img src="../images/logout_111063.ico" />
      </a>
    </div>
  </section>
  <script>
  function goToPage() {
    if (!localStorage.getItem("token")) {
      window.location.href = "../index.html";
    } else {
      window.location.href = "../gallery/index.html";
    }
  }
  </script>`;

  header.innerHTML = template;
}