import './SemStyles.css';
function ShowSongs(){
    return(
        <>
         <div className="bgsemiblacky">
        <h1 className="headingalbum">Song List</h1>
        <div className="boxblacky">
        <table className="albumtable">
                    <tr>
                        <td className="postercolumn3">Poster</td>
                        <td className='Albumname4'>Name</td>
                        <td className='Albumname4'>Album</td>
                        <td className='Albumname4'>Artist</td>
                        <td className='Albumname4'>Category</td>
                        <td className='Albumname4'>Date</td>
                        <td className='Albumname4'>Lyrics</td>
                        <td className='Albumname4'>Duration</td>
                        <td className='Albumname5'>Action</td>
                    </tr>
                    
                    <tr>
                        
                            <td className="postercolumn3">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819" alt="" />
                            </td>
                            <td className='Albumname4'>Name</td>
                        <td className='Albumname4'>Album</td>
                        <td className='Albumname4'>Artist</td>
                        <td className='Albumname4'>Category</td>
                        <td className='Albumname4'>Date</td>
                        <td className='Albumname4'>Lyrics</td>
                        <td className='Albumname4'>Duration</td>
                            <td className='Albumname5'>
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                    </tr>
                </table>
        </div>
</div>
        </>
    )
}
export default ShowSongs;