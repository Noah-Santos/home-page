import $ from 'jquery';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const Button = ({type}) => {
    console.log(type)

    // adds the class that slides the screen over to the home section
    function content(){
        console.log('switch')
        $('.contentCont').addClass('home');
    }

    // removes the class which causes the screen to slide to the links section
    function home(){
        $('.contentCont').removeClass('home');
    }

    // renders the home section
    if(type === 'home'){
        return (
            <div className='contentBtnCont' onClick={content}>
                <button className='transitions switchButton'>Content <BsArrowRightCircle className='contentButton'/></button>
            </div>
        )
    }

    // renders the links section
    return (
        <div className='homeBtnCont' onClick={home}>
            <button className='transitions switchButton'><BsArrowLeftCircle className='homeButton'/> Home</button>
        </div>
    )
}

export default Button;