<template>
  <div class="about">
    <div class="form-group">
      <label for="todo-title">Title</label>
      <input id="todo-title" type="text" class="form-control" v-model="title">
    </div>
    <div class="form-group">
      <label for="due-date">Due Date</label>
      <input id="due-date" type="date" class="form-control" v-model="dueDate">
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click.prevent="addTodoItem">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      dueDate: ''
    };
  },
  methods: {
    addTodoItem() {
      this.$todos.addItem(this.title, this.dueDate);
      this.$router.push('/');
    }
  }
}
</script>
