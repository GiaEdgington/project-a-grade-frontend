import React from 'react';
import DisplayRestaurant from '../containers/DisplayRestaurants';

class Form extends React.Component {

    state = {
        term: "",
        location: "",
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
        .then(response => {
            this.setState( { restaurants: response})
        })
    }

    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Find Restaurants" onChange={this.handleTerm}></input>
                        <input type="text" placeholder="Location" onChange={this.handleLocation}></input>
                        <button>Search</button>
                    </form>
                </div>
                <div>
                    <DisplayRestaurant />
                </div>
                
            </div>
        )
    }
}

export default Form;