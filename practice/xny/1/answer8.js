/**
 * Created by Khalil on 2016/4/4.
 */
var User = {
    count:1,

    getCount:function() {
        return this.count;
    }
};

console.log(User.getCount());// 1

var func = User.getCount();
console.log(func());//报错 func is not a function this这里指向的是func不是user 所以func中没有count