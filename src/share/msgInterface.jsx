import React from 'react';

import { Button } from 'react-bootstrap';
import { MsgEvent, MsgNotifier } from './msgNotifier';

export function MsgInterface(props) {

    const [msgText, setMsgText] = React.useState('')

    function sendMsg() {
        console.log(msgText)
        setMsgText('')
    }

    return (
        <div>
            <div className='input-group mb-3'>
                {/* <span className='input-group-text'>@</span> */}
                <input className='form-control' type='text' value={msgText}
                    onChange={(e) => setMsgText(e.target.value)}
                    placeholder='Your message here'
                    onKeyUp={(e) => {
                        console.log(e)
                        if (e.key === 'Enter') {
                            sendMsg()
                        }
                    }
                    } />
                <Button variant='primary' onClick={() => sendMsg()}>
                    Send
                </Button>
            </div>

            Hi {props.userName}, you'll be able to send messages here

            Test message: {msgText}

        </div>




    );
}