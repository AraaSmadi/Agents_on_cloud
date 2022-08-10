var express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require('bcrypt');
app.use(express.static(__dirname));
const saltRounds = 10
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST" ,"PUT" ,"DELETE"],
  credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

//connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "shopping"

});

//connection


//register
app.post('/register', (req, res) => {

  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  bcrypt.hash(password ,saltRounds,(err,hash) =>{

    if(err){
      res.send({err:err});
    }
    db.query("INSERT INTO users (name ,email ,password) VALUES(?,?,?)", [name, email, hash], (err, result) => {
      
       console.log(err);
  }) 
  })
  window.alert("Rigster successfully");
  window.location.href = "/login";
})
//register


app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// login
app.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  db.query("SELECT id ,email , password ,name FROM users WHERE email=?", email, (err, result) => {
  
    if (err) {
      res.send({ err: err })

    }

if(result.length>0){
  bcrypt.compare(password,result[0].password,(err,response)=>{
   if(response){
       req.session.user=result;
       console.log(req.session.user)
     res.send(result)  
   }else{
   res.send({message:"wrong user name/password"})

   }
  })
   
   
} else{
   res.send({message:"user not found"})
}  


}) 
})
// login







// app.use(bodyParser.urlencoded({ extended: true }))
// add product
app.post('/add', (req, res) => {
  const pname = req.body.pname
  const price = req.body.price
  const description = req.body.description
  const image = req.body.image
  const user_id =req.body.user_id
  const queryinsert ="INSERT INTO product (pname ,price ,description ,image,user_id) VALUES(?,?,?,?,?)";

  db.query( queryinsert, [pname, price, description, image,user_id], (err, result) => {
     console.log(result);
  })
})
// add product


// show product
app.get('/show', (req, res) => {
  const sqlquery ="SELECT * FROM product";
    db.query( sqlquery , (err, result) => {
      res.send(result)
   })
})
// show product

//delete 
app.delete('/delete/:id' , (req ,res)=>{
  const id = req.params.id
  const sqlquery ="DELETE FROM product WHERE id =?";
  db.query( sqlquery , id ,(err, result) => {
    if (err) {
    console.log(err);

    }
 })
})


//delete

//update 
app.put('/update/:id' , (req ,res)=>{
  const pname = req.body.pname
  const price = req.body.price
  const description = req.body.description
  const image = req.body.image
  const id = req.params.id
  const sqlquery ="UPDATE product SET pname=? ,price=? ,description=? , image=? WHERE id =?";
  db.query( sqlquery ,[ pname ,price,description, image ,id],(err, result) => {
    if (err) {
    console.log(err);
   
    }
 })
})


//update


//single 


app.get('/single/:id', (req, res) => {
  const id = req.params.id
  const sqlquery ="SELECT * FROM product WHERE id=?";
    db.query( sqlquery , id , (err, result) => {
      res.send(result)
   })
})


//single

app.listen(3001, () => {
  console.log("runing server")
})








// add message
app.post('/message', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  
  const queryinsert ="INSERT INTO contact (name ,email ,message) VALUES(?,?,?)";

  db.query( queryinsert, [name, email, message], (err, result) => {
     console.log(result);
  })
})
// add message



// add comment
app.post('/addcomment', (req, res) => {
  const comment = req.body.comment
  const user_id	 = req.body.user_id
  const name = req.body.name
  const  P_id = req.body.P_id
 
  const queryinsert ="INSERT INTO comment (comment ,user_id ,name ,P_id) VALUES(?,?,?,?)";

  db.query( queryinsert, [comment, user_id, name, P_id], (err, result) => {
     console.log(result);
  })
})
// add comment



// show comment
app.get('/showcomment/:P_id', (req, res) => {
  const P_id = req.params.P_id
  const sqlquery ="SELECT * FROM comment WHERE  P_id = ?";
    db.query( sqlquery , P_id, (err, result) => {
      res.send(result)
   })
})
// show comment