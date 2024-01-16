import earth2 from './images/earth2.png'
import SearchForm from './Components/SearchBar';
import Music from './Components/Music';
import Button from './Components/Button';
import Quote from './Components/Quote';
import Accordion from './Components/Accordion';
import Links from './data';

function App() {
  return (
    <>
      {/* background image */}
      <div className='backgroundImageContainer'>
        <img src={earth2} alt="" className='img'/>
      </div>
      
      {/* desktop variation */}
      <div className="desktop">
        <div className="contentCont">
          <div className='container'>
            <SearchForm></SearchForm>
            <Button type='home'></Button>
            <Quote></Quote>
          </div>

          <div className="content">
            <Button type='content'></Button>
            <div className="linkCont">
              <section className="info">
                <h2 className='linkTitle'>Links</h2>
                {Links.map((link, index)=>{
                  return <Accordion key={index} {...link}/>
                })}
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* mobile sections */}
      <div className="mobile">
        <SearchForm></SearchForm>

        <div className="linkCont">
          <section className="info">
            <h2 className='linkTitle'>Links</h2>
            {Links.map((link, index)=>{
              return <Accordion key={index} {...link}/>
            })}
          </section>
        </div>
      </div>

      <Music className='musicPlayer'></Music>

    </>
  );
}

export default App;
