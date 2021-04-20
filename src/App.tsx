import Input from './components/input.component';
import styles from './app.module.css';
import { observer } from 'mobx-react-lite';
import ToDoList from "./components/todo-list.component";

const App = observer(() => {
    return (
        <div className={styles.Wrapper}>
            <header className={styles.AppHeader}>
                <span className={styles.AppHeader}>Todo List</span>
            </header>
            <main>
                <Input/>
                <ToDoList />
            </main>
        </div>
    );
});

export default App;
