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

		      <Header
		      style={{
		      	fontSize:'7em'
		      }}
		      >{((this.props.correct/10).toFixed(2) * 100)}%
		      </Header>

		      <Container textAlign='left' text>
		        <p style={{
		          fontSize: '2em'
		        }}>You got <span style={{color:'blue'}}>{this.props.correct}</span> questions right out of <span style={{color:'blue'}}>10</span> on <span style={{color: 'red'}}>{this.props.mode}</span> mode.</p>
		      </Container>

		      <Button
		      style={{
		      	marginTop: '30px'
		      }} 
		      onClick = {this.props.returnToMainMenu}
		      color= 'red' >Restart</Button>
			</Segment>
		)
	}
}

export default EndComponent