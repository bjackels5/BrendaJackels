/*
Footer Component
*/

import React from 'react';
// import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="text-center text-white bg-custom-foot">
            <div className="container container-extra pt-1">
                <section className="mb-1">
                    <a className="footer-link mx-2" href="https://github.com/bjackels5" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a className="footer-link mx-2" href="https://www.linkedin.com/in/brenda-jackels-105/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    {/* <a className="footer-link mx-2" href="https://stackoverflow.com/users/16086652/brenda-jackels/" target="_blank" rel="noreferrer"><FaStackOverflow /></a> */}
                </section>
            </div>
            <div className="text-center p-1 copyright-info">
                © 2021 Copyright:
                <a  className="copyright-link"
                    href="https://bjackels5.github.io/BrendaJackels/"
                    target="_blank" rel="noreferrer"> Brenda Jackels
                </a>
            </div>
        </footer>
    )
}

export default Footer;