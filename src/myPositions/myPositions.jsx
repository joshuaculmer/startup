import React from "react";


export function MyPositions() {
    const [positions, setPositions] = React.useState('');

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
                    <h3>If the user is logged in, then they can see a list of their positions and interact with them</h3>
                </section>

                Not quite sure all the functionality I want to put here, but it'll include at least
                a list of dance positions that user knows. Possibly a reccomendation for a new position to learn
                This also depends on the database.
            </div>

            <ul>
                {positions}
            </ul>
        </main>
    )
}