import React, {useContext} from 'react';
import { observer } from "mobx-react-lite"
import {StoreContext} from '../store';
import style from './todo-list.module.css'
import TodoListItem from "./todo-list-item.component";

const ToDoList = observer(() => {
    const {todos} = useContext(StoreContext);
    return (
        <div className={style.TodoList}>
            {todos.map((todo) =>
                <TodoListItem key={todo.id} todo={todo}/>
            )}
        </div>
    )
})

export default ToDoList
