import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import { NavLink } from 'react-router-dom';

export default function Single() {
    const [comments, setcomments] = useState([ ]);
    const [products, setproducts] = useState([ ]);
    const {id} = useParams();
    // const {P_id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/single/${id}`)
            .then((response) => {
                setproducts(response.data[0]);
               
            }); 
            
          
            axios.get(`http://localhost:3001/showcomment/${id}`)
            .then((response) => {
                setcomments(response.data);
               
            }); 
            
        },[]);
        console.log(comments);
  


    // start comments




	
    
    
  const user_id = sessionStorage.getItem('u_id');
  const name = sessionStorage.getItem('u_name');
  const [comment, setcomment] = useState(null);
  const AddCommints = () => {
    if ((user_id != null) && (comment != null)) {
      axios.post(`  http://localhost:3001/addcomment`, {
        user_id:user_id,
        comment:comment,
        name:name,
        P_id:id,
      })
      window.alert("send comments successfully");
      window.location.reload(true);
    }else {
        window.alert("send comments danger");
    }

  }



  // end comments

  return (
    <div>
              <section class="wpo-page-title">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2></h2>
                            <ol class="wpo-breadcumb-wrap">
                                <li><a href="index.html">Home</a></li>
                                <li> Single product</li>
                            </ol>
                        </div>
                    </div>
                </div> 
            </div> 
        </section>
        
        <div class="team-pg-area section-padding">
            <div class="container">
                <div class="team-info-wrap">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="team-info-img">
                            <img src="../aa.webp" alt class="img img-responsive"  />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="team-info-text">
                                <h2>{products.pname}</h2>
                                <ul>
                                    <li>Product name:<br/> <span>{products.pname}</span></li>
                                    <li>Product Price:<br/> <span>{products.price}JD</span></li>
                                    <li>Description:<br/> <span>{products.description}</span></li>
                                    {/* <li>Address:<span>Millington, Ave, TN 38053</span></li>
                                    <li>Phone:<span>+00 568 746 987</span></li>
                                    <li>Email:<span>youremail@gmail.com</span></li>
                                    <li>Fax:<span>568 746 987</span></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
          {/*  comments */}
<br/><br/>
          <div class="container " style={{ backgroundColor: "#0f022b00", color: "black" }}>
            <div className="cast__title mb-4">
              <h2 style={{textAlign:"center"}}>Comments</h2>
            </div>

            <div class="d-flex justify-content-center row" style={{ textAlign: "left" }}>
              <div class="col-md-8" >
                <div class="d-flex flex-column comment-section">
                {comments.length>0 && comments.map((c) => {
                    return (
                    <div class=" p-2">
                      <div class="d-flex flex-row user-info" >
                        <img class="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" width="40" />
                        <div class="d-flex flex-column justify-content-start ml-2">
                          <span class="d-block font-weight-bold name"style={{marginLeft:"20px"}}>{c.name}</span>
                        </div>
                      </div>
                      
                      <div class="d-flex flex-row user-info mt-2 pl-5" >
                        <div class="d-flex flex-column justify-content-start ml-2"><span >{c.comment}</span></div>
                      </div>


                    </div>


) })} 

                  <div class=" p-2">
                    <div class="d-flex flex-row align-items-start">
                      <img class="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" width="40" />
                      <textarea class="form-control ml-1 shadow-none textarea" onChange={(e) => setcomment(e.target.value)} disabled={user_id != null ? false : true}></textarea>
                    </div>
                    {user_id == null && (
                      <div class="alert alert-warning ml-5 mt-1" role="alert">
                        You need to be logged in to be able to comment
                      </div>
                    )}
                    <div class="mt-2 text-left pl-5">
                      <div class="btn btn-success px-4 mt-2 col-lg- theme-btn-s4" type="submit"data-toggle="modal" style={{width:"100px",marginLeft:"33px" }}onClick={AddCommints} >Send</div>
                    </div>
                  </div>
<br/><br/>
                </div>
              </div>
            </div>
          </div>
          {/*  end comments */}
                </div>
  );
}
