/**
 * Created by MP on 2016/4/2.
 */
function spacify(s) {
    var result = "";
    for(var i = 0; i < s.length; i++){
        if(s.charAt(i) != ' ')
            result += s.charAt(i);
        result += " ";
    }
    return result;
}
spacify('hello world');