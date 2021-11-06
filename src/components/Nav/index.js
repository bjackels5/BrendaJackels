/*
Nav Component
*/

import React from 'react';

function Nav(props) {
    const {
        menuSelections = [],
        setCurrentSelection,
        currentSelection,
    } = props;

    return (
        <nav className="navbar navbar-expand ml-4 bg-custom-nav fixed-top">
            <a className="navbar-brand corben mt-0 pt-0" href="/">Brenda Jackels</a>
                <div className="navbar-nav">
                    {menuSelections.map((menuSelection) => (
                        <li className={`nav-item nav-link ${currentSelection.name === menuSelection.name && 'navActive'}`} key={menuSelection.name}>
                            <span onClick={() => {
                                setCurrentSelection(menuSelection);
                            }}
                            >
                                {menuSelection.name}
                            </span>
                        </li>
                    ))}
                </div>
        </nav>
    )
}

export default Nav;