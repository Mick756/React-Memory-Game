import React, {useState} from 'react';
import MemoryCard from "./MemoryCard";
import '../styles/Game.css';

function Game() {

    const init_cards = [
        {pic: "fish.jpg", clicked: false}, {pic: "gary.png", clicked: false},
        {pic: "jellyfish.jpg", clicked: false}, {pic: "king.jpg", clicked: false},
        {pic: "krabs.png", clicked: false}, {pic: "misspuff.jpg", clicked: false},
        {pic: "patrick.png", clicked: false}, {pic: "pearl.jpg", clicked: false},
        {pic: "plankton.png", clicked: false}, {pic: "sandy.jpg", clicked: false},
        {pic: "spongebob.jpg", clicked: false}, {pic: "squidward.png", clicked: false}
    ];

    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [cards, setCards] = useState(init_cards);

    function gameClick(card_id) {
        let id = parseInt(card_id);
        let card = cards[id];
        if (card.clicked) {
            if (score > best) {
                setBest(score);
            }
            setCards(init_cards);
            setScore(0);
        } else {
            card.clicked = true;
            setScore(score + 1);
            randomizeCards();
        }
    }

    function randomizeCards() {
        let array = shuffleArray(cards);
        setCards(array);
    }

    return (
        <div>

            <p className="Game-Stats">Clicky Game</p>

            <p className="Game-Stats">Score: {score} - Best: {best}</p>

            <div className="Game-Card-Container">
                <div onClick={() => gameClick(0)}><MemoryCard card={cards[0]}/></div>
                <div onClick={() => gameClick(1)}><MemoryCard card={cards[1]}/></div>
                <div onClick={() => gameClick(2)}><MemoryCard card={cards[2]}/></div>
                <div onClick={() => gameClick(3)}><MemoryCard card={cards[3]}/></div>
                <div onClick={() => gameClick(4)}><MemoryCard card={cards[4]}/></div>
                <div onClick={() => gameClick(5)}><MemoryCard card={cards[5]}/></div>
                <div onClick={() => gameClick(6)}><MemoryCard card={cards[6]}/></div>
                <div onClick={() => gameClick(7)}><MemoryCard card={cards[7]}/></div>
                <div onClick={() => gameClick(8)}><MemoryCard card={cards[8]}/></div>
                <div onClick={() => gameClick(9)}><MemoryCard card={cards[9]}/></div>
                <div onClick={() => gameClick(10)}><MemoryCard card={cards[10]}/></div>
                <div onClick={() => gameClick(11)}><MemoryCard card={cards[11]}/></div>
            </div>


        </div>
    );
}

function shuffleArray(arr) {
    return arr
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
}

export default Game;