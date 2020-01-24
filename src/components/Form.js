import React from 'react';
import DisplayRestaurant from '../containers/DisplayRestaurants';
import Browse from './Browse';

class Form extends React.Component {

    state = {
        term: "",
        location: "",
        coordinates: false,
        restaurants : [],
        price : []
    };


    handleTerm = (event) => {
        this.setState({
            term: event.target.value
        })
    };

    handleClick = () => {
        let coordinates = document.querySelector('.currentLocation');
        coordinates.style.display="block";
    }

    handleCoordinates = () => {
        //console.log("test1");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.searchCoordinates);
          }
    }

    searchCoordinates = (position) => {
        var term = this.state.term;
        var price = this.state.price;
        //console.log(position.coords.latitude + "," + position.coords.longitude);

        fetch(`http://localhost:3000/restaurants?term=${term}&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&price=${price}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            this.setState({ restaurants: data, coordinates: true })
        })
    }

    handleLocation = (event) => {
        this.setState({
            location: event.target.value
        })
    };

    handleCheck = (event) => {
        if( !this.state.price.includes(event.target.value)){
            let price_values = this.state.price.concat(event.target.value);
            this.setState({ price: price_values });
        } else {
            let price_values = this.state.price.filter(val => val !== event.target.value);
            this.setState({ price: price_values });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var term = this.state.term;
        var location = this.state.location;
        var price = this.state.price;

        fetch(`http://localhost:3000/restaurants?term=${term}&location=${location}&price=${price}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            this.setState({ restaurants: data })
        })
    }

    render(){
        //console.log(this.state.price);
        return(
            <div className="container">
                <div className= "formContainer">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Find Restaurants" onChange={this.handleTerm} ></input>
                        <span>|</span>
                        <input type="text" placeholder="Address, Neighborhood, City, State or Zip" onClick={this.handleClick} onChange={this.handleLocation} ></input>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg></button>
                        <div className="currentLocation" onClick={this.handleCoordinates}>
                            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
                            aria-describedby="desc" role="img" xmlns="http://www.w3.org/1999/xlink">
                            <title>Direction Arrow GPS</title>
                            <desc>A line styled icon from Orion Icon Library.</desc>
                            <path d="M29 35l3 22L59 5 7 32l22 3z"
                            strokeWidth="2" strokeMiterlimit="10" stroke="#202020" fill="black" data-name="layer1"
                            strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                            <p>Current Location</p>
                        </div>
                        <p>Filter by Price:</p>
                        <div className="filter">
                            <label>$<input type="checkbox" value='1' onChange={this.handleCheck}></input></label>
                            <label>$$<input type="checkbox" value='2' onChange={this.handleCheck}></input></label>
                            <label>$$$<input type="checkbox" value='3' onChange={this.handleCheck}></input></label>
                            <label>$$$$<input type="checkbox" value='4' onChange={this.handleCheck}></input></label>
                        </div>
                    </form> 
                </div>
                <div>
                    <DisplayRestaurant restaurants={ this.state.restaurants }/>
                    <Browse />
                </div>
                <footer></footer>
            </div>
        )
    }
}

export default Form;