import { useState } from 'react';
import Board from './Board';
import KeyBoard from './KeyBoard';
import wordDict from '../json/wordSet.json';
function PlayGround() {
    const [word, setWord] = useState([[]]);
    const [row, setRow] = useState(0);

    const wordSet = wordDict.words;
    const rowCount = (count) => {
        setRow(count);
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
                    <KeyBoard handleWord={handleWord} rowCount={rowCount} wordSet={wordSet}/>    
                </div>
            </div>
        </>
    )
}

export default PlayGround;