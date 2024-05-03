import { Link } from "react-router-dom";
import "./Home.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMAGE_URL, MAIN_URL, URL } from "../Axios/axios";
import NewPlaylist from "./NewPlaylist";
function Home(props) {
  const [category, setccategory] = useState([]);

  useEffect(() => {
    document.title = "LyricsLoom | Home";
  }, []);
  useEffect(() => {
    axios.get(URL + "albums").then((res) => {
      console.log(res);
      setccategory(res.data.data);
    });
  }, []);
  return (
    <>
      {props.isNewPlayList && (
        <div className="new-playlist">
          <NewPlaylist setIsNewPlayList={props.setIsNewPlayList} isNewPlayList={props.isNewPlayList} ></NewPlaylist>{" "}
        </div>
      )}

      <div className="mainboxs">
        <div className="boxypart">
          <div className="headerpart1">
            <Header />
          </div>

          <div className="songlist">
            <div className="rowflexy">
              <h1>LyricsLoom Playlists</h1>
              <p>Show All</p>
            </div>
            <div className="cartboxflexy">
              {category &&
                category.map((item, index) => {
                  return (
                    <Link to={`/AlbumWise/${item._id}`}>
                      <div className="boxs">
                        <img src={`${IMAGE_URL}${item.image}`} alt="" />
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
