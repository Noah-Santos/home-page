import galaxy from './images/galaxy-transformed.png';
import earth from './images/earth.JPG'
import space from './images/space.png';
import galaxy2 from './images/DALL·E 2024-01-10 16.41.48 - space with stars and galaxies as a good background.png';
import SearchForm from './Components/SearchBar';

function App() {
  return (
    <>
      <div className='backgroundImageContainer'>
        <img src={earth} alt="" className='img'/>
        <img src={galaxy} alt="" className='img'/>
        <img src={space} alt="" className='img'/>
        <img src={galaxy2} alt="" className='img'/>
      </div>
      <SearchForm></SearchForm>
    </>
  );
}

export default App;
