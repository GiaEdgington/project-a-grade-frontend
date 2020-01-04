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
                        <p>{this.props.location}</p>
                    </div>
                </div> 
        )
    }
}

export default Restaurant;