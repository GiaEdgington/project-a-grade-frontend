import React from 'react';
import { render } from '@testing-library/react';

const Popular = (props) => {

    console.log(props);

    return(
        <div>
            <li>{this.props.restaurant.name}</li>
        </div>
        
    )
}

export default Popular;