<template>
    <div class="list-container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a 
                    href="#" 
                    class="nav-link" 
                    :class="{active: filterType === false}"
                    @click.prevent="filterType = false">Incomplete</a>
            </li>
            <li class="nav-item">
                <a 
                    href="#" 
                    class="nav-link" 
                    :class="{active: filterType === true}"
                    @click.prevent="filterType = true">Complete</a>
            </li>
            <li class="nav-item">
                <a 
                    href="#" 
                    class="nav-link" 
                    :class="{active: filterType === undefined}"
                    @click.prevent="filterType = undefined">All</a>
            </li>
        </ul>

        <TodoListItem  
            v-for="(item, index) in filteredItems" 
            :key="index"
            :item="item"
            @item-completed="filter()"
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
            filteredItems: this.todos.filter(item => !item.completed),
            filterType: false
        };
    },
    watch: {
        filterType(value) {
            this.filter();
        }
    },
    methods: {
        filter() {
            if (this.filterType === true) {
                this.filteredItems = this.todos.filter(item => item.completed);
            } else if (this.filterType === false) {
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