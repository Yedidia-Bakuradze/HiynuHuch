import React from 'react'
import Root from '../routes/Root';
import { Outlet, useParams } from 'react-router-dom'
import '../Style/Main.css';

const RecruiterLayout = () => {
  const {id} = useParams();
  console.log(id);
  return (
	<>
    <Root/>   
    <Outlet/>
  </>
  )
}

export default RecruiterLayout