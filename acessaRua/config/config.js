const config = {
    port: 3000,
    //número do ip.
    ip: '127.0.0.1',
    //Informações do bd
    mongoDb:{
        //Nome do meu banco.
        database: 'acessaRua',
        //Endereço
        host: '127.0.0.1',
        //Porta do banco.
        port: 27017,
        connectionString:()=>{
            string=`mongodb://${config.mongoDb.host}:${config.mongoDb.port}/${config.mongoDb.database}`;
            return string;
        }
    }
}

function init(){
    global.config = config;
}

module.exports = init();