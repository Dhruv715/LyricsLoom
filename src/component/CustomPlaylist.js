// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Category.css';
import Header from './Header';
import { useEffect } from 'react';
function CustomPlaylist(){
    // document.title="LyricsLoom | Category";
    useEffect(()=>{

        document.title = "LyricsLoom | Category";
    },[]);
    return(
        <>
            <div className="mainboxs">
                <div className="boxypart">
                <div className="headerpart1">
                   <Header/>
                </div>

                <div className="songlist">
                    <div className="rowflexy">
                        <h1>My Playlist#1</h1>
                        <p>Show All</p>
                    </div>
                    <div className="cartboxflexys">
                         
                           <Link to="/CustomPlay">
                           <div className="boxs1">
                                <img src="https://static.vecteezy.com/system/resources/previews/002/249/673/non_2x/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Hindi Playlist</h1>
                            </div>
                           </Link>
                          
                            
                            
                           <Link to="/CustomPlay">
                           <div className="boxs1">
                                <img src="https://static.vecteezy.com/system/resources/previews/002/249/673/non_2x/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Panjabi Playlist</h1>
                            </div>  
                           </Link>
                          
                           <Link to="/CustomPlay">
                           <div className="boxs1">
                                <img src="https://static.vecteezy.com/system/resources/previews/002/249/673/non_2x/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Mix Playlist</h1>
                            </div>
                           </Link>

                          <Link to="/CustomPlay">
                          <div className="boxs1">
                                <img src="https://static.vecteezy.com/system/resources/previews/002/249/673/non_2x/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Fav Song</h1>
                            </div>
                          </Link>
                          
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default CustomPlaylist;