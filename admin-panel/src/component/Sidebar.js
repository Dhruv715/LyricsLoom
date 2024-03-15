import {Link} from 'react-router-dom';
import './Sidebar.css';
function Sidebar(){
    return(
       <>

<div className="boxy">
        <div className="box1">
          <h1>
            <i class="ri-netease-cloud-music-line"></i>LyricsLoom
          </h1>

          <ul>
            <li>
              <i class="ri-home-fill"></i>
              <Link to="/">Home</Link>
            </li>
            <li>
            <i class="ri-tent-fill"></i>
              <Link to="/Albums">Add Albums</Link>
            </li>
            <li>
            <i class="ri-archive-drawer-line"></i>
              <Link to="/Category">Add Category</Link>
            </li>
            <li>
            <i class="ri-music-2-line"></i>
              <Link to="/Songs">Add Songs</Link>
            </li>
            <li>
            <i class="ri-customer-service-fill"></i>
              <Link to="/Artist">Add Artist</Link>
            </li>
            <hr />
            <li>
            <i class="ri-customer-service-fill"></i>
              <Link to="/ShowAlbum">Show Album</Link>
            </li>
            <li>
            <i class="ri-customer-service-fill"></i>
              <Link to="/ShowCategory">Show Category</Link>
            </li>
            <li>
            <i class="ri-customer-service-fill"></i>
              <Link to="/ShowSongs">Show Songs</Link>
            </li>
            <li>
            <i class="ri-customer-service-fill"></i>
              <Link to="/ShowArtist">Show Artist</Link>
            </li>
          </ul>
        
          </div>
          </div>
    
       </>
    )
}
export default Sidebar;