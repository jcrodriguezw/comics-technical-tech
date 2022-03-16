import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ComicBooks from './components/comics/ComicBooks';
import ComicDetail from './components/comics/ComicDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ComicBooks />} />
        <Route path='/comic/:id' element={<ComicDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
