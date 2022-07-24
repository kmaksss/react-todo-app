import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <Home/>
    </Layout>
  </React.StrictMode>
);
