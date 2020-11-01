import React from 'react'

import {Header, Segment, Button, Container} from 'semantic-ui-react'

class EndComponent extends React.Component {
	constructor() {

		super()

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
		      >Thanks for playing The Tandom Trivia Quiz!</Header>
		      <Container textAlign='left' text>
		        <p style={{
		          fontSize: '2em'
		        }}>You got <span style={{color:'blue'}}>{this.props.correct}</span> questions right out of a possible <span style={{color:'blue'}}>21</span>.</p>
		      </Container>
			</Segment>
		)
	}
}

export default EndComponent