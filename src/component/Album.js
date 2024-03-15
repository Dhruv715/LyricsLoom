import './PlayMusic.css';

function Album(){
    return(
        <>

<div className="mainboxs">
                <div className="boxypart">
                    <div className="headerpart">
                        <div className="icons">
                            <div>
                                {" "}
                                <i class="ri-arrow-left-s-line"></i>
                            </div>
                            <div>
                                <i class="ri-arrow-right-s-line"></i>
                            </div>
                        </div>
                        <div className="buttons">
                            <a href="#" className="sign">
                                Sign up
                            </a>
                            <button className="loginbtn">Log in</button>
                        </div>
                    </div>

                    <div className="songlist">
                        <div id="rowflexys">
                            <img src="https://www.bollywoodkibaten.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-27-at-14.43.52.jpeg" alt="" />
                            <h1>Satranga</h1>
                        </div>
                        <div className='songsControls'>
                            {/* play pause icon */}
                            <i class="ri-play-fill"></i>
                            {/* <i class="ri-pause-mini-line"></i> */}
                            {/* like icons */}
                            <i class="ri-heart-line"></i>

                        </div>
                       
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
                                                <h1>O Maahi </h1>
                                            </td>
                                            <td className="album">
                                                <p>O Maahi (From "Dunki")</p>
                                            </td>
                                            <td className="dates">
                                                <p>2 Days ago</p>
                                            </td>
                                            <td className="time">4:56</td>
                                        </tr>
                                        <tr>
                                            <td className="no">2</td>
                                            <td className="name">
                                                <img
                                                    src="https://static.theprint.in/wp-content/uploads/2023/07/ANI-20230722071958.jpg"
                                                    alt=""
                                                />
                                                <h1>Heeriye </h1>
                                            </td>
                                            <td className="album">
                                                <p>Heeriye (feat.Arjit Singh)</p>
                                            </td>
                                            <td className="dates">
                                                <p>1 Days ago</p>
                                            </td>
                                            <td className="time">3:31</td>
                                        </tr>
                                        <tr>
                                            <td className="no">3</td>
                                            <td className="name">
                                                <img
                                                    src="https://c.saavncdn.com/388/Dil-Jhoom-Vishal-Mishra-From-Gadar-2-Hindi-2023-20230918133729-500x500.jpg"
                                                    alt=""
                                                />
                                                <h1>Dil Jhoom</h1>
                                            </td>
                                            <td className="album">
                                                <p>Gadar 2</p>
                                            </td>
                                            <td className="dates">
                                                <p>4 Days ago</p>
                                            </td>
                                            <td className="time">5:04</td>
                                        </tr>
                                       <tr>
                                            <td className="no">4</td>
                                            <td className="name">
                                                <img
                                                    src="https://c.saavncdn.com/862/Arjan-Vailly-From-ANIMAL-Hindi-2023-20231118001003-500x500.jpg"
                                                    alt=""
                                                />
                                                <h1>Arjan Vailly </h1>
                                            </td>
                                            <td className="album">
                                                <p>ANIMAL</p>
                                            </td>
                                            <td className="dates">
                                                <p>4 Days ago</p>
                                            </td>
                                            <td className="time">3:25</td>
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
export default Album;