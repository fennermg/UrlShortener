const express =  require('express');
const router = express.Router();

const Url =  require('../models/Url');

//@route    GET /:code
//@desc     Return the long URL

router.get('/:code', async(req,res)=>{
    try {
        const url = await Url.findOne({urlCode: req.params.code})

        if (url) {
            res.json(url)
        }else{
            return res.status(404).json({"msg":"Not found"});
        }

    } catch (error) {
        console.error(error),
        res.status(500).json({"msg":"Server error"})
    }
})

module.exports = router;