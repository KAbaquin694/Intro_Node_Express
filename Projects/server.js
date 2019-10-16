const express = require('express');
const app = express();
const port = 8080;
    app.use(express.static(__dirname));
    app.listen(port, function() {
        console.log('listening on', port);
    });

    // app.set('view engine', 'pug');

    // app.get('../', function (req, res) {
    //     res.render('index', { title: 'Hey', message: 'Hello there!' })
    //   });