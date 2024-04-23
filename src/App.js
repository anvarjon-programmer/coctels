import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import "./App.css";
import Navbar from './components/coctails/Navbar';
import Home from './components/coctails/page/Home';
import About from './components/coctails/page/About';
import SingleCocktail from './components/coctails/page/SingleCocktail';
import Error from './components/coctails/page/Error';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='about' element={ <About/> } /> 
        <Route path = 'cocktail/:id' element={<SingleCocktail/>} />
        <Route path='*' element={ <Error/> } /> 
      </Routes>
    </Router>
  );
}

export default App;