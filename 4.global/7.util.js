/**
 * Created by yuan on 2016/3/4.
 */

var util = require('util');

function Parent(){
    this.name = 'Parent';
    this.age = '40';
    this.say = function(){
        console.log('hello',this.name,this);
    }
}

function Child(){
    this.name = 'Child';
    this.age = '10';
    this.say = function(){
        console.log('hello',this.name);
    }
}
//Child.prototype = new Parent();
//Child.prototype = Object.create(Parent.prototype);

Parent.prototype.sayName = function(){
    console.log(this.name);
}
util.inherits(Child,Parent);

var child = new Child();

//child.sayName();
console.log(child.__proto__  === Child.prototype);//{ name: 'Parent', age: '40', say: [Function] }
console.log(child.__proto__.__proto__ === Parent.prototype);//{ sayName: [Function] }
console.log(child.__proto__.__proto__.__proto__  == Object.prototype);//{}



function Person(){
    this.name = 'zfpx';
    this.parent = {name:'parent'};
    this.child = {name :{age:10, sex:'nv'}}
}

Person.prototype.toString = function(){
    console.log('this is',this.name);
}

var p = new Person();

p.toString();

console.log(util.inspect(p,true,2,true));

var arr1 = [1,2];
var arr2 = [3,4];

//console.log(arr1.concat(arr2));

Array.prototype.push.apply(arr1,arr2);
//Array.prototype.push.call(arr1,arr2);

console.log(arr1);

console.log(util.isArray(arr1));

var pp = new Person();
console.log(pp.child);
console.log(util.format(pp.child));






