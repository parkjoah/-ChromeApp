const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

//array 만들어주기
let toDos =[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText="❌";
    btn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //newTodo : string 값
    toDoInput.value="";
    toDos.push(newTodo); //array에 넣기
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !==null ){
    const parsedToDo = JSON.parse(savedToDos);
    toDos = parsedToDo;
    parsedToDo.forEach(paintTodo);
}

