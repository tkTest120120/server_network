const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    cors = require('cors'),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    myConnection = require('express-myconnection');

const app = express();
// import routes
const customerRoutes = require('./routes/customer');
// routes for react native
const mobileRoutes = require('./routes/mobile');

const apiRoutes = require('./routes/api');

// Định nghĩa nơi lưu trữ , cách lấy file
const storage = multer.diskStorage({
    destination : (req , file , res)=>{
        res(null , './upload')
    },
    filename : (req , file , res)=>{
        res(null , file.originalname )
    }
});
// khai báo đối tượng multer
// lưu trữ trên máy tính với 2 tham số định nghĩa ở trên destination , filename
var upload = multer({ storage : storage });

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
}, 'request'));
// express
app.use(express.urlencoded({ extended: false }));
// routes
app.use('/', customerRoutes);

app.use('/', mobileRoutes);

app.use('/', apiRoutes);
// static file
app.use(express.static(path.join(__dirname, 'public')));
// khởi động server
// const ipAdress = '192.168.43.190';
const ipAdress = '192.168.1.13';
const cong = process.env.PORT || 3000;

app.listen( cong , () => {
    // console.log("Khởi động server tại http://" + ipAdress + ":" + app.get('port'));
    // console.log("Khởi động server tại http://" + 'http://127.0.0.1' +  ":" + app.get('port') );    
    // console.log("Khởi động server tại http://localhost" + ":" + app.get('port') );    
    console.log("Khởi động server tại http://localhost" + ":" + cong ); 
});

// test
//
const ImageSchema = require('./database/databases');
const fs = require('fs');

app.post('/test', upload.single("tenfile"), (req, res) => {
    console.log(req.file);
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString("base64");
    

    const finalImg = new ImageSchema({        
        imgName : 'img',
        image: new Buffer(encode_image, "base64"),
        contentType: req.file.mimetype
    });
    finalImg.save().then(()=>{        
        if (err) return console.log(err);

        console.log("saved to database");
        console.log('\n\t\t\t\t add img thanh cong\n\n');
        res.send('luu anh thanh cong');
    }).catch((err)=>{
        throw err;
    });
});