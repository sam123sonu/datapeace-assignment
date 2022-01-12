//this file holds the api to fetch single user through its id....

const User = require("../models/user")


exports.getuser=(async(req,res)=>{ 
    await User.find({id:req.params.id}).then((data)=>{return res.json({status:200,response:data})})
})