import { Link } from "react-router-dom";

function Header(){
    return(
        <>

<div className='icons'>
                    <i class="ri-arrow-left-s-line"></i>
                    <i class="ri-arrow-right-s-line"></i>
                    </div>
                    <div className='buttons'>
                    <Link to="/Signup" className="sign">
                                Sign up
                            </Link>
                            <Link to="/Login"> <button className="loginbtn">Log in</button></Link>
                    </div>
        </>
    )
}
export default Header;