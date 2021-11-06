import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
    const menuIds = {
        ABOUTME: 0,
        PORTFOLIO: 1,
        CONTACT: 2,
        RESUME: 3,
    }
    const [menuSelections] = useState([
        {
            name: "About Me",
            id: menuIds.ABOUTME
        },
        {
            name: "Portfolio",
            id: menuIds.PORTFOLIO
        },
        {
            name: "Contact",
            id: menuIds.CONTACT
        },
        {
            name: "Resume",
            id: menuIds.RESUME
        }
    ]);
    const [currentSelection, setCurrentSelection] = useState(menuSelections[0]);

    return (
        <div>
            <Nav
                menuSelections={menuSelections}
                setCurrentSelection={setCurrentSelection}
                currentSelection={currentSelection}
            ></Nav>
            <main>
                {(currentSelection.id === menuIds.ABOUTME) ? (
                    <About></About>
                ) : (currentSelection.id === menuIds.PORTFOLIO) ? (
                    <Portfolio></Portfolio>
                ) : (currentSelection.id === menuIds.CONTACT) ? (
                    <ContactForm></ContactForm>
                ) : (currentSelection.id === menuIds.RESUME) ? (
                    <Resume></Resume>
                ) : "oops"}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
