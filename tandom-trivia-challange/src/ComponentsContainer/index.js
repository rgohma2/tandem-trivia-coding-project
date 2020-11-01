import React from 'react'
import WelcomeComponent from './WelcomeComponent'
import QuestionShow from './QuestionShow'

class ComponetsContainer extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			start: false
		}
	}

	startQuiz = () => {
		this.setState({
			start: true
		})
	}

	render() {
		return(
			<div>
			{
				this.state.start === false
				?
				<WelcomeComponent
				startQuiz={this.startQuiz}
				/>
				:
				<QuestionShow/>
			}
			</div>
		)
	}
}

export default ComponetsContainer