<template>
    <div>
        <TodoListItem  
            v-for="(item, index) in todos" 
            :key="index"
            v-show="!item.completed" 
            :item="item"
        />
    </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue';
export default {
    props: ['todos'],
    components: {TodoListItem}
}
</script>