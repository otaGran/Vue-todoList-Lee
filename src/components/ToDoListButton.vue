<template>
  <div>
    <button v-on:click="clickAll">ALL</button>
    <button v-on:click="clickActive">Active</button>
    <button v-on:click="clickComplete">Complete</button>
  </div>
</template>

<script>
  export default {
    name: "toDoListButton",
    methods: {
      clickAll() {
        this.$store.commit('clickAll');
      },
      clickActive() {
        this.$store.commit('clickActive');
      },
      clickComplete() {
        this.$store.commit('clickComplete');
      }
    }
  }
</script>

<style scoped>

</style>
