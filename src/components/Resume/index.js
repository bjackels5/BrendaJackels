/*
Resume Component
*/

import React from 'react';
import { FaFileDownload } from 'react-icons/fa'

/*
I originally had my resume document as part of the project, but that means that if I update my resume,
I'd have to modify the repository and fuss with heroku. I found instructions for modifying a file on Google Drive
while keeping the share shareable link, so I uploaded my resume there. Now I can change that file and my latest
resume will be available through my online portfolio.
*/
const PDF = "https://drive.google.com/file/d/1uyL5mO58d6glw-J-YsoBapEyAa91khOb/view?usp=sharing";


// 

function Resume() {
    return (
        <div className="container mt-4">
            <div className="row w-100 text-center">
                <div className="col-12">
                    <h1 className="resume"><a className="resume-link" href={PDF} rel='noreferrer' target="_blank" download><FaFileDownload /> Download my resume</a>.</h1>
                    {/* <h1 className="resume"><a className="resume-link" href={PDF} rel='noreferrer' target="_blank" download><FaFileDownload /> Download my resume</a>.</h1> */}
                </div>
            </div>
            <div className="row w-100 d-flex justify-content-center mt-3">
                <div className="col-md-4 col-sm-12 text-center">
                    <h2 className="prof-title">Back End Proficiencies</h2>
                    <ul className="prof-list">
                        <li className="prof-item">C++</li>
                        <li className="prof-item">MongoDB</li>
                        <li className="prof-item">Mongoose</li>
                        <li className="prof-item">Express</li>
                        <li className="prof-item">Node</li>
                        <li className="prof-item">SQL</li>
                        <li className="prof-item">Sequelize</li>
                        <li className="prof-item">APIs</li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 text-center">
                    <h2 className="prof-title">Front End Proficiencies</h2>
                    <ul className="prof-list">
                        <li className="prof-item">React</li>
                        <li className="prof-item">HTML</li>
                        <li className="prof-item">CSS</li>
                        <li className="prof-item">JavaScript</li>
                        <li className="prof-item">Bootstrap</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Resume;