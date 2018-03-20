import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import getUserLectures from '../actions/user/load-user-lectures.js';
import getUserGroups from '../actions/user/load-user-groups';

import createResidence from '../actions/residence/create-residence';
import getAllGroups from '../actions/groups/load-all-groups';
import createLecture from '../actions/lecture/create-lecture';
import getAllLectures from '../actions/lecture/get-all-lectures';
import createGroup from '../actions/groups/create-group';
import getAllResidences from '../actions/residence/load-all-residences';
import getUserResidence from '../actions/user/load-user-residence';
import getSingleResidence from '../actions/residence/load-single-residence';
import UserLectureList from '../components/sidebar/lectures/lecture-list-user.js';
import UserGroupList from '../components/sidebar/groups/group-list-user';
import UserResidence from '../components/sidebar/residence/residence-user'
import CreateLectureModal from '../components/sidebar/lectures/create-lecture-modal';
import CreateGroupModal from '../components/sidebar/groups/create-group-modal';
import CreateResidenceModal from '../components/sidebar/residence/create-residence-modal';
 import clearResidenceState from '../actions/residence/clear-residence-state'

class Sidebar extends Component {

    state = {
        userLecturesLoaded: false,
        userGroupsLoaded: false,
        userResidenceLoaded: false
    }

    cloneLectureModalWithProps = (component) => {
        return React.cloneElement(component, {getAllLectures: this.props.getAllLectures, lectures: this.props.lectures, user: this.props.user})
    }

    componentDidMount() {
        if(this.state.userLecturesLoaded === false){
            this.setState({
                userLecturesLoaded: true
            }, () => {
                this.props.getUserLectures(0)
            } )
        }
        if(this.state.userResidenceLoaded === false){
            this.setState({
                userResidenceLoaded: true
            }, () => {
                this.props.getUserResidence(0)
            })
        }
        if(this.state.userGroupsLoaded === false){
            this.setState({
                userGroupsLoaded: false
            }, () => {
                this.props.getUserGroups(0)
            })
        }
    }

    cloneUserLectureListWithProps = (component) => {
        return React.cloneElement(component, {user_lectures: this.props.user_lectures})
    }

    cloneGroupModalWithProps = (component) => {
        return React.cloneElement(component, {
            createGroup: this.props.createGroup,
            groups: this.props.groups,
            getAllGroups: this.props.getAllGroups
        })
    }

    cloneUserGroupList = (component) => {
        return React.cloneElement(component, {user_groups: this.props.user_groups})
    }

    cloneResidenceModal = (component) => {
        return React.cloneElement(component, {
            residence: this.props.residence,
            residences: this.props.residences,
            createResidence: this.props.createResidence,
            user: this.props.user,
            getAllResidences: this.props.getAllResidences,
            getSingleResidence: this.props.getSingleResidence,
            clearResidenceState: this.props.clearResidenceState
        })
    }

    cloneUserResidenceWithProps = (component) => {
        return React.cloneElement(component, {
            user_residence: this.props.user_residence
        })
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-backdrop">
                    {this.cloneResidenceModal(<CreateResidenceModal />)}
                    {this.cloneUserResidenceWithProps(<UserResidence />)}
                    {this.cloneLectureModalWithProps(<CreateLectureModal />)}
                    {this.cloneUserLectureListWithProps(<UserLectureList />)}
                    {this.cloneGroupModalWithProps(<CreateGroupModal />)}
                    {this.cloneUserGroupList(<UserGroupList />)}
                </div>
            </div>
        )
        // return React.Children.map(this.props.children, child => {
        //         return React.cloneElement(child, {...this.props})
        // })
    }
}


function mapStateToProps(state) {
    return {
        user_lectures: state.user_lectures,
        lectures: state.lectures,
        user_groups: state.user_groups,
        user: state.user,
        residences: state.residences,
        user_residence: state.user_residence,
        residence: state.residence,
        groups: state.groups
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserLectures: getUserLectures,
        getUserGroups: getUserGroups,
        createResidence: createResidence,
        createLecture: createLecture,
        getAllLectures: getAllLectures,
        createGroup: createGroup,
        getAllResidences: getAllResidences,
        getUserResidence: getUserResidence,
        getSingleResidence: getSingleResidence,
        getAllGroups: getAllGroups,
        clearResidenceState: clearResidenceState

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)