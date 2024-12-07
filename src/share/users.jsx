import React from 'react';

import { MsgEvent, MsgNotifier } from './msgNotifier';

export function Users(props) {
    const userName = props.userName;

    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
        MsgNotifier.addHandler(handleMsgEvent);

        return () => {
            MsgNotifier.removeHandler(handleMsgEvent);
        };
    });

    function handleMsgEvent(event) {
        setEvent([...events, event]);
    }

    function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
            let message = 'unknown';
            if (event.type === MsgEvent.Msg) {
                message = event.value;
                messageArray.push(
                    <div key={i} className='event'>
                        <span className={'user-event'}>{event.from.split('@')[0]}</span>
                        :{message}
                    </div>
                );
            } else if (event.type === MsgEvent.System) {
                message = event.value.msg;
            }
        }
        return messageArray;
    }

    return (
        <div className='users'>
            Welcome to the chat
            <span className='user-name'> {userName}</span>!
            <div id='user-messages'>{createMessageArray()}</div>
        </div>
    );
}
