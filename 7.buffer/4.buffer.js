/**
 * Created by Yuan on 2016/3/6.
 */
var buf1 = new Buffer(3);
var buf1 = new Buffer([61,65,66]);

var str = '珠峰培训';
var buf3 = new Buffer(str);
console.log(buf3);


var buf = new Buffer(12);

buf.write('珠峰',0,6);
buf.write('珠峰',6,12);
console.log(buf,buf.toString());

const arr = [Buffer('1234'), Buffer('0123')];
arr.sort(Buffer.compare);
console.log(arr);