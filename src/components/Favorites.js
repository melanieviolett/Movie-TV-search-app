import React from 'react';

const Favorites = () => {
    return (
        <>
            <div className='flex flex-row w-full mt-4'>
                <span className='mr-2'>Add to Favorites</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="pink" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </div>

        </>
    )
};

export default Favorites;