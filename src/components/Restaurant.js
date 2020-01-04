import React from 'react';

class Restaurant extends React.Component {

    render(){
        return(
                <div className="restaurantCard">
                    <div className="restaurantImg">
                        <span className="helper"></span><img src={this.props.image} alt=""></img>
                    </div>
                    <div className="info">
                        <h2>{this.props.name}</h2>
                        <p>{this.props.rating}</p>
                        <p>{this.props.category}</p>
                        <p>{this.props.location}</p>
                        <p>{this.props.phone}</p>
                    </div>
                </div> 
        )
    }
}

export default Restaurant;