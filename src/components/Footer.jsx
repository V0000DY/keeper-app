import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer(){
    return (
    <footer>
        <p>Made by <a href="https://github.com/V0000DY" target="_blank">Vitalii Rubtsov</a> via App Brewery © {currentYear}</p>
    </footer>
    );
}

export default Footer;