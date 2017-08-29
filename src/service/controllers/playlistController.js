const 
    mongoose = require('mongoose'),
    consts = require('../consts/constring'),
    Song = require('../models/Song'),
    Album = require('../models/Album'),
    Popular = require('../models/Popular'),
    UserAlbum = require('../models/UserAlbum'),
    Comment = require('../models/Comment'),
    User = require('../models/User'),
    options = {
        server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
    };



exports.getAllAlbums = (req,res)=>{

    Album.find({

    },callback,populateSongs).limit(8);

    function callback(err,albums){
        if(err){
            console.log(`Problem :: err -> ${err}`);
            return res.status(404).send(err);
        }
        return populateSongs(albums);
    }


    function populateSongs(result){
        Song.populate(result,{
            path:'song',
            model:Song
        },(err,resAfterSongs)=>{
            if(err){
            console.log(`callback() -> ${err}`);
            return res.status(500).json(`{err:${err}}`);
        }
        console.log(`${resAfterSongs}`);
        //return populateSongs(result);
        return res.status(200).send(resAfterSongs);
        });
    }


    // function callback(err,albums){
    //     if(err){
    //         console.log(`Problem :: err -> ${err}`);
    //         return res.status(404).send(err);
    //     }
    //     return populateComments(albums);
    // }


    // function populateComments(result){
    //     Comment.populate(result,{
    //         path:'comment',
    //         model:Comment
    //     },(err,resAfterComments)=>{
    //         if(err){
    //         console.log(`callback() -> ${err}`);
    //         return res.status(500).json(`{err:${err}}`);
    //     }
    //     console.log(`${resAfterComments}`);
    //     return res.status(200).send(resAfterComments);
    //     });
    // }

};




exports.getAlbumById = (req,res)=>{
    console.log(`getAlbumById()`);
    console.log(`req.body.albumId -> ${req.body.albumId}`);

    Album.find({
        _id : req.body.albumId
    },callback,populateSongs);


    function callback(err,result){
        if(err){
            console.log(`callback() -> ${err}`);
            return res.status(500).json(`{err:${err}}`);
        }
        return populateSongs(result);
        // return res.status(200).send(result);
    };

    function populateSongs(result){
        Song.populate(result,{
            path:'song',
            model:Song
        },(err,resAfterSongs)=>{
            if(err){
            console.log(`callback() -> ${err}`);
            return res.status(500).json(`{err:${err}}`);
        }
        //return populateSongs(result);
        return res.status(200).send(resAfterSongs);
        });
    }

    // function callback(err,result){
    //     if(err){
    //         console.log(`callback() -> ${err}`);
    //         return res.status(500).json(`{err:${err}}`);
    //     }
    //     return populateComments(result);
    // };

    // function populateComments(result){
    //     Song.populate(result,{
    //         path:'comment',
    //         model:Comment
    //     },(err,resAfterComments)=>{
    //         if(err){
    //         console.log(`callback() -> ${err}`);
    //         return res.status(500).json(`{err:${err}}`);
    //     }
    //     //return populateSongs(result);
    //     return res.status(200).send(resAfterComments);
    //     });
    // }
};



//static but from server

exports.getPopularAlbums = (req,res)=>{
    Popular.find({}, function(err,popular){
        if(err){
            console.log(`Problem :: err -> ${err}`);
            return res.status(404).send(err);
        }
        console.log(popular);
        return res.status(200).send(popular);
    }).limit(4);
};

exports.getUserAlbums = (req,res)=>{
    UserAlbum.find({}, function(err,userAlbums){
        if(err){
            console.log(`Problem :: err -> ${err}`);
            return res.status(404).send(err);
        }
        console.log(userAlbums);
        return res.status(200).send(userAlbums);
    });
};



exports.getAllComments = (req,res)=>{
    Comment.find({}, function(err,comments){
        if(err){
            console.log(`Problem :: err -> ${err}`);
            return res.status(404).send(err);
        }
        console.log(comments);
        return res.status(200).send(comments);
    });
};





exports.saveNewSong = (req,res)=>{
    console.log(`saveNewSong()`);
    console.log(`req.body.songName -> ${req.body.songName}`);
    console.log(`req.body.singerName -> ${req.body.singerName}`);
    console.log(`req.body.albumName -> ${req.body.albumName}`);
    console.log(`req.body.time -> ${req.body.time}`);
    console.log(`req.body.likes -> ${req.body.likes}`);
    console.log(`req.body.songImg -> ${req.body.songImg}`);

    let newSong = new Song({
        songName : req.body.songName,
        singerName : req.body.singerName,
        albumName : req.body.albumName,
        time : req.body.time,
        likes : req.body.likes,
        songImg : req.body.songImg
    });

    newSong.save(
        (err,result)=>{
        if(err)
            return res.status(404).json(`err:${err}`);
        return res.status(200).send(result);
    });
};

