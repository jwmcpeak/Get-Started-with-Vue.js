<template>
    <div class="card"  >
        <div class="card-body">
        <h5 class="card-title">
            {{item.title}}
        </h5>
        <h6 class="card-subtitle text-danger" v-if="item.dueDate">
            {{dueDateLabel}}: {{formattedDate}}
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
    props: ['item'],
    computed: {
        formattedDate() {
            let dt = this.item.dueDate;
            return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
        },
        dueDateLabel() {
            let isOverdue = this.item.dueDate.getTime() < Date.now();

            return isOverdue ? 'Overdue' : 'Due';
        }
    }
}
</script>