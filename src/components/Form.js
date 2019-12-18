import React from 'react';


class Form extends React.Component {

    state = {
        term: "",
        location: "",
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

    render(){
        console.log(this.state.location);
        return(
            <div>
                <form>
                    <input type="text" placeholder="Find Restaurants" onChange={this.handleTerm}></input>
                    <input type="text" placeholder="Location" onChange={this.handleLocation}></input>
                    <button></button>
                </form>
            </div>
        )
    }
}

export default Form;