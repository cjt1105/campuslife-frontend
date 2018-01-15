import React, { Component } from 'react';
import { connect } from 'react-redux';
import getLectureRoster from '../actions/getLectureRoster';
import { bindActionCreators } from 'redux';
import {List, ListItem} from 'material-ui/List';
import { NavLink } from 'react-router-dom';

class LectureRoster extends Component {
    componentDidMount() {
        const urlArray = window.location.href.split("/");
        let lectureId = urlArray[4];
        this.props.getLectureRoster(lectureId);
    }

    renderList() {
        return this.props.lecture_roster.map((student) => {
            return (
                <ListItem
                key={student.id}
                primaryText={student.firstName}
                containerElement={
                    <NavLink activeClassName='active' to={`users/${student.id}`}></NavLink>
                } />
            )
        })
    }

    render() {
        return (
            <List>
                {this.renderList()}
            </List>
        )
    }
}

function mapStateToProps(state) {
    return {
        lecture_roster: state.lecture_roster
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLectureRoster: getLectureRoster
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureRoster);