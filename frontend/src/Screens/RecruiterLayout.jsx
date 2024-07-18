import React from 'react'
import Root from '../routes/Root';
import { Outlet } from 'react-router-dom'
import '../Style/Main.css';

const RecruiterLayout = () => {
  return (
	<>
    <Root/>   
    <Outlet/>
  </>
  )
}

export default RecruiterLayout