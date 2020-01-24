import React from 'react';
import Popular from '../components/Popular';

class Browse extends React.Component {

    state = {
        newRestaurants: []
    }

    componentDidMount = () => {
        //console.log('test');
        fetch('http://localhost:3000/new_restaurants?limit=4')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            this.setState({ newRestaurants: data.slice(0, 4) })
        })
    }

    render(){
        console.log(this.state.newRestaurants);
        const newAndHot = this.state.newRestaurants.map((restaurant, index) => {
            //console.log(restaurant.name);
            return <Popular key = {index} name={restaurant.name} image={restaurant.image_url} />
        })
        return(
            <div className="topRated">
               <h2>New and Popular in New York</h2>
                <ul> 
                    {newAndHot}
                </ul>
            </div>
        )
    }
}

export default Browse;