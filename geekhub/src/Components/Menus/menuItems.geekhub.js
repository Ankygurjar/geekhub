import React from 'react';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import DropdownMenu from './services.geekhub.js';
import ChangeAppearance from './ChangeAppearance.geekhub';

function MenuItems({ title, showServices, changeAppearance }) {

    return (
        <MenuItemsContainer>
            {title &&
                <Link to="/">{title}</Link>
            }

            {showServices &&
                <DropdownMenu />
            }

            {changeAppearance &&
                <ChangeAppearance />
            }

        </MenuItemsContainer>
    )
}

const MenuItemsContainer = styledComponents.div`
`

export default MenuItems;

