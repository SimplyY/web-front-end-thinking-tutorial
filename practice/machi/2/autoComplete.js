/**
 * Created by j on 2016/4/6.
 */
var array = ["a","add","fft","ssd","dct","ddt","asdfgs","abd","asdrrr"];
function autoComplete(document,data) {
    var  element = document.getElementById("demo");
    var board = document.getElementById("tip");
    var CompleteArray=[];
    element.addEventListener("input",OnCheck,false);

    function OnCheck() {
        CleanLastComplete();
        FindThisResult(array);
        ShowComplete(array);
        // document.write(input.value);
    }

    function CleanLastComplete(data) {
        while(board.hasChildNodes())  //删除所有子节点
        {
            board.removeChild(board.firstChild);
        }
    }

    function FindThisResult(data){

        function ismatch(str){
            if(str.indexOf(element.value)==0){//实在不知道这里字符串匹配要用什么鬼……作用上感觉这样用差不多于是…
                return str;
            }
        }
        if(element.value){
            CompleteArray=data.filter(ismatch);
        }else{
            CompleteArray=null;
        }

    }

    function   ShowComplete(data){
        console.log(element.value);
        if(CompleteArray){
            CompleteArray.forEach(
                function produce(item){
                    var e = document.createElement("div");
                    e.innerHTML=item;
                    board.appendChild(e);
                }
            );
        }

        /* data.forEach(
         function produce(item){
         if(item.match(element.value)){

         var e = document.createElement("div");
         //    e.type = "button";
         //   e.size=100;
         e.innerHTML=item;
         board.appendChild(e);

         //   e.innerHTML='<button >element.value</button>';


         }
         }
         )*/
    }
}(document,array)

