import React from 'react'
import {Header, Segment, Button, Container, Form} from 'semantic-ui-react'

class QuestionShow extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			
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
		        fontSize: '3.5em',
		        marginBottom: '25px'
		      }}
		      >Question {this.props.qNumber}</Header>
		      <Container textAlign='center' text>
		        <p style={{
		          fontSize: '2em'
		        }}>{this.props.question.question}</p>

		      </Container>	
		      <Form>
		      	<Form.Group grouped>
		      	{this.props.choices.map((choice, i) => {
		      		return (
		      				<Form.Radio 
		      				key={i}
		      				label={choice}
		      				value={choice}
		      				checked={value === choice}
		      				onChange={this.handleChange}
		      				/>
		      			)
		      	})}
			      <Button
			      size='big'
			      color='green'
			      style={{
			        marginTop: '50px'
			      }}
			      >Submit</Button>
			    </Form.Group>
			  </Form>

		    </Segment>
		)
	}
}

export default QuestionShow