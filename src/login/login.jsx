import React from "react";

export function Login() {
    return (
        <main>
            <div class="container vh-100">
                <section>
                    <h3>User login and verification will take place here</h3>
                </section>
                <div>
                    <input type="text" id="username" name="varUsername" placeholder="Username" required pattern="[Aa].*" />
                    <input type="password" id="password" name="varPassword" placeholder="password" required pattern="[Aa].*" />
                </div>


                <button type="submit">Login</button>

                Will need to interface with user database
            </div>
        </main>
    )
}