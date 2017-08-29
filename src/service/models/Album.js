const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      autoIncrement = require('../database'),

    albumSchema = new schema({
        albumImg :  {type:String, index:1, required:true, unique:true},
        albumName :   String,
        albumImgSub : String,
        albumImgPlayer:String,
        djName :      String,
        djImg :       String,
        djImgSub:     String,
        djUrl:        String, 
        followers :   Number,
        comment :     [String],
        genre :       String,
        song :        [String],
        instr :       [String],
        era :         [String],
        env :         [String],
        rythm:        Number,
        likes:        Number,
        rate:         Number
    },{collection:'albums'}),

    AlbumSchema = mongoose.model('AlbumSchema',albumSchema);

    module.exports = AlbumSchema;