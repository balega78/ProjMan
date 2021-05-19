import React from 'react'
import { useHistory, } from "react-router-dom";
import { connect } from 'react-redux'
import { setProject } from '../../../actions/projectActions';

function ProjectItem({ project, setProject }) {

    let history = useHistory()

    const handleClick = (project) => {
        setProject(project)
        history.push("/riport")
    }

    return (
        <tr onClick={()=> handleClick(project)}>
            <td>{project.name}</td>
            <td>{project.aid.toLocaleString("hu-Hu")} ezer Ft</td>
        </tr>
    )
}


export default connect(null, { setProject })(ProjectItem);