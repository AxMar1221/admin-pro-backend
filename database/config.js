const mongoose = require('mongoose');

const dbConnect = async () => {
    
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useUnifiedTopology: true,
        });
        console.log('DB online')
    } catch ( err ) {
        console.log(err);
        throw new Error('Error al iniciar DB')
    }
}

module.exports = {
    dbConnect: dbConnect
}