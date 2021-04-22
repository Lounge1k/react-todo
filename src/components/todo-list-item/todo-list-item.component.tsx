import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import style from './todo-list-item.module.css';
import { ToDoItem } from '../../types';
import { StoreContext } from '../../store';

interface TodoListItemProps {
    todo: ToDoItem;
}

const TodoListItem = observer((props: TodoListItemProps) => {
    const { completeTodo } = useContext(StoreContext);

    const toggleState = () => {
        completeTodo(props.todo.id);
    }

    return (
        <button aria-label={`Toggle todo completion with name ${props.todo.name}`} onClick={toggleState} className={`${style.TodoListItem__Wrapper} ${props.todo.completed ? style.TodoListItem__Completed : ''}`}>
            <div className={style.TodoListItem__Name}>{props.todo.name}</div>
        </button>
    )
})

export default TodoListItem;
