import React from 'react';
import DisplayRestaurant from '../containers/DisplayRestaurants';
import Browse from './Browse';

class Form extends React.Component {

    state = {
        term: "Restaurants",
        location: "New York",
        restaurants : []
    };


    handleTerm = (event) => {
        this.setState({
            term: event.target.value
        })
    };

    handleLocation = (event) => {
        this.setState({
            location: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        var term = this.state.term;
        var location = this.state.location;

        fetch(`http://localhost:3000/restaurants?term=${term}&location=${location}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render(){
        return(
            <div className="container">
                <div className= "formContainer">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Find Restaurants" onChange={this.handleTerm} ></input>
                        <span>|</span>
                        <input type="text" placeholder="Location" onChange={this.handleLocation} ></input>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg></button>
                    </form>
                </div>
                <div>
                    <DisplayRestaurant />
                    <Browse />
                </div>
                
            </div>
        )
    }
}

export default Form;