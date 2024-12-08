import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const teamSlice = createSlice({
  name: 'team',
  initialState: [],
  reducers: {
    addToTeam(state, action) {
      const user = action.payload;
      if (!state.find((member) => member.domain === user.domain) && user.available) {
        state.push(user);
        toast.success('Added Sucessfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }else{
       toast.error("Not Available",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
       )
      }
    },
    removeFromTeam(state, action) {
      toast.success('Removed Sucessfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return state.filter((member) => member._id !== action.payload._id);

     

    },
  },
});

export const { addToTeam, removeFromTeam } = teamSlice.actions;
export default teamSlice.reducer;
