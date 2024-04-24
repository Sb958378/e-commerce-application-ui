import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react';
import Desktop_sell from "../Images/Desktop_sell.webp";
import axios from "axios";
const Register = ({role}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userRole , setUserRole]= useState(role);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

 
    
  const handleNameChange = (e) => {
    let inputName = e.target.value;

    // Remove non-alphabetical characters
    inputName = inputName.replace(/[^A-Za-z\s]/g, "");

    // Capitalize first letter of each word
    inputName = inputName.replace(/\b\w/g, (char) => char.toUpperCase());

    // Check if input is empty or contains invalid characters
    if (!inputName || inputName !== e.target.value) {
      setErrorMessage(
        "Please Enter A Valid Name With Only Alphabetical Characters."
      );
    } else {
      setErrorMessage("");
    }
    setName(inputName);
  };
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pattern for email validation

    if (!enteredEmail.match(emailPattern)) {
      setErrorMessage("Please Enter A Valid Email Address.");
    } else {
      setErrorMessage("");
    }
    setEmail(enteredEmail);
  };
  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    if (!enteredPassword.match(passwordPattern)) {
      setErrorMessage(
        "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long."
      );
    } else {
      setErrorMessage("");
    }

    setPassword(enteredPassword);
  };
  const handleSignup = async() => {
    // Save form data to state
    const formData = { name, email, phoneNumber, password, userRole};
    setSubmittedData(formData);
  
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/register",
        formData, // Pass formData directly
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
  
      if (response.status === 202) { // Check response status
        console.log(response);
        alert(response.data.message); // Access response data here
      }
    } catch (error) {
      alert(
        "Registration failed: " +
          (error.response ? error.response.data : error.message) // Concatenate error message
      );
    }
  
    // Reset form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
  };
  

  return (
    <>
    <div className='border-solid border-2 border-red-500h h-80 w-4/12 bg-slate-50 h-full rounded-sm'>
      {role ==="customer" ?(
        <div>
        <p>look like you are not login</p>
        <p>login in to continue our service .....customer</p>
        </div>
      ):role ==="seller" ?(
        <div>
          <img src={Desktop_sell}
          />
        <p>
         hey welcome as Seller
         </p>
        <p>
        login to continue as a seller
        </p>
        </div>
      ): null
      }

    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">

      <div className="bg-white p-8 shadow-md max-w-xl w-full max-h-fit hover:shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center ">Registration Form</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-400 rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        />
       
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="border border-gray-400 rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="border border-gray-400 rounded-md px-3 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        />
        {errorMessage && <div className="text-red-500 text-xs">{errorMessage}</div>}
        <button
          onClick={handleSignup}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-md px-4 py-2 w-full font-bold"
        >
          Submit
        </button>
        <p className="text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-bold">
            Log In
          </Link>
        </p>
      </div>
    </div>
    </>
  );
  
}

export default Register