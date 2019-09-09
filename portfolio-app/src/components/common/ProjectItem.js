import React from "react"

const ProjectItem = (props) => {
    return (
        <div className="project-item-container">
            <h4>{props.title}</h4>
            <div className="project-item-info">
                <img src={props.pic} alt={props.title} />
                <div className="project-item-text">
                    <p>{props.description}</p>
                    <a href={props.deployLink}>Try it yourself!</a>
                    <p>See it on GitHub: <a href={props.githubLink}>{props.title}</a></p>
                </div>
            </div>
        </div>
    )
}

export { ProjectItem }