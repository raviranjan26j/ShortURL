const mongoose = require('mongoose');


async function Connection(url){
return mongoose.connect(url).then(()=> console.log('mongo db is connected'));
}

module.exports = Connection
