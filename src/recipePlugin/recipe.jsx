import React from "react";

export function Recipe() {

    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    fetch(url)
        .then((x) => x.json())
        .then((response) => {
            document.querySelector("pre").textContent = JSON.stringify(
                response,
                null,
                "  "
            );
        });

    return (
        <main>
            <div class="container">
                <section>
                    <h3>Recipe api call because I am running low on time</h3>
                </section>

                This displays the raw outpout, formatting won't occur at this stage since this is not a feature
                that will be integrated with the final product
                <pre>
                    Recipe to display here
                </pre>

            </div>

        </main>
    )
}