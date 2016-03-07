/**
 * Created by yuan on 2016/3/7.
 */
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰');
var buf3 = new Buffer('培');
var buf4 = new Buffer('训');
 var all = Buffer.concat([buf1,buf2,buf3,buf4],12);
 var s = all.slice(9,12);


var buf11 = new Buffer([1,2,3]);
var buf21 = new Buffer([4,5,6]);
var bufs = Buffer.concat([buf11,buf21],6);
console.log(bufs);


