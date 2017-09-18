var todoList = {
  todos: ['Learn to code', 'Get a job'],
  addTodo: function(newTodo) {
    this.todos.push(newTodo)
  }
}

var interactive = {
  addTodo: function() {
    var newTodoText = document.getElementById('addButton');
    todoList.addTodo(newTodoText.value);
    view.viewList();
    newTodoText.value = '';
  }
}

var view = {
  viewList: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (i = 0; i<todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      todoLi.textContent = todoList.todos[i];
      todosUl.appendChild(todoLi);
    }
  }
}
