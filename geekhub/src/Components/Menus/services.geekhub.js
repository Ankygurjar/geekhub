import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DropdownMenu = () => (
    <Dropdown text="Services" pointing='top left' icon={"angle double down"}>
        <Dropdown.Menu>
            <Dropdown.Item text='Jira (Create Issues/Defects)' icon='american sign language interpreting' as={Link} to='#' />
            <Dropdown.Item text='Confluence (Document Your Project)' icon='dochub icon' as={Link} to='#' />
            <Dropdown.Item text='Explore Community' icon='building' as={Link} to='#' />
        </Dropdown.Menu>
    </Dropdown>
);

export default DropdownMenu;