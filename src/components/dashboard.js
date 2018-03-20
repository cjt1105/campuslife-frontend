import React, { Component } from 'react';
import CalendarContainer from '../containers/calendar';
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
import { Grid } from 'semantic-ui-react'

class Dashboard extends Component {

    render() {
        return (
        <div className="dashboard-container">
            <div className="dashboard-backdrop">
                {/* <Grid>
                    <Grid.Row> */}
                        <div className="user-details">
                            <div className="container-backdrop">
                        <EditUser>
                            {/*<EditUserDetailsModal />*/}
                            <UserDetailsCard />
                        </EditUser>
                            </div>
                        </div>
                        <div className="dashboard-post-container">
                            <PostContainer />
                        </div>
                        <div className="dashboard-calendar-container">
                            <div className="container-backdrop">
                                <CalendarContainer>
                                    <AddAssignmentModal />
                                    <Calendar />
                                    {/*<YoutubeVideoSearch />*/}
                                </CalendarContainer>
                            </div>
                        </div>
                    {/* </Grid.Row>
                    <Grid.Row> */}
                            <div className="dashboard-notes-container">
                                <div className="container-backdrop">
                                    <NotesContainer>
                                        <UploadNoteButton />
                                        <NoteDetailsModal />
                                        <UserNoteList />
                                    </NotesContainer>
                                </div>
                            </div>
                    {/* </Grid.Row>
                </Grid> */}
            </div>
        </div>
        )
    }
}

export default Dashboard;