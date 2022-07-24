import React, { FC } from 'react';
import { ITodo } from '../../interfaces/todo';
import Checkbox from '../Checkbox/Checkbox';
import { FaTrashAlt } from 'react-icons/fa';

type voidFunction<T> = (arg: T) => void;

interface IProps {
  todo: ITodo;
  changeTodo: voidFunction<string>
  removeTodo: voidFunction<string>
}

const TodoItem: FC<IProps> = ({ todo, changeTodo, removeTodo }): JSX.Element => {
  return (
    <div
      className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'
    >
      <button className='flex items-center' onClick={() => changeTodo(todo.id)}>
        <Checkbox isCompleted={todo.isCompleted}/>
        <span className={`${todo.isCompleted ? 'line-through' : ''} mr-2`}>{todo.title}</span>
      </button>

      <button>
        <FaTrashAlt
          className='text-gray-600 hover:text-pink-600 transition-all ease-in-out duration-300'
          onClick={() => removeTodo(todo.id)}
        />
      </button>
    </div>
  );
};

export default TodoItem;