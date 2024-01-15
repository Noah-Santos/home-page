// window.open(`http://www.google.com/search?q=${search}`, '_blank')

import {useRef} from 'react';
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    let input = useRef('');
    
    const search = (e)=>{
        // prevents the page from reloading when the form is submitted
        e.preventDefault();
        // opens the search request in a new google tab
        window.open(`http://www.google.com/search?q=${input.current.value}`, '_blank')
    }
    return (
        <>
            <form onSubmit={search} className='searchForm'>
                <div className="searchContainer">
                    <input type="text" ref={input} placeholder='Search Google Minus' className='searchLarge' autoComplete="off"/>
                    <input type="text" ref={input} placeholder='Search' className='searchSmall' autoComplete="off"/>
                    <IoMdSearch className='searchIcon'></IoMdSearch>
                    {/* <CgSearch className="searchIcon"></CgSearch> */}
                </div>
            </form>
        </>
    )
}

export default SearchBar;