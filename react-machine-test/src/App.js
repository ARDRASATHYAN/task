import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import './App.css';

function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/detail/:id" element= {<DetailView />} />
       
      </Routes>
    </Router>
  );
}

export default App;
