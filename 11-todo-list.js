const todoList = [{ 
    name:'make dinner',
    dueDate: '2025-06-16'
    } , {
    name:'wash dishes',
    dueDate: '2025-06-16'
  }];

renderTodoList (); //KEEP THIS FUNCTION TO SHOW THE LIST FROM BEGINNING

function renderTodoList() {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {

    const todoObject = todoList[i];
    
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;

    const {name, dueDate} = todoObject;

    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="dlt-button
      "> Delete </button>
    `; //HERE ${i} WILL BE DETECTED THE INDEX OF WHATEVER TODOLIST WE CLICK ON

    todoListHTML += html;

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }

}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input'); //FETCH THE VALUE FROM INPUT TO JS FUNC
  const inputDateElement = document.querySelector('.js-date-input');

  const name = inputElement.value;  //TO STORE THE VALUE WE GOT FROM INPUT
  const dueDate = inputDateElement.value;
  
 /* todoList.push({
    name: name, 
    dueDate: dueDate}); */

    todoList.push({
      name,
      dueDate
    });

  console.log(todoList)

  renderTodoList (); //DISPLAY THE ADDED NEW LIST
}

function TodoKeydown (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}