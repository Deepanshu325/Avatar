
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../Features/users/userSlice';
import teamReducer from '../Features/team/teamSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    team: teamReducer,
  },
});
