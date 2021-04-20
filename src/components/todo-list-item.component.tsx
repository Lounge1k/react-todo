import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import style from './todo-list-item.module.css';
import { ToDoItem } from '../types';
import { StoreContext } from '../store';

interface TodoListItemProps {
    todo: ToDoItem;
}

const TodoListItem = observer((props: TodoListItemProps) => {
    const { completeTodo } = useContext(StoreContext);

    const toggleState = () => {
        completeTodo(props.todo.id);
    }

    return (
        <div className={`${style.TodoListItem__Wrapper} ${props.todo.completed ? style.TodoListItem__Completed : ''}`}>
            <div className={style.TodoListItem__Name}>{props.todo.name}</div>
            <button type='button' onClick={toggleState} className={style.TodoListItem__BtnComplete}>{props.todo.completed ? '-' : '+'}</button>
        </div>
    )
})

export default TodoListItem;
