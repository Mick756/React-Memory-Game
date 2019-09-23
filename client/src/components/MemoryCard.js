import React from 'react';
import '../styles/MemoryCard.css';

function MemoryCard(props) {

    

    return (
        <div className="Memory-Card-Container">

            <img className="Memory-Card-Picture" src={'./images/' + props.card.pic} alt={props.card.pic} />

        </div>
    );
}

export default MemoryCard;