import React from 'react';
import { NavLink} from 'react-router-dom';

const NavPosition = ({ positionId , positionName}) => {

  return (
    <li key={positionId}>
      <NavLink id="navLink" to={`position/${positionId}`}>
        {positionName}
      </NavLink>
    </li>
  );
}

export default NavPosition;
