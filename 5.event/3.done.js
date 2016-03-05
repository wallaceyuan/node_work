/**
 * Created by Yuan on 2016/3/5.
 */
var fs = require('fs');
var count = 0;
var person = {};
fs.readFile('name.txt','utf-8',function(err,data){
    person.name = data;
    if(++count == 2){
        out();
    }
});

fs.readFile('age.txt','utf-8',function(err,data){
    person.age = data;
    if(++count == 2){
        out();
    }
});

function out(name,age){
    console.log(person.name,person.age);
}