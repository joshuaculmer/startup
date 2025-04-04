import React from "react";
import Button from 'react-bootstrap/Button';

export function DancePositions() {
    const [positionName, setPositionName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [positions, setPositions] = React.useState('');

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

    // async function updateDancePositions() {
    //     const response = await fetch('/api/country/positions', {
    //         method: 'get',
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     });
    //     // .then((x) => console.log(x))
    //     // .then((x) => x.json())
    //     // .then((response) => {
    //     //     document.querySelector("pre").textContent = JSON.stringify(
    //     //         response,
    //     //         null,
    //     //         "  "
    //     //     );
    //     // });
    //     // console.log(response.json());
    //     const positions_json = response.json();
    //     setPositions(positions_json);
    //     // console.log(positions);
    //     document.querySelector("pre").textContent = JSON.stringify(response.json(), null, "  ");
    // };

    // updateDancePositions();

    React.useEffect(() => {
        fetch('/api/country/positions')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data)
                setPositions(JSON.stringify(data, null, "  "))
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <main>
            <div class="container">
                <section>
                    <h3>Dance instruction on each position will be placed here. Along with a list for all possible positions</h3>
                </section>

                <ul>
                    {positions}
                </ul>


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