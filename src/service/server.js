const express = require('express'),
      url = require('url'),
      cors=require('cors'),
      path = require('path'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3000 ,
      playlistController = require('./controllers/playlistController'),
      app = express();

// app.use('/',express.static(`${__dirname}/html`)); //for API
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));   //For parsing POST requests
app.use(cors({origin: '*'}));
app.use( (req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://defolk.herokuapp.com');
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.set("Content-Type", "application/json");
    res.set("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");
    res.setHeader("Content-Type", "application/x-www-form-urlencoded");
    res.setHeader("Content-Type", "multipart/form-data");
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});



app.get('/', (req,res,next) => {
  res.send(`${__dirname}/index.html`);
  req.next();
});

// app.get('/includes/style.css', (req, res) => {
//    res.sendFile(`${__dirname}style.css`);
// });


app.get('/getAllComments', playlistController.getAllComments);
// app.get('/getAllSongs', playlistController.getAllSongs);



app.get('/getAllAlbums', playlistController.getAllAlbums);


app.get('/getPopularAlbums', playlistController.getPopularAlbums);
app.get('/getUserAlbums', playlistController.getUserAlbums);


app.post('/saveNewSong',playlistController.saveNewSong);




app.post('/signUpUser',playlistController.signUpUser);

// app.post('/saveNewAlbum',playlistController.saveNewAlbum);

app.post('/login',playlistController.login);

app.post('/getAlbumById',playlistController.getAlbumById);



app.all('*', (req, res) => {
    res.status(404).send(`Got Lost? This is a friendly 404 Page`);
});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});