// import logo from './logo.svg';
import './App.css';
import Category from './component/Category';
import Home from './component/Home';
// import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Song from './component/Song';
import PlayMusic from './component/PlayMusic';
import Login from './component/Login';
import Signup from './component/Signup';
import AlbumWise from './component/AlbumWise';
import CategoryWise from './component/CategoryWise';
import Popup from './component/Popup';
import CustomPlaylist from './component/CustomPlaylist';
import PlaylistCust from './component/PlaylistCust';
function App() {
 
  return (
    <div className='flexy'>
        <Sidebar/>
        <Routes>
        <Route path="/" element={ <Home/> } />
        
        <Route path="/Category" element={ <Category/> } />
        <Route path="/Song" element={ <Song/> } />
        <Route path="/PlayMusic" element={ <PlayMusic/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Signup" element={ <Signup/> } />
        <Route path="/AlbumWise" element={ <AlbumWise/> } />
        <Route path="/CategoryWise" element={ <CategoryWise/> } />
        <Route path="/Popup" element={ <Popup/> } />
        <Route path="/CustomPlaylist" element={ <CustomPlaylist/> } />
        <Route path="/CustomPlay" element={ <PlaylistCust/> } />
          
        </Routes>
        
    </div>
  );
}

export default App;
