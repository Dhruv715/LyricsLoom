import './SemStyles.css';
function ShowArtist(){
    return(
        <>  
<div className="bgsemiblacky">
<h1 className="headingalbum">Artist List</h1>
<div className="boxblacky">
<table className="albumtable">
                    <tr>
                        <td className="postercolumn2">Poster</td>
                        <td className='Albumname2'>Name</td>
                        <td className='Albumname2'>Description</td>
                        <td className='Albumname2'>Song</td>
                        <td className='Albumname3'>Album</td>
                        <td className='Albumname2'>Actions</td>
                    </tr>
                    
                    <tr>
                        
                            <td className="postercolumn2">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819" alt="" />
                            </td>
                            <td className='Albumname2'>
                                Artist Name
                            </td>
                            <td className='Albumname2'>
                                Description
                            </td>
                            <td className='Albumname2'>
                                Song
                            </td>
                            <td className='Albumname3'>
                                Album
                            </td>
                            <td className='Albumname2'>
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
export default ShowArtist;