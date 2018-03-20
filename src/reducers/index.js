import { combineReducers } from 'redux';

import userReducer from './user'
import userLectureReducer from './user-lectures'


import userAssignmentReducer from './calendar/assignments'
import assignmentReducer from './assignments'
import selectedAssignmentReducer from './calendar/selected_assignment'
import viewAssignmentModalReducer from './calendar/view-assignment-modal'
import createAssignmentModalReducer from './calendar/create-assignment-modal'
import notesReducer from './notes';
import residencesReducer from './residences';

import lectureRosterReducer from './lecture_roster'
import allLecturesReducer from './lectures.js'
import postReducer from './posts'
import UserGroupsReducer from './user-groups';
import UserResidenceReducer from './user-residence';
import residenceReducer from './residence';
import groupsReducer from './groups';
import lectureReducer from './selected-lecture.js'
import lectureNotesReducer from './lecture-notes'

const rootReducer = combineReducers({
    user: userReducer,
    user_lectures: userLectureReducer,
    user_assignments: userAssignmentReducer,
    selected_assignment: selectedAssignmentReducer,
    user_residence: UserResidenceReducer,
    view_assignment_modal: viewAssignmentModalReducer,
    create_assignment_modal: createAssignmentModalReducer,
    lecture_roster: lectureRosterReducer,
    posts: postReducer,
    user_groups: UserGroupsReducer,
    notes: notesReducer,
    lectures: allLecturesReducer,
    residences: residencesReducer,
    residence: residenceReducer,
    groups: groupsReducer,
    selected_lecture: lectureReducer,
    lecture_notes: lectureNotesReducer,
    assignments: assignmentReducer
})

export default rootReducer;