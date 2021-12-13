/*
Portfolio Component
*/

// import { FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';
import Project from '../Project';
import IconTextLink from '../IconTextLink';

function Portfolio({ currentCategory }) {
    const [projects] = useState([
        {
            name: 'Campfire',
            description: 'Campfire was created to serve as the go to social media of a Coding Bootcamp student.',
            technology: 'Express, Node, Sequelize, Handlebars, Socket.IO, bcrypt',
            githubProject: 'https://github.com/bjackels5/Campfire',
            appLink: 'https://campfire-social-media.herokuapp.com/',
            image: 'Campfire.jpg',
            role: 'Backend design and development',
            id: 1
        },
        // {
        //     name: 'HTMLove',
        //     description: 'HTMLove (High Tech Match Love) is a dating app specifically created with the software engineer in mind. It is built to match like-minded people who are seeking a relationship.',
        //     githubProject: 'https://github.com/Lightfooted/High-Tech-Match-Love',
        //     appLink: 'https://high-tech-match.herokuapp.com/',
        //     image: 'htmlove.jpg'
        // },
        {
            name: 'Note Taker',
            description: 'Note Taker allows the user to create and delete notes, each with a title and text.',
            technology: 'Express, Heroku, Bootswatch, Insomnia Core, FontAwesome',
            githubProject: 'https://github.com/bjackels5/note-taker',
            appLink: 'https://note-taker-bjackels5.herokuapp.com/',
            image: 'note-taker.png',
            role: 'Sole author',
            id: 2
        },
        {
            name: 'Budget Tracker',
            description: 'Refactor an existing Budget Tracker application to allow for offline access and functionality.',
            technology: 'MongoDB, Mongoose, Heroku, IndexedDB, Node, Service Workers',
            githubProject: 'budget-tracker',
            appLink: 'https://budget-tracker-bjackels5.herokuapp.com/',
            role: 'Sole author',
            image: 'budget-tracker.png',
            id: 3
        },
        {
            name: 'Team Webpage Generator',
            description: 'A command line interface application that prompts a user for team information and then uses that information to create a webpage containing that information.',
            technology: 'Jest, Bootstrap, Node, Inquirer, JavaScript, HTML, Built-in file system functionality',
            githubProject: 'https://github.com/bjackels5/team-webpage-generator',
            appLink: 'https://youtu.be/D_Ti1YEc5i4',
            role: 'Sole author',
            image: 'team-webpage-generator-results.jpg',
            id: 4
        },
        {
            name: 'Weather Dashboard',
            description: 'An app that allows a user to see weather data for multiple cities.',
            technology: 'OpenWeather API, JSON, dynamic HTML creation, Bootstrap',
            githubProject: 'https://github.com/bjackels5/weather-dashboard',
            appLink: 'https://bjackels5.github.io/weather-dashboard/',
            role: 'Sole author',
            image: 'weather-dashboard.png',
            id: 5
        },
        {
            name: 'Moving Picture Potions',
            technology: 'IMDb API, TheCocktailDB, Foundation, HTML, CSS, JavaScript',
            description: 'Moving Picture Potions allows the user to view random movie selections and adult beverages based on their choice of a movie genre.',
            githubProject: 'https://github.com/bjackels5/moving-picture-potions',
            appLink: 'https://bjackels5.github.io/moving-picture-potions/',
            role: 'Backend design and development',
            image: 'moving-picture-potions.jpg',
            id: 6
        },
    ]);

    return (
        <div>
            <div className="row mt-4">
                <div className="col-12">
                    <p className="this-proj-desc">The project for this website has a
                        <IconTextLink hrefLink="https://github.com/bjackels5/BrendaJackels" iconName="FaGithub" descText="GitHub repository" />
                        .
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                {projects.map((project) => (
                    <Project key={project.id} project={project}></Project>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;