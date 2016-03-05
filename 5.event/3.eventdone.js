/**
 * Created by Yuan on 2016/3/5.
 */
/**
 * Created by Yuan on 2016/3/5.
 */
var fs = require('fs');

var EventEmitter = require('events');

var eve = new EventEmitter();
var person = {};

fs.readFile('name.txt','utf-8',function(err,data){
    person.name = data;
    eve.emit('done',person.name);
});

fs.readFile('age.txt','utf-8',function(err,data){
    person.age = data;
    eve.emit('done',person.age);
});

eve.on('done',function(data){
    if(person.name && person.age)
        console.log(person.name,person.age);
});

