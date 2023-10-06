import express from "express"
import AdminModel from "./AdminModel.js";

const AdminRouter = express.Router();

AdminRouter.post("/register",async(req,res)=>{
    let UsertoRegister = new AdminModel(req.body)
    let result = await UsertoRegister.save()
    res.json(result)
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