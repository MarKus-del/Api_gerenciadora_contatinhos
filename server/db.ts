import { error } from 'console';
import * as mongoose from 'mongoose';

class DataBase {

    private dburl = 'mongodb://127.0.0.1/api-node-ts';
    private dbconnection;

    constructor(){ }

    createConnection(){
        mongoose.connect(this.dburl, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        this.logger(this.dburl);
    }

    logger(uri){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log("mongoose está conectado"));
        this.dbconnection.on('error', error => console.error.bind(console, "erro na conexão" + error));
    }


}

export default DataBase;