import React from 'react';

import { Button } from 'react-bootstrap';
import { MsgEvent, MsgNotifier } from './msgNotifier';

export function MsgInterface(props) {

    const [msgText, setMsgText] = React.useState('')
    return (
        <div>
            <div className='input-group mb-3'>
                {/* <span className='input-group-text'>@</span> */}
                <input className='form-control' type='text' value={msgText} onChange={(e) => setMsgText(e.target.value)} placeholder='Your message here' />
            </div>

            Hi {props.userName}, you'll be able to send messages here

            Test message: {msgText}

        </div>




    );
}