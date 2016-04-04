/**
 * Created by Khalil on 2016/4/4.
 */
function Logbytime(arr) {
    var a = ['a', 'b', 'c', 'd']
    for(var i = 0; i < a.length;i++)
    {
        (function(j){setTimeout(function(){console.log(a[j]);}, j * 1000);})(i);
        //var t = setTimeout(function(){console.log(a[i]);}, 1000);
    }
}
var answer6 = Logbytime();