
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const regBtn = document.getElementById("regBtn");

let email;
let phone;
let Password;
let message;
let registered = false;
let loggedIn = false;

loginBtn.style.visibility = "hidden";
logoutBtn.style.visibility = "hidden";


regBtn.onclick = function(){
    if(inputs[0].value.length < 4 || inputs[0].value.length > 10 || inputs[0].value.includes(" ")){
        window.alert("First name must be between 4 - 10 characters without any empty space");
    }
    else if(inputs[1].value.length < 4 || inputs[1].value.length > 10 || inputs[1].value.includes(" ")){
        window.alert("Last name must be between 4-10 characters without any empty space");
    }
    else if(inputs[2].value.length < 10 || inputs[2].value.length > 30 || !(inputs[2].value.includes("@"))){
        window.alert("Email addrress must be between 10-30 characters");
    }
    else if(inputs[3].value.length < 10 || inputs[3].value.length > 13){
        window.alert("Phone number must be between 10-13 numbers");
    }
    else if(inputs[4].value.length < 8 || inputs[4].value.length > 16){
        window.alert("Password must be between 8 - 16 characters long");
    }
    else if(inputs[4].value !== inputs[5].value){
        window.alert("The two passwords must be matching");
    }
    else if(inputs[4].value === inputs[5].value){
        email = inputs[2].value;
        phone = inputs[3].value;
        Password = inputs[4].value;
        message = email.slice(0,3) + email.slice(email.indexOf("@"));
        window.alert(`${message} registration is successful`);

        registered = true;

        labels.forEach(element => {
            element.style.visibility = "hidden";
            element.value = "";
        });
    
        inputs.forEach(element => {
            element.style.visibility = "hidden";
            element.value = "";
        });

        regBtn.style.visibility = "hidden";
        loginBtn.style.visibility = "visible";

    }
    else{
        window.alert("Network error 404 NOT found");
    }
}

loginBtn.onclick = function(){

    labels[2].style.visibility = "visible";
    labels[4].style.visibility = "visible";
    inputs[2].style.visibility = "visible";
    inputs[4].style.visibility = "visible";

    setTimeout(() => {
        if(inputs[2].value !== email){
            window.alert("This email addres is not registered in our system");
        }
        else if(inputs[4].value !== Password){
            window.alert("You must provide the correct password to continue");
        }
        else if(inputs[2].value === email && inputs[4].value === Password){
            window.alert(`${message} welcome back you are now logged in`);
            labels[2].style.visibility = "hidden";
            labels[4].style.visibility = "hidden";
            inputs[2].style.visibility = "hidden";
            inputs[4].style.visibility = "hidden";
            loggedIn = true;

            loginBtn.style.visibility = "hidden";
            logoutBtn.style.visibility = "visible";
        }
    
        else{
            window.alert("Network error 404 NOT found");
        }
    }, 100);
}

logoutBtn.onclick = function (){
    if(!loggedIn){
        window.alert("You must log in first to be able to lo out");
    }
    else if(loggedIn){
        window.alert(`${message} you have been logged out successfully`);
        loggedIn = false;
        email = "";
        phone = "";
        Password = "";
        logoutBtn.style.visibility = "hidden";
    }
    else{
        window.alert(`Network error 404 NOT found`);
    }
}


