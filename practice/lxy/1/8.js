/**
 * Created by Administrator on 2016/4/3.
 */
var User = {
    count: 1,
    getCount: function(){
        return this.count;
    }
};

console.log(User.getCount());//1

var func = User.getCount;
console.log(func());//undefined,func无法访问到count属性
