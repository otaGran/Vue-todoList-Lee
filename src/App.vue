<template>
  <div id="app">
    <ToDoList/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList'


export default {
  name: 'App',
  components: {
    ToDoList
  },
  mounted() {
    this.$store.dispatch('getList');
  }
}
</script>

<style src="./assets/App.css">

</style>
