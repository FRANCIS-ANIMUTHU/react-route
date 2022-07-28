import Form from "./form.json";
import App from "./App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// import React from 'react'

import React from "react";

export default function Forms() {
  const navi = useNavigate();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  
  function getName(event) {
    setname(event.target.value);
  }
  function getPassword(event) {
    setpassword(event.target.value);
  }
  function submit(event) {
    event.preventDefault();
    Form.forEach((data) => {
      if (data.username == name && data.password == password) {
        navi("/App");
      } else {
        seterror("Invalid username or password");
      }
    });
  }

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "goldenrod",
        width: "500px",
        height: "400px",
        paddingTop: "2%",
      }}
    >
     
      <h1>Login</h1>
      <form onSubmit={submit} style={{ textAlign: "center" }}>
        <lable name="username">Username:</lable>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={getName}
          style={{ padding: "1%", margin: "3%" }}
        ></input>
        <br></br>
        <lable name="password">Password:</lable>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={getPassword}
          style={{ padding: "1%", margin: "2%" }}
        ></input>
        <br></br>
        <input
          type="submit"
          style={{
            padding: "2%",
            margin: "2%",
            borderRadius: "40%",
            backgroundColor: "blue",
            color: "wheat",
          }}
        ></input>
        <p>{error}</p>
      </form>
    </div>
  );
}

// import React, { Component } from 'react'

// export class form extends Component {
//     constructor(){
//         super();
//         this.state={
//             username:"",
//             password:"",
//             error:""
//         }
//     }
//     nameInput=(event)=>{
//         if(event.target.name==='password'){
//             if(isNaN(event.target.value)){
//                 this.setState({error:"This is wrong input"})
//             }
//             else{
//                 this.setState({error:""})
//             }
//         }
//         this.setState({[event.target.name]:event.target.value})
//     }
//     submit=(event)=>{
//         event.preventDefault()
//         console.log(this.state);
//     }

//   render() {
//     return (
//         <>
//         <form onSubmit={this.submit}>
//         <input name='username' onChange={this.nameInput}></input>
//         <input type="password" name='password' onChange={this.nameInput}></input>
//         <input type='submit'></input>
//         </form>
//         <p> {this.state.error}</p>

//         </>

//     )
//   }
// }

// export default form
