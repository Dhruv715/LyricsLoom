import "./Album.css";
function Album() {
  return (
    <>
      <div className="boxmain">
        <h1 className="albumname">Add Album</h1>
        <div className="boxformalbum">
                <form>
                  <div className="namefield"> 
                  <label htmlFor="">Album Name : </label>
                   <input type="text" placeholder="Enter Albums Name" name="name" id="name" /></div>
                    <div className="flexremove">
                    <label htmlFor="">Choose Images : </label>
                    <input type="file" name="image" id="image" placeholder="Choose Image" /></div>
                    
                    <div className="namefield">
                    <label htmlFor="">Enter Audio Name: </label> <input type="text" placeholder="Enter Albums Name" name="name" id="name" /></div>
                    <div>
                    <label htmlFor="">Date : </label>
                    <input type="date" name="date" id="date" /></div>
                    <input type="submit" value="Submit" />
                </form>
        </div>
      </div>
    </>
  );
}
export default Album;
