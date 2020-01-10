import React from 'react';

class Restaurant extends React.Component {

    render(){
        return(
                <div className="restaurantCard">
                    <div className="restaurantImg">
                        <span className="helper"></span><img src={this.props.image} alt=""></img>
                    </div>
                    <div className="info">
                        <h3>{this.props.name}</h3>
                        <p>Rating: {this.props.rating} - {this.props.reviews} reviews</p>
                        <p>Price: {this.props.price}</p>
                        <p>Cuisine: {this.props.category}</p>
                        <p>Address: {this.props.location}</p>
                        <p>Phone Number: {this.props.phone}</p>
                    </div>
                </div> 
        )
    }
}

export default Restaurant;