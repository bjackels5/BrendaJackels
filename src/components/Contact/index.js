/*
ContactForm Component
*/

import React, { useState } from 'react';
import IconTextLink from '../IconTextLink';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;


    return (
        <section className="container container-extra py-4">
            <div className="contact-direct text-center">
                <p>You can contact me via</p>
                <p><IconTextLink hrefLink="https://www.linkedin.com/in/brenda-jackels-105/" iconName="FaLinkedin" descText="LinkedIn" /></p>
                <p><IconTextLink hrefLink="mailto: bjackels5@gmail.com" iconName="BiMailSend" descText="email" /></p>
                <p><IconTextLink hrefLink="tel:8132155100" iconName="BiPhoneCall" descText="phone call" /> to (813) 215-5100</p>
            </div>
        </section>
    )
}

export default ContactForm;