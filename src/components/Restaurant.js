import React from 'react';

class Restaurant extends React.Component {

    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.location}</p>
            </div>
        )
    }
}

export default Restaurant;