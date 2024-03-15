import { Link } from 'react-router-dom';
import './Home.css';
import Header from './Header';
import { useEffect } from 'react';
function Home(){
useEffect(()=>{

    document.title = "LyricsLoom | Home";
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
                        <h1>LyricsLoom Playlists</h1>
                        <p>Show All</p>
                    </div>
                    <div className="cartboxflexy">
                            
                            
                            
                           
                            <Link to="/AlbumWise"><div className="boxs">
                                <img src="https://i.pinimg.com/564x/b5/14/58/b514586a1c0ddffe914e66002207d1b2.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div></Link>
                           <Link to="/AlbumWise">
                           <div className="boxs">
                                <img src="https://i.pinimg.com/564x/6a/f2/0f/6af20ff1e30c0c9c504787adece410c2.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                           </Link>
                           <Link  to="/AlbumWise">
                           <div className="boxs">
                                <img src="https://i.pinimg.com/564x/4c/91/a3/4c91a39cf8b6bdc8096b7348e8d066b8.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                           </Link>
                           <Link  to="/AlbumWise">
                           <div className="boxs">
                                <img src="https://i.pinimg.com/564x/56/2b/cc/562bccb79d566292f84d52e38482f2b9.jpg" alt="" />
                                <h1>Lofi Beats</h1>
                                <p>Lorem ipsum dolor sit amet.it amet.</p>
                            </div>
                           </Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home;