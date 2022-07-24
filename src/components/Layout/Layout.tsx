import React, { FC } from 'react';

interface IProps {
  children: React.ReactNode
}

const Layout: FC<IProps> = ({ children }): JSX.Element => {
  return (
    <div className='bg-gray-900 text-white py-10 min-h-screen'>
      {children}
    </div>
  );
};

export default Layout;