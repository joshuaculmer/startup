import React from "react";
import Button from 'react-bootstrap/Button';

export function DancePositions() {
    const [positionName, setPositionName] = React.useState('');
    const [description, setDescription] = React.useState('');

    async function createDancePosition() {
        if (positionName != "" && description != "") {
            const response = await fetch('api/country/positions', {
                method: 'post',
                body: JSON.stringify({ position_name: positionName, description: description }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            setPositionName("called api");
        }
        setPositionName("");
        setDescription("");



    };

    return (
        <main>
            <div class="container">
                <section>
                    <h3>Dance instruction on each position will be placed here. Along with a list for all possible positions</h3>
                </section>

                I'll put some media here that will represent the instruction for different dance Moves.
                This will call the database of videos
                Videos will update the DOM and be displayed here


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

        </main>
    )
}