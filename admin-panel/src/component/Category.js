function Category(){
    return(
        <>
<>
      <div className="boxmain">
        <h1 className="albumname">Add Category</h1>
        <div className="boxformalbum">
                <form>
                  <div className="namefield"> 
                  <label htmlFor="">Category Name : </label>
                   <input type="text" placeholder="Enter Category Name" name="name" id="name" /></div>
                    <div className="flexremove">
                    <label htmlFor="">Category Images: </label>
                    <input type="file" name="image" id="image" placeholder="Choose Image" /></div>
                    
                    <br />
                    <input type="submit" value="Submit" />
                </form>
        </div>
      </div>
    </>

        </>
    )
}
export default Category;