<template>
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
      <div class="container">
        <a href="#" class="navbar-brand">TODO</a>
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add">Add New TODO</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
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
  
}
</script>