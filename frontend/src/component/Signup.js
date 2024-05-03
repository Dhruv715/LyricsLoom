import React, { useEffect, useState } from 'react';
import { URL } from '../Axios/axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Signup = () => {
  const Navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});

  const obj = { name, email, password, phone, gender };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      axios.post(URL, obj).then((res) => {
        console.log(res);
        Navigate('/Login');
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (name.trim().length < 2) {
      errors.name = '*Name must be at least 2 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = '*Invalid email address';
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        '*Password must be at least 8 characters long and contain a digit, special character, and one letter';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = '*Passwords do not match';
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      errors.phone = '*Phone number must be exactly 10 digits';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    document.title = 'LyricsLoom | Signup';
  }, []);

  return (
    <div className="mainboxs">
      <div className="boxypart">
        <div className="headerpart1">
          <Header />
        </div>

        <div>
          <div className="signupforms">
            <form onSubmit={handleSubmit}>
              <h1>SignUp </h1>
              <div className="rowssign">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
                {errors.name && <p className="error">{errors.name}</p>}
              <div className="rowssign">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
                {errors.email && <p className="error">{errors.email}</p>}
              <div className="rowssign">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
                {errors.password && <p className="error">{errors.password}</p>}
              <div className="rowssign">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              
              </div>
              {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              <div className="rowssign">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
                {errors.phone && <p className="error">{errors.phone}</p>}
              <div className="rowssign">
                <label htmlFor="gender">Gender:</label>
                <label htmlFor="male">Male:</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <label htmlFor="female">Female:</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
