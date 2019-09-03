<template>
    <div class="card"  >
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
</template>
<script>
export default {
    props: ['item']
}
</script>