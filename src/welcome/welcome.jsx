
import React from "react";
import "./welcome.css"

export function Welcome() {
    return (
        <main>
            <div className="jumbotron jumbotron-fluid">
                <div className="container height-80vh" style={{ backgroundImage: 'url(src/img/jumbotronBackground.jpg)', height: "80vh" }}>
                    <h1 className="display-4">Welcome to Dancing Database!</h1>
                    <p className="lead">We are still under development, please check back in for updates. Full version coming Jan
                        2025!
                    </p>
                </div>
            </div>
        </main>
    );
}