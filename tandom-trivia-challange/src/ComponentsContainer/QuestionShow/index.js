import React from 'react'
import {Header, Segment, Button, Container, Form, Message, Progress} from 'semantic-ui-react'

class QuestionShow extends React.Component {
	constructor(props) {

		super(props)

		this.state = {
			
		}
	}

	handleChange = (e, { value }) => this.setState({ value })

	handleSubmit = (e) => {
		e.preventDefault()
		if (this.props.buttonMessage === 'Submit') {
			this.props.checkAnswer(this.state.value)
		} else if (this.props.buttonMessage === 'Next Question') {
			this.props.advanceQuestion()
		}
	}

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
		      <Form onSubmit={this.handleSubmit}>
		      	<Form.Group grouped>
		      	{this.props.choices.map((choice, i) => {
		      		return (
		      				<Form.Radio
		      				style={{
		      					fontSize: '1.5em'
		      				}} 
		      				key={i}
		      				label={choice}
		      				value={choice}
		      				checked={value === choice}
		      				onChange={this.handleChange}
		      				/>
		      			)
		      	})}

		      	{
		      		this.props.message === ''
		      		?
		      		<div style={{height: '50px'}}/>
		      		:
	      			<Message
	      			color={this.props.color}
	      			header={this.props.message}
	      			/>
		      	}

			      <Button
			      style={{
			      	marginBottom: '50px'
			      }}
			      size='big'
			      color='green'
			      >{this.props.buttonMessage}</Button>
			    </Form.Group>
			  </Form>
				  <Progress
				  percent={this.props.progress.toFixed(2)} 
				  progress
				  />

		    </Segment>
		)
	}
}

export default QuestionShow