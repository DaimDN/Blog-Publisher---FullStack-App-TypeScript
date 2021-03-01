const Mongoose = require('mongoose')
const config = require('config')
const db = config.get('MongoURI')

export const ConnectToDatabase = async () : Promise<void>=>{
    try {

        await Mongoose.connect(db,
            {useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            });
            console.log("Database has been connected to the database Server");

        
    } catch (error) {
        throw error;
        console.log("Error Establishing Connection ");
        process.exit(1);
    }

}


