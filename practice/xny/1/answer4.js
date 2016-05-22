/**
 * Created by Khalil on 2016/4/4.
 */
function spacify(str) {
    var newStr = str.replace(/ /,'').split('');
    return newStr.join(' ')
}
var answer4 = spacify('hello world')
console.log(answer4);
