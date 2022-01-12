const User = require('../models/user');


var updateuser = async(req, res) => {
            await User.findOneAndUpdate({id: req.params.id}, {$set: req.body})
            .then((data)=>{
                return res.json({status:200,message:data});
            }).catch((err)=> {
                console.log(err)
            return res.json({status:0,message:err});
        });
};

module.exports = { updateuser } 