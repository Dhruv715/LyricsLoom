// import logo from './logo.svg';
import './App.css';
import Category from './component/Category';
import Home from './component/Home';
// import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { Route, Routes } from 'react-router-dom'
import Song from './component/Song';
import PlayMusic from './component/PlayMusic';
import Login from './component/Login';
import Signup from './component/Signup';
import AlbumWise from './component/AlbumWise';
import CategoryWise from './component/CategoryWise';
import { useInsertionEffect, useState } from 'react';
import Playlist from './component/Playlist';
import EditPlaylist from './component/EditPlaylist';
function App() {

  const [song, setSong] = useState(
    {
      Status: '',
      Name: false,
      File: '',
      Image: ''
    }
  )

  const [isNewPlayList, setIsNewPlayList] = useState(false)

  const handleSongStatistics = (data) => {
    console.log({ data })
    setSong(data)
  }

  return (
    <div className='flexy'>
      <Sidebar song={song} handleSongStatistics={handleSongStatistics} setIsNewPlayList={setIsNewPlayList} isNewPlayList={isNewPlayList} />
      <Routes>
        <Route path="/" element={<Home  isNewPlayList={isNewPlayList} setIsNewPlayList={setIsNewPlayList}/>}  />

        <Route path="/Category" element={<Category />} />
        <Route path="/Song" element={<Song />} />
        <Route path="/PlayMusic/:id" element={<PlayMusic handleSongStatistics={handleSongStatistics}  />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AlbumWise/:id" element={<AlbumWise />} />
        <Route path="/CategoryWise/:id" element={<CategoryWise />} />
        <Route path="/Playlist/:id" element={<Playlist setIsNewPlayList={setIsNewPlayList} isNewPlayList={isNewPlayList} />} />
        <Route path="/Editplaylist/:id" element={<EditPlaylist  />} />

      </Routes>

    </div>
  );
}

export default App;
