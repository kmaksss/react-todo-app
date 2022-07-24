import React, { FC, useState } from 'react';
import { ITodo } from '../../interfaces/todo';
import CreateTodoField from '../CreateTodoField/CreateTodoField';
import TodoItem from '../TodoItem/TodoItem';

const Home: FC = (): JSX.Element => {
  const data: ITodo[] =   [
    { id: '1', title: 'test 1', isCompleted: false },
    { id: '2', title: 'test 2', isCompleted: false },
    { id: '3', title: 'test 3', isCompleted: false },
    { id: '4', title: 'title 4', isCompleted: true }
  ]

  const [todos, setTodos] = useState(data);

  const changeTodo = (id: string): void => {
    const copy: ITodo[] = [...todos];
    const current: ITodo | null = copy.find(t => t.id === id) || null;

    if (current) {
      current.isCompleted = !current.isCompleted;
    }

    setTodos(copy);
  }

  const removeTodo = (id: string): void => {
    console.log(id);
    setTodos([...todos].filter(t => t.id !== id));
  }

  return (
    <div className='w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold mb-10 text-center'>Todo app</h1>
      <CreateTodoField setTodos={setTodos}/>

      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
          />))
      }
    </div>
  );
};

export default Home;