/**
 * Created by yuan on 2016/3/3.
 */
process.argv.forEach(function(val,index,array){
    console.log(val,index,array);
});

process.kill(5324);

process.on('exit',function(){
    console.log('退出前执行');
});