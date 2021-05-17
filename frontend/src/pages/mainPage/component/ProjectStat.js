import React from 'react'
import { useEffect } from 'react'
//import { projects, columnsOfTable } from './projectList/ProjectData.js'
import ProjectItem from './ProjectItem.js'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import './ProjectStat.css'

import 'antd/dist/antd.css';
import { fetchProjects } from '../../../actions/projectActions';

function ProjectStat({ projects, fetchProjects }) {

    useEffect(() => {
        fetchProjects()
    }, [fetchProjects])

    return (
        <div className="projectsTable">
            <Table striped bordered hover >
                <thead className="tableHeader">
                    <tr>
                        <th>tárgy</th>
                        <th>összeg</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {projects.map(item => {
                        return (
                            <ProjectItem key={item.id} project={item}></ProjectItem>
                        )
                    })}
                </tbody>
            </Table>
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