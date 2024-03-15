function Artist(){
    return(
        <>
 <div className="boxmain">
        <h1 className="albumname">Add Artist</h1>
        <div className="boxformalbum">
                <form>
                  <div className="namefield"> 
                  <label htmlFor="">Artist Name : </label>
                   <input type="text" placeholder="Enter Artist Name" name="name" id="name" /></div>
                    <div className="flexremove">
                    <label htmlFor="">Artist Images : </label>
                    <input type="file" name="image" id="image" placeholder="Choose Image" /></div>
                    <div className="namefield"> 
                  <label htmlFor="">Artist Description : </label>
                   <input type="text" placeholder="Enter Artist Details.." name="Artist" id="Artist" /></div>
                   <div className="namefield"> 
                   <label htmlFor="">Song : </label>
                   <input type="text" placeholder="Ente Song Details.." name="Song" id="Song" /></div>
                   <div className="namefield"> 
                   <label htmlFor="">Album : </label>
                   <input type="text" placeholder="Ente Album Details.." name="Album" id="Album" /></div>
             
                    <input type="submit" value="Submit" />
                </form>
        </div>
      </div>

        </>
    )
}
export default Artist;