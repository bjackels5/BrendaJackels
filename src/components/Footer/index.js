/*
Footer Component
*/

import React from 'react';
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';


function Footer() {
    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-3">
                <section class="mb-4">
                    <a className="proj-link mx-2" href="https://github.com/bjackels5" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a className="proj-link mx-2" href="https://www.linkedin.com/in/brenda-jackels-105/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a className="proj-link mx-2" href="https://stackoverflow.com/users/16086652/brenda-jackels/" target="_blank" rel="noreferrer"><FaStackOverflow /></a>
                </section>
            </div>
        </footer>
    )
}

export default Footer;