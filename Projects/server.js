const express = require('express');
const app = express();
const port = 8080;

    app.use(express.static(__dirname));
    app.listen(port, function() {
        console.log('listening on', port);
    });

    app.set('view engine', 'pug');

    // app.use

    // app.get('/', function(req, res) {
    //     res.sendFile(__dirname + '/index.html');
    // });

    // app.get('/magicCarpet', function(req, res) {
    //     res.sendFile(__dirname + '/magicCarpet.html');
    // });

    // app.get('/lint', function(req, res) {
    //     res.render('index', {pokémon: });
    // });

