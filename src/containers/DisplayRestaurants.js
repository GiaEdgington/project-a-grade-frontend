import React from 'react';
import Restaurant from '../components/Restaurant';


class DisplayRestaurants extends React.Component {
    
    
    render() {
        const restaurants = this.props.restaurants.map((restaurant, index) => {
            return <Restaurant key={index} name={restaurant.name} image={restaurant.image_url} rating={restaurant.rating} phone={restaurant.display_phone} location={restaurant.location.address1 + " " + restaurant.location.city + ", " + restaurant.location.zip_code}  />
        })
        return(
            <div>
                {restaurants};
            </div>
        )
    }
}

export default DisplayRestaurants;