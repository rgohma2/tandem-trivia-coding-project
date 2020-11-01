import React from 'react'
import {Header, Segment, Button, Container} from 'semantic-ui-react'

class WelcomeComponent extends React.Component {
	constructor(props) {

		super(props)

		this.state = {

		}
	}

	render() {
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
		        fontSize: '3.5em',
		        marginBottom: '25px'
		      }}
		      >Welcome to The Tandom Trivia Quiz!</Header>
		      <Container textAlign='left' text>
		        <p style={{
		          fontSize: '1em'
		        }}>Test your trivia skills by answering 10 multiple choice questions covering a multitude of topics 
		        <br/> such as Shakespeare, Greek Mythology, and cats.</p>
		      </Container>
		      <Button
		      onClick={this.props.startQuiz}
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