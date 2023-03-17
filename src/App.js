import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/Rowpost/RowPost';
import {originalUrl,actionUrl, adventureUrl, animationUrl, comedyUrl, crimeUrl,fantasyUrl, dramaUrl} from './Constants/url'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title={"NETFLIX ORIGINALS"} isLarge url={originalUrl}/>
      <RowPost title={'ACTION'} url={actionUrl}/>
      <RowPost title={'CRIME'} url={crimeUrl}/>
      <RowPost title={'DOCUMENTRY'} url={fantasyUrl}/>
      <RowPost title={'ADVENTURE'} url={adventureUrl}/>
      <RowPost title={'DRAMA'} url={dramaUrl}/>
      <RowPost title={'ANIMATION'} url={animationUrl}/>
      <RowPost title={'COMEDY'} url={comedyUrl}/>
    </div>
  );
}

export default App;
