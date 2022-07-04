import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

//interfaces are used to define a structure of the objects.
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((response) => {
  const todo = response.data as Todo;
  console.log(todo);

  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with id: ${id} 
    Title is : ${title}
    Is it finished? : ${completed}
    `);
};
