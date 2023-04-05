import { signUpForm, signInForm } from "./users.mjs";

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signInFormButton = document.getElementById("signInFormButton");
const signUpFormButton = document.getElementById("signUpFormButton");

signUpFormButton.addEventListener("click", () => {
  signUpForm();
});

signInFormButton.addEventListener("click", () => {
  signInForm();
});
