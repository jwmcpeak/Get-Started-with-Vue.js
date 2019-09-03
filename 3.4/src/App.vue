<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">TODO</a>
      </div>
    </nav>
    <div class="container">
      <div class="card" v-for="(item, index) in todos" :key="index">
        <div class="card-body">
          <h5 class="card-title">
            {{item.title}}
          </h5>
          <h6 class="card-subtitle text-danger" v-if="item.dueDate">
            <span v-show="item.dueDate.getTime() < Date.now()">Overdue:</span>
            {{item.dueDate}}
          </h6>
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
        {title: 'Setup environment', dueDate: new Date(2019, 0, 26)},
        {title: 'Create main list component', dueDate: new Date(2022, 10, 15)},
        {title: 'Display TODO items'}
      ]
    };
  }
}
</script>

<style>
.card {
  margin-top: 15px;
}
</style>