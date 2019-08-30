let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const  db = require('./config/database');

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

db.authenticate()
    .then( () => {
        console.log('success')
    })
    .catch( err => {
        console.log(err)
    });
var port = process.env.PORT || 8080;
// Send message for default URL
app.use('/api/foodapp/usuario',require('./controller/UsuarioController'));
app.use('/api/foodapp/cliente',require('./controller/ClienteController'));
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});