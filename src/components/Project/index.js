/*
Project Component
*/


import React from 'react';

import { FaGithub, FaPlayCircle } from 'react-icons/fa';

function Project({ project }) {
    // const githubPath = "https://github.com/bjackels5/";

    return (
        <div className="col-md-4 col-sm-12 mb-4 project">
            <a href={`${project.appLink}`} target="_blank" rel="noreferrer"><img className="proj-img" src={require(`../../assets/images/${project.image}`).default} alt={project.name}></img></a>
            <p className="card-text">{project.description}</p>
            {/* to change the color of the icon, add color="thecolor" to the icon. <FaGithub color="magenta" />, e.g. */}
            <a className="proj-link" href={`${project.githubProject}`} target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className="proj-link" href={`${project.appLink}`} target="_blank" rel="noreferrer"><FaPlayCircle /></a>
        </div>
    )
}










export default Project;