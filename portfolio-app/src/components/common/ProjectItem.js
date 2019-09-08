import React from "react"

const ProjectItem = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <a href={props.link}>Try it yourself!</a>
        </div>
    )
}

export { ProjectItem }