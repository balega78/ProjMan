import React from 'react'
import { projects } from '../projectList/ProjectData.js'
import ProjectItem from './component/ProjectItem.js'

export default function ProjectStat() {
    return (
        <table className="Projecttable">
            <tr>
                <th>projekt tárgya</th>
                <th>projekt összege</th>
            </tr>
            <tr>
                <td>
                    {projects.map(item => {
                        return (
                            <ProjectItem key={item.id} projectData={item.projectName}></ProjectItem>)
                    })}
                </td>                <td>
                    {projects.map(item => {
                        return (
                            <ProjectItem key={item.id} projectData={item.amount}></ProjectItem>)
                    })}
                </td>
            </tr>
        </table>
    )
}
