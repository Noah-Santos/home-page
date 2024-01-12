import React from 'react'
import $ from 'jquery';

const Button = () => {
    function translate(){
        $('.container').addClass('hide')
    }
    return (
        <button className='transitions' onClick={translate}>Transition</button>
    )
}

export default Button;