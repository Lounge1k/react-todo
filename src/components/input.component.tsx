import React, {useContext, useState} from 'react';
import styles from './input.module.css';
import {StoreContext} from "../store";
import { observer } from "mobx-react-lite"

const Input = observer(() => {
    const [ value, setValue ] = useState<string>('');
    const { addToDo } = useContext(StoreContext);
    const onClickHandler = () => {
        addToDo(value);
        setValue('');
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <div className={styles.InputWrapper}>
            <input type='text' value={value} onChange={changeHandler} className={styles.Input}/>
            {value && <button onClick={onClickHandler} className={styles.Btn} type="button">+</button>  }
        </div>
    )
});

export default Input;
