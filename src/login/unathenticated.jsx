import React from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);

            let text = await response.json();
            if (text.beta) {
                props.onLogin(userName, true);
            } else {
                props.onLogin(userName, false);
            }
            // console.log("testing if I can log from unathenitcated")

            // // let jsondata = response.json();
            // console.log("json value: " + text);
            // console.log("beta value: " + text.beta);
            // console.log(jsondata);
            // console.log(data.data.beta);
            // if (response.data.beta) {
            //     console.log("user is a beta user");
            // }
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    return (
        <>
            <div>
                <div className='input-group mb-3'>
                    {/* <span className='input-group-text'>@</span> */}
                    <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='TinyDancer@email.com' />
                </div>
                <div className='input-group mb-3'>
                    {/* <span className='input-group-text'>🔒</span> */}
                    <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                </div>
                <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                    Login
                </Button>
                <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
                    Create
                </Button>
            </div>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}
