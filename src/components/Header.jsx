import React from "react";
import ReactDOM from "react-dom";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

function Header(){
    return (
    <header>
        <h1><PublishedWithChangesIcon />Keeper App</h1>
    </header>);
}

export default Header;