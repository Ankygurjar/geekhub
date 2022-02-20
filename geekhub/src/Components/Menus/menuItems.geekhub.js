import React from 'react';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import DropdownMenu from './services.geekhub.js';

function MenuItems({ title, showServices }) {

    return (
        <MenuItemsContainer>
            <Link to="/">{title}</Link>

            {showServices &&
                <DropdownMenu />
            }

        </MenuItemsContainer>
    )
}

const MenuItemsContainer = styledComponents.div`
`

export default MenuItems;

