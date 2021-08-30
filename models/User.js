const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name:{
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true, //space remove
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type:Number //토큰 사용기간
    }

})

const User = mongoose.model('User',userSchema)

module.exorts = {User}