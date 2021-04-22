import { ToDoStore } from './';

describe("TodoStore", () => {
    it("creates new todos", () => {
        const store = new ToDoStore();
        store.addToDo("todo1")
        store.addToDo("todo2")
        expect(store.todos.length).toBe(2)
        expect(store.todos[0].name).toBe("todo1")
        expect(store.todos[1].name).toBe("todo2")
    })

    it("completes todo", () => {
        const store = new ToDoStore();
        store.addToDo("todo1")
        const todo = store.todos[0];
        expect(store.todos.length).toBe(1)
        expect(todo.name).toBe("todo1")
        store.completeTodo(todo.id);
        expect(todo.completed).toBeTruthy();
    })
});
