import React from 'react';
import styledComponents from 'styled-components';
import MenuItems from './menuItems.geekhub.js';

function PublicHeader() {
    return (
        <Container>
            <MenuWrapper>
                <MenuItems showServices={true} />
                <MenuItems title="Contact Us" showServices={false} />
                <MenuItems title="Blog" showServices={false} />
                <MenuItems changeAppearance={true} />
            </MenuWrapper>

        </Container>
    )
}

export default PublicHeader;

const Container = styledComponents.div`
    border-bottom: 1px solid #C0C0C0;
    width: 100%;
    padding: 10px;
    background-color: #F0F0F0;
    color: #4183c4;
`
const MenuWrapper = styledComponents.div`
    width:80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 80px);
    grid-auto-flow: column;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
`



