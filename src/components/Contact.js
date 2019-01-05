import React from 'react';

const Contact = (props) => {
    // console.log('props1', props);
    setTimeout(() => {
        props.history.push('/about')
        // console.log('props2', props);
    }, 2000)
    
    return(
        <div className="container">
            <h3 className="center">Contact Us</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sed fuga provident dicta architecto itaque. Repellat accusantium, cum eaque eos officiis exercitationem velit. Inventore vel non mollitia cupiditate hic quo.</p>
        </div>
    )
}


export default Contact;