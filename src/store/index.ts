import {makeAutoObservable} from "mobx";
import {createContext} from "react";
import { ToDoItem } from '../types';

export class ToDoStore {
    protected id = 0;

    todos:ToDoItem[] = []

    constructor() {
        makeAutoObservable(this)
    }

    completeTodo = (id: number): void => {
        const todoItem = this.getTodoItemById(id);
        if (todoItem) {
            todoItem.completed = !todoItem.completed;
        }
    }

    addToDo = (name: string): void => {
        const todo = {
            name,
            id: ++this.id,
            completed: false
        }
        this.todos.push(todo);
    }

    private getTodoItemById = (id: number): ToDoItem | undefined => {
        return this.todos.find(item => item.id === id)
    }

}

export const StoreContext = createContext<ToDoStore>({} as ToDoStore)
export const todoStore = new ToDoStore()
