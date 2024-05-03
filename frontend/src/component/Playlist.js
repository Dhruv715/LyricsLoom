import React, { useEffect, useState } from "react";
import NewPlaylist from "./NewPlaylist";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { IMAGE_URL, URL } from "../Axios/axios";
import axios from "axios";

const Playlist = (props) => {
  const { id } = useParams();
  const [songs, setsongs] = useState([]);
  const [data, setdata] = useState({});

  useEffect(() => {
    axios.get(URL + `getPlayList/${id}`).then((res) => {
      console.log(res.data.data.songs);
      setdata(res.data.data);
      setsongs(res.data.data.songs);
    });
  }, [id]);

  return (
    <>
      {props.isNewPlayList && (
        <div className="new-playlist">
          <NewPlaylist
            setIsNewPlayList={props.setIsNewPlayList}
            isNewPlayList={props.isNewPlayList}
          ></NewPlaylist>{" "}
        </div>
      )}

      <div className="mainboxs">
        <div className="boxypart">
          <div className="headerpart1">
            <Header />
          </div>

          <div className="songlist">
            <div className="rowflexy">
              <h1> {data?.name} Playlist</h1>
              <p>Show All</p>
            </div>
            <div className="cartboxflexy">
              {songs &&
                songs.map((item, index) => {
                  return (
                    <Link to={`/PlayMusic/${item._id}`}>
                      <div className="boxs">
                        <img src={`${IMAGE_URL}${item.image}`} alt="" />
                        <h1>{item.name}</h1>
                        {/* <p style={{textOverflow:' ellipsis'}}>Lorem ipsum dolor sit amet.it amet.</p> */}
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
};

export default Playlist;
