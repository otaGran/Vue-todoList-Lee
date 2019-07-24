import todoFilter from "../utils";

const getters = {
  filteredTodos: (state) => {
    return todoFilter[state.filter](state.list)
  },
};
export default getters;
