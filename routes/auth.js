const express = require('express');
const router = express.Router();
const User = require('../models/User');
const registerValidation = require('../validation');
 const bcrypt = require('bcrypt');

 const Joi = require('joi');


router.post('/register', async (req, res) => {

    const schema = Joi.object({
        userName: Joi.string().min(6).max(10).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword
        })
    const userValidation = schema.validate(req.body)
    
    try{
        if (!userValidation.error) {
            const savedUser = await user.save()
            res.status(200).json({message: "User created successfully."})
        }else{
            res.status(400).send(userValidation.error.details[0].message)
        }
        }catch (err){
        res.status(400).json({message: "There was an error creating user."})
       
    }
    //res.send(validation)
    // const user = new User({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password
    //     })
    // try {
    //     const savedUser = await user.save()
    //     
    // }catch (err) {
    //    
    // }
     
})

module.exports = router;