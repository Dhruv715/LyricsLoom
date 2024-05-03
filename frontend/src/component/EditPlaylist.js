import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMAGE_URL, URL } from "../Axios/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPlaylist = (props) => {

    const { id } = useParams()
    const uid = localStorage.getItem("auth");
    console.log("uid=", uid);
    const Navigate = useNavigate()

    const [showSongs, setShowSongs] = useState(false);
    const [songs, setsongs] = useState([]);
    const [data, setdata] = useState([]);

    const [body, setbody] = useState({
        name: "",
        songs: [],
    });

    useEffect(() => {
        axios.get(URL + `getPlayList/${id}`).then((res) => {
            console.log(res.data.data.songs);
            setdata(res.data.data);
            setbody({ name: res.data.data.name, songs: res.data.data.songs})
            console.log('bodysongs', res.data.data.songs);
        });
    }, [id]);

   
    

   

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
                .post(URL +`/editplaylist/${id}`, body)
                .then((res) => {
                    console.log(res);
                    if (res.data.status === "updated")
                        Navigate(`/Playlist/${id}`)
                });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "calc(100vw - 25vw)",
                backgroundColor: "#f8f9fa",
            }}
        >
            <div
                className="container text-dark"
                style={{
                    maxWidth: "600px",
                    padding: "20px",
                    
                    borderRadius: "10px",
                }}
            >
                <h1 style={{cursor:'pointer'}}>Edit Playlist</h1>
                {/* <header className="text-end mt-5 mb-3 bg-dark" style={{borderRadius:'10px'}}> 
          <button style={{borderRadius:'10px',backgroundColor:'gray',color:'white',fontSize:'1.2rem'}} onClick={() => props.setIsNewPlayList(false)}>x</button>
        </header> */}
                <div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Playlist name"
                                onChange={(e) => setbody({ ...body, name: e.target.value })}
                                value={data.name}
                            />
                            
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <div style={{ position: "relative" }}>
                                <div
                                    className="bg-dark  text-light p-2 mb-2 cursor-pointer"
                                    style={{ borderRadius: '10px',cursor:'pointer' }}
                                    onClick={() => setShowSongs(!showSongs)}
                                >
                                    Show Songs
                                </div>
                                <section
                                    className={!showSongs ? "d-none" : ""}
                                    style={{ maxHeight: "500px", overflowY: "auto" ,overflowX:'hidden'}}
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
                                                            cursor:'pointer'
                                                        }}
                                                    />
                                                    <span style={{cursor:'pointer'}}>{item.name}</span>
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

export default EditPlaylist;
