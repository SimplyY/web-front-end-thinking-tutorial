(function(){
var myArray = ["1","12","23","234","345","457","578"];
var begin = document.getElementById("begin");
/*var focus = document.getElementById('input');  为什么这个返回function(){[native code]}*/
/* var newinput= document.getElementById('input');    为什么报错？？*/
var ul = document.createElement('ul');
begin.appendChild(ul);
var inputArray =  document.getElementsByTagName("input")[0]    ;


judgment();

function judgment(){
    if(inputArray.addEventListener){
        clearNode();
        inputArray.addEventListener("input",addArray);
    }
}


function addArray(){
    var inputVal = inputArray.value;
    var nArray = [];
    for(var i = 0;i < myArray.length; i++) {
        if((myArray[i].indexOf(inputVal)) == 0){
            nArray[i] = myArray[i];
            addNode(nArray[i]);
        }

    }
}

function addNode(str){
    var li = document.createElement('li');
    li.ClassName = "li";
    li.innerHTML = str;
    ul.appendChild(li);
}

function clearNode(){
    var ulNode = ul.getElementsByClassName('li');
    for(var l = 0;l < ulNode.length;l++){
        ul.removeChild(ulNode[l]);
    }
}



}());
