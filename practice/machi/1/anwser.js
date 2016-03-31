/**
 * Created by j on 2016/3/31.
 */
/**
 * Created by j on 2016/3/31.
 */
var str1='123';
var array1;
var res1=parseInt(str1,10);
console.log('the result of q1:'+res1);

var array = ['1','2'];
var numbers=[];
array.map(
    function(a)
    {
        numbers.push(parseInt(a));
    }
)
console.log('the result of q2:'+numbers);

console.log('the result of q3:please move to index.html');

var item='hello world';
var str4=[];
function spacify(str){
    str4= str.split("");

    return str4.join(' ');;
}
var res4=spacify(item);
console.log('the result of q4:'+res4);

function q4(str){
    var string=[];
    var str5 = [];
    string = str.split("");
    var num = string.length;
    for(var i=0;i<num;i++)
        str5.push(string.pop());
    return str5.join('');
}
var str5='abc';
var res5 = q4(str5);
console.log('the result of q5:'+res5);
console.log('the result of q6:please move to index.html');

function log(){
    console.log.apply(console, arguments);
};
log('the result of q7');

var User ={
    count:1,
    getCount:function(){
        return this.count;
    }
};
console.log(User.getCount());
var func =User.getCount;
console.log(func());
console.log('i dont know do what...');