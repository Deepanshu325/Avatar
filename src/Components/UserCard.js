import React from 'react';
import { useDispatch } from 'react-redux';
import { addToTeam } from '../Features/team/teamSlice';
import ("./UserCard.css")

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="avatar" />
    
    <div className="container">
      <h3>{user.first_name} {user.last_name}</h3>
      <p>Domain: {user.domain}</p>
      <p>Gender: {user.gender}</p>
      <p>email: {user.email}</p>
      <p>Availability: {user.available ? 'Available' : 'Not Available'}</p>
      <button onClick={() => dispatch(addToTeam(user))}>Add to Team</button>
    </div>
  </div>
  );
};

export default UserCard;
