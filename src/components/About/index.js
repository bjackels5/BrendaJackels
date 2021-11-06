/*
About Component
*/

import React from 'react';
import profilePic from "../../assets/images/Brenda2021.png";

function About() {
    return (
        // <section className="my-5" id="about">
        <div className="container container-extra mt-3">
            <div className="row">
                <div className="col-md-8 mt-5">
                    <h1>Meet Brenda Jackels</h1>
                    <section class="future-plans">
                        <h2>Plans for the future</h2>
                        <p>
                            I would very much like to return to a computer programming career, and I know I need to show potential
                            employers that I've still got the talent to perform in that field. With that goal in mind, I will complete University of
                            Central Florida's Coding Bootcamp in November 2021.
                        </p>
                    </section>
                    <section class="my-past">
                        <h2>How I got to where I am</h2>
                        <p>
                            I earned my Master's degree in Computer Science in 1990 and worked as a programmer for six years, primarily coding using C++. After much deliberation,
                            I became a full-time homemaker and mom in 1996. In 2013 I was hired to work the front desk at a dental office where I have streamlined operations 
                            through a more effective use of commercial software resulting in increased efficiency while reducing the use of consumables.
                        </p>
                    </section>
                    <section class="hobbies">
                        <h2>I enjoy...</h2>
                        <p>
                            My spare time is occupied with reading, scrapbooking (both traditional and digital), and spending time with my adult children
                            as their schedules allow. Of course, there's the occasional Netflix binge thrown in there, too.
                        </p>
                    </section>
                </div>
                <div className="col-md-4 profile-pic">
                    <img src={profilePic} className="my-2" style={{ width: "100%" }} alt="Brenda Jackels portrait" />
                </div>
            </div>
        </div>
    )
}

export default About;