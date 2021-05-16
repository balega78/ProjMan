import React from 'react'
import { useEffect } from 'react'
//import { projects, columnsOfTable } from './projectList/ProjectData.js'
import ProjectItem from './ProjectItem.js'
import { connect } from 'react-redux'
import { Table } from 'antd'

import 'antd/dist/antd.css';
import { fetchProjects } from '../../../actions/projectActions';

function ProjectStat({ projects, fetchProjects }) {

    useEffect(() => {
        fetchProjects()
    }, [fetchProjects])
    
    return (
        <div>
            <table>
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
                                    <ProjectItem key={item.id} projectData={item.name}></ProjectItem>)
                            })}
                        </td>
                        <td>
                            {projects.map(item => {
                                return (
                                    <ProjectItem key={item.id} projectData={item.aid}></ProjectItem>)
                            })}
                        </td>

                    </tr>
                </tbody>
            </table>
            {/* <Table dataSource={projects} columns={columnsOfTable}></Table> */}
        </div>
    )
}

const mapStateToProps = state => {

    return {
        projects: state.projects,

    };
};

export default connect(mapStateToProps, { fetchProjects })(ProjectStat);