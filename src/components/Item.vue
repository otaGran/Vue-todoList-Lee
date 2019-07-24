<template>
  <li :class="{completed: item.completed}">
    <input :checked="item.completed" type="checkbox" v-on:click="change">
    <span v-show="!isEdit" @dblclick="edit">{{ item.content }}</span>
    <input v-show="isEdit" type="text" v-on-clickaway="away" v-on:keyup.enter="updateTodo" v-model.trim="tmp">
  </li>
</template>

<script>
  import {mixin as clickaway} from 'vue-clickaway';

  export default {
    mixins: [clickaway],
    template: '<p v-on-clickaway="away">Click away</p>',
    name: "Item",
    data() {
      return {
        isEdit: false,
        tmp: '',
      };
    },
    props: ['item'],
    methods: {
      change: function () {
        this.completed = !this.completed;
        this.$emit("updateIsFinished", this.item.id);
      },
      edit: function () {
        this.isEdit = !this.isEdit;
      },
      away() {  // click-away轮子
        console.log('clicked away');
        this.isEdit = false;
      },
      updateTodo() {
        // this.$store.commit('updateTodo', this.item.id, this.tmp);
        this.$store.dispatch('updateTodo', this.item.id, this.tmp);
      },
    }
  }
</script>

<style scoped>

</style>
