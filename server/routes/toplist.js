const express =  require('express');
const router = express.Router();
const authenticateJWT = require ('../middleware/auth.middleware');
const Url = require("../models/Url");


//@route    GET /
//@desc     Return the 20 most visited sites

router.get('/',authenticateJWT, async(req,res)=>{
    try {
        const url = await Url.find({}).sort({'visits':-1}).limit(20);

        if (url) {
            res.json(url);
        }else{
            return res.status(404).json({"msg":"Not found"});
        }

    } catch (error) {
        console.error(error),
        res.status(500).json({"msg":"Server error"})
    }
})

module.exports = router;