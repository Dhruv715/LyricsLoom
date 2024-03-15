
import './App.css';
import Album from './component/Album';
import Category from './component/Category';
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import {Route,Routes} from 'react-router-dom';
import Song from './component/Song';
import Artist from './component/Artist';
import ShowArtist from './component/ShowArtist';
import ShowCategory from './component/ShowCategory';
import ShowSongs from './component/ShowSongs';
import ShowAlbum from './component/ShowAlbum';
function App() {
  return (
    <>
    <div className='flexy'>

     <Sidebar/>
     <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="/Albums" element={ <Album/> } />
        <Route path="/Category" element={ <Category/> } />
        <Route path="/Songs" element={ <Song/> } />
        <Route path="/Artist" element={ <Artist/> } />
        <Route path="/ShowAlbum" element={<ShowAlbum/> } />
        <Route path="/ShowCategory" element={ <ShowCategory/> } />
        <Route path="/ShowSongs" element={ <ShowSongs/> } />
        <Route path="/ShowArtist" element={<ShowArtist/>} />
        
    </Routes>
    </div>
    </>
  );
}

export default App;
