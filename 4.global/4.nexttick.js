/**
 * Created by yuan on 2016/3/3.
 */
console.log('a扫地');

setTimeout(function(){
    console.log('a端菜 setTimeout');
},0);
process.nextTick(function(){
    console.log('a端菜 nextTick');
});
console.log('b端菜');
console.log('d端菜');

/*while(true){

}*/
