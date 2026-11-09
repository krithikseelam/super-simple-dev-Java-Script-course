const todoList = [{
  name: 'make dinner',
  dueDate: '19-11-2026'
},{
  name: 'wash dishes',
  dueDate: '19-11-2026'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate; // it can be replaced by destructuring

    const {name, dueDate} = todoObject // destructuring
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();
      " class = "delete-todo-button">Delete</button>
      `; // generating html using javascript
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo(){
  const inpuElement = document.querySelector('.js-name-input');
  const name = inpuElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name, // can be done by shorthand property syntax as the down 2 lines of code
    // dueDate: dueDate
    name,
    dueDate
  });

  inpuElement.value = '';

  renderTodoList();
}