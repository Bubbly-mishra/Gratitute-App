//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener("click", addTodo);

//Funcation

function addTodo(event){
    event.preventDefault();
    
}