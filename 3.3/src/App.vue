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
          {{item.title}}
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
        {title: 'Setup environment'},
        {title: 'Create main list component'},
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