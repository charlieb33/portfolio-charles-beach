import React from "react"
import { ProjectItem } from "./common/ProjectItem";

const MyProjects = () => {
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
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
            />
            <ProjectItem
                title="Marvel App"
                description="A React-based app that uses an API to extract data from a Marvel
                    database. The data pulled was based on characters and story events from Marvel's 
                    comics. I included a navbar to navigate between the home screen, the characters page, 
                    and the events page. The characters and events pages each included a search bar that 
                    allowed the user to search by name and title, respectively. The data pulled for the 
                    characters page displayed the names, pictures, descriptions (if available), and two comics 
                    of the ten most most recently modified characters in the database. The extracted data in the 
                    events page displayed the pictures, titles, and descriptions of the ten most recently story
                    events from the database."
                githubLink="https://github.com/charlieb33/marvel-app"
                deployLink="http://p2-marvel.surge.sh/"
            />
            <ProjectItem
                title="Notes App"
                description="A fullstack app that allows users to sign up or log into an account for them
                    to create or remove folders, and create, edit, or remove notes stored inside of them.
                    "
                githubLink=""
                deployLink=""
            />
        </div>
    )
}

export default MyProjects