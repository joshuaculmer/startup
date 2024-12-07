import React from "react";
import { Users } from "./users"

export function Share(props) {
    console.log(props.userName);
    return (
        <main>
            <div class="container">
                <section>
                    <h2>Share a message with other online users!</h2>
                    <h3>At some point, users will be able to share your favorite dance moves with other users!</h3>
                </section>
                <Users userName={props.userName} />
                Your name is {props.userName}!



            </div>
        </main>
    )
}