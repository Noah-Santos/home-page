import earth2 from './images/earth2.png'
import SearchForm from './Components/SearchBar';
import Music from './Components/Music';
import Button from './Components/Button';
import Quote from './Components/Quote';
import Accordion from './Components/Accordion';

function App() {
  const links = [{
    name: 'Media',
    link: [['https://www.youtube.com/', 'Youtube'], ['https://www.instagram.com/', 'Instagram'], ['https://www.tiktok.com/en/', 'TikTok'], ['https://www.pinterest.com/', 'Pinterest'], ['https://www.reddit.com/', 'Reddit']]
  },
  {
    name: 'School',
    link: [['https://west-mec.instructure.com/', 'Canvas West-MEC'], ['https://dvusd.instructure.com/calendar#view_name=month&view_start=2024-01-14', 'Canvas DVUSD'], ['https://focus.west-mec.edu/focus/Modules.php?modname=misc%2FPortal.php', 'Focus'], ['https://ps.dvusd.org/guardian/home.html', 'Powerschools'], ['https://github.com/', 'Github'], ['https://developer.mozilla.org/en-US/', 'MDN'], ['https://stackoverflow.com/', 'Stackoverflow'], ['https://www.w3schools.com/', 'w3schools']]
  },
  {
    name: 'Music',
    link: [['https://open.spotify.com/', 'Spotify'], ['https://music.apple.com/us/browse', 'Apple Music'], ['https://music.youtube.com/', 'Youtube Music'], ['https://music.amazon.com/', 'Amazon Music']]
  }]
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
          <div className="testing">
            <h3>Links</h3>
            <section className="info">
              {links.map((link, index)=>{
                return <Accordion key={index} {...link}/>
              })}
            </section>
          </div>
        </div>
      </div>
      <Music className='musicPlayer'></Music>

    </>
  );
}

export default App;
