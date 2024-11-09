
import React from "react";

export function Welcome() {
    return (
        <main>
            <div className="jumbotron jumbotron-fluid">
                <div className="container vh-100" style={{ backgroundImage: 'url(./img/jumbotronBackground.jpg)' }}>
                    <h1 className="display-4">Welcome to Dancing Database!</h1>
                    <p className="lead">We are still under development, please check back in for updates. Full version coming Jan
                        2025!
                    </p>

                </div>
            </div>
        </main>
    );
}