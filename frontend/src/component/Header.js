import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({  handleLogout }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  
  useEffect(() => {
    const uid = localStorage.getItem("auth");
    if (uid) {
      setIsLoggedIn(true) 
    }else {
      setIsLoggedIn(false)
    }
  },[])

  const handleLogoutClick = () => {
    // Perform logout actions here
    localStorage.removeItem('auth')
    window.location.reload()
  };

  return (
    <>
      <div className='icons'>
        <i className="ri-arrow-left-s-line"></i>
        <i className="ri-arrow-right-s-line"></i>
      </div>
      <div className='buttons'>
        {isLoggedIn ? (
          <button className="loginbtn" onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/Login" style={{textDecoration:'none',color:'black'}} className="loginbtn">
              Log in
            </Link>
            <Link to="/Signup" className="sign">
              Sign up
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default Header;
