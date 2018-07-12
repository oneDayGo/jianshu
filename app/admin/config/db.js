
const mysql = require('mysql');
const config = require('./config.js');


//建立连接的方法


function __connection(){

    var connection = mysql.createConnection({
        host     : config.host,
        user     : config.user,
        password : config.psd,
        database : config.dbname
    });
    connection.connect();
    return connection;
}

exports.query=function(sql){

        
        var connection= __connection();
		
        return new Promise(function(resolve,reject){
        
            connection.query(sql, function (error, results, fields) {
                if (error){reject(error)}
                resolve(results);

            });
            connection.end();
        })
}
