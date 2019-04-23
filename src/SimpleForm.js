import React from 'react';
import Greetings from './Greetings';
import style from './style';
import TextField from './TextField';


class SimpleForm extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			firstNameError: "",
			lastName: ""
		}
	}

	validateName = name => {
		const regex = /[A-Za-z]{3,}/;
		return !regex.test(name)
			? "The name must contain at least three letters..."
			: "";
	};

	onFirstNameBlur = () => {
		const {firstName} = this.state;
		const firstNameError = this.validateName(firstName);
		this.setState({firstNameError});
	};

	onFirstNameChange = (event) => {
		this.setState({
			firstName: event.target.value
		})
	};
	onLastNameChange = (event) => {
		this.setState({
			lastName: event.target.value
		})
	};

	render() {
		const {firstName, firstNameError, lastName} = this.state;
		return (
			<div
				style={style.form}
			>
				<div style={style.inputGroup}>
					<TextField label={"First Name"}
					           name={firstName}
					           onChange={this.onFirstNameChange}
					           onBlur={this.onFirstNameBlur}
					           error={firstNameError}
					/>
				</div>
				<div style={style.inputGroup}>
					<TextField label="Last Name"
					           name="lastName"
					           onChange={this.onLastNameChange}
					/>
				</div>
				<Greetings
					firstName={firstName} lastName={lastName}
				/>
			</div>
		)
	}
}

export default SimpleForm;