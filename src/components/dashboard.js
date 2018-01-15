import React, { Component } from 'react';
import CalendarContainer from '../containers/user-calendar';
import PostContainer from '../containers/posts';
import UserContainer from '../containers/user';
import EditUserDetailsModal from './user-details/edit-user-details-modal';
import UserDetailsCard from './user-details/user-details-card';
import UploadNoteButton from './notes/upload-note-button';
import NoteDetailsModal from './notes/note-details-modal';
import Calendar from './calendar/calendar';
import AddAssignmentModal from './calendar/create-assignment-modal';
import UserNoteList from './notes/user-note-list';
import GoogleMap from './residence/google-map';

import EditUser from '../containers/user-details';
import NotesContainer from '../containers/notes';
import YoutubeVideoSearch from './calendar/assignment/youtube-video-search.js'

class Dashboard extends Component {

    render() {
        return (
        <div className="dashboard-container">
            <div className="user-details">
            <EditUser>
                <EditUserDetailsModal />
                <UserDetailsCard />
            </EditUser>
            </div>
            <div className="calendar-container">
                    <CalendarContainer>
                        <AddAssignmentModal />
                        <Calendar />
                        {/*<YoutubeVideoSearch />*/}
                    </CalendarContainer>
            </div>
            <div className="notes-container">
                <NotesContainer>
                    <UploadNoteButton />
                    <NoteDetailsModal />
                    <UserNoteList />
                </NotesContainer>
            </div>
            <div className="post-container">
                <PostContainer />
            </div>
        </div>
        )
    }
}

export default Dashboard;