//this file is for adding new user data to the database......

const User=require("../models/user")

exports.createuser=(function(req,res){ 
        const userdata = new User({
            id:req.body.id,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            company_name:req.body.company_name,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            email:req.body.email,
            web:req.body.web,
            age:req.body.age
        })

    console.log(userdata)
    userdata.save(function(err,result){
        if (err){
            console.log(err)
            return res.json({status:0,message:err});
            
        }
        else{
            return res.json({status:201,message:"userdata saved to database"});
        }
    })
})
