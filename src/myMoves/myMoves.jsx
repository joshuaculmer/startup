import React from "react";

export function MyMoves() {
    const [moves, setmoves] = React.useState('');

    React.useEffect(() => {
        fetch('/api/country/moves')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data)
                // setmoves(data)
                setmoves(JSON.stringify(data, null, "  "))
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

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

            <ul>
                {moves}
            </ul>
        </main>
    )
}