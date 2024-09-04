import { useState } from 'react';
import Board from './Board';
import KeyBoard from './KeyBoard';
import wordDict from '../json/wordSet.json';

let randomWord = "";
function PlayGround() {
    const [word, setWord] = useState([[]]);
    const [row, setRow] = useState(0);
    const [won, setWon] = useState(false);

    console.log("Won: ", won)

    const wordSet = wordDict.words;
    
    const max = wordSet.length+1; 
    const min = 0

    if (randomWord === "") {
        const randIndex = Math.floor(Math.random() * (max-min) + min);
        randomWord = wordSet[randIndex];
    }

    console.log(randomWord); //testing
    //current working: randomWord changes its value once and stays that value

    const setStatus = (status) => {
        setWon(status);
    }
 
    const rowCount = (count) => {
        setRow(count);
    }

    console.log("Current Row At PlayGround: ", row) //testing

    if (row >= 6 && !won) {
        alert("LOSERRRRRRRRRRR :(")
    }
    const handleWord = (word) => {
        setWord((currWords) => {
            const newWords = [...currWords];
            newWords[row] = word;
            return newWords;
        });
        console.log(`At PlayGround: ${word}`);
    }

    return (
        <>  
            <div className="wrapper">
                <header>
                    <div className='head-text'>
                        <h1>WORD GAME</h1>
                        <h5>Guess the five-letter word in six tries by entering words and recieving feedback on letters that
                             match the target word in the correct position or are included but in the wrong position</h5>
                    </div>
                </header>
                <div className="playground">
                    <Board  word={word}/>
                    <KeyBoard handleWord={handleWord} rowCount={rowCount} wordSet={wordSet} randomWord={randomWord} setStatus={setStatus}/>    
                </div>
            </div>
        </>
    )
}

export default PlayGround;