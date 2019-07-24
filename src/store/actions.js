import axios from "axios";

const baseUrl = "http://localhost:3001/todos";

const actions = {
  getList({commit}) {
    axios.get(baseUrl).then( response => {
      commit('loadTodos', response.data)
    }).catch(error=>console.log(error));
  },
  addTodo({commit}, content) {
    axios.post(baseUrl, {"content": content, "completed": false})
      .then(response => {
        commit('addTodo', response.data);
      })
      .catch(error => console.log(error));
  },
  updateTodo({commit}, id, tmp) {
    axios.put(`baseUrl/id`, {"content": tmp, "completed": false})
      .then(response => {
        commit('updateTodo', response.data);
      })
      .catch(error => console.log(error));
  },
};
export default actions;
