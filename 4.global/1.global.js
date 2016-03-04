/**
 * Created by yuan on 2016/3/3.
 */
/**
 *
 * @param module
 * @param exports
 * @param require
 * @param __dirname
 * @param __filename
 */
function x(module,exports,require,__dirname,__filename){
    var name = 'zfpx';
    exports.name = name;
    console.log(this,global);
}

process.stdin.on('data',function(data){
    console.log(data.toString());
});

process.stdout.write('hello');

process.argv.forEach(function(val,index,array){
    console.log(val,index,array);
});
console.log(process.pid);

