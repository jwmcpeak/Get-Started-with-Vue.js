<template>
    <div class="list-container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a 
                    href="#" 
                    class="nav-link active" 
                    data-toggle="tab" 
                    @click.prevent="filter(false)">Incomplete</a>
            </li>
            <li class="nav-item">
                <a 
                    href="#" 
                    class="nav-link" 
                    data-toggle="tab" 
                    @click.prevent="filter(true)">Complete</a>
            </li>
            <li class="nav-item">
                <a 
                    href="#" 
                    class="nav-link" 
                    data-toggle="tab" 
                    @click.prevent="filter()">All</a>
            </li>
        </ul>

        <TodoListItem  
            v-for="(item, index) in filteredItems" 
            :key="index"
            :item="item"
        />
    </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue';
export default {
    props: ['todos'],
    components: {TodoListItem},
    data() {
        return {
            filteredItems: this.todos.filter(item => !item.completed)
        };
    },
    methods: {
        filter(value) {
            if (value === true) {
                this.filteredItems = this.todos.filter(item => item.completed);
            } else if (value === false) {
                this.filteredItems = this.todos.filter(item => !item.completed);
            } else {
                this.filteredItems = this.todos;
            }
        }
    }
}
</script>
<style scoped>
.list-container {
    margin-top: 15px;
}
</style>