const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    myConnection = require('express-myconnection');

const app = express();
// import routes
const customerRoutes = require('./routes/customer');
// routes for react native
const mobileRoutes = require('./routes/mobile');
// cài đặt path
app.set('port', 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// để post data json
app.use(bodyParser.json() );
// cors
app.use(cors());
// kết nối database
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: '37.59.55.185',
    user: 'JnWiETIzRg',
    password: '47tKHpVqR3',
    port: 3306,
    database: 'JnWiETIzRg'
}, 'single'));
// express
app.use(express.urlencoded({ extended: false }));
// routes
app.use('/', customerRoutes);

app.use('/', mobileRoutes);
// static file
app.use(express.static(path.join(__dirname, 'public')));
// khởi động server
// const ipAdress = '192.168.43.190';
const ipAdress = '192.168.1.13';
const cong = process.env.PORT;

app.listen( cong , () => {
    // console.log("Khởi động server tại http://" + ipAdress + ":" + app.get('port'));
    // console.log("Khởi động server tại http://" + 'http://127.0.0.1' +  ":" + app.get('port') );    
    // console.log("Khởi động server tại http://localhost" + ":" + app.get('port') );    
    console.log("Khởi động server tại http://localhost" + ":" + cong ); 
});

// test

// app.post('/test', (req, res) => {

// });