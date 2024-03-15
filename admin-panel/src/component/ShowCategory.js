import './SemStyles.css';
function ShowCategory(){
    return(
        <>
        <div className="bgsemiblacky">
<h1 className="headingalbum">Category List</h1>
<div className="boxblacky">
<table className="albumtable">
                    <tr>
                        <td className="postercolumn1">Poster</td>
                        <td className='Categoryname'>Name</td>
                        
                        <td className='Actionbox2'>Actions</td>
                    </tr>
                    
                    <tr>
                        
                            <td className="postercolumn1">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819" alt="" />
                            </td>
                            <td className='Categoryname'>
                                Category Name
                            </td>
                            
                            <td className='Actionbox2'>
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
export default ShowCategory;