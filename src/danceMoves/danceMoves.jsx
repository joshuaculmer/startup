import React from "react";
import Button from 'react-bootstrap/Button';

export function DanceMoves({ betaState }) {
    // move_name, pos_start, pos_end, description, type, difficulty
    const [move_name, setmove_name] = React.useState('');
    const [pos_start, setpos_start] = React.useState('');
    const [pos_end, setpos_end] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [type, settype] = React.useState('');
    const [difficulty, setdifficulty] = React.useState('');

    const [moves, setMoves] = React.useState('');

    async function createDanceMove() {
        if (move_name != "" && pos_start != "" && pos_end != "" && description != "") {
            console.log("move_name:" + move_name);
            console.log("pos_start:" + pos_start);
            console.log("pos_end:" + pos_end);
            console.log("description:" + description);
            console.log("type:" + type);
            console.log("difficulty:" + difficulty);

            const response = await fetch(`/api/country/moves`, {
                method: 'post',
                body: JSON.stringify({ move_name: move_name, pos_start: pos_start, pos_end: pos_end, description: description, type: type, difficulty: difficulty }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            console.log("move sent successfully");
            console.log("response: " + response);
        }
        setmove_name("");
        setpos_start("");
        setpos_end("");
        setdescription("");
        settype("");
        setdifficulty("");
    };

    async function addDanceMove(danceMove) {
        console.log(danceMove);
    };

    React.useEffect(() => {
        fetch('/api/country/moves')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // setmoves(data)
                setMoves(data);
                console.log(moves);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <main>
            <div class="container">
                <section>
                    <h3>Dance instruction on each move will be placed here. Along with a list for all possible moves</h3>
                </section>

            </div>

            <div>
                {moves.length === 0 ? (
                    <p className="text-gray-500 italic">No moves available yet.</p>
                ) : (
                    moves.map((move) => (
                        <div key={move._id} className="p-4 border rounded-md shadow">
                            <h3 className="text-lg font-semibold">{move.move_name}</h3>
                            <p className="text-gray-600">{move.description}</p>
                            <button
                                className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                                onClick={() => addDanceMove(move._id)}
                            >
                                Do Something
                            </button>
                        </div>
                    ))
                )}
            </div>

            {betaState === true ? (
                <div>
                    {/* move_name, pos_start, pos_end, description */}
                    <div className='input-group mb-3'>
                        <input className='form-control' type='text' value={move_name} onChange={(e) => setmove_name(e.target.value)} placeholder='Move Name here' />
                    </div>
                    <div className='input-group mb-3'>
                        <input className='form-control' type='text' value={pos_start} onChange={(e) => setpos_start(e.target.value)} placeholder='pos_start' />
                    </div>
                    <div className='input-group mb-3'>
                        <input className='form-control' type='text' value={pos_end} onChange={(e) => setpos_end(e.target.value)} placeholder='pos_end' />
                    </div>
                    <div className='input-group mb-3'>
                        <input className='form-control' type='text' value={description} onChange={(e) => setdescription(e.target.value)} placeholder='description' />
                    </div>
                    <div className='input-group mb-3'>
                        <input className='form-control' type='text' value={type} onChange={(e) => settype(e.target.value)} placeholder='type' />
                    </div>
                    <div className='input-group mb-3'>
                        <input className='form-control' type='text' value={difficulty} onChange={(e) => setdifficulty(e.target.value)} placeholder='difficulty' />
                    </div>

                    <Button variant='primary' onClick={() => createDanceMove()}>
                        Submit
                    </Button>
                </div>
            ) : (
                <div></div>
            )}

        </main>
    )
}