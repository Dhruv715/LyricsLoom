import "./PlayMusic.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMAGE_URL, URL } from "../Axios/axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function PlayMusic(props) {
  const Navigate = useNavigate();
  const [data, setdata] = useState({});
  const [recommanded, setrecommanded] = useState([]);
  const { id } = useParams();
  const [songid, setsongid] = useState(id);

  useEffect(() => {
    document.title = "LyricsLoom | Trending Songs";
  }, []);

  useEffect(() => {
    axios.get(URL + `/song/${songid}`).then((res) => {
      console.log(res.data.data);
      setdata(res.data.data);
    });
  }, [songid]);

  useEffect(() => {
    axios.get(URL + `/trending`).then((res) => {
      console.log(res.data.data);
      setrecommanded(res.data.data);
    });
  }, []);

  const handleRecommendedSongClick = (songId) => {
    setsongid(songId);
    Navigate(`/PlayMusic/${songId}`);
  };

  return (
    <>
      <div className="mainboxs">
        <div className="boxypart">
          <div className="headerpart">
            <Header />
          </div>

          <div className="songlist">
            <div id="rowflexys">
              <img src={IMAGE_URL + data?.image} alt="" />
              <h1>{data?.name}</h1>
            </div>
            <div
              className="songsControls"
              onClick={() =>
                props.handleSongStatistics({
                  Status: true,
                  Name: data?.name,
                  File: data?.file,
                  Image: data?.image,
                })
              }
            >
              <i class="ri-play-fill"></i>
              <i class="ri-heart-line"></i>
            </div>
            <pre className="Lyricstext">{data?.lyrics}</pre>

            <div className="cartboxflexyss">
              <div className="flexrowss">
                <h1>Recommended</h1>
                <p>Based On This Song</p>
              </div>
              <div id="table_data">
                <table>
                  <thead>
                    <tr>
                      <th className="no">#</th>
                      <th className="name">Title</th>
                      <th className="dates">Date Added</th>
                      <th className="time">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recommanded &&
                      recommanded.map((song, index) => (
                        <tr key={index}>
                          <td className="no">{index + 1}</td>
                          <td className="name">
                            <img src={IMAGE_URL + song.image} alt="" />
                            <Link
                              to={`/PlayMusic/${song._id}`}
                              onClick={() =>
                                handleRecommendedSongClick(song._id)
                              }
                            >
                              <h1
                                onClick={() =>
                                  props.handleSongStatistics({
                                    Status: true,
                                    Name: data?.name,
                                    File: data?.file,
                                    Image: data?.image,
                                  })
                                }
                              >
                                {song?.name}
                              </h1>
                            </Link>
                          </td>
                          <td className="dates">
                            <p>
                              {new Date(song.date).getDate() +
                                "/" +
                                new Date(song.date).getMonth() +
                                "/" +
                                new Date(song.date).getFullYear()}
                            </p>
                          </td>
                          <td className="time">{song.duration}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayMusic;
