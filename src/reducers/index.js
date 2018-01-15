import { combineReducers } from 'redux';

import userReducer from './user'
import userLectureReducer from './user-lectures'


import assignmentReducer from './calendar/assignments'
import selectedAssignmentReducer from './calendar/selected_assignment'
import viewAssignmentModalReducer from './calendar/view-assignment-modal'
import createAssignmentModalReducer from './calendar/create-assignment-modal'
import notesReducer from './notes';
import residencesReducer from './residences';

import lectureRosterReducer from './lecture_roster'
import lectureReducer from './lectures.js'
import postReducer from './posts'
import UserGroupsReducer from './user-groups';
import UserResidenceReducer from './user-residence';
import residenceReducer from './residence';
import groupsReducer from './groups'

const rootReducer = combineReducers({
    user: userReducer,
    user_lectures: userLectureReducer,
    user_assignments: assignmentReducer,
    selected_assignment: selectedAssignmentReducer,
    user_residence: UserResidenceReducer,
    view_assignment_modal: viewAssignmentModalReducer,
    create_assignment_modal: createAssignmentModalReducer,
    lecture_roster: lectureRosterReducer,
    posts: postReducer,
    user_groups: UserGroupsReducer,
    notes: notesReducer,
    lectures: lectureReducer,
    residences: residencesReducer,
    residence: residenceReducer,
    groups: groupsReducer
})

export default rootReducer;