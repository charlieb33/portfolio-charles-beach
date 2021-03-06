import React from "react";
import { ProjectItem } from "./common/ProjectItem";
import "../styles/MyProjects.css";

const treasureQuest = require("../images/treasure-quest.png");
const marvelApp = require("../images/marvel-app.png");
const notesApp = require("../images/notes-app.png");
const assignAssist = require("../images/assign-assist.png");

const MyProjects = () => {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-list">
                <ProjectItem
                    title="Treasure Quest"
                    description="A simple game made using HTML, CSS, and JavaScript.
                        The player character is moved using the WASD keys and the arrow keys.
                        The hazards, treasures, walls, and the player character was positioned
                        using CSS grid, and collsions were triggered when the player's grid
                        coordinates were the same as whatever they were colliding with.
                        The objective is to navigate the character through a maze, avoid deadly
                        hazards, and find the main treasure or go through a hidden fake wall to
                        collect the secret treasure."
                    githubLink="https://github.com/charlieb33/treasure-quest"
                    deployLink="https://charlieb33.github.io/treasure-quest/"
                    pic={treasureQuest}
                />
                <ProjectItem
                    title="Marvel App"
                    description="A React-based app that uses an API to extract data from a Marvel
                        database. The data pulled was based on characters and story events from Marvel's 
                        comics. I included a navbar to navigate between the home screen, the characters page, 
                        and the events page. The characters and events pages each included a search bar that 
                        allowed the user to search by name and title, respectively. The data pulled for the 
                        characters page displayed the names, pictures, descriptions (if available), and two comics 
                        of the ten most recently modified characters in the database. The extracted data in the 
                        events page displayed the pictures, titles, and descriptions of the ten most recently story
                        events from the database."
                    githubLink="https://github.com/charlieb33/marvel-app"
                    deployLink="http://p2-marvel.surge.sh/"
                    pic={marvelApp}
                />
                <ProjectItem
                    title="Notes App"
                    description="A fullstack app that allows users to sign up or log into an account for them
                        to create or remove folders, and create, edit, or remove notes stored inside of them.
                        Use passport, auth, and express to create a new user account, or log into an existing
                        one. Use of express queries in order to read, create, edit, or remove the folders and 
                        notes for a specific user. React was used to display the logged in user's folders and
                        notes in the frontend, and allow them do interact with them."
                    githubLink="https://github.com/ga-p3/group_project_3"
                    deployLink="http://notes-app-p3.surge.sh/"
                    pic={notesApp}
                />
                <ProjectItem
                    title="Assignment Assist"
                    description="A fullstack app that uses React in the front end, and Ruby on Rails in the
                    back end. The app allows the user to log into or register for an account, and once signed in,
                    they will be able to interact with their courses and assignments for those courses. Ruby on Rails
                    is used to create new user accounts or log into exisiting ones. It is also used to create,read,
                    update, and delete courses and assignments for logged in users. When not logged in, React would
                    display a description of the app. When logged in, the app will display a list of the user's courses
                    and a link to a form to add a new course. When they click on a course, it will display that course's
                    data, including a list of assignments, and the options to edit or delete that course and add an
                    assignment. Clicking the assignment, will display its information, and the options to edit or
                    remove it."
                    githubLink="https://github.com/charlieb33/assignment-assist"
                    deployLink="http://assignment-assist.surge.sh/"
                    pic={assignAssist}
                />
            </div>
        </div>
    );
};

export default MyProjects;