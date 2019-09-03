<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">TODO</a>
      </div>
    </nav>
    <div class="container">
      <div class="card" v-show="!item.completed" v-for="(item, index) in todos" :key="index">
        <div class="card-body">
          <h5 class="card-title">
            {{item.title}}
          </h5>
          <h6 class="card-subtitle text-danger" v-if="item.dueDate">
            <span v-show="item.dueDate.getTime() < Date.now()">Overdue:</span>
            {{item.dueDate}}
          </h6>
          <div class="todo-controls">
            <button 
              class="btn btn-sm btn-outline-success"
              @click.prevent="item.completed = true">
              Complete
            </button>
          </div>
          <!-- <p v-else>This has no due date</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
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

<style>
.card {
  margin-top: 15px;
}

.card .todo-controls {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  visibility: hidden;
}

.card:hover .todo-controls {
  visibility: visible;
}
</style>