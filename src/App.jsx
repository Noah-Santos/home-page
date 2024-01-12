import galaxy from './images/galaxy-transformed.png';
import earth from './images/earth.JPG'
import earth2 from './images/earth2.png'
import space from './images/space.png';
import galaxy2 from './images/DALL·E 2024-01-10 16.41.48 - space with stars and galaxies as a good background.png';
import SearchForm from './Components/SearchBar';
import Music from './Components/Music';

function App() {
  return (
    <div className='container'>
      <div className='backgroundImageContainer'>
        <img src={earth2} alt="" className='img'/>
        {/* <img src={earth} alt="" className='img'/> */}
        {/* <img src={galaxy} alt="" className='img'/>
        <img src={space} alt="" className='img'/>
        <img src={galaxy2} alt="" className='img'/> */}
      </div>
      
      <Music className='musicPlayer'></Music>
      <SearchForm></SearchForm>
    </div>
  );
}

export default App;
