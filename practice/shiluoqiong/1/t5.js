/**
 * Created by MP on 2016/4/2.
 */
function sortStr(s){
    var sortedS = Array.prototype.slice.call(s).sort().join('');
    return sortedS;
}
console.log(sortStr('cba'));
