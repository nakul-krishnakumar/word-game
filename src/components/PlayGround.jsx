import { useState } from 'react';
import Board from './Board';
import KeyBoard from './KeyBoard';
import wordDict from '../json/wordSet.json';

let randomWord = "";
function PlayGround() {
    const [word, setWord] = useState([[]]);
    const [row, setRow] = useState(0);
    const [won, setWon] = useState(false);

    console.log("Won: ", won) //testing

    const wordSet = wordDict.words;
    
    const max = wordSet.length+1; 
    const min = 0

    if (randomWord === "") {
        const randIndex = Math.floor(Math.random() * (max-min) + min);
        randomWord = wordSet[randIndex];
    }

    console.log("Randomly Selected Word:", randomWord); //testing

    console.log("2D Array Word: ", word); //testing
    console.log("Last Inputted Word: ", word[row-1]); //testing

    const setStatus = (status) => {
        setWon(status);
    }
 
    const rowCount = (count) => {
        setRow(count);
    }

    const blockColors = () => {
        let colorMap = new Map();
        let color = "";
        if (randomWord != "" && word != undefined && row >= 1 ) {
            for (let i=0; i<5; i++) {

                console.log("Reached inside For Loop"); //testing

                for (let j=0; j<5; j++) {
                    if (randomWord[i].toLocaleUpperCase() === word[row-1][j].toLocaleUpperCase()) {

                        if (i != j) {
                            color = "#FFFF00";
                        }
                        else {
                            color = "#008000";
                        }

                        console.log("Letter: ", randomWord[i]); //testing
                        console.log("Index: ", j);
                        console.log(color);
                        colorMap.set(j, color);
 
                    }
                }
            }
        }
        return colorMap;
    }

    console.log("Block Colors: ", blockColors()); //testing


    console.log("Current Row At PlayGround: ", row) //testing

    if (row >= 6 && !won) {
        alert("LOSERRRRRRRRRRR :(") //testing
    }

    if (won) alert("WINNNNERRRRRR :)"); //testing

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
                    <Board  word={word} blockColors={blockColors()} row={row}/>
                    <KeyBoard handleWord={handleWord} rowCount={rowCount} wordSet={wordSet} randomWord={randomWord} setStatus={setStatus} />    
                </div>
            </div>
        </>
    )
}

export default PlayGround;