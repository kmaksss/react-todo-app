import React, { FC } from 'react';
import { FaCheck } from 'react-icons/fa';

interface IProps {
  isCompleted: boolean;
}

const Checkbox: FC<IProps> = ({ isCompleted }): JSX.Element => {
  return (
    <div
      className={`border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400' : ''} w-6 h-6 mr-3 flex justify-center items-center`}
    >
      { isCompleted && <FaCheck size={10} className='text-gray-900'/> }

    </div>
  );
};

export default Checkbox;