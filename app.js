// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//value > input 안에 있는 텍스트

function onLoginBtnClick(){
    console.log(loginInput.value);

};
loginButton.addEventListener("click",onLoginBtnClick);