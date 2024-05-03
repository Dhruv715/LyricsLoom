import { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IMAGE_URL, MAIN_URL, URL } from "../Axios/axios";

function Sidebar(props) {
  const uid = localStorage.getItem("auth");
  const Navigate = useNavigate();
  // var sound,
  var audio = false;
  const [song, setsong] = useState(props.song);
  const [playlists, setplaylists] = useState(false);

  var sound = props.song.File && IMAGE_URL + props.song.File;

  useEffect(() => setsong(props.song), [props]);

  useEffect(() => {
    console.log("song on sidebar", song);
    sound = props.song.File && IMAGE_URL + props.song.File;
    audio = setAudio();
    handleSong(audio);
  }, [song]);

  function setAudio() {
    if (props.song.File && !audio) {
      return document.getElementById("musicPlayer");
    } else {
      return audio;
    }
  }

  useEffect(() => {
    // getting playlists
    const uid = localStorage.getItem("auth");
    if (uid) {
      axios
        .post(URL + "getAllPlayLists", {
          headers: {
            auth: uid,
          },
        })
        .then((res) => {
          if (res.data.data.length > 0) setplaylists(res.data.data);
        });
    } else {
      console.error("please log in first");
    }
  }, []);

  const handleSong = (latestAudio) => {
    if (props.song.File && props.song.Status) {
      console.log("if", latestAudio.src);
      // latestAudio.currentTime = 0;
      latestAudio.play();
    } else if (props.song.File && !props.song.Status) {
      console.log("else", latestAudio.src);
      latestAudio.pause();
    }
  };

  const deletePlaylist = (playlistid) => {
    axios.delete(URL + `/deletePlaylist/${playlistid}`).then((res) => {
      console.log(res);
      Navigate("/");
      window.location.reload();
    });
  };

  return (
    <>
      <div className="boxy">
        <div className="box1">
          <h1 style={{ cursor: "pointer" }}>
            <a href="">
              <i class="ri-netease-cloud-music-line"></i>LyricsLoom
            </a>
          </h1>
          <ul>
            <li>
              <i class="ri-home-fill"></i>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i class="ri-search-line"></i>
              <Link to="/Category">Category</Link>
            </li>
          </ul>
        </div>
        <div className="box2" style={{height:'400px'}}>
          <div className="rowsflex">
            <div>
              <h1>
                <i class="ri-slideshow-view"></i>Your Library
              </h1>
            </div>
            <div onClick={() => props.setIsNewPlayList(true)}>
              <i
                className="ri-add-line"
                style={{
                  backgroundColor: "gray",
                  borderRadius: "50%",
                  padding: "10px 10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
          <div className="semibox" style={{height:'330px',overflowX:'hidden',overflowY:'scroll'}}>
            {uid && playlists ? (
              <>
                {playlists?.map((playlist, index) => {
                  return (
                  
                      <div className="row hoveryparent d-flex justify-content-between align-items-center">
                        <div
                          className="col-8"
                          onClick={() => Navigate(`/Playlist/${playlist._id}`)}
                          style={{paddingTop:'10px'}}
                        >
                          <p className="hovery" style={{cursor:'pointer'}}>{playlist.name}</p>
                        </div>
                        <div className="col-4 d-flex justify-content-between align-items-center">
                          <div className="d-flex " >
                            <button
                              onClick={() =>
                                Navigate(`/Editplaylist/${playlist._id}`)
                              }
                              style={{padding:'0px',backgroundColor:'transparent'}}
                              
                            >
                              <i class="ri-pencil-line" style={{color:'white',padding:'10px',border:'1px solid white',backgroundColor:'black',borderRadius:'50%'}}></i>
                            </button>
                            <button
                              onClick={() => deletePlaylist(playlist._id)}
                              style={{padding:'0px',backgroundColor:'transparent'}}
                            >
                              <i class="ri-delete-bin-6-line" style={{color:'white',padding:'10px',backgroundColor:'black',border:'1px solid white',borderRadius:'50%'}}></i>
                            </button>
                          </div>
                        </div>
                      </div>
                  
                  );
                })}
              </>
            ) : (
              <div>
                <h2>Create Your First Playlist</h2>
                <p>it's easy,we'll help you</p>
                <button
                  onClick={() => props.setIsNewPlayList(!props.isNewPlayList)}
                >
                  {!uid && "Sign-In to"} Create Playlist
                </button>
              </div>
            )}
          </div>
          {/* <div className="cardssong">
            <Link to="Song" className="demo">
              <div id="row">
                <div>
                  <img
                    src="https://i.pinimg.com/564x/23/f1/e2/23f1e2f224f12a62ea63708a7995b808.jpg"
                    alt=""
                  />
                </div>
                <div className="textarea">
                  <h3>Trending Now India</h3>
                  <p>Playlist Spotify</p>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
        <div
          className="box3"
          style={{
            borderRadius: "50px",
            padding: "10px",
            position: "absolute",
            bottom: 0,
            paddingTop: "0px",
            marginBottom: "30px",
            marginTop: "30px",
            width: "350px",
            paddingBottom: "0px",
            backgroundColor: "gray",
            display: !song.Name && "none",
          }}
        >
          <div style={{display:'flex',alignItems:'center'}}>
          <button
            style={{
              padding: "0px",
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={() =>
              props.handleSongStatistics({ ...song, Status: !song.Status })
            }
          >
            {/* {song.Status ? "Pause" : "Play"}
            {song.Status ? "Pause" : "Play"} */}
            <i
              style={{
                padding: "0px",
                backgroundColor: "lightgray",
                fontSize: "2.4rem",
                borderRadius: "50%",
              }}
              class={
                song.Status ? "ri-play-circle-fill" : "ri-pause-circle-fill"
              }
            ></i>
          </button>
          <span className="song-name" style={{ marginLeft: "10px" }}>
            {song.Name}
          </span>
          </div>
          <audio src={sound} id="musicPlayer"></audio>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
