import React from 'react'
import {Header, Segment, Button, Container} from 'semantic-ui-react'

class WelcomeComponent extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			value: ''
		}
	}

	handleChange = (e, { value }) => this.setState({ value })

	render() {
		const { value } = this.state
		return(
			<Segment
		    textAlign='center'
		    style={{
		      margin: '15px',
		      padding: '35px'
		    }}
		    >
		      <Header
		      style={{
		        fontSize: '4.5em',
		        marginBottom: '25px'
		      }}
		      >Welcome to The Tandom Trivia Quiz!</Header>
		      <Container textAlign='left' text>
		        <p style={{
		          fontSize: '1.5em'
		        }}>Test your trivia skills by answering 10 multiple choice questions covering a multitude of topics 
		         such as Shakespeare, Greek Mythology, and cats.</p>
		      </Container>
		      <Container
		      style={{
		      	marginTop:'25px'
		      }}
		      >
		      <Button
		      onClick={this.handleChange}
		      value={'easy'}
		      >Easy Mode</Button>
		      <Button
		      onClick={this.handleChange}
		      value={'hard'}
		      >Hard Mode</Button>
		      </Container>
		      <Button
		      onClick={() => this.props.startQuiz(this.state.value)}
		      size='big'
		      color='green'
		      style={{
		        marginTop: '50px'
		      }}
		      >Start!</Button>
		    </Segment>
		)
	}
}

export default WelcomeComponent