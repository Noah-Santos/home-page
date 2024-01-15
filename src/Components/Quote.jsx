import {useState, useEffect, useRef} from 'react'

const Quote = () => {
    const [Quote, setQuote] = useState('second');
    const num = useRef(0)

    useEffect(() =>{
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                num.current = Math.floor(Math.random() * (15 - 0 + 1));
                setQuote(data);
        });
    }, []);



  return (
    <div>"{Quote[num.current].text}" - {Quote[num.current].author}</div>
  )
}

export default Quote;