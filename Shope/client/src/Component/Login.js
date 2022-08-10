import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpass] = useState('');
  const [logedin, setlogedin] = useState('');

  const login = (e) => {
   e.preventDefault();
    axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      // console.log(response);
      window.alert('login successfullay');
      window.location.reload(true);
      if(response.data.message){
        setlogedin(response.data.message);  
    }else{
      setlogedin(response.data[0].email)
      console.log(response.data[0].id)
      sessionStorage.setItem('u_id',response.data[0].id)
      sessionStorage.setItem('u_name',response.data[0].name)
    }
    });

    // navigate("/login");
    // 
    
  };
  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      if(response.data.loggedIn == true){
      
        setlogedin(localStorage.setItem('user',response.data.user[0].id))
      }})
  }, []);
  return (
   
      <div>
    <img src="fl.jpg" width="100%"/>
    
    <div class="container " >
      <form  style={{border:"29px  #f4b7b6e6" , color:" #f4b7b6e6" ,marginTop:"90px"}}>
       <h1 style={{ color:" #f4b7b6e6" ,marginBottom:"30px"}}>Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} required/>
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div class="form-group">
          <label for="Password">Password</label>
          <input type="password" class="form-control"  name="" id="Password" placeholder="Password" onChange={(e) => setpass(e.target.value)} required/>
        </div>
        <br/><br/>
        <button type="submit" class="theme-btn-s4" onClick={login} style={{backgroundColor:" #f4b7b6e6" , color:"white", width:"300px" , marginLeft:"420px" , border:"none"}}>Login</button>
      <br/>
      <br/></form></div>
      <h1>{logedin}</h1>
    </div>
  );
}
