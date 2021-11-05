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
        <nav className="navbar navbar-expand-lg ml-4">
            <a className="navbar-brand corben mt-0 pt-0" href="/">Brenda Jackels</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
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
            </div>
        </nav>
    )
}

export default Nav;