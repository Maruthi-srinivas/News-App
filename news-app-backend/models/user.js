const mongoose = require('mongoose');//Object Data Modeling
const jwt = require('jsonwebtoken');//creating and verifying JSON Web Tokens
const Joi = require('joi');//validation library for javascript
const passwordComplexity = require('joi-password-complexity')//provides password complexity validation.

const userSchema = new mongoose.Schema({
    name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
        type: String,
        required: true,
    },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) =>{
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}

module.exports = {User, validate}