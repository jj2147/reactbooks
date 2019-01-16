import React, { Component } from "react";
import {ViewBtn, DeleteBtn, SaveBtn} from "../components/Buttons";
import { Jumbotron } from 'reactstrap';
import API from "../utils/API";
import { Link } from "react-router-dom";


import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
	title: "",
	author: "",
	b00ks:[]

  };


//   componentDidMount() {
// 	this.loadBooks();
//   }

//   loadBooks = () => {
// 	API.getBooks()
// 	  .then(res =>
// 		this.setState({ books: res.data, title: "", author: "", synopsis: "" })
// 	  )
// 	  .catch(err => console.log(err));
//   };

//   deleteBook = id => {
// 	API.deleteBook(id)
// 	  .then(res => this.loadBooks())
// 	  .catch(err => console.log(err));
//   };

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		// this.setState({ b00ks: API.searchBooks(this.state.title, this.state.author) });
		API.searchBooks(this.state.title, this.state.author).then(res => {
			this.setState({ b00ks: res});

		});
		
	};

	render() {
		return (
			<div>
				<Jumbotron>
				<form>
				<Input
					value={this.state.title}
					onChange={this.handleInputChange}
					name="title"
					placeholder="Title"
				/>
				<Input
					value={this.state.author}
					onChange={this.handleInputChange}
					name="author"
					placeholder="Author"
				/>
				<FormBtn onClick={this.handleFormSubmit}>
					Submit
				</FormBtn>
				</form>

				<div>
					{this.state.b00ks.map(e => (
						<div style={{border: "solid"}}>
						<p>{e.title}</p>
						<p>{e.authors}</p>
						<p>{e.description}</p>
						<a href={e.link}>{e.link}</a>
						<img src={e.img} alt="image"/>
						</div>
					))}
				</div>

				</Jumbotron>
			</div>
		);
	}
}

export default Books;
