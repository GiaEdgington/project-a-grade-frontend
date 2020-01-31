import React from 'react';

const Popular = (props) => {

    //console.log(props);

    return(
        <div className='list'>
            <li><img src={props.image} alt=""></img></li>
            <p className="hover">{props.name}</p>
        </div>
    )
}

export default Popular;