import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseAction';
import PropTypes from 'prop-types';

class Courses extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            course:{
                title:""
            }
        };
    }

    handleChange = event => {
        const course = {...this.state.course,title:event.target.value};
        this.setState({course});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course))
        alert(this.state.course.title);
    }
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add courses</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} required/>
                <input type="submit" value="Save"/>
                {this.props.courses.map(course=>(
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        </div>
    );
    }
}

Courses.propTypes = {
    courses:PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state,ownProps) {
    return{
        courses:state.courses
    }
}
export default connect(mapStateToProps)(Courses);