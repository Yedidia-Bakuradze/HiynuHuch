import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/edit.css";
import "../css/login.css";

export default function EditScreen() {
	const [position, setPosition] = useState(null);
	const [title, setTitle] = useState("");
	const [tags, setTags] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		// Load the form data from localStorage on component mount
		const savedPosition = localStorage.getItem("position");
		const savedTitle = localStorage.getItem("title");
		const savedTags = localStorage.getItem("tags");
		const savedDescription = localStorage.getItem("description");
		
		if (savedPosition) {
			setPosition(JSON.parse(savedPosition));
		}
		if (savedTitle) {
			setTitle(savedTitle);
		}
		if (savedTags) {
			setTags(savedTags);
		}
		if (savedDescription) {
			setDescription(savedDescription);
		}
	}, []);

	useEffect(() => {
		// Save the form data to localStorage whenever there are changes
		localStorage.setItem("title", title);
		localStorage.setItem("tags", tags);
		localStorage.setItem("description", description);

		if (position) {
			localStorage.setItem("position", JSON.stringify(position));
		}
	}, [title, tags, description, position]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="job-div">
			<Form onSubmit={handleSubmit} className="border-form ">
				<Form.Label className="fieldsnames">Job title:</Form.Label>
				<Form.Control
					className="fields"
					type="text"
					placeholder="Intern etc"
					size="lg"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<Form.Label className="fieldsnames">Tags:</Form.Label>
				<Form.Control
					className="fields"
					type="text"
					placeholder="Full time/ Half time etc"
					name="tags"
					value={tags}
					onChange={(e) => setTags(e.target.value)}
				/>

				<Form.Label className="fieldsnames">Description:</Form.Label>
				<Form.Control
					className="fields"
					type="text"
					placeholder="3 days at work 2 at home etc"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<p>
					<button type="submit" className="app_container">
						Update
					</button>
					<button
						type="button"
						className="app_container"
						onClick={() => {
							navigate("/");
						}}
					>
						Cancel
					</button>
				</p>
			</Form>
		</div>
	);
}
