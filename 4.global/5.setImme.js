/**
 * Created by yuan on 2016/3/4.
 */
var fs = require('fs');

fs.readFile('1.txt',function(err,data){
    console.log(data.toString());
});

setTimeout(function(){
    console.log('setTimeout');
})

process.nextTick(function(){
    console.log('a');
    process.nextTick(function(){
        console.log('b');
    });
});

setImmediate(function(){
    console.log('ab');
    setImmediate(function(){
        console.log('cd');
    });
});//比setTimeout 优先级低 比异步io优先级高

// nextTick> setTimeout>setImmediate>异步IO