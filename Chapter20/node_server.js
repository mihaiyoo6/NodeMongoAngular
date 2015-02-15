var express = require('express');
var app = express();
app.use('/', express.static('./static')).
    use('/images', express.static( '../images')).
    use('/lib', express.static( '../lib'));
var port = process.env.PORT || 3300;
app.listen(port);