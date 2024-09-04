import PropTypes from 'prop-types';
import { useState } from 'react';

KeyBoard.propTypes = {
    handleWord: PropTypes.func.isRequired,
    rowCount: PropTypes.func.isRequired,
    wordSet: PropTypes.array.isRequired
};

function KeyBoard(props) {

    const [word, setWord] = useState([]);
    const [row,setRow] = useState(0);
    const [validity, setValidity] = useState(false);

    const wordString = word.toString().replaceAll(",", ""); //used to change array `word` to string `wordString`

    if (word.length >= 5 && !validity) {

        console.log("Entered block to check validity"); //testing

        for (const i of props.wordSet) {
            if (wordString === i.toUpperCase()) {
                setValidity(true);

                console.log("Validity set to true"); //testing
            }
        }
    }    

    const handleClick = (event) => {
        const value = event.currentTarget.getAttribute("data-value");

        if (value == "null") { //used to pop the last alphabet
            const newWord = word.slice(0, -1);
            setWord(newWord);

            props.handleWord(newWord); //callback


        } else if (value != "null" && word.length < 5) { //add a new alphabet
            const newWord = word;
            newWord.push(value);
            setWord(newWord);

            props.handleWord(newWord); //callback
        }

        console.log(word); //testing

    }

    const handleSumbit = () => {
            setRow((currRow) => currRow + 1);
            props.rowCount(row + 1);
    
            console.log(word); //testing
            console.log("type of wordSet send as prop: " + typeof props.wordSet); //testing
            console.log(wordString); //testing
    
    
            console.log("Submit Button Enabled & Clicked")
            // for (const word of props.wordSet) { //
            //     if (wordString === word.toUpperCase()) {
            //         console.log("YES, IT IS HERE ******************************************"); //testing
            //     }
            // }
    
            //resetting word and validity as me move to the next row
            setWord([]);  
            setValidity(false);

    }
    
    return (
        <div className="keyboard">
            <div className="row-1 row">
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="Q">Q</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="W">W</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="E">E</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="R">R</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="T">T</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="Y">Y</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="U">U</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="I">I</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="O">O</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="P">P</button>
            </div>
            <div className="row-2 row">
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="A">A</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="S">S</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="D">D</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="F">F</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="G">G</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="H">H</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="J">J</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="K">K</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="L">L</button>
            </div>
            <div className="row-3 row">
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="Z">Z</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="X">X</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="C">C</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="V">V</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="B">B</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="N">N</button>
                <button className="alpha-key" onClick={(event) => handleClick(event)} data-value="M">M</button>
                <button className="alpha-key close-btn" onClick={(event) => handleClick(event)} data-value="null">
                    <img src="src\images\close-button.png" width="80%" height="auto"/>
                </button>

            </div>
            <div className="submit">
                <button disabled={word.length<5 || validity === false} className="submit-btn" onClick={handleSumbit}><strong>SUBMIT</strong></button>
            </div>
        </div>
  )
}

export default KeyBoard;