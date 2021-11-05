/*
Portfolio Component
*/


import React, { useState } from 'react';
import Project from '../Project';

function Portfolio({ currentCategory }) {
    const [projects] = useState([
        {
            name: 'Moving Picture Potions',
            description: 'Moving Picture Potions allows the user to view random movie selections and adult beverages based on their choice of a movie genre.',
            githubProject: 'moving-picture-potions',
            appLink: 'https://bjackels5.github.io/moving-picture-potions/',
            image: 'moving-picture-potions.jpg'
        },
        {
            name: 'Campfire',
            description: 'Moving Picture Potions allows the user to view random movie selections and adult beverages based on their choice of a movie genre.',
            githubProject: 'moving-picture-potions',
            appLink: 'https://bjackels5.github.io/moving-picture-potions/',
            image: 'moving-picture-potions.jpg'
        }

    ]);

    return (
        <container>
            {/* <div className="row mt-3">
                <header className="col-12 pt-2">
                    <p>My Portfolio</p>
                </header>
            </div> */}
            <div className="row mt-3">
                {projects.map((project) => (
                    <Project project={project}></Project>
                ))}
            </div>

        </container>
    )
}

/* orig code */

// return (
//     <section>
//         <h1 data-testid="h1tag">My Portfolio</h1>
//         {projects.map((project) => (
//             <Project project={project}></Project>
//         ))}
//     </section>
// )


export default Portfolio;