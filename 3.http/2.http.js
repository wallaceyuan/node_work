/**
 * Created by Yuan on 2016/2/29.
 */
/**
 * Created by Yuan on 2016/2/28.
 */
var http = require('http');
var fs = require('fs');
var mime = require('mime');

function serve(request,response){
    console.log(request.method,request.url);
    var url = request.url;
    if(url == '/'){
        response.statusCode = 200;
        response.setHeader('Content-Type','text/html;charset=utf-8');
        response.setHeader('name','yy');
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        });
    }else{
        static(url,response);
    }
}

function static(url,response){
    response.statusCode = 200;
    response.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8');
    fs.readFile(url.slice(1),function(err,data){
        response.write(data);
        response.end();
    });
}
var server = http.createServer(serve);

server.listen(8080,'localhost');
