import React from 'react';
import { movies } from '../data';

const Movies = () => {
  // console.log(movies.map(movie => movie.genres.map(genre => genre)))
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, index) => 
        (<div key={index}>
           <h3>{movie.title} </h3>
           <h4>{movie.time}</h4>
        {movie.genres.map((genre,index) => <ul key={index}><li >{genre}</li></ul> )}
        </div>))}
    </div>
  );
};

export default Movies;
