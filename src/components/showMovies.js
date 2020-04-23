import React from 'react'
import CardMovie from './cardMovie';

export const showMovies = (props) => {
      let {movies}=props
    console.log(movies);
    return (
        <div className="container"  >
    
    <div className="row " >
      {movies.map((app) => {
            let {popularity,vote_count,video,poster_path,id,
                adult,backdrop_path,original_languaje,original_title,
                title,vote_average,overview,release_date}=app
            // console.log(img)
            return (
          
              <div className="col col-md-4" key={id} >
                <CardMovie 
                title={title} 
                description = {overview}
                img = {poster_path} 
                id = {id}
                />
              </div>
              
            )
          })}
    </div>

    </div>
    )
}
export default showMovies;
