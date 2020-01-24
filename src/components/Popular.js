import React from 'react';

const Popular = (props) => {

    //console.log(props);

    return(
        <div class='list'>
            <li><img src={props.image} alt=""></img></li>
            <p class="hover">{props.name}</p>
        </div>
        
    )
}

export default Popular;