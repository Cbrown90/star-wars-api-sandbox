import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Films from './components/Pages/FilmsPage';
import Film from './components/Pages/FilmPage';
import Characters from './components/Pages/CharactersPage';

function App() {
  return (
    <Routes>

     <Route path="/Films/" element={<Films />} />
     <Route path="/Films/:filmID" element={<Film />} />
     <Route path="/Character" element={<Characters />} />
     <Route path="/" element={<Films />} />
    </Routes>
  );
}

export default App;
