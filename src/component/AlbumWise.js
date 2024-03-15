import './PlayMusic.css';
//  import { Link } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function AlbumWise(){
    useEffect(()=>{

        document.title = "LyricsLoom | Album Song";
    },[]);
    return(
        <>

<div className="mainboxs">
                <div className="boxypart">
                    <div className="headerpart">
                        <Header/>
                    </div>

                    <div className="songlist">
                        <div id="rowflexys">
                            <img src="https://i.pinimg.com/564x/b5/14/58/b514586a1c0ddffe914e66002207d1b2.jpg" alt="" />
                            <h1>Lofi Beats</h1>
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
                                       
                                        <tr>
                                            <td className="no">1</td>
                                            <td className="name">
                                                <img
                                                    src="https://c.saavncdn.com/058/O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg"
                                                    alt=""
                                                />
                                                 <Link to="/PlayMusic"><h1>O Maahi </h1></Link>
                                            </td>
                                            <td className="album">
                                                <p>O Maahi (From "Dunki")</p>
                                            </td>
                                            <td className="dates">
                                                <p>2 Days ago</p>
                                            </td>
                                            <td className="time">4:56</td>
                                        </tr>
                                        
                                       
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