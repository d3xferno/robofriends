import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) =>{
    const cardcomp = robots.map((user,i)=>{
        return <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
    })
    return (
        <div>
            {cardcomp}
        </div>
    );
}

export default Cardlist;