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
                    <section className="future-plans">
                        <p>
                        I am an experienced software engineer looking to use my skills in application development.
                        After earning my master's degree in Computer Science, I worked as a software engineer primarily using C++.
                        </p>
                        <p>
                        I am currently an administrative assistant in a dental office and quickly became our in-house IT department.
                        I streamlined operations through a more effective use of commercial software resulting in increased efficiency while reducing the use of consumables.
                        I also spearheaded a customer satisfaction survey resulting in increased market space presence.
                        </p>
                        <p>
                        My recently earned Full Stack Developer Certificate from University of Central Florida's coding bootcamp added to my skills, including CSS,
                        HTML, SQL, and the MERN stack (MongoDB, Express, React, Node).
                        </p>
                        <p>
                        I have a love of learning as well as a flexible and skillful programmer mindset. I believe my enthusiasm for work combined with my relevant educational and professional credentials will help me contribute meaningfully.
                        </p>
                    </section>
                    {/* <section className="my-past">
                        <h2>How I got to where I am</h2>
                        <p>
                            I earned my Master's degree in Computer Science in 1990 and worked as a programmer using C++. After much deliberation,
                            I became a full-time homemaker and mom. I was then hired to work the front desk at a dental office where I quickly became
                            our in-house IT department. While there, I have streamlined operations through a more effective use of commercial software resulting in increased efficiency.
                        </p>
                    </section> */}
                    {/* <section className="hobbies">
                        <h2>I enjoy...</h2>
                        <p>
                            My spare time is occupied with reading, scrapbooking (both traditional and digital), and spending time with my adult children
                            as their schedules allow. Of course, there's the occasional Netflix binge thrown in there, too.
                        </p>
                    </section> */}
                </div>
                <div className="col-md-4 profile-pic">
                    <img src={profilePic} className="my-2" style={{ width: "100%" }} alt="Brenda Jackels portrait" />
                </div>
            </div>
        </div>
    )
}

export default About;