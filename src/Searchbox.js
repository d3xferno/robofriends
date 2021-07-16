import React from 'react';

const Searchbox = ({searchfield,searchchange}) =>{
    return (
        <div className='pa2'>
        <input 
        type='search' 
        placeholder='search robots' 
        onChange = {searchchange}
        className='pa2 ba b--green bg-lighest-blue'/>
        </div>
    );
}

export default Searchbox;
