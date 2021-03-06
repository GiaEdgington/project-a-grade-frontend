import React from 'react';
import Restaurant from '../../components/Restaurant';


class DisplayRestaurants extends React.Component {
    
    
    render() {
  //console.log(this.props.restaurants);
        const restaurants = this.props.restaurants.map((restaurant, index) => {
            return <Restaurant key={index} name={restaurant.name} image={restaurant.image_url} category={restaurant.categories[0].title} rating={restaurant.rating} price={restaurant.price} reviews={restaurant.review_count} phone={restaurant.display_phone} location={restaurant.location.address1 + " " + restaurant.location.city + ", " + restaurant.location.zip_code} />
        })
        return(
            <div className="restaurantList">
                {restaurants}
            </div>
        )
    }
}

export default DisplayRestaurants;