function register(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

localStorage.setItem("username",username);
localStorage.setItem("password",password);

alert("Registration Successful!");

window.location.href="login.html";
}


function login(){

let username=document.getElementById("loginUser").value;
let password=document.getElementById("loginPass").value;

let storedUser=localStorage.getItem("username");
let storedPass=localStorage.getItem("password");

if(username===storedUser && password===storedPass){

alert("Login Successful!");
window.location.href="secure.html";

}else{

alert("Invalid Login");

}
}


function logout(){

window.location.href="login.html";

}
