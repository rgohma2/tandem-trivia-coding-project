import React from 'react'
import {Header, Segment, Button, Container} from 'semantic-ui-react'

class QuestionShow extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			
		}
	}

	render() {
		return(
			<div>
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
		      >Question {this.props.qNumber}</Header>
		      <Container textAlign='center' text>
		        <p style={{
		          fontSize: '2em'
		        }}>{this.props.question.question}</p>
		      </Container>
		      <Button
		      size='big'
		      color='green'
		      style={{
		        marginTop: '50px'
		      }}
		      >Submit</Button>
		    </Segment>
			</div>
		)
	}
}

export default QuestionShow