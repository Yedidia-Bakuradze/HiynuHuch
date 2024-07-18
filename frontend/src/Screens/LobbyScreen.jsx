import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LobbyScreen = () => {
	const navigate = useNavigate()
  
	const loginHandler = ()=>{
		navigate('login')
	}

	const signupHandler = ()=>{
		navigate('login')
	}
	
	return (
	<div>
	<Button onClick={loginHandler}>
		Login
	</Button>
	<Button onClick={signupHandler}>
		Signup
	</Button>
	</div>
  )
}

export default LobbyScreen