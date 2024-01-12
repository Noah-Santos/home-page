import $ from 'jquery';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const Button = ({type}) => {
    console.log(type)

    function content(){
        console.log('switch')
        $('.contentCont').addClass('home');
    }

    function home(){
        $('.contentCont').removeClass('home');
    }

    if(type === 'home'){
        return (
            <div className='contentBtnCont' onClick={content}>
                <button className='transitions switchButton'>Content <BsArrowRightCircle className='contentButton'/></button>
            </div>
        )
    }

    return (
        <div className='homeBtnCont' onClick={home}>
            <button className='transitions switchButton'><BsArrowLeftCircle className='homeButton'/> Home</button>
        </div>
    )
}

export default Button;