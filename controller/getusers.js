//this file holds api to fetch multiple user also have
//features like sort,pagination,search (firstname,lastname) through key and limit the page

const User = require("../models/user")


exports.getusers=(async(req,res)=>{ 
    var l=5
    var asc=1
    var attr="id"
    
    const pageOptions = {
        page: parseInt(req.query.page, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 5
    }
    
    if(req.query.sort){
        attr=req.query.sort
    }
    if(attr.charAt(0)=="-"){
        asc=-1
        attr=attr.substring(1)
    }
     if(!req.query.name){
        await User.find().skip(pageOptions.page * pageOptions.limit).sort({[attr]:asc}).limit(pageOptions.limit).then((data)=>{return res.json({status:200,response:data})})
        .then((err)=>{return res.json({status:0,msg:err})})
    }
    else{
        key=req.query.name
        await User.find({$or:[{
            first_name: { $regex: key, $options: 'i'}
          },
          {
            last_name: { $regex: key, $options: 'i'}
          }]}).skip(pageOptions.page * pageOptions.limit).sort({[attr]:asc}).limit(pageOptions.limit).then((data)=>{return res.json({status:200,response:data})})
          .then((err)=>{return res.json({status:0,msg:err})})
    }
})