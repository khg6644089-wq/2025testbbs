import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComp from './components/pages/HomeComp';
import ListComp from './components/pages/ListComp';
import ViewComp from './components/pages/ViewComp';
import ErrorComp from './components/pages/ErrorComp';
import MenuComp from './components/layout/MenuComp';

function App() {
  return (
    <BrowserRouter>
      <MenuComp />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeComp />}></Route>
          <Route path="/list" element={<ListComp />}></Route>
          <Route path="/View" element={<ViewComp />}></Route>
          <Route path="/*" element={<ErrorComp />}></Route>
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
