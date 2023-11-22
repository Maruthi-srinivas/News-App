// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "./Login";
import MainPage from './MainPage';
import CategorySelector from './components/CategorySelector';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<MainPage/>} />
        <Route path="/news" element={<CategorySelector/>} />
      </Routes>
    </Router>
  );
};

export default App;

