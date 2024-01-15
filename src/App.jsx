import earth2 from './images/earth2.png'
import SearchForm from './Components/SearchBar';
import Music from './Components/Music';
import Button from './Components/Button';
import Quote from './Components/Quote';

function App() {
  return (
    <>
      <div className='backgroundImageContainer'>
        <img src={earth2} alt="" className='img'/>
      </div>
      
      <div className="contentCont">
        <div className='container'>
          <SearchForm></SearchForm>
          <Button type='home'></Button>
          <Quote></Quote>
        </div>

        <div className="content">
          <Button type='content'></Button>
        </div>
      </div>
      <Music className='musicPlayer'></Music>

    </>
  );
}

export default App;
