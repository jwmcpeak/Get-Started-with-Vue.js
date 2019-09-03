<template>
  <div class="home">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from './../components/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoList
  },
  created() {
    this.todos = this.$todos.getItems();
  },
  data() {
    return {
      todos: []

    };
  }
}
</script>
