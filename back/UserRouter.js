import express from "express"
import UserModel from "./UserModel.js";
import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

const Secretkey = 'nisha-jangir'


const UserRouter = express.Router();

UserRouter.post("/register",async(req,res)=>{
    let{name ,email,username , password} = req.body

    bcrypt.hash(password , 10 , async(err,hash)=>{
        if(err){
            console.log(err);
            return null
        }
        console.log(hash);
        password = hash
        let UsertoRegister = new UserModel({name ,email, username, password})
        let result = await UsertoRegister.save()
        console.log(result)
        res.json(result)
    })
    // let UsertoRegister = new UserModel(req.body)
    // let result = await UsertoRegister.save()
    // res.json(result)
})
UserRouter.post("/login",async(req,res)=>{
    if(req.body.username && req.body.password){
        let usertologin = await UserModel.findOne({username:req.body.username})
        bcrypt.compare(req.body.username , usertologin.password,(err,result)=>{
            if(err || !result){
                res.status(401).json({ message: 'Authentication failed' });
                console.log(err, result);
            }
            else {
                const paylod = {username:usertologin}
                const token = Jwt.sign(paylod,Secretkey,{expiresIn:'1h'})
                // console.log("Matched");
                res.send(usertologin ,token)
            }
            
        })
//         jwt.sign({user},Secretkey, {expiresIn:'300s'}, (err,token)=>{
// res.json({
//     token 
// })
//         })
    }


    // if (req.body.username && req.body.password) {
    //     let usertologin = await UserModel.findOne(req.body).select("-password")

    //     if (usertologin) {
    //         res.send(usertologin)
    //     } else {

    //         res.send({ result: "no user found" })
    //     }
    // }
    // else {
    //     res.send({ result: "Plzz Enter both fields" })
    // }
})

export default UserRouter