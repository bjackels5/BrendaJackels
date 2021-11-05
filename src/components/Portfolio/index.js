/*
Portfolio Component
*/


import React, { useState } from 'react';
import Project from '../Project';

function Portfolio({ currentCategory }) {
    const [projects] = useState([
        {
            name: 'Campfire',
            description: 'Campfire is a communication app for Coding Bootcamp attendees. Campfire was created to serve as the go to social media of a Coding Bootcamp student. In this application, old and new students will have the opportunity to bond and network with one another in a more direct way than they do during classes or through Slack. ',
            githubProject: 'Campfire',
            appLink: 'https://campfire-social-media.herokuapp.com/',
            image: 'Campfire.jpg'
        },
        {
            name: 'Note Taker',
            description: 'Note Taker allows the user to create and delete notes, each with a title and text. Creating this app exposed me to Express, Heroku, Bootswatch, Insomnia Core, and Fontawesome.',
            githubProject: 'note-taker',
            appLink: 'https://note-taker-bjackels5.herokuapp.com/',
            image: 'note-taker.png'
        },
        {
            name: 'Budget Tracker',
            description: 'The challenge for Module 19 of the Coding Bootcamp was to update an existing Budget Tracker application to allow for offline access and functionality.',
            githubProject: 'budget-tracker',
            appLink: 'https://budget-tracker-bjackels5.herokuapp.com/',
            image: 'budget-tracker.png'
        },
        {
            name: 'Team Webpage Generator',
            description: 'The challenge for Module 10 of the Coding Bootcamp was to create a command line interface application that prompts a user for team information and then uses that information to create a webpage containing that information.',
            githubProject: 'team-webpage-generator',
            appLink: 'https://youtu.be/D_Ti1YEc5i4',
            image: 'team-webpage-generator-results.jpg'
        },
        {
            name: 'Weather Dashboard',
            description: 'This challenge for Module 6 of the Coding Bootcamp is to create an app from scratch that allows a user to see weather data for multiple cities.',
            githubProject: 'weather-dashboard',
            appLink: 'https://bjackels5.github.io/weather-dashboard/',
            image: 'weather-dashboard.png'
        },
        {
            name: 'Moving Picture Potions',
            description: 'Moving Picture Potions allows the user to view random movie selections and adult beverages based on their choice of a movie genre.',
            githubProject: 'moving-picture-potions',
            appLink: 'https://bjackels5.github.io/moving-picture-potions/',
            image: 'moving-picture-potions.jpg'
        },
    ]);

    return (
        <container>
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