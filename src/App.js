import React, { Component } from 'react'
import './App.css';

class App extends Component {


  state = {
    name: "",
    dept: "",
    rating: "",
    user: [],
    // details: false
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state);

    const tempObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating
    }
    const tempArr = this.state.user;
    tempArr.push(tempObj)
    this.setState({ user: tempArr });
  }


  render() {
    return (
      <>
        <h1 className="header">Employee feedback Form</h1>
        <from>

          <label htmlFor='name' className="labels">NAME :</label>
          <input type="text" className="inpstyle" id="name" name="name" placeholder="Enter your name" onChange={this.changeHandler} value={this.state.name}></input>
          <br></br>
          <label  htmlFor='dept' className="labels">DEPARTMENT :</label>
          <input type="text"  className="inpstyle" id="dept" name="dept" placeholder="Enter Department" onChange={this.changeHandler} value={this.state.dept}></input>
          <br></br>
          <label htmlFor='rating' className="labels">RATING :</label>
          <input type="number" className="inpstyle" id="rating" name="rating" placeholder="Enter Rating" onChange={this.changeHandler} value={this.state.rating}></input>
          <br></br>
          <button id="substyle" onClick={this.handleSubmit}>Submit</button>
        </from>
        <br/>

      
        {this.state.user.map((value, index) => {
          return (
            <div key={index} className="cont1" >

              <span> Name :{value.name} | </span>
              <span>Department: {value.dept}|</span>
              <span>Rating: {value.rating}</span>

            </div>
          )

        })}
      </>
    );
  }

}

export default App;
