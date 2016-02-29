/**
 * Created by Yuan on 2016/2/29.
 */
/**
 * Created by Yuan on 2016/2/28.
 */
var http = require('http');
var fs = require('fs');

function serve(request,response){


    var url = request.url;

    if(url == '/'){
        response.statusCode = 200;
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.setHeader('name','yy');
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        });
    }else if(url =='/style.css'){
        response.statusCode = 200;
        response.setHeader('Content-Type','text/css;charset=utf-8');
        fs.readFile('style.css',function(err,data){
            response.write(data);
            response.end();
        });
    }
    console.log(request.method,request.url);
}


var server = http.createServer(serve);

server.listen(8080,'localhost');
