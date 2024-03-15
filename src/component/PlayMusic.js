import React, { useEffect, useState } from 'react';
import SatrangaAudio from '../data/Satranga.wav';
import './PlayMusic.css';
import Header from './Header';

function PlayMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio(SatrangaAudio));
    const [playbackPosition, setPlaybackPosition] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const togglePlay = () => {
        if (!isPlaying) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const handleMarkerDragStart = () => {
        setIsDragging(true);
        audio.pause();
    };

  
        const handleMarkerDrag = (e) => {
            if (isDragging) {
                const rect = e.currentTarget.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const progressBarWidth = rect.width;
                const newPosition = (offsetX / progressBarWidth) * duration;
                if (newPosition >= 0 && newPosition <= duration) {
                    setPlaybackPosition(newPosition);
                }
            }
        };
        

    const handleMarkerDragEnd = () => {
        audio.currentTime = playbackPosition;
        audio.play();
        setIsDragging(false);
    };

    useEffect(() => {
        const updatePlayback = () => {
            if (!isDragging) {
                setPlaybackPosition(audio.currentTime);
            }
            setDuration(audio.duration);
        };

        audio.addEventListener('timeupdate', updatePlayback);

        return () => {
            audio.removeEventListener('timeupdate', updatePlayback);
        };
    }, [audio, isDragging]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
                            <img id='semiimage' src="https://www.bollywoodkibaten.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-10-27-at-14.43.52.jpeg" alt="" />
                            <div id="textcontent">
                                <h6>Song</h6>
                                <h1>Satranga</h1>
                                <div className="singer">
                                    <img src="https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg" alt="" />
                                    <p>Arijit Singh</p>
                                </div>
                            </div>
                        </div>
                        <div className='songsControls'>
                            {/* play pause icon */}
                            <i className={isPlaying ? "ri-pause-mini-line" : "ri-play-fill"} id="masterPlay" onClick={togglePlay}></i>

                            {/* like icons */}
                            <i className="ri-heart-line"></i>

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
                                            <th className='addicon'>Action</th>
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
                                            <td className="addicon">
                                                <i className="ri-add-line"></i>
                                            </td>
                                            <td className="album">
                                                <p>O Maahi (From "Dunki")</p>
                                            </td>
                                            <td className="dates">
                                                <p>2 Days ago</p>
                                            </td>
                                            <td className="time">4:56</td>
                                        </tr>
                                        {/* Add more rows here */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Track bar */}
          
            <div className="track-bar">
                <div
                    className="progress-bar"
                    onMouseDown={handleMarkerDragStart}
                    onMouseMove={handleMarkerDrag}
                    onMouseUp={handleMarkerDragEnd}
                    onMouseLeave={handleMarkerDragEnd}
                >
                    <div
                        className="progress"
                        style={{ width: `${(playbackPosition / duration) * 100}%` }}
                    ></div>
                    <div
                        className="marker"
                        style={{ left: `${(playbackPosition / duration) * 100}%` }}
                    ></div>
                </div>
                <div className="time-display">
                    <span>{formatTime(playbackPosition)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

        </>
    )
}
export default PlayMusic;
