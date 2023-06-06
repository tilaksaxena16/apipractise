import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Jsonapp } from './Jsonapp';
import { Apijson } from './Apijson';





const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Jsonapp />} />
        <Route path="/api" element={<Apijson/>} />
      </Routes>
    </>
  );
};

export { App };