const jwt = require('jsonwebtoken');
const config = require('config');

exports.authUser = (req, res) =>{

    const {user,password} = req.body;

    //Here will be the connection to database to check for the user but since is not required a default user is used.


    if (req.body.user !== config.get('defaultUser')) {
        return res.status(401).json({ msg: "Invalid user" });
    }

    if (req.body.password !== config.get('defaultPassword')) {
        return res.status(401).json({ msg: "Invalid password" });
    }

    const payload = {
        user
    };


    jwt.sign(payload, config.get('secretWord'),{
        expiresIn:3600
    }, (error, token)=>{
        if(error) throw error;

        res.json({token});
    })

}