exports.signUpUser = (req,res)=>{
    console.log(`signUpUser()`);
    console.log(`req.body.userName -> ${req.body.userName}`);
    console.log(`req.body.password -> ${req.body.password}`);
    console.log(`req.body.email -> ${req.body.email}`);
    console.log(`req.body.era -> ${req.body.era}`);
    console.log(`req.body.instr -> ${req.body.instr}`);
    console.log(`req.body.env -> ${req.body.env}`);
    console.log(`req.body.rythm -> ${req.body.rythm}`);

    let newUser = new User({
        userName : req.body.userName,
        password : req.body.password,
        email : req.body.email,
        era : [req.body.era],
        instr : [req.body.instr],
        env : [req.body.env],
        rythm : req.body.rythm
    });

    newUser.save(
        (err,result)=>{
            if(err)
                return res.status(500).json(`err:${err}`);
            // return res.status(200).send(result);
        });

    console.log(`[req.body.era] -> `+[req.body.era]);
    Album.find({$or:[
                    {instr : req.body.instr},
                    {era : req.body.era},
                    {env : req.body.env},
                    {rythm : {$gte: (req.body.rythm)-10 , $lte: (req.body.rythm)+10}}]
        },(err,result)=>{
            if(err){
                console.log(`callback() -> ${err}`);
                return res.status(500).json(`{err:${err}}`);
            }
            Song.populate(result,{
            path:'song',
            model:Song
            },(err,resAfterSongs)=>{
                if(err){
                console.log(`callback() -> ${err}`);
                return res.status(500).json(`{err:${err}}`);
            }
            console.log(`${resAfterSongs}`);
            //return populateSongs(result);
            // return res.status(200).send(resAfterSongs);
                Comment.populate(resAfterSongs,{
                path:'comment',
                model:Comment
                },(err,resAfterSongs)=>{
                    if(err){
                    console.log(`callback() -> ${err}`);
                    return res.status(500).json(`{err:${err}}`);
                }
                console.log(`${resAfterSongs}`);
                //return populateSongs(result);
                return res.status(200).send(resAfterSongs);
                
                });
            });
            // return res.status(200).send(result);
        }).limit(8);
};


// exports.saveNweAlbum = (req,res)=>{
//     console.log(`saveNweAlbum()`);
//     console.log(`req.body.albumImg -> ${req.body.albumImg}`);
//     console.log(`req.body.albumName -> ${req.body.albumName}`);
//     console.log(`req.body.djName -> ${req.body.djName}`);
//     console.log(`req.body.djImg -> ${req.body.djImg}`);
//     console.log(`req.body.followers -> ${req.body.followers}`);
//     console.log(`req.body.comment -> ${req.body.comment}`);
//     console.log(`req.body.genre -> ${req.body.genre}`);
//     console.log(`req.body.song -> ${req.body.song}`);
//     console.log(`req.body.instr -> ${req.body.instr}`);
//     console.log(`req.body.era -> ${req.body.era}`);
//     console.log(`req.body.env -> ${req.body.env}`);
//     console.log(`req.body.rythm -> ${req.body.rythm}`);

//     let newAlbum = new Album({
//          albumImg : req.body.albumImg,
//          albumName : req.body.albumName,
//          djName : req.body.djName,
//          djImg : req.body.djImg,
//          followers : req.body.followers,
//          comment : req.body.comment,
//          genre : req.body.genre,
//          song : req.body.song,
//          instr : req.body.instr,
//          era : req.body.era,
//          env : req.body.env,
//          rythm : req.body.rythm
//     });

//     newAlbum.save(
//         (err,result)=>{
//             if(err)
//                 return res.status(500).json(`{err:${err}}`);
//             return res.status(200).send(result);
//         });

// };


exports.login = (req,res)=>{
    console.log(`login()`);
    console.log(`req.body.userName -> ${req.body.userName}`);
    console.log(`req.body.password -> ${req.body.password}`);

    User.findOne({
        userName : req.body.userName
    }, (err,result)=>{
        if(err || !result){
            console.log(`userName not exists -> ${err}`);
            return res.status(500).json(`{userName not exists:${err}}`);
        }
        console.log(`result.password -> `+result.password);
        console.log(`req.body.password -> `+req.body.password);
        if(req.body.password!==result.password){
            console.log(`password is wrong ()`);
            return res.status(405).json(`err:password is wrong`);
        }
        Album.find({$or:[
                    {instr : result.instr},
                    {era : result.era},
                    {env : result.env},
                    {rythm : {$gte: (result.rythm)-10 , $lte: (result.rythm)+10}}]      
        },(err,result)=>{
            if(err){
                console.log(`callback() -> ${err}`);
                return res.status(500).json(`{err:${err}}`);
            }
            Song.populate(result,{
            path:'song',
            model:Song
            },(err,resAfterSongs)=>{
                if(err){
                console.log(`callback() -> ${err}`);
                return res.status(500).json(`{err:${err}}`);
            }
            console.log(`${resAfterSongs}`);
            //return populateSongs(result);
            // return res.status(200).send(resAfterSongs);
                Comment.populate(resAfterSongs,{
                path:'comment',
                model:Comment
                },(err,resAfterSongs)=>{
                    if(err){
                    console.log(`callback() -> ${err}`);
                    return res.status(500).json(`{err:${err}}`);
                }
                console.log(`${resAfterSongs}`);
                //return populateSongs(result);
                return res.status(200).send(resAfterSongs);
                
                });
            });
            // return res.status(200).send(result);
        }).limit(8);
    });
};

    




