import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import LoginScreen from '../LoginScreen'
import SignupScreen from '../SignupScreen'
import UserHomeScreen from './UserHomeScreen'

import { Button } from 'react-bootstrap'
function MainUserScreen() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/:id" element={<UserHomeScreen />} />
      </Routes>
    </>
  )
}

export default MainUserScreen