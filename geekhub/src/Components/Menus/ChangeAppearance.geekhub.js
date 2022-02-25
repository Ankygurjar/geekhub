import React, { useState } from 'react';
import styled from 'styled-components';
import Styling from '../../Constants/constants.style.geekhub.js';

export default function ChangeAppearance() {

    const [mode, setMode] = useState(Styling.BACKGROUND_MODE.DARK);

    const changeBackground = (e) => {
        e.preventDefault();
        if (document.body.style.backgroundColor == Styling.BACKGROUND_COLOR.BLACK) {
            document.body.style.backgroundColor = Styling.BACKGROUND_COLOR.WHITE;
            document.body.style.color = Styling.BACKGROUND_COLOR.BLACK;
            setMode(Styling.BACKGROUND_MODE.DARK);
        } else {
            document.body.style.backgroundColor = Styling.BACKGROUND_COLOR.BLACK;
            document.body.style.color = Styling.BACKGROUND_COLOR.WHITE;
            setMode(Styling.BACKGROUND_MODE.DAY);
        }
        document.body.style.transition = 'background-color 500ms linear';
    }

    return (
        <div>

            <ChangeAppearanceButton onClick={changeBackground}>
                {mode}
            </ChangeAppearanceButton>

        </div>
    );
}

const ChangeAppearanceButton = styled.button`
    border: none;
    background-color: black;
    color: white;
    padding: 3px;
`