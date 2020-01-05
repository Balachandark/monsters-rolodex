import React from 'react';
import './card.styles.css'

const Card = ( {users} ) => {
    return (
        <div className="monsters" key={users.username}>
            <img
            alt='monster'
            src={`https://robohash.org/${users.id}?set=set2&size=180x180`}
            />
            <h2>{ users.name }</h2>
            <p>{ users.email }</p>
        </div>
    );
};

export default Card;