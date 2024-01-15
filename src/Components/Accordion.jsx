import {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CiYoutube, CiInstagram  } from "react-icons/ci";
import { PiTiktokLogoLight, PiRedditLogo  } from "react-icons/pi";
import { ImPinterest2 } from "react-icons/im";
import { FaSpotify } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";

const Accordion = ({name, link}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="accordionSection">
            <header>
                <h3>{name}</h3>
                <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus className='accordionBtn'/> : <AiOutlinePlus className='accordionBtn'/>}
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