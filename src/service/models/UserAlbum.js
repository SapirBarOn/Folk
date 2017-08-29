const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      autoIncrement = require('../database'),

    userAlbumSchema = new schema({
        albumImg :  {type:String, index:1, required:true, unique:true},
        albumName : String,
        singerName :    String
    },{collection:'userAlbum'}),

    UserAlbum = mongoose.model('UserAlbum',userAlbumSchema);

    module.exports = UserAlbum;