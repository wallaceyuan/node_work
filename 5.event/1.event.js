/**
 * Created by yuan on 2016/3/4.
 */
function Person(name){
    this.name = name;
    this._events = {};
}

Person.prototype.on = function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
}



Person.prototype.emit = function(eventName){
    var args = Array.prototype.slice.call(arguments,1);
    var callbacks = this._events[eventName];
    var self = this;
    callbacks.forEach(function(callback){
        callback.apply(self,args);
    });
}


var girl = new Person();

girl.on('长发及腰',function(){
    console.log('待我娶你可好');
});


girl.on('长发及腰',function(){
    console.log('不娶勿撩');
});

girl.emit('长发及腰');


