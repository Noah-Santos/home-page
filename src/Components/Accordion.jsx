import {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({name, link}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="accordionSection">
            <header>
                <h4>{name}</h4>
                <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
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