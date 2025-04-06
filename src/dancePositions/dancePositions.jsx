import React from "react";
import Button from 'react-bootstrap/Button';

export function DancePositions({ betaState }) {
    const [positionName, setPositionName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [positions, setPositions] = React.useState([]);

    async function createDancePosition() {
        if (positionName != "" && description != "") {
            console.log("position name:" + positionName);
            console.log("description:" + description);
            const response = await fetch(`/api/country/positions`, {
                method: 'post',
                body: JSON.stringify({ position_name: positionName, desc: description }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            console.log("position sent successfully");
            console.log("response: " + response);
        }
        setPositionName("");
        setDescription("");
    };

    async function addDancePosition(dancePosition) {
        console.log(dancePosition);
    };



    React.useEffect(() => {
        fetch('/api/country/positions')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // dataArray = new Array(0);
                setPositions(data);
                console.log(positions);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <main>
            <div class="container">
                <section>
                    <h3>Dance instruction on each position will be placed here. Along with a list for all possible positions</h3>
                </section>

                <div>
                    {positions.length === 0 ? (
                        <p className="text-gray-500 italic">No positions available yet.</p>
                    ) : (
                        positions.map((pos) => (
                            <div key={pos._id} className="p-4 border rounded-md shadow">
                                <h3 className="text-lg font-semibold">{pos.position_name}</h3>
                                <p className="text-gray-600">{pos.description}</p>
                                <button
                                    className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                                    onClick={() => addDancePosition(pos._id)}
                                >
                                    Do Something
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {betaState === true ? (
                    <div>
                        <div className='input-group mb-3'>
                            {/* <span className='input-group-text'>@</span> */}
                            <input className='form-control' type='text' value={positionName} onChange={(e) => setPositionName(e.target.value)} placeholder='Position Name here' />
                        </div>
                        <div className='input-group mb-3'>
                            {/* <span className='input-group-text'>🔒</span> */}
                            <input className='form-control' type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Put a short description here for the position' />
                        </div>

                        <Button variant='primary' onClick={() => createDancePosition()}>
                            Submit
                        </Button>

                    </div>
                ) : (
                    <div></div>
                )}
            </div>

        </main>
    )
}