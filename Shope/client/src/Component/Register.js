import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import swal from 'sweetalert';
function Register() {
const navigate = useNavigate();




  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpass] = useState('');
  const [logedin, setlogedin] = useState('');
  const register = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", {
      name: name,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    
     
    })
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'User register successfully',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    navigate("/login");
    };
    useEffect(() => {
      axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          setlogedin(response.data.user[0].username);
        }
      });
    }, []);
    return (
      <div>
    <img src="fl.jpg" width="100%"/>
    <div class="container ">
      <form  style={{border:"29px  #f4b7b6e6" , color:" #f4b7b6e6" ,marginTop:"90px"}}>
       <h1 style={{ color:" #f4b7b6e6" ,marginBottom:"30px"}}>Register</h1>

          <div class="form-group full-col">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => setname(e.target.value)} required  />
          </div>
          <div class="form-group full-col">
            <label for="email">Email address</label>
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setemail(e.target.value)}required />
          </div>
          <div class="form-group full-col">
            <label for="pass">Password</label>
            <input type="password" name="pass" class="form-control" id="pass" placeholder="Password" onChange={(e) => setpass(e.target.value)}  required/>
          </div>
          <br /><br />
          <button type="submit" class="theme-btn-s4" onClick={register} style={{ backgroundColor: " #f4b7b6e6", color: "white", width: "300px", marginLeft: "420px", border: "none" }}>Rigister</button>
          <br /><br /> 
             </form>
          </div>
</div>

    );
  }


  export default Register ;