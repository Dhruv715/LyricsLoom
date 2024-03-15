import './SemStyles.css';
function ShowAlbum(){
    return(
        <>
        <div className="bgsemiblacky">
        <h1 className="headingalbum">Album List</h1>
        <div className="boxblacky">
                <table className="albumtable">
                    <tr>
                        <td className="postercolumn">Poster</td>
                        <td className='Albumname'>Name</td>
                        <td className='Albumname'>Song</td>
                        <td className='Albumname'>Date</td>
                        <td className='Albumname'>Actions</td>
                    </tr>
                    
                    <tr>
                        
                            <td className="postercolumn">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819" alt="" />
                            </td>
                            <td className='Albumname'>
                                Album Name
                            </td>
                            <td className='Albumname'>
                                Song Name
                            </td>
                            <td className='Albumname'>
                                Date
                            </td>
                            <td className='Albumname'>
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
export default ShowAlbum;