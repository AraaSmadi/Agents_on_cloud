import React, { useState , useEffect} from 'react';
import {useParams} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Edit() {
    const {id} = useParams();
    const [pname, setname] = useState('');
    const [price, setprice] = useState('');
    const [description, setdesc] = useState('');
    const [image, setimage] = useState('');

    const editProduct = (e) => {
        e.preventDefault();
        // let navigate = useNavigate();
        axios.put(`http://localhost:3001/update/${id}`, {
            pname: pname,
            price: price,
            description: description,
            image: image,
        }).then((response) => {
            console.log('1',response);
        });
      window.alert("success");
    };
    const [products, setproducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/single/${id}`)
            .then((response) => {
                setproducts(response.data[0]);
               
            });
    },[]);
 console.log('2',products);

    return (
        <div>
        <img src="../fl.jpg" width="100%"/>
        <div class="container " >
          <form  style={{border:"29px  #f4b7b6e6" , color:" #f4b7b6e6" ,marginTop:"90px"}}>
           <h1 style={{ color:" #f4b7b6e6" ,marginBottom:"30px"}}>Edit Product</h1>

                <div class="form-group">
                    <label for="pname">Product name</label>
                    <br />
                    <input type="text" class="form-control" name="pname" id="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => setname(e.target.value)} defaultValue={products.pname} />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <br /><br />
              
                <div class="form-group">
                    <label for="price">Product price</label>
                    <br />
                    <input type="text" class="form-control" name="price" id="price" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => setprice(e.target.value)} defaultValue={products.price}/>
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <br /><br />
                <div class="form-group">
                    <label for="description">Describtion</label>
                    <br />
                    <textarea class="form-control" name="description" id="name" aria-describedby="emailHelp" placeholder="Enter name"  onChange={(e) => setdesc(e.target.value)} defaultValue={products.description}></textarea>
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <br /><br />
                <div class="form-group">
                    <label for="image">Image</label><br />
                    <input type="file" class="form-control" name="image" id="price" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => setimage(e.target.value)} />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <br /><br />

                <button type="submit" class="theme-btn-s4" onClick={editProduct} style={{ backgroundColor: " #f4b7b6e6", color: "white", width: "300px", marginLeft: "420px", border: "none" }} >Edit Product</button>
            <br/>
            <br/>
            <br/>
            </form>
            </div>
        </div>
    );
}
