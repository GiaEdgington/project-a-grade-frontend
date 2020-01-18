import React from 'react';

class Browse extends React.Component {

    state = {
        newRestaurants: []
    }

    handleNew = () => {
        var location = this.props.location;

        fetch(`http://localhost:3000/restaurants?location=${location}&limit=4`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            this.setState({ newRestaurants: data })
        })
    }

    render(){
        return(
            <div className="topRated">
                <h2>Top Rated in your Area</h2>
                <ul>
                    <li>Hot and New</li>
                    <li>Hot and New</li>
                    <li>Hot and New</li>
                    <li>Hot and New</li>
                </ul>
            </div>
        )
    }
}

export default Browse;