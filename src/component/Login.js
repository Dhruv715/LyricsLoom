import React from 'react';
import './Popup.css'; // Import the CSS file for styling
import Header from './Header';

function Popup() {
    return (
        <>
            <div className="mainboxs">
                <div className="boxypart">
                    <div className="headerpart1">
                        <Header />
                    </div>
                    <div className="form-container loginform">
                        <form>
                            <h1>Login</h1>
                            {/* <hr /> */}
                            <input type="email" placeholder="Enter Your email..." />
                            <input type="password" placeholder="Enter Your Pwd..." />
                            <button type="submit" style={{marginTop:'10px'}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popup;
