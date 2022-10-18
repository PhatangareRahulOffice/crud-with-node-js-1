const User = require("../models/userModel");
const { getPostData } = require("../utils");
const logger = require('../controllers/logger');
//  Get  All Users
//  route GET api/products
async function getUsers(req, res) {

    try {
      const users = await User.findAll();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    logger.userLogger.log('info' ,'All user data found')

    } 
    
    catch (error) {
      
    logger.userLogger.log('error','all user not found')

    }
}

//  Get Single Pt.
//  route GET /api/product/:id

async function getUser(req, res, id) {

    try {
       const user = await User.findById(id);
    if (!user) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: "User Not Found" }));
     logger.userLogger.log('error','User Not Found !')

    } 
     else {
         res.writeHead(200, { "Content-Type": "application/json" });
         res.end(JSON.stringify(user));
    logger.userLogger.log('info','Successfully got Data of user !')

    }
  } 
  
  catch (error) {
    res.send({
      error
    })
  logger.userLogger.log('error','Error finding a user !')

  }

}

//  Create user
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
    logger.userLogger.log('info','Successfully User  creation done !')

      return res.end(JSON.stringify(newUser));

  } 

  catch (error) {
  logger.userLogger.log('error','Error in  Creating a user !')

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
  logger.userLogger.log('error','Error in Updating and  user not fond !')

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
    logger.userLogger.log('info','Successfully User  Update done !')

         return res.end(JSON.stringify(updUser));
         
    }
    
  } 
    catch (error) {
  logger.userLogger.log('error','Error in Updating a user !')

  }
}

async function deleteUser(req, res, id) {

  try {
        const user = await User.findById(id);
    if (!user) {
         res.writeHead(404, { "Content-Type": "application/json" });
         res.end(JSON.stringify({ message: "User Not Found" }));
  logger.userLogger.log('error','Error in Deleting but user not fond !')

         
    } else {
         await User.remove(id);
         res.writeHead(200, { "Content-Type": "application-json" });
         res.end(JSON.stringify({ message: `User ${id} removed` }));
    logger.userLogger.log('info','Successfully User  delete done !')

    }

  } 
  catch (error) {
  logger.userLogger.log('error','Error in Deleteing but  user not fond !')
    
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} 
