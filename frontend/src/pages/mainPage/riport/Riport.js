import React from 'react'
import { connect } from 'react-redux'
import { setProject } from '../../../actions/projectActions';

function Riport({ project }) {



    return (
        <div className="riportContainer">
            <h1 >{project.name}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);

    return {
        project: state.projects.project
    };
};

export default connect(mapStateToProps, {setProject})(Riport);