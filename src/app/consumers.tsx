import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// TODO: setup other app consumers, handle loading providers etc.
const Consumers = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Consumers;
