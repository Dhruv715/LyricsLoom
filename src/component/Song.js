import { Link } from "react-router-dom";
import "./Song.css";
import Header from "./Header";
import { useEffect } from "react";
function Song() {
    useEffect(()=>{

        document.title = "LyricsLoom | Trending Songs";
    },[]);
    return (
        <>
            <div className="mainboxs">
                <div className="boxypart">
                    <div className="headerpart">
                        <Header/>
                    </div>

                    <div className="songlist">
                        <div className="rowflexy">
                            <h1>Trending Now India</h1>
                        </div>
                        <div className="cartboxflexyss">
                            <div className="flexrows">
                                <h1>Popular Indian Playlists</h1>
                                <p>Show All</p>
                            </div>
                            
                            <div id="table_data">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="no">#</th>
                                            <th className="name">Title</th>
                                            <th className="album">Album</th>
                                            <th className="dates">Date Added</th>
                                            <th className="time">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="no">1</td>
                                            <td className="name">
                                                <img
                                                    src="https://www.bollywoodkibaten.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-27-at-14.43.52.jpeg"
                                                    alt=""
                                                />
                                                <Link to="/PlayMusic"><h1>Satranga </h1></Link>
                                            </td>
                                            <td className="album">
                                                <p>Satranga (From "ANIMAL")</p>
                                            </td>
                                            <td className="dates">
                                                <p>4 Days ago</p>
                                            </td>
                                            <td className="time">4:31</td>
                                        </tr>
                                     
                                       
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

export default Song;
