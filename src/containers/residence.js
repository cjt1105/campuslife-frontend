import React, { Component } from 'react';
import { connect } from 'react-redux';

import getResidence from '../../actions/residence/load-single-residence';
import getResidents from '../../actions/residence/load-residents';
import getLostAndFoundItems from '../../actions/residence/load-lost-and-found-items';
import getStallWallPosts from '../../actions/residence/load-stall-wall';

import ResidenceDetails from '../../components/residence/residence-details'
import ResidentList from '../../components/residence/residents-list'
import LostAndFoundList from '../../components/residence/lost-and-found-list';
import StallWallList from '../../components/residence/stall-wall-list'


import { bindActionCreators } from 'redux';

class LectureContainer extends Component {

    state = {
        residenceLoaded: false,
        residentsLoaded: false,
        lostAndFoundLoaded: false,
        stallWallLoaded: false
    }

    componentDidMount() {
        const urlArray = window.location.href.split("/");
        const residenceId = urlArray[urlArray.length - 1];
        if(this.props.residence === null && this.state.residenceLoaded === false) {
            this.setState({
                residenceLoaded: true
            }, () => {
                this.props.getResidence(residenceId)
            })
        }
    }

    componentDidUpdate() {
        if(this.props.residence != null && this.state.residentsLoaded === false){
            this.setState({residentsLoaded: true})
            this.props.getResidents(this.props.residence.residence.id)
        }
        if(this.props.residence != null && this.state.lostAndFoundLoaded === false){
            this.setState({lostAndFoundLoaded: true})
            this.props.getLostAndFoundItems(this.props.residence.residence.id)
        }
        if(this.props.residence != null && this.state.stallWallLoaded === false){
            this.setState({stallWallLoaded: true})
            this.props.getStallWallPosts(this.props.residence.residence.id)
        }
    }

    cloneResidenceDetailsWithProps = (component) => {
        return React.cloneElement(component, {residence: this.props.residence.residence})
    }

    cloneResidentsListWithProps = (component) => {
        return React.cloneElement(component, {residents: this.props.residence.residents})
    }

    cloneLostAndFoundListWithProps = (component) => {
        return React.cloneElement(component, {items: this.props.residence.items})
    }

    cloneStallWallListtWithProps = (component) => {
        return React.cloneElement(component, {stall_wall: this.props.residence.stall_wall})
    }

    cloneNoteListWithProps = (component) => {
        return React.cloneElement(component, {notes: this.props.lecture_notes})
    }

    render() {
        if(this.props.residence != null) {
            console.log('props', this.props.residence)
            return(
            <div>
                <div>
                    {this.cloneResidenceDetailsWithProps(<ResidenceDetails/>)}
                </div>
                <div className="calendar-container">
                    <div className="container-backdrop">
                        {this.cloneLostAndFoundListWithProps(<LostAndFoundList/>)}
                    </div>
                </div>
                <div>
                    {this.cloneResidentsListWithProps(<ResidentList/>)}
                </div>
                <div className="lecture-post-container">
                    <div className="container-backdrop">
                    </div>
                </div>
                <div className="students-container">
                    <div className="container-backdrop">
                        {this.cloneStallWallListtWithProps(<StallWallList/>)}
                    </div>
                </div>
            </div>
            )
        }
        return null
        // if(this.props.selected_lecture != null && this.props.selected_lecture.students != undefined){
        //     return (
        //         <div>
        //         <div>{this.cloneLectureDetailsWithProps(<LectureDetails/>)}</div>
        //         <div className="calendar-container">
        //             <div className="container-backdrop">
        //                 <CalendarContainer>
        //                     <AddAssignmentModal />
        //                     <Calendar />
        //                 </CalendarContainer>
        //             </div>
        //         </div>
        //             <div className="lecture-notes-container">
        //                 <div className="container-backdrop">
        //                     {this.cloneNoteListWithProps(<NoteList />)}
        //                 </div>
        //             </div>
        //             <div className="post-container">
        //                 <div className="container-backdrop">
        //                 </div>
        //             </div>
        //             <div className="students-container">
        //                 <div className="container-backdrop">
        //                     {this.cloneStudentsListWithProps(<StudentList/>)}
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }
    }
}

function mapStateToProps(state) {
    return {
        residence: state.residence
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getResidence: getResidence,
    getResidents: getResidents,
    getLostAndFoundItems: getLostAndFoundItems,
    getStallWallPosts: getStallWallPosts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LectureContainer);