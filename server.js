const Express = require('express');
const app = Express();
const port = 8000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')

});

app.listen(port, function(){
    console.log('server is running at ${port}')

});
