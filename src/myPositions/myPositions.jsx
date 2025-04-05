import React from "react";


export function MyPositions() {
    const [positions, setPositions] = React.useState('');

    React.useEffect(() => {
        fetch('/api/country/mypositions')
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
                    <h3>If the user is logged in, then they can see a list of their positions and interact with them</h3>
                </section>

                Not quite sure all the functionality I want to put here, but it'll include at least
                a list of dance positions that user knows. Possibly a reccomendation for a new position to learn
                This also depends on the database.
            </div>

            <div>
                {positions.length === 0 ? (
                    <p className="text-gray-500 italic">You have not added positions to your list yet.</p>
                ) : (
                    positions.map((pos) => (
                        <div key={pos._id} className="p-4 border rounded-md shadow">
                            <h3 className="text-lg font-semibold">{pos.position_name}</h3>
                            <p className="text-gray-600">{pos.description}</p>
                            {/* <button
                                className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                                onClick={() => addDancePosition(pos._id)}
                            >
                                Do Something
                            </button> */}
                        </div>
                    ))
                )}
            </div>
        </main>
    )
}