import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { AppDisptach } from "../redux/store";
import Input, { InputType } from "./Input";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDisptach>();
  const location = useLocation();
  const nameInputRef = useRef<InputType>(null);

  useEffect(() => {

    console.log("nameInputRef", nameInputRef.current);
    //nameInputRef.current!.focus()
    nameInputRef.current!.inputRef.focus();
  }, [])



  async function handleLogin() {

   // debugger;
    try {
      const url = process.env.REACT_APP_LOGIN_URL;
      if (url) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password }),
        });
        if (response.ok) {

          const data = await response.json();

          //update the redux store
          dispatch({
            type: "SET_AUTH",
            payload: {
              isAuthenticated: true,
              userName: name,
              accessToken: data.accessToken,
              refreshToken: data.refreshToken
            }
          });


          //navigate("/products", {replace: true});
          if(location.state){
              const to: any = location.state;
              navigate(to, {replace: true});
          }
          else{
              navigate("/home", {replace: true});
          }
         
          setMessage("");
        } else {

          setMessage("Invalid Credentials");
          //update the redux store
          dispatch({
            type: "SET_AUTH",
            payload: {
              isAuthenticated: false,
              userName: "",
              accessToken: "",
              refreshToken: ""
            }
          });


        }
      }
    } catch (error) {
      setMessage("Something went wrong..");
    }
  }
  return (
    <div>
      <h3>Login</h3>

      {message ? <div className="alert alert-danger">{message}</div> : null}

      {/* <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div> */}
      <Input label="Name" id="name" type="text" 
            placeholder="Name" className="abc" value={name}  
                      onChange={(e) => setName(e.target.value)} ref={nameInputRef}/>

      <Input label="Password" type="password" value={password} placeholder="********"
          onChange={(e) => setPassword(e.target.value)}/>


      {/* <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          type="password"
          value={password}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div> */}
      <div>
        <button className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
