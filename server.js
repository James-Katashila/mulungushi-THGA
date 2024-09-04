const Express = require('express');
const app = Express();
const port = 8000;

app.get('/', function(req, res) {
    res.send('<h1 style = " color:green; text-align:center; text-transform:uppercase; position:relative; top: 50%;  font-size:50px;" > 404 <br> File not found </h1>')

})
app.listen(port, function(){
    console.log('server is running at ${port}')

});
