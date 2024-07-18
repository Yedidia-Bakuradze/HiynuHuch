import React from 'react'

export const AppliedUserCard = () => {
  return (
	<Card className="Card" key={emp.id}>
		<Card.Header>Header</Card.Header>
		<Card.Body>
			<Card.Text>
			<h8>Name: {emp.name}</h8>
			</Card.Text>
			<Card.Text>
			<h8>Email: {emp.email}</h8>
			</Card.Text>
			<Card.Text>
			<h8>Grade: {emp.grade}</h8>
			</Card.Text>
			<Card.Text>
			<h8>Status</h8>
			</Card.Text>
			<ProgressBar now={emp.status} label={`${emp.status}%`} />
			<br></br>
			<Link to={`/Moredetails/${emp._id.$oid}`}  className="Submit-btn remove_text_dec" variant="primary">
			More Details
			</Link>
		</Card.Body>
	</Card>

  )
}
