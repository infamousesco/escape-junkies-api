
const Joi = require('joi');


const registerValidation = async (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(6).max(10).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    const userValidation = schema.validate(user);
    return userValidation
}

module.exports = registerValidation;