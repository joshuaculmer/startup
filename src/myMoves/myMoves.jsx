import React from "react";

export function MyMoves() {
    const [moves, setMoves] = React.useState('');

    // React.useEffect(() => {
    //     fetch('/api/country/mymoves')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             // setmoves(data)
    //             setMoves(data);
    //             console.log(moves);
    //         })
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);

    return (
        <main>
            <div class="container">
                <section>
                    <h3>If the user is logged in, then they can see a list of their moves and interact with them</h3>
                </section>

                Not quite sure all the functionality I want to put here, but it'll include at least
                a list of dance moves that user knows. Possibly a reccomendation for a new move to learn
                This also depends on the database.
            </div>

            <div>
                {moves.length === 0 ? (
                    <p className="text-gray-500 italic">You have not added moves to your list yet.</p>
                ) : (
                    moves.map((move) => (
                        <div key={move._id} className="p-4 border rounded-md shadow">
                            <h3 className="text-lg font-semibold">{move.move_name}</h3>
                            <p className="text-gray-600">{move.description}</p>
                            {/* <button
                                className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                                onClick={() => addDanceMove(move._id)}
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