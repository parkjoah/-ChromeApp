const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const todoListContainer = document.getElementById("todoListContainer");

const toDoBtn = document.querySelector("#container :nth-child(2)");
// console.log(toDoBtn);
const toDoPopup = document.querySelector("#toDoPopup");
function toDoPop() {
  toDoPopup.className == ""
    ? toDoPopup.classList.add(HIDDEN_CLASSNAME)
    : toDoPopup.classList.remove(HIDDEN_CLASSNAME);
  dDayPop.className == "" ? dDayPop.classList.add(HIDDEN_CLASSNAME) : null;
}

toDoBtn.addEventListener("click", toDoPop);

const TODOS_KEY = "todos";

//array 만들어주기
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //li.id? string , todo.id? number
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "✔️";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //newTodo : string 값
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //object 넣기
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDo = JSON.parse(savedToDos);
  toDos = parsedToDo;
  parsedToDo.forEach(paintTodo);
}
