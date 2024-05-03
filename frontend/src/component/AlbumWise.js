import './PlayMusic.css';
//  import { Link } from 'react-router-dom';
import Header from './Header';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IMAGE_URL, URL } from '../Axios/axios';
function AlbumWise() {
    const [data, setdata] = useState({})
    var { id } = useParams()
    useEffect(() => {
        document.title = "LyricsLoom | Album Song";
    }, []);
    useEffect(() => {
        axios.get(URL + `/albumsongs/${id}`).then(res => {
            console.log(res);
            setdata(res.data.data)
        })
    }, [])
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


                        <div className="cartboxflexyss">
                            <div className="flexrowss">
                                <h1>Album Wise Songs</h1>
                                <p>Based On This Album</p>
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

                                        {
                                            data?.songs?.map((song, index) => {
                                                return (
                                                    <tr>
                                                        <td className="no">{index+1}</td>
                                                        <td className="name">
                                                            <img
                                                                src={IMAGE_URL+song.image}
                                                                alt=""
                                                            />
                                                            <Link to={`/PlayMusic/${song._id}`}><h1>{song.name}</h1></Link>
                                                        </td>
                                                        <td className="album">
                                                            <p>{data.name}</p>
                                                        </td>
                                                        <td className="dates">
                                                            <p>2 Days ago</p>
                                                        </td>
                                                        <td className="time">4:56</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                       


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AlbumWise;