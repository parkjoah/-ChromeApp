const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //관습 : string만 포함된 변수는 대문자로 표기함. string 저장하고 싶을 때 사용
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //localStorage저장
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `${greetingByTime()} ${username}님!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  quote.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
}
function greetingByTime() {
  const date = new Date();
  const hours = date.getHours();

  return hours > 0 && hours < 6
    ? "Hello"
    : hours < 12
    ? "Good morning"
    : hours < 18
    ? " Good afternoon"
    : "Good night";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
