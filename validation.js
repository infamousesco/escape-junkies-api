const Joi = require("joi");

const registerValidation = async (data) => {
  const schema = Joi.object({
    userName: Joi.string().min(6).max(15).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  const userValidation = schema.validate(data.body);

  return userValidation;
};

const loginValidation = async (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  const loginValidation = schema.validate(data.body);

  return loginValidation;
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
