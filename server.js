const { urlencoded } = require('body-parser');
const { Console } = require('console');
const express = require('express');
const { stringify } = require('querystring');
const app = express();
const port = 5000;

app.use(express.json())
app.use(urlencoded({extended : false}))

const users = [
    {username: "alice" , age : 25 , email : "alice@example.com"},
    {username: "bob" , age : 30 , email : "bob@example.com"},
    {username: "charlie" , age : 28 , email : "charlie@example.com"}
]

app.get('/get/:user',(req,res)=>{
    const {user} = req.params;

    if(!user){
        res.status(400).send("User parameter cannot be empty");
    }

        let flag = false;
        for(let i=0;i<user.length;i++){
            console.log(users[i].username);
            if(users[i].username == user){
                console.log(users[i]);
                res.status(200).json({"message" : "User found", "data" : users[i]});
                flag = true;
                break;
            }
        }
        if(!flag){
            res.status(404).json({"message": "User not found"})
            console.log("message: User not found");
        }

})
app.listen(port,(req,res)=>{
    console.log("port working on 5000")
})