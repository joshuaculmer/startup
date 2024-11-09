import React from "react";
import { AuthState } from './authState';
import { Unauthenticated } from "./unathenticated";
import { Authenticated } from "./authenticated";

export function Login({ userName, authState, onAuthChange }) {
    return (
        <main>
            <div class="container vh-100">
                {/* {authState !== AuthState.Unknown && <h1>Need to Sign In</h1>} */}
                {authState === AuthState.Authenticated &&
                    <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}></Authenticated>}

                {authState === AuthState.Unauthenticated && (
                    <Unauthenticated
                        userName={userName}
                        onLogin={(loginUserName) => {
                            onAuthChange(loginUserName, AuthState.Authenticated);
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