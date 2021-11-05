/*
Nav Component
*/

// import React, { useState } from 'react';
// import React, { useEffect } from 'react';
import React from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
    const {
        menuSelections = [],
        setCurrentSelection,
        currentSelection,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Brenda Jackels
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {menuSelections.map((menuSelection) => (
                        <li className={`mx-2 ${currentSelection.name === menuSelection.name && 'navActive'
                            }`} key={menuSelection.name} >
                            <span onClick={() => {
                                setCurrentSelection(menuSelection);
                            }}
                            >
                                {menuSelection.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;