/**
 * Created by Khalil on 2016/4/4.
 */
function Convension(str) {
    var tmp = str.split('').sort()
    return tmp.join('')
}
console.log(Convension('dsadafafasfdg'))