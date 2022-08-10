import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Add() {
  let navigate = useNavigate();
  const [pname, setname] = useState('');
  const [price, setprice] = useState('');
  const [description, setdesc] = useState('');
  const [image, setimage] = useState('');
  const user_id = sessionStorage.getItem('u_id');
  const addProduct = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/add", {
      pname: pname,
      price: price,
      description: description,
      image: image,
      user_id:user_id
    }).then((response) => {
      console.log(response);
    });
    navigate("/");
  };

  return (
   
  <div>
    <img src="fl.jpg" width="100%"/>
    <div class="container " >
      <form  style={{border:"29px  #f4b7b6e6" , color:" #f4b7b6e6" ,marginTop:"90px"}}>
       <h1 style={{ color:" #f4b7b6e6" ,marginBottom:"30px"}}>Add Product</h1>
          <div class="form-group">
            <label for="pname">Product name</label>
            <br />
            <input type="text" class="form-control" name="pname" id="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => setname(e.target.value)} required/>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <br /><br />
          <div class="form-group">
            <label for="price">Product price</label>
            <br />
            <input type="text" class="form-control" name="price" id="price" aria-describedby="emailHelp" placeholder="Enter price" onChange={(e) => setprice(e.target.value)} required />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <br /><br />
          <div class="form-group">
            <label for="description">Describtion</label>
            <br />
            <textarea class="form-control" name="description" id="name" aria-describedby="emailHelp" placeholder="Enter description" onChange={(e) => setdesc(e.target.value)} required></textarea>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <br /><br />
          <div class="form-group">
            <label for="image">Image</label><br />
            <input type="file" class="form-control" name="image" id="price" aria-describedby="emailHelp"  onChange={(e) => setimage(e.target.value)} required/>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <br /><br />

          <button type="submit"class="theme-btn-s4" onClick={addProduct} style={{ backgroundColor: " #f4b7b6e6", color: "white", width: "300px", marginLeft: "420px", border: "none" }}>Submit</button>
          <br />

          <br />
          <br />
          </form>
          </div>
    </div>

  );
}
