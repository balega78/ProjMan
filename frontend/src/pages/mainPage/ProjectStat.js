import React from 'react'
import { projects, columnsOfTable } from './projectList/ProjectData.js'
import ProjectItem from './component/ProjectItem.js'
import {Table} from 'antd'
import 'antd/dist/antd.css';

export default function ProjectStat() {
    return (
        <div>
            {/* <table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>tárgy</th>
                        <th>összeg</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table> */}
            <Table dataSource={projects} columns={columnsOfTable}></Table>
        </div>
    )
}
