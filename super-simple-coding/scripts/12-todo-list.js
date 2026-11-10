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

  todoList.forEach((todoObject,index) =>{
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate; // it can be replaced by destructuring

    const {name, dueDate} = todoObject // destructuring
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class = "delete-todo-button js-delete-todo-button">Delete</button>
      `; // generating html using javascript
    todoListHTML += html;
    
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelector('.js-add-todo-button')
    .addEventListener('click',() => {
      addTodo();
    });

    // this is a list of buttons containing the class
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click',() => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    })
     

}  
  
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name, // can be done by shorthand property syntax as the down 2 lines of code
    // dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}