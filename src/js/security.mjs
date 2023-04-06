import CryptoJS from "crypto-js";

export function hashPassword(password) {
    // Generate a random "salt" string
    const salt = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
    // Hash the password and salt using SHA-256
    const hash = CryptoJS.SHA256(password + salt).toString(CryptoJS.enc.Hex);
  
    // Return the salt and hash as a single string
    return salt + ":" + hash;
  }
  
export function checkPassword(password, hash) {
    // Extract the salt from the hash string
    const salt = hash.split(":")[0];
  
    // Hash the password and salt using SHA-256
    const testHash = CryptoJS.SHA256(password + salt).toString(CryptoJS.enc.Hex);
  
    // Compare the computed hash to the stored hash
    return testHash === hash.split(":")[1];
  }

export function logOut() {
    window.localStorage.removeItem("token");
}

export function getToken() {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please make sure to sign in first");
      location.replace("../index.html");
    }
}