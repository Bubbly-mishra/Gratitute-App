//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener("click", addTodo);

//Funcation

function addTodo(event){
    event.preventDefault();
   
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mart button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.append(completedButton);

     //check trash button

     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.append(trashButton);

     //append
     todoList.appendChild(todoDiv);
     //clear todo input value
     todoInput.value="";
}