import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchApi = async () => {
  const res = await axios(url);

  const todo = res.data as Todo;
  const { id, title, completed } = todo;

  logTodo(id, title, completed);
};
fetchApi();

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(id, title, completed);
};
