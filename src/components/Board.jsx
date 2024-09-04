import PropTypes from 'prop-types';

Board.propTypes = {
    word: PropTypes.array.isRequired,
}

function Board(props) {
    console.log(`At Board: ${props.word}`); //testing

    return (
        <div className="board">
            <div className="row-1 row">
                <div className="letter-1 letter">{(props.word[0] == undefined) ? null : props.word[0][0]}</div>
                <div className="letter-2 letter">{(props.word[0] == undefined) ? null : props.word[0][1]}</div>
                <div className="letter-3 letter">{(props.word[0] == undefined) ? null : props.word[0][2]}</div>
                <div className="letter-4 letter">{(props.word[0] == undefined) ? null : props.word[0][3]}</div>
                <div className="letter-5 letter">{(props.word[0] == undefined) ? null : props.word[0][4]}</div>
            </div>
            <div className="row-2 row">
                <div className="letter-1 letter">{(props.word[1] == undefined) ? null : props.word[1][0]}</div>
                <div className="letter-2 letter">{(props.word[1] == undefined) ? null : props.word[1][1]}</div>
                <div className="letter-3 letter">{(props.word[1] == undefined) ? null : props.word[1][2]}</div>
                <div className="letter-4 letter">{(props.word[1] == undefined) ? null : props.word[1][3]}</div>
                <div className="letter-5 letter">{(props.word[1] == undefined) ? null : props.word[1][4]}</div>
            </div>
            <div className="row-3 row">
                <div className="letter-1 letter">{(props.word[2] == undefined) ? null : props.word[2][0]}</div>
                <div className="letter-2 letter">{(props.word[2] == undefined) ? null : props.word[2][1]}</div>
                <div className="letter-3 letter">{(props.word[2] == undefined) ? null : props.word[2][2]}</div>
                <div className="letter-4 letter">{(props.word[2] == undefined) ? null : props.word[2][3]}</div>
                <div className="letter-5 letter">{(props.word[2] == undefined) ? null : props.word[2][4]}</div>
            </div>
            <div className="row-4 row">
                <div className="letter-1 letter">{(props.word[3] == undefined) ? null : props.word[3][0]}</div>
                <div className="letter-2 letter">{(props.word[3] == undefined) ? null : props.word[3][1]}</div>
                <div className="letter-3 letter">{(props.word[3] == undefined) ? null : props.word[3][2]}</div>
                <div className="letter-4 letter">{(props.word[3] == undefined) ? null : props.word[3][3]}</div>
                <div className="letter-5 letter">{(props.word[3] == undefined) ? null : props.word[3][4]}</div>
            </div>
            <div className="row-5 row">
                <div className="letter-1 letter">{(props.word[4] == undefined) ? null : props.word[4][0]}</div>
                <div className="letter-2 letter">{(props.word[4] == undefined) ? null : props.word[4][1]}</div>
                <div className="letter-3 letter">{(props.word[4] == undefined) ? null : props.word[4][2]}</div>
                <div className="letter-4 letter">{(props.word[4] == undefined) ? null : props.word[4][3]}</div>
                <div className="letter-5 letter">{(props.word[4] == undefined) ? null : props.word[4][4]}</div>
            </div>
            <div className="row-6 row">
                <div className="letter-1 letter">{(props.word[5] == undefined) ? null : props.word[5][0]}</div>
                <div className="letter-2 letter">{(props.word[5] == undefined) ? null : props.word[5][1]}</div>
                <div className="letter-3 letter">{(props.word[5] == undefined) ? null : props.word[5][2]}</div>
                <div className="letter-4 letter">{(props.word[5] == undefined) ? null : props.word[5][3]}</div>
                <div className="letter-5 letter">{(props.word[5] == undefined) ? null : props.word[5][4]}</div>
            </div>
        </div>
    )
}

export default Board