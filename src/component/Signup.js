import React from 'react';
import './Popup.css'; // Import the CSS file for styling
import Header from './Header';

function Signup() {
    return (
        <>
            <div className="mainboxs">
                <div className="boxypart">
                    <div className="headerpart1">
                        <Header />
                    </div>
                    <div className="form-container signup">
                        <form>
                            <h1>Signup</h1>
                            {/* <hr /> */}

                            <input type="text" placeholder="Enter Your name..." />
                            <input type="email" placeholder="Enter Your email..." />
                            <input type="tel" placeholder="Enter Your Phone..." />
                            <input type="password" placeholder="Enter Your pwd..." />
                            <button type="submit" style={{marginTop:'10px'}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
