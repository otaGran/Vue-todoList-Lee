const mutations = {
  clickAll(state) {
    state.filter = 'all';
  },
  clickActive: state => {
    state.filter = 'activate';
  },
  clickComplete: state => {
    state.filter = 'complete';
  },
  loadTodos(state, todos) {
    state.list = todos;
  },
  addTodo(state, todo) {
    state.list.push(todo);
  },
  newItem: (state, newItem) => {
    state.newItem = newItem;
  },
  updateTodo: (state, id, newItem) => {
    state.newItem = newItem;
    state.list[id - 1].content = newItem;
  },
};
export default mutations;
