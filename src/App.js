import React, { useState } from 'react';
// import About from './components/About';
import Nav from './components/Nav';
// import ContactForm from './components/Contact';

function App() {
    const [menuSelections] = useState([
        {
            name: "About Me",
            id: 0
        },
        {
            name: "Portfolio",
            id: 1
        },
        {
            name: "Contact",
            id: 2
        },
        {
            name: "Resume",
            id: 3
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
                {/* {!contactSelected ? (
                    <>
                        <Gallery
                            categories={categories}
                            setCurrentCategory={setCurrentCategory}
                            currentCategory={currentCategory}
                        ></Gallery>
                        <About></About>
                    </>
                ) : (
                    <ContactForm></ContactForm>
                )} */}
            </main>
        </div>
    );
}

export default App;
