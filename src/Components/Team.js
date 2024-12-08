import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromTeam } from '../Features/team/teamSlice';
import './Team.css';

const Team = () => {
  const team = useSelector((state) => state.team);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Team</h2>
      <div className="Team">
        {team.map((user) => (
          <div key={user._id}>
            <div className="ccard">
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="avatar" />
              <div className="ccontainer">
                <h3>{user.first_name} {user.last_name}</h3>
                <p>Domain: {user.domain}</p>
                <p>Gender: {user.gender}</p>
                <p>Email: {user.email}</p>
              </div>
              <button id="remove" onClick={() => dispatch(removeFromTeam(user))}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
