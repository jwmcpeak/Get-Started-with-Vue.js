<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">TODO</a>
      </div>
    </nav>
    <div class="container">
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
export default {
  name: 'app',
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        {title: 'Setup environment', dueDate: new Date(2019, 0, 26), completed: false},
        {title: 'Create main list component', dueDate: new Date(2022, 10, 15), completed: false},
        {title: 'Display TODO items', completed: false}
      ]
    };
  }
}
</script>