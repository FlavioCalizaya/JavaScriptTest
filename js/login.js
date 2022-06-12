let loginForm = document.getElementById("pills-login");
let registerForm = document.getElementById("pills-register");
let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("tab-register");
let viewLoginButton = document.getElementById("tab-login");
let userNameInput = document.getElementById("loginName");
let paswordInput = document.getElementById("loginPassword");
let userNNameInput = document.getElementById("registerUsername");
let paswordNInput = document.getElementById("registerPassword");
let nPaswordNInput = document.getElementById("registerRepeatPassword");

let newRegisterButton = document.getElementById("registerButton");
loginButton.addEventListener("click",login);
registerButton.addEventListener("click",register);
viewLoginButton.addEventListener("click",viewLogin);
newRegisterButton.addEventListener("click",registerNew);
let userName = userNameInput.value;
let password = paswordInput.value;
localStorage.users = [
    JSON.stringify({userName: "flavio",
    password: "flavio"}),   
    JSON.stringify({userName: "admin",
    password: "admin"})
]
localStorage.userName = ""
function register(){
 registerForm.className = "tab-pane fade show active";
 loginForm.className = "tab-pane fade";

}
function viewLogin(){
    loginForm.className = "tab-pane fade show active";
    registerForm.className = "tab-pane fade";
   }
function login(){
    let user = {
        userName: userNameInput.value,
        password: paswordInput.value
    }
    if (localStorage.users.indexOf(JSON.stringify(user))>=0){
        localStorage.userName = userNameInput.value;
    }
    else{
        alert("datos incorrectos")
        window.location.reload(); 
    }

}
function registerNew(){
   if(paswordNInput.value == nPaswordNInput.value){
       let user = {
           userName: userNNameInput.value,
           password: paswordNInput.value,
       }
       
    localStorage.userName = userNNameInput.value,
    localStorage.users.push(JSON.stringify(user))
   }       
}
