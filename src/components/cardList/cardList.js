import React from 'react';
import Card from '../card/card';
import './cardList.styles.css';

const CardList = ( {filteredMonsters} ) => {
    return (
        <div className="monsters-wrapper">
            {
                filteredMonsters.map( users => {
                    return(
                        <Card users={users} /> 
                    )
                } )
            }
        </div>
    )
}

export default CardList;