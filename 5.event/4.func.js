/**
 * Created by Yuan on 2016/3/5.
 */
var eventEmmit = require('events');

var event = new eventEmmit();

function say(name,word){
    console.log(name,":",word);
}
//var sayName = say.bind(this,'daredevil');

function sayName(){
    say.apply(this,['张三'].concat(Array.prototype.slice.call(arguments)));
}

sayName('i love you');
sayName('i hate you');

var count = 0;

function eat(times,callback){
    console.log(times,count);
}
var newEat = eat.bind(this,5,function(){
    console.log('吃完了');
});
event.on('newEat',function(){
    count++;
    console.log(count);
});
event.emit('newEat');
event.emit('newEat');
event.emit('newEat');

/*newEat();
newEat();
newEat();
newEat();*/


/*var count = 0;
function eat(time,callback){
    console.log(time,count);
    if(count == time){
        callback();
    }
}*/

/*
var newEat =  eat.bind(this,5,function(){
    console.log('吃完了');
});

event.on('newEat',function(){
    count++;
});

event.emit('newEat');
event.emit('newEat');
event.emit('newEat');
event.emit('newEat');
event.emit('newEat');*/



