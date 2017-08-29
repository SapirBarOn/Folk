const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      autoIncrement = require('../database'),

    userSchema = new schema({
        email :     {type:String, index:1, required:true, unique:true},
        userName :  String,
        password :  String,
        era :       [String],
        instr :     [String],
        env :       [String],
        rythm :     Number
    },{collection:'user'}),

    UserSchema = mongoose.model('UserSchema',userSchema);

    module.exports = UserSchema;