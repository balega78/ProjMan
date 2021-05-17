import React from 'react'

export default function ProjectItem({ project }) {

    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.aid.toLocaleString("hu-Hu")} ezer Ft</td>
        </tr>
    )
}
