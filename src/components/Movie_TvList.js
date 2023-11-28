import React from 'react';

const Movie_TvList = (props) => {
const FavoriteComponent = props.favoriteComponent;

    return (
        <>
            {props.movies.map((movie, index)=> (
                <div className='flex justify-start m-3'>
                    {/* // Poster comes from movie object, which can be visualized in Postman */}
                    <div className='flex flex-col items-center justify-end'>
                        <img src={movie.Poster} alt="Movie/TV poster"></img>
                        <div onClick= {()=> props.handleFavsClick(movie)} 
                        className='flex flex-col w-full items-center justify-end'>
                            <FavoriteComponent></FavoriteComponent>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
} 

export default Movie_TvList;