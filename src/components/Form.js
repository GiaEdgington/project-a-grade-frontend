import React from 'react';


class Form extends React.Component {

    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Find Restaurants"></input>
                    <input type="text" placeholder="Location"></input>
                    <button></button>
                </form>
            </div>
        )
    }
}

export default Form;