import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
const host = "http://localhost:4999";
const Login = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post(`${host}/api/auth/login`, {
            email: e.target.email.value,
            password: e.target.password.value,
        });
        if(response.data.success){
            await localStorage.setItem('auth-token',response.data.authToken);
            await localStorage.setItem('name',response.data.name);
            navigate('/');
            props.showAlert("Logged in Successfully","success");
        }
        else{
            props.showAlert("Invalid Credentials","error");
        }
    };
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
  return (
    <div className="contanier">
      <h2 className="my-2">Login to continue to SecNotes</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3" >
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
