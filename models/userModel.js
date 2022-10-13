let users = require('../data/users.json');
const {v4: uuid4} = require('uuid');
const {writeDataToFile} = require('../utils')


function findAll(){

    return new Promise((resolve,reject)=>{
        resolve(users);

    });
}

function findById(id){

    return new Promise((resolve,reject)=>{
        const user = users.find((u)=>u.id == id)
        resolve(user);

    });
}

function create(user){

    return new Promise((resolve,reject)=>{
        const newUser = {id:uuid4(), ...user}
        users.push(newUser);
        writeDataToFile('./data/users.json', users)
        resolve(newUser);
    });
}

function update(id,user){

    return new Promise((resolve,reject)=>{
        const index = users.findIndex((u)=>u.id == id)
        users[index] = {id,...user}
        writeDataToFile('./data/users.json', users);
        resolve(users[index]);
    })
}

function remove(id){

    return new Promise((resolve,reject)=>{
        users = users.filter((u)=> u.id !== id);
        writeDataToFile('./data/users.json',users);
        resolve();
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}























// function findById(id){
//     return new Promise((resolve,reject)=>{
//         for(let i =0; i<users.length; i++){
//             if(users.length == 0){
//                 console.log('user Array is empty')
//             } else{
//               if(users[i].id == id) {
//                resolve(users[i]);
//               }
//             }
//         }
//     })
// }



//  callBack implimention
// function findById(user){
//     console.log(`This is first function   ${user} `)
//   }

//   function callback(callback){
//     const user = users.find((p)=> p.id == id)
//     callback(user)
//   }
//   callback(findById())