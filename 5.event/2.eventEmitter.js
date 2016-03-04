/**
 * Created by yuan on 2016/3/4.
 */
var EventEmitter = require('events');
var util = require('util');

function Bell(name){
    this.name = name;
}

util.inherits(Bell,EventEmitter);
var jingleBell = new Bell('jingle');

jingleBell.on('ring',function(){
    console.log('收到礼物1');
});
jingleBell.addListener('ring',function(who){
    console.log(who+'收到礼物2');
});

var drop = function(who){
    console.log(who,'丢了');
}
jingleBell.once('drop',drop);
//jingleBell.removeAllListeners('drop');
//jingleBell.removeAllListeners('ring');

/*var drop = function(who){
    console.log(who,'铃铛丢了');
};*/
jingleBell.emit('ring','我');
jingleBell.emit('drop','鹿');