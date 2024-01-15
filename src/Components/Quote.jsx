import {useState, useEffect, useRef} from 'react'

const Quote = () => {
    const [Quote, setQuote] = useState('second');
    const num = useRef(0);
    const auth = useRef('')

    // gets the quote list every re-render
    useEffect(() =>{
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // gets a random number to pull from the quote list
                num.current = Math.floor(Math.random() * (15 - 0 + 1));
                // updates the quote variable with the list of quotes
                setQuote(data);
        });
    }, []);

    // gets the authors name and removes the unecessary information at the end
    auth.current = `${Quote[num.current].author}`.split(',');

    return (
        <div className='quoteCont'>
            <h1 className='quoteContent'>"{Quote[num.current].text}"</h1>
            <h2 className='quoteAuthor'>-{auth.current[0]}</h2>
        </div>
    )
}

export default Quote;