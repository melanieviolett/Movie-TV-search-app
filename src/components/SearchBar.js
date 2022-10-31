import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='col col-sm-4'>
            <input 
                className='form-control' 
                value = {props.value}
                onChange = {(event) => props.setSearchVal(event.target.value)}
                placeholder='Search...'
            ></input>
        </div>
    )
}

export default SearchBar;