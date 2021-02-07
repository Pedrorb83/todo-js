import './styles.css';
import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml (todo));


//deje de copiar en la clase 116