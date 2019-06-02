import React from 'react';
import './App.css';

import MovieTheater from './components/movie-theater/MovieTheater';

function App() {

  return (
    <div className="App">
      <MovieTheater needMousemove={true}/>
    </div>
  );
}

export default App;
