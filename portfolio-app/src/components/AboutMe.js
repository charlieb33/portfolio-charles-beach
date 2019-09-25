import React from "react"
import "../styles/AboutMe.css"

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <h2>About Me</h2>
            <div className="about-me-description">
                <p className="about-me-headline">
                    A software developer always willing to do whatever it takes to finish the job.
                </p>
                <p>
                    For as long as I can remember, I have always been curious as to what makes things tick.
                    I believe my thirst for knowledge, challenges, and self-improvement has to be one of my best qualities.
                    I am capable of teaching myself new things or building on my current capabilites quickly.
                    When put on a team, I do what I can to cover my ends, help out when needed and maintain communication with my teammates.
                </p>
                <p>
                    Outside of programming, I have a passion for photography, video games, music, and movies, especially all things Marvel.
                    In one way or another, I think some of these are why I like to program. When taking pictures, I try to be as focused on
                    the details as I can. I have loved video games since I was a child because I enjoy challenges and I am curious as to what
                    makes all of the bits and pieces of the game do what they do.
                </p>
                <h4>Programming Languages: <span className="about-me-items">HTML, CSS, JavaScript, Java, Ruby</span></h4>
                <h4>Frameworks: <span className="about-me-items">React, Rails</span></h4>
                <h4>Awards: <span className="about-me-items">Cum Laude Honors (Adelphi University)</span></h4>
            </div>
        </div>
    )
}

export default AboutMe