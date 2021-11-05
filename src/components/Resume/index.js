/*
Resume Component
*/

import React from 'react';
import PDF from "../../assets/documents/Brenda Jackels.pdf"


function Resume() {
    return (
        <section>
            Technical Skills:
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
                <li>Six</li>
                <li>Seven</li>
                <li>Eight</li>
                <li>Nine</li>
                <li>Ten</li>
            </ul>

            You can <a className="resume-link" href={PDF} rel='noreferrer' target="_blank" download>download my resume</a>.
        </section>
    )
}

export default Resume;