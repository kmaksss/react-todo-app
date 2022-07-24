import React, { FC, useState } from 'react';
import { ITodo } from '../../interfaces/todo';

interface IProps {
  setTodos: Function;
}

const CreateTodoField: FC<IProps> = ({ setTodos }): JSX.Element => {
  const [title, setTitle] = useState('');

  const addTodo = (title: string): void => {
    if (!title.trim()) return;

    setTodos((prev: ITodo[]) => [{
      id: String(Date.now()),
      title,
      isCompleted: false,
    }, ...prev])

    setTitle('');
  }

  return (
    <div className='flex items-center justify-between rounded-2xl border-zinc-800 border-2 px-5 py-3 mb-6 w-full'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Add a task'
      />
    </div>
  );
};

export default CreateTodoField;