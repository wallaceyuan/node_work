/**
 * Created by Yuan on 2016/3/5.
 */
var Person = require('./Human');
console.log(Person);

var girl = new Person('小龙女',28);
var boy = new Person('杨过',15);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());
