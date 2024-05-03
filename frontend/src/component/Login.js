import axios from "axios";
import { useState } from "react";
import { URL } from "../Axios/axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../App.css";

function Login() {

  const uid = localStorage.getItem("auth");

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
   if (!uid) {
    const obj = { email, password };
    console.log("Form data:", obj); // Log form data being sent
    axios.post(URL + "login", obj)
      .then((res) => {
        console.log("Response:", res); // Log response from the server
        if (res.status === 200) {
          console.log("done")
          localStorage.setItem("auth", res.data.token);
          localStorage.getItem("auth")

          setIsLoggedIn(true);
          navigate("/");
        } else {
          // Handle login failure, maybe show an error message
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Log any errors that occur during the request
      });
   } else {
    console.error(uid + 'user loggedIN already')
   }
  };
  
  return (
    <>
      <div className="mainboxs">
        <div className="boxypart">
          <div className="headerpart1">
            <Header isLoggedIn={isLoggedIn}/>
          </div>
          <div>
            <div className="Loginforms">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="rowssign">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="rowssign">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
