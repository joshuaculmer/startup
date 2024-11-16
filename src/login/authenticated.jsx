import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Authenticated(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div className='playerName'>Welcome {props.userName}!</div>
        </div>
    );
}
