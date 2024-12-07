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
            if (event.type === MsgEvent.End) {
                message = `scored ${event.value.score}`;
            } else if (event.type === MsgEvent.Start) {
                message = `started a new game`;
            } else if (event.type === MsgEvent.System) {
                message = event.value.msg;
            }

            messageArray.push(
                <div key={i} className='event'>
                    <span className={'user-event'}>{event.from.split('@')[0]}</span>
                    {message}
                </div>
            );
        }
        return messageArray;
    }

    return (
        <div className='users'>
            User
            <span className='user-name'>{userName}</span>
            <div id='user-messages'>{createMessageArray()}</div>
        </div>
    );
}
