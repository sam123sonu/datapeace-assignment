const User = require('../models/user');


var deleteuser = async(req, res) => {
            await User.findOneAndDelete({id: req.params.id})
            .then((data)=>{
                return res.json({status:200,message:data});
            }).catch((err)=> {
            return res.json({status:0,message:err});
        });
};

module.exports = { deleteuser } 