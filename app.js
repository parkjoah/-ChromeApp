const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //관습 : string만 포함된 변수는 대문자로 표기함. string 저장하고 싶을 때 사용

function onLoginSubmit(event){ 
	event.preventDefault(); 					
	loginForm.classList.add("hidden");	
								
	const username = loginInput.value;
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove("hidden");
	
	console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit);