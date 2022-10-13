const User = require("../models/userModel");
const { getPostData } = require("../utils");

//  Get  All Products.
//  route GET api/products
async function getUsers(req, res) {

    try {
      const users = await User.findAll();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    } 
    
    catch (error) {
       console.log(error);
    }
}

//  Get Single Product.
//  route GET /api/product/:id

async function getUser(req, res, id) {

    try {
       const user = await User.findById(id);
    if (!user) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: "User Not Found" }));
    }  else {
         res.writeHead(200, { "Content-Type": "application/json" });
         res.end(JSON.stringify(user));
    }
  } 
  
  catch (error) {
    console.log(error);
  }
}

//  Create Product
// POST api/products

async function createUser(req, res) {

  try {
      const body = await getPostData(req);
      const { name, username, email } = JSON.parse(body);
      const user = {
        name,
        username,
        email,
       };
      const newUser = await User.create(user);
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newUser));
  } 

  catch (error) {
    console.log(error);
  }
}

//  Update a User ;
//  route - PUT /api/user/:id

async function updateUser(req, res, id) {

  try {
        const user = await User.findById(id);
    if(!user) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: "User Not Found" }));
    }else {
         const body = await getPostData(req);
         const { name, username, email } = JSON.parse(body);
         const userData = {
            name: name || user.name,
            username: username || user.username,
            email: email || user.email,
           };
         const updUser = await User.update(id, userData);
         res.writeHead(200, { "Content-Type": "application/json" });
         return res.end(JSON.stringify(updUser));
    }
    
  } 
    catch (error) {
      console.log(error)
  }
}

async function deleteUser(req, res, id) {

  try {
        const user = await User.findById(id);
    if (!user) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: "User Not Found" }));
    } else {
         await User.remove(id);
         res.writeHead(200, { "Content-Type": "application-json" });
         res.end(JSON.stringify({ message: `User ${id} removed` }));
    }

  } 
  catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} 
