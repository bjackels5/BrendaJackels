/*
ContactForm Component
*/

import React, { useState } from 'react';
// import { BiMailSend } from "react-icons/bi";
// import { FaLinkedin } from 'react-icons/fa';
import IconTextLink from '../IconTextLink';

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(`${e.target.value} valid: ${isValid}`);
            setErrorMessage(isValid ? '' : 'Your email is invalid');
        }
        else {
            setErrorMessage(e.target.value.length ? '' : `${e.target.name} is required.`);
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage:', errorMessage);
    }

    function handleSubmit(e) {
        /* just because we get here doesn't mean everything has validated properly */
        e.preventDefault();
        console.log(`formState ${formState}`);
        console.log(`errorMessage ${errorMessage}`);
    }

    return (
        <section className="container container-extra py-4">


            {/* <!-- Bootstrap 5 starter form --> */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact-direct text-center">
                    <p>
                        You can contact me via
                    </p>
                    <p>
                        <IconTextLink hrefLink="https://www.linkedin.com/in/brenda-jackels-105/" iconName="FaLinkedin" descText="LinkedIn" />
                        , <IconTextLink hrefLink="mailto: bjackels5@gmail.com" iconName="BiMailSend" descText="email" />
                        , <IconTextLink hrefLink="tel:8132155100" iconName="BiPhoneCall" descText="phone call" /> to (813) 215-5100,
                    </p>
                    <p>
                        or by using this form:
                    </p>
                </div>
                {/* <!-- Name input --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-control" name="name" id="name" type="text" defaultValue={name} placeholder={name} onBlur={handleChange} />
                </div>

                {/* <!-- Email address input --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input className="form-control" id="email" name="email" type="email" defaultValue={email} placeholder={email} onBlur={handleChange} />
                </div>

                {/* <!-- Message input --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" type="text" defaultValue={message} placeholder={message} onBlur={handleChange} />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                {/* <!-- Form submit button --> */}
                <div class="d-grid">
                    <button className="btn btn-large btn-custom" type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;