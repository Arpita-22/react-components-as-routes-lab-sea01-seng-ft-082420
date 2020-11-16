import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor,index) =>(<div key={index}>
       <h3>{actor.name}</h3>
        {actor.movies.map((movie,index) =><ul key={index}><li>{movie}</li></ul>)}
       </div>))}
    </div>
  );
};

export default Actors;
