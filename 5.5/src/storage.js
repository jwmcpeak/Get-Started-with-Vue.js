const TODO_KEY = 'todo-items';

function generateId() {
    return `_${Math.random().toString(36).substr(2, 9)}`;
}

function getItems() {
    let json = localStorage.getItem(TODO_KEY);

    if (!json) {
        return [];
    }

    return JSON.parse(json);
}

function saveItems(items) {
    localStorage.setItem(TODO_KEY, JSON.stringify(items));
}


export default {
    getItems() {
        let items = getItems();

        items.forEach(value => {
            if (value.dueDate) {
                value.dueDate = new Date(value.dueDate);
            }
        });

        return items;
    },
    addItem(title, dueDate) {
        let todo = {
            id: generateId(),
            title
        };

        if (dueDate) {
            // yyyy-m-d
            let parts = dueDate.split('-');
            todo.dueDate = new Date(parts[0], parts[1] - 1, parts[2]);
        }

        let items = getItems();

        items.push(todo);

        saveItems(items);
    },
    markCompleted(id) {
        let items = getItems();
        let item = items.find(el => el.id === id);
        item.completed = true;

        saveItems(items);
    }
}