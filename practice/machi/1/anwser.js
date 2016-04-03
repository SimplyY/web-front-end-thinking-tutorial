/**
 * Created by j on 2016/3/31.
 */
/**
 * Created by j on 2016/3/31.
 */
// 1.将数字字符串:'123'转化为数字：123：
var turnArray = '123';
var res1=parseInt(turnArray,10);
console.log('the result of q1:'+res1);

// 2.使用Number函数将数字字符串数组：['1','2']转化为数字数组：[1,2]:
var ary = ['1','2'];
var numberArr = ary.map(Number);
console.log('the result of q2:'+numberArr);

//3.将集合转化为真正的数组
console.log('the result of q3:please move to index.html');

//4.写一个spacify函数，使得spacify('hello world')，返回'h e l l o w o r l d'
var item ='hello world';
var str4=[];
function spacify(str){
    str4= str.split("");

    return str4.join(' ');
}
var res4=spacify(item);
console.log('the result of q4:'+res4);

//5.写一个函数，将英文字符串重新按照字母排序，比如cba，返回abc
/*function q5(str){
    var string=[];
    var str5 = [];
    string = str.split("");
    var num = string.length;
    for(var i=0;i<num;i++)
        str5.push(string.pop());
    return str5.join('');
}
var str5 = 'abc';
var res5 = q5(str5);
console.log('the result of q5:'+res5);*/

function sortStr(str){
    var sortedStr = Array.prototype.slice.call(str).sort().join('');
    //Array.prototype.slice把类数组转化为数组
    console.log(sortedStr);
    return sortedStr;
}
var res5= sortStr('cbdae'); //abcde
console.log('the result of q5:'+res5);
//http://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html
//原型看不大明白…
//6.var a = ['a', 'b', 'c', 'd']，每过1秒log一下数组中的值（闭包）
console.log('the result of q6:please move to index.html');

//7.定义log，然后它可以代理console.log的方法（使用apply）
function log(){
    console.log.apply(console, arguments);
};
log('the result of q7');

//8.写出打印的输出（this指向）
var User ={
    count:1,
    getCount:function(){
        return this.count;
    }
};
console.log(User.getCount());
var func =User.getCount;
console.log(func());
console.log('the first print this means User,while the second means null');
