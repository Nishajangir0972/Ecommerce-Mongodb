import express from "express"
import AdminModel from "./AdminModel.js";
import bcrypt from "bcryptjs"

const AdminRouter = express.Router();

AdminRouter.post("/register",async(req,res)=>{
    let{name ,email,username , password} = req.body
    bcrypt.hash(password , 10 , async(err,hash)=>{
        if(err){
            console.log(err);
            return null
        }
        console.log(hash);
        password = hash
        let UsertoRegister = new AdminModel({name ,email, username, password})
        let result = await UsertoRegister.save()
        console.log(result)
    })
   
})

AdminRouter.post("/login",async(req,res)=>{
    if (req.body.username && req.body.password) {
        let usertologin = await AdminModel.findOne(req.body).select("-password")

        if (usertologin) {
            res.send(usertologin)
        } else {
            res.send({ result: "no user found" })
        }
    }
    else {
        res.send({ result: "Plzz Enter both fields" })
    }
})


export default AdminRouter