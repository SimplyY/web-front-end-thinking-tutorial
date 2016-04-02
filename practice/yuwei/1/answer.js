// 1.将数字字符串:'123'转化为数字：123：
var str = '123';
var number = parseInt(str, 10);
console.log(number);

// 2.使用Number函数将数字字符串数组：['1','2']转化为数字数组：[1,2]:
var ary = ['1','2'];
var numberArr = ary.map(Number);
console.log(numberArr);

//3.将集合转化为真正的数组
var childCollection = document.querySelectorAll('div');
var childs = Array.prototype.slice.call(childCollection);

//4.写一个spacify函数，使得spacify('hello world')，返回'h e l l o w o r l d'
function spacify(str){
    var newStr = str.replace(/\s/g,'').split('').join(' ');
    console.log(newStr);
    return newStr;
}
spacify('hello world'); //'h e l l o w o r l d'

//5.写一个函数，将英文字符串重新按照字母排序，比如cba，返回abc
function sortStr(str){
    var sortedStr = Array.prototype.slice.call(str).sort().join('');
    console.log(sortedStr);
    return sortedStr;
}
sortStr('cbdae'); //abcde

//6.var a = ['a', 'b', 'c', 'd']，每过1秒log一下数组中的值（闭包）
function logEverSecond(){
    var a = ['a', 'b', 'c', 'd'];
    for (var i = 0; i < a.length; i++) {
        (function(j){
            setTimeout(function(){
                console.log(a[j]);
            }, j * 1000);
        })(i);
    }
}
logEverSecond();

//7.定义log，然后它可以代理console.log的方法（使用apply）
function log(){
    console.log.apply(console, arguments);
}
log('sss');

//8.写出打印的输出（this指向）
var User = {
    count: 1,

    getCount: function(){
        return this.count;
    }
};

console.log(User.getCount()); //1，this指向User，打印User.count

var func = User.getCount;
console.log(func()); //undefined
