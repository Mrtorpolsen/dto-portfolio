import React from "react";

type Project = {
    src: string,
    alt: string,
    heading: string,
    text: string
}

type ProjectProp = {
    project: Project;
}


export default function Project({project} : ProjectProp) {
    return (
        <div>{project.text}</div>
    );
}