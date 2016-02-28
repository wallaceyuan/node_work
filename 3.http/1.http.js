/**
 * Created by Yuan on 2016/2/28.
 */
var http = require('http');

function serve(request,response){
    console.log(request.method,request.url,request.headers);
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.setHeader('name','yy');
    response.write(new Date().toString());
    response.end();
}


var server = http.createServer(serve);

server.listen(8080,'localhost');
