import React, {useContext, useState} from 'react';
import styles from './input.module.css';
import {StoreContext} from "../../store";
import { observer } from "mobx-react-lite"

const Input = observer(() => {
    const [ value, setValue ] = useState<string>('');
    const { addToDo } = useContext(StoreContext);
    const createTodo = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (value.trim()) {
            addToDo(value);
            setValue('');
        }
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <form className={styles.InputWrapper} noValidate onSubmit={createTodo}>
            <input aria-label="Enter Todo" type='text' name="todoName" value={value} onChange={changeHandler} className={styles.Input}/>
            {value.trim() && <button aria-label={`Create Todo with name ${value}`} className={styles.Btn} type="submit">+</button>}
        </form>
    )
});

export default Input;
