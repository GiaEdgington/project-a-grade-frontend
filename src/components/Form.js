import React from 'react';
import DisplayRestaurant from '../containers/DisplayRestaurants';

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
        .then(data => this.filterRestaurants(data))
    }

    filterRestaurants = (data) => {
        var token = 'ecmGOZdhBzQna3iHZAWezOPHX';
        let restaurants = [];
        data.map(restaurant => {
            restaurants.push(restaurant.name);
        })
        //console.log(restaurants);
        var gradeA= [];

        fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json', {
            headers: {
                'Host': 'data.seattle.gov',
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'X-App-Token': token
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.length);
            response.forEach(restaurant => {
                if(restaurant.grade === 'A'){
                    gradeA.push(restaurant.dba);
                }
            })

        let gradeArestaurants = [];
        //console.log(gradeA.includes("CLINTON STREET BAKING COMPANY"));
        data.forEach(restaurant => {
            //console.log(restaurant.name);
            
            if(gradeA.includes(restaurant.name)) {
                gradeArestaurants.push(restaurant);
            } else {
                //send to link : https://a816-health.nyc.gov/ABCEatsRestaurants/#/Search
                console.log('false');
            }
        })  
        //console.log(gradeArestaurants.length);
            //this.setState({ restaurants: gradeA })
        })
    }

    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Find Restaurants" onChange={this.handleTerm} ></input>
                        <input type="text" placeholder="Location" onChange={this.handleLocation} ></input>
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