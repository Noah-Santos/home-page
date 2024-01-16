import {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useSound from 'use-sound';
import boopSfx from '../sounds/104825__cgeffex__lego_click2.wav';

const Accordion = ({name, link}) => {
    const [showInfo, setShowInfo] = useState(false);

    // code that creates the sound effect and adds it to the onclick of the element
    const BoopButton = () => {
        const [play] = useSound(boopSfx);
        return (
            <button className='btn' onClick={()=>{setShowInfo(!showInfo); play();}}>
                {showInfo ? <AiOutlineMinus className='accordionBtn'/> : <AiOutlinePlus className='accordionBtn'/>}
            </button>
        )
    };

    return (
        <article className="accordionSection">
            <header>
                <h3>{name}</h3>
                <BoopButton></BoopButton>
            </header>
            <div className="linksCont">
                {showInfo && link.map((links, index)=>{
                    return (
                        <a href={links[0]} target="_blank" key={index}>{links[1]}</a>
                    )
                })}
            </div>
        </article>
    )
}

export default Accordion;