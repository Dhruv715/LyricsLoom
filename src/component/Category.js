// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Category.css';
import Header from './Header';
import { useEffect } from 'react';
function Category(){
    // document.title="LyricsLoom | Category";
    useEffect(()=>{

        document.title = "LyricsLoom | Category";
    },[]);
    return(
        <>
            <div className="mainboxs">
                <div className="boxypart">
                <div className="headerpart1">
                   <Header/>
                </div>

                <div className="songlist">
                    <div className="rowflexy">
                        <h1>Browse all</h1>
                        <p>Show All</p>
                    </div>
                    <div className="cartboxflexys">
                         
                           <Link to="/CategoryWise">
                           <div className="boxs1">
                                <img src="https://i.pinimg.com/564x/e1/7b/e1/e17be17195006280414a301283224a03.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Pop</h1>
                            </div>
                           </Link>
                          
                            
                            
                           <Link to="/CategoryWise">
                           <div className="boxs1">
                                <img src="https://i.pinimg.com/564x/23/c5/7e/23c57edecc001cab1611ccc6623a6dde.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Push</h1>
                            </div>  
                           </Link>
                          
                           <Link to="/CategoryWise">
                           <div className="boxs1">
                                <img src="https://i.pinimg.com/564x/3e/07/a1/3e07a1ea1343f42d48c82d75bdd70fdb.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Shift</h1>
                            </div>
                           </Link>

                          <Link to="/CategoryWise">
                          <div className="boxs1">
                                <img src="https://i.pinimg.com/564x/0e/8f/4c/0e8f4ccc7635a0e096749d8092ec99d9.jpg" alt="" />
                                {/* <h1>Lofi Beats</h1> */}
                                <h1>Filter</h1>
                            </div>
                          </Link>
                          
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Category;