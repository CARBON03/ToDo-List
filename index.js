

const todoList = [];

renderTodoList()

function renderTodoList() {
    let todoListHTML = '' ;

  for(i=0 ; i<todoList.length ; i++ ){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name , dueDate} = todoObject ;
    const html = `
    <div class="Task">  ${name}</div>
    <div class="Task">${dueDate}</div>
    <div>
      <button class="deleteButton" onclick="
      todoList.splice(${i} , 1);
      renderTodoList()
      ">Delete</button>
    </div>
    `;
    todoListHTML += html;
  }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML ;
}


function addTodo() {
  const InputElement = document.querySelector('.js-name-input');
  const name = InputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value ;

  if (!name || !dueDate) {
    alert("Please fill out both the task name and due date.");
    return;
}

  todoList.push({
    //name : name,
    //dueDate : dueDate
    name,
    dueDate
  }); 

  InputElement.value = '';
  renderTodoList()
}


function handleCostKeydown(event) {
  if(event.key === 'Enter'){
    addTodo()
    renderTodoList()
  }
}