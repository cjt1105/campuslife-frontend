import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

export default class StudentList extends Component {

    renderStudents = (students) => {
        return students.map(student => {
            return (
                <div className='student-card'>
                    <div className="student-image">
                    <Image size="tiny" src={student.profilePhoto.url} avatar />
                    </div>
                    <div className="student-name">{student.firstName} {student.lastName}</div>
                </div>
            )
        })
    }

    render() {
        if(this.props.students != null){
            return (
            <div>
                Students
                <div>
                    {this.renderStudents(this.props.students)}
                </div>
            </div>
        );
        }
    }
}