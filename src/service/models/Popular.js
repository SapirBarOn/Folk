const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      autoIncrement = require('../database'),

    popularSchema = new schema({
        albumImg :  {type:String, index:1, required:true, unique:true},
        albumName : String,
        djName :    String,
        djImg :     String,
        followers : Number,
        likes:      Number 
    },{collection:'popular'}),

    PopularSchema = mongoose.model('PopularSchema',popularSchema);

    module.exports = PopularSchema;