import React from 'react';

const Movie_TvList = (props) => {
const FavoriteComponent = props.favoriteComponent;

    return (
        <>
            {props.movies.map((movie, index)=> (
                // check what these classes are
                <div className='image-container d-flex justify-content-start m-3'>
                    {/* // Poster comes from movie object, which can be visualized in Postman */}
                    <img src={movie.Poster} alt="Movie/TV poster"></img>
                        <div onClick= {()=> props.handleFavsClick(movie)} 
                        className='overlay d-flex align-items-center justify-content'>
                            <FavoriteComponent></FavoriteComponent>
                        </div>
                </div>
            ))}
        </>
    )
} 

export default Movie_TvList;