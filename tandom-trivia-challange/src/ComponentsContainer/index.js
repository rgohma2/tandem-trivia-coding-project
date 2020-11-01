import React from 'react'
import WelcomeComponent from './WelcomeComponent'

class ComponetsContainer extends React.Component {
	constructor(props) {

		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<div>
				<WelcomeComponent/>
			</div>
		)
	}
}

export default ComponetsContainer