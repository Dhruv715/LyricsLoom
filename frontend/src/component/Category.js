// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Category.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_URL, URL } from '../Axios/axios';
function Category() {
    const [category, setccategory] = useState([])
    // document.title="LyricsLoom | Category";
    useEffect(() => {
        document.title = "LyricsLoom | Category";
    }, []);
    useEffect(() => {
        axios.get(URL + 'view_category').then(res => {
            console.log(res);
            setccategory(res.data.data)
        })
    }, [])
    return (
        <>
            <div className="mainboxs">
                <div className="boxypart">
                    <div className="headerpart1">
                        <Header />
                    </div>

                    <div className="songlist">
                        <div className="rowflexy">
                            <h1>Browse all</h1>
                            <p>Show All</p>
                        </div>
                        <div className="cartboxflexys">
                            {
                                category && category.map((item, index) => {
                                    return (
                                        <Link to={`/CategoryWise/${item._id}`}>
                                            <div className="boxs1">
                                                <img src={`${IMAGE_URL}${item.image}`} alt="" />
                                                {/* <h1>Lofi Beats</h1> */}
                                                <h1>{item.name}</h1>
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                         

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;