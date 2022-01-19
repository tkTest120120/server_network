const mongoose = require('mongoose');

const url = "mongodb+srv://minh2408:NBYwESdqItdboEeS@cluster0.i92og.mongodb.net/bai8?retryWrites=true&w=majority";

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("\nKết nối thành công !\n");
}).catch((err)=>{
    console.log("\nKết nối thất bại\n");

    throw err;
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ImageSchema = new Schema({
    imgName : {type : String},
    image : { type: Buffer},
    contentType : {type : String}
});

module.exports = mongoose.model('ImageSchema', ImageSchema);