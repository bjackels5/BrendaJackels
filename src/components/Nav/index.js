/*
Nav Component
*/
import { FaBars } from 'react-icons/fa';


import React from 'react';

function Nav(props) {
    const {
        menuSelections = [],
        setCurrentSelection,
        currentSelection,
    } = props;

    return (
        <nav className="navbar nav navbar-expand-lg ml-4 bg-custom-nav fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand corben mt-0 pt-0" href="/BrendaJackels">Brenda Jackels</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <FaBars />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menuSelections.map((menuSelection) => (
                            // leave data-bs-toggle and data-bs-target in the li attributes. They make the hamburger menu collapse once a selection has been made
                            <li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" className={`nav-item nav-link ${currentSelection.name === menuSelection.name && 'navActive'}`} key={menuSelection.name}>
                                <span onClick={() => {
                                    setCurrentSelection(menuSelection);
                                }}
                                >
                                    {menuSelection.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;