const mongoose = require('mongoose')

const url= "mongodb+srv://root:password123*@adorable-abagizal-impac.49yv3.mongodb.net/impact_store";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;


module.exports = db;