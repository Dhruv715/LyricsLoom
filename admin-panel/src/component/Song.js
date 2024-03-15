import './Song.css';
function Song(){
    return(
        <>
<div className="songbox">
        <h1 className="songname">Add Song</h1>
        <div className="formsongdetails">
                <form>
                 <div className="dflexy">
                 <div className="inputcommon"> 
                  <label htmlFor="">Song Name</label>
                   <input type="text" placeholder="Enter Song Name" name="name" id="name" /></div>
                   <div className="inputcommon">
                   <label htmlFor="">Category Name</label>
                    <input type="text" name="category" id="category" placeholder="Enter Category..."/></div>
                 </div>

                  <div className="dflexy">
                  <div className="inputcommon"> 
                  <label htmlFor="">Album Name</label>
                   <input type="text" placeholder="Enter Albums Name" name="name" id="name" /></div>
                   <div className="inputcommon">
                   <label htmlFor="">Lyrics</label>
                    <input type="text" name="lyrics" id="lyrics"  placeholder="Enter Lyrics Name.."/></div>
                  </div>
                  
                  <div className="dflexy">
                   <div className="inputcommon">
                   <label htmlFor="">Artist Name</label>
                    <input type="text" name="artist" id="artist" placeholder ="enter Artist Name.."/></div>
                    
                    
                    <div className="inputcommon">
                   <label htmlFor="">Duration</label>
                    <input type="text" name="duration" id="duration" placeholder="Enter duration"/></div>
                   </div>
                   <div className="dflexy">
                   
                    <div className="inputcommon">
                    <label htmlFor="">Song Poster</label>
                    <input type="file" name="image" id="image" placeholder="Choose Image" /></div>
                    <div className="inputcommon">
                   <label htmlFor="">Released Date</label>
                    <input type="date" name="date" id="date" /></div>
                    
                   </div>
                  
                    <input type="submit" className="semibox" value="Submit" />
                </form>
        </div>
      </div>

        </>
    )
}
export default Song;