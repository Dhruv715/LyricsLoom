import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMAGE_URL, URL } from "../Axios/axios";

const NewPlaylist = (props) => {
  const uid = localStorage.getItem("auth");
  console.log("uid=",uid);
  const [body, setbody] = useState({
    name: "",
    songs: [],
    uid: "",
  });

  const [showSongs, setShowSongs] = useState(false);
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    axios.get(URL + "songs").then((res) => {
      console.log(res.data.songs[0]);
      setsongs(res.data.songs);
    });
  }, []);

  const handleSong = (id) =>
    !body.songs.includes(id)
      ? body.songs.push(id)
      : body.songs.filter((song) => song !== id);

  const handleSubmit = () => {
    uid &&
      axios
        .post(URL + "/createplaylist", {
          body,
          headers: {
            auth: uid,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === "playlist is added")
            props.setIsNewPlayList(false);
            window.location.reload()
        });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow:"hidden"
      }}
    >
      <div
        className="container text-dark"
        style={{
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
        }}
      >
        <h1>Add New Playlist</h1>
        <header className="text-end mt-5 mb-3 bg-dark" > 
          <button style={{backgroundColor:'none',color:'none'}} onClick={() => props.setIsNewPlayList(false)}><i class="ri-close-circle-line" style={{backgroundColor:'gray',color:'white',fontSize:'2rem',borderRadius:'50%'}}></i></button>
        </header>
        <div>
          <div className="row mb-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Playlist name"
                onChange={(e) => setbody({ ...body, name: e.target.value })}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div style={{ position: "relative" }}>
                <div
                  className="bg-dark  text-light p-2 mb-2 cursor-pointer"
                  
                  onClick={() => setShowSongs(!showSongs)}
                  style={{cursor:'pointer'}}
                >
                  Show Songs
                </div> 
                <section
                  className={!showSongs ? "d-none" : ""}
                  style={{height:'200px',overflowX:'hidden'}}
                >
                  {songs?.map((item, index) => {
                    return (
                      <div key={index} className="row p-2">
                        <div className="col-10 d-flex align-items-center">
                          <img
                            src={IMAGE_URL + item.image}
                            alt={item.name}
                            style={{
                              width: "50px",
                              height: "50px",
                              marginRight: "10px",
                            }}
                          />
                          <span>{item.name}</span>
                        </div>

                        <div className="col-2">
                          <input
                            type="checkbox"
                            onClick={() => handleSong(item._id)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </section>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="btn btn-dark" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlaylist;
