const todoFilter = {
  all: todos => todos,
  activate: todos =>todos.filter(todo => !todo.completed),
  complete: todos =>todos.filter(todo => todo.completed),
};

export default todoFilter;
