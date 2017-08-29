const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      autoIncrement = require('../database'),

    commentSchema = new schema({
        userName : {type:String, index:1, required:true, unique:true},
        comment : String
    },{collection:'comments'}),

    CommentSchema = mongoose.model('CommentSchema',commentSchema);

    module.exports = CommentSchema;
