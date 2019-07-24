<template>
  <div id="ToDoList">
    <Header></Header>
    <div>
      <input class="input-text" type="text" v-on:keyup.enter="addTodo" v-model.trim="tmp">
      <button v-on:click="addTodo">Add</button>
    </div>
    <br>
    <ol>
      <Item @updateIsFinished="updateIsFinished" :item="item" v-for="item in filteredTodos"></Item>
    </ol>
    <ToDoListButton></ToDoListButton>
  </div>

</template>

<script>
  import Header from "./Header";
  import Item from "./Item.vue";
  import ToDoListButton from "./ToDoListButton.vue";


  export default {
    name: "ToDoList",
    data() {
      return {
        tmp: "",
      }
    },
    computed: {
      list() {
        return this.$store.state.list;
      },
      filteredTodos() {
        return this.$store.getters.filteredTodos;
      },
    },
    methods: {
      updateIsFinished: function (id) {
        this.list[id - 1].completed = !this.list[id - 1].completed;
      },
      addTodo() {
        if (this.tmp !== '') {
          this.$store.commit('newItem', this.tmp);
          this.$store.dispatch('addTodo', this.$store.state.newItem);
        }
      },
    },
    components: {
      Header,
      Item,
      ToDoListButton
    }
  }
</script>

<style scoped>

</style>
