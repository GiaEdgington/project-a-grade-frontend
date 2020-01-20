import React from 'react';

class Browse extends React.Component {

    state = {
        newRestaurants: []
    }

    componentDidMount = () => {
        console.log('test');
        fetch('http://localhost:3000/new')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            this.setState({ newRestaurants: data })
        })
    }

    render(){
        const newAndHot = this.state.newRestaurants.forEach(restaurant => {
            return <li>{restaurant.image_url}</li>
        })
        return(
            <div className="topRated">
                <h2>Top Rated in your Area</h2>
                <ul>
                    {newAndHot}
                    {/* <li>Hot and New</li>
                    <li>Hot and New</li>
                    <li>Hot and New</li>
                    <li>Hot and New</li> */}
                </ul>
            </div>
        )
    }
}

export default Browse;