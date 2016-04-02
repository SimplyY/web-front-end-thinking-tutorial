/**
 * Created by MP on 2016/4/2.
 */
function logEverSecond(){
    for (var i = 0; i < a.length; i++) {
        (function(j){
            setTimeout(function(){
                console.log(a[j]);
            }, j * 1000);
        })(i);
    }
}
logEverSecond();


