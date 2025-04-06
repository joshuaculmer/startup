import React from "react";
import { AuthState } from './authState';
import { Unauthenticated } from "./unathenticated";
import { Authenticated } from "./authenticated";

export function Login({ userName, authState, onAuthChange }) {
    return (
        <main>
            <div class="container">
                {/* {authState !== AuthState.Unknown && <h1>Need to Sign In</h1>} */}
                {authState === AuthState.Authenticated &&
                    <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated, false)}></Authenticated>}

                {authState === AuthState.Unauthenticated && (
                    <Unauthenticated
                        userName={userName}
                        onLogin={(loginUserName, beta) => {
                            onAuthChange(loginUserName, AuthState.Authenticated, beta);
                        }}
                    />
                )}

                <div>
                    Still need to interface with user database, this part is still a stub
                </div>
            </div>
        </main>
    )
}