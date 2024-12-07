import React from 'react';

import { Button } from 'react-bootstrap';
import { MsgEvent, MsgNotifier } from './msgNotifier';

export function MsgInterface(props) {
    const userName = props.userName
    const [msgText, setMsgText] = React.useState('')

    function sendMsg() {
        MsgNotifier.broadcastEvent(userName, MsgEvent.Msg, msgText)
        // console.log(msgText)
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
                        if (e.key === 'Enter') {
                            sendMsg()
                        }
                    }
                    } />
                <Button variant='primary' onClick={() => sendMsg()}>
                    Send
                </Button>
            </div>

        </div>




    );
}