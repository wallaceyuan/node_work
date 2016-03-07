/**
 * Created by yuan on 2016/3/7.
 */
var str = 'Node.js';
var buf = new Buffer(str.length);
for(var i= 0;i<str.length;i++){
    //buf.write(str[i],i,i+1);
    buf[i] = str.charCodeAt(i);
}
console.log(buf);