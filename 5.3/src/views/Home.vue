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
  data() {
    return {
      todos: [
        {title: 'Setup environment', dueDate: new Date(2019, 0, 26), completed: true},
        {title: 'Create main list component', dueDate: new Date(2022, 10, 15), completed: false},
        {title: 'Display TODO items', completed: false}
      ]
    };
  }
}
</script>
