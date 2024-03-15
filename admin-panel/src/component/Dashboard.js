import './Dashboard.css';
function Dashboard(){
    return(
        <>
    <div className="boxmain">
    <h1 className='headtag'>Dashboard</h1>
            <div className='databox'>
                    <div className="boxs">
                    <i class="ri-user-follow-line"></i>
                        <h1>Users</h1>
                        <h2>289</h2>
                    </div>
                    <div className="boxs">
                    <i class="ri-music-line"></i>
                        <h1>Song</h1>
                        <h2>356</h2>
                    </div>
                    <div className="boxs">
                    <i class="ri-customer-service-fill"></i>
                        <h1>Artist</h1>
                        <h2>68</h2>
                    </div>
                    <div className="boxs">
                    <i class="ri-inbox-2-line"></i>
                        <h1>Category</h1>
                        <h2>25</h2>
                    </div>
                    <div className="boxs">
                    <i class="ri-archive-stack-line"></i>
                        <h1>Album</h1>
                        <h2>12</h2>
                    </div>
            </div>
    </div>
        </>
    )
}
export default Dashboard;