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
                    <div className="form-container">
                        <form>
                            <h1>Add PlayList</h1>
                            {/* <hr /> */}
                            <input type="text" placeholder="Enter Custom Playlist Name..." />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popup;
