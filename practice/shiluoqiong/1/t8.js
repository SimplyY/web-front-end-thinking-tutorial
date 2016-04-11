/**
 * Created by MP on 2016/4/2.
 */
var User = {
    count: 1,

    getCount: function(){
        return this.count;
    }
};

console.log(User.getCount()); //1

var func = User.getCount;
console.log(func()); //undefined