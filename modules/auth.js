const jwt = require('jsonwebtoken');
const {encrypt}=require('./helpers');

const Users= require('../models/user.model');

exports.login  = (req, res) =>
    Users.findOne({username: req.body.username}, (err, result) => { 
        if (err) return res.status(500).json({ err});       
        if (!result) return res.status(404).json({ result : 'not found!! '});
        
        if (result.password === encrypt(req.body.password, result.salt)) {
            const token = jwt.sign({
                userId: result._id,
            }, 'secretCode123', {'expiresIn' : '1h'});
        
            return res.json({ results : token});

        } else {
            return res.status(404).json({ result : 'not found!!'});
        }
    });

