import { checkPassword, hashPassword } from "./security.mjs";

let users = JSON.parse(localStorage.getItem("users")) || {}; 

export function signUpForm() {
    const name = document.getElementById("name-signUp").value;
    const email = document.getElementById("email-signUp").value;
    const password = document.getElementById("pass-signUp").value;

    const hashed = hashPassword(password)

    const user = { name, email, hashed };


    if (!users[email]) {
        users[user.email] = user;
        localStorage.setItem("token", hashed);
        localStorage.setItem("users", JSON.stringify(users));
        location.replace("../gallery/index.html");
    } else {
        alert("This email is already registered");
    }
}

export function signInForm() {
    const email = document.getElementById("email-signIn").value;
    const password = document.getElementById("pass-signIn").value;

    const storedUsers = localStorage.getItem("users");
    if (!storedUsers) {
        // handle error if no users have been registered yet
        return;
    }

    const localUsers = JSON.parse(storedUsers);
    const user = localUsers[email];
    if (!user) {
        alert("There is no user registered with this email address")
        // handle error if email or password is incorrect
        return;
    } else {

        const hash = user.hashed;
        console.log(hash);

        if (checkPassword(password, hash)) {
            //redirect to page
            localStorage.setItem("token", hash);
            location.replace("../gallery/index.html");
        }
        else {
            alert("Incorrect Password");
        }
    }
}
