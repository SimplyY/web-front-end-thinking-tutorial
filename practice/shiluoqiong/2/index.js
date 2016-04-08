/**
 * Created by luoqiong on 2016/4/7.
 */
(function(){
    //获取div search 和 input
    var search = document.getElementById('search');
    var inputNode = document.getElementsByTagName('input')[0];
    //新建ul，用来放自动补全的字符串，向search添加ul结点
    var ul = document.createElement('ul');
    search.appendChild(ul);
    var data = ['ab','bc','abc','bcd','cde','daidaidai','dyyre'];

    listenChange();

    //监听变化
    function listenChange(){
        if(inputNode.addEventListener){
            inputNode.addEventListener('input', handler, false);
        }else if(inputNode.attachEvent) {
            //IE
            inputNode.attachEvent('onpropertychange', handler);
        }
    }

    //若监听到输入框有变化，则调用回调函数handler
    function handler() {
        //获得输入框中的字符串
        var inputStr = inputNode.value;
        if(!inputStr) {
            clearBox();
            return;
        }
        //每一次改变都把原来匹配的结果数组删除
        //然后根据现在的输入自动匹配
        clearBox();
        autoSuggest(inputStr);
        replaceContent(ul);
    }

    function replaceContent(ul){
        //click

        //keyDowm
        keydown();
    }

    //将匹配到的字符串添加到ul中   
    function autoSuggest(value){
        var liNode;
        var list = stringMatch(value);

        for(let i = 0; i < list.length; i++) {
            liNode = document.createElement('li');
            liNode.className = "li";
            liNode.innerHTML = list[i];
            ul.appendChild(liNode);
        }
    }

    //根据每次的值匹配结果并返回
    function stringMatch(value) {
        var result = new RegExp('^' + value);
        var list = [];
        for(let i = 0; i < data.length; i++)
            if(result.test(data[i]))
                list.push(data[i]);
        return list;
    }

    function clearBox() {
        var listNode = ul.getElementsByTagName('li');
        for(let i = listNode.length - 1; i >= 0; i--)
            ul.removeChild(listNode[i]);
    }

    function keydown(){
        document.onkeydown = function(event){
            event = event || window.event;
            var currentLi = document.getElementsByClassName('active')[0];

            //up
            if(event.keyCode == 38){
                if(currentLi){
                    var preLi = currentLi.previousSibling;
                    if(preLi) {
                        removeClass(preLi,'active');
                        addClass(currentLi,'active');
                    }
                }
            }
            //dowm
            if(evnet.keyCode == 40){
                if(currentLi){
                    var nextLi = currentLi.nextSibling;
                    if(nextLi){
                        removeClass(currentLi,'active');
                        addClass(nextLi,'active');
                    }
                }
            }
            //enter
            if(event.keyCode == 13){
                inputNode.value = currentLi.innerHTML;
                clearBox();
            }
        }
    }

    //无论添加class还是移除class，先判断class是否存在。
    function hasClass(element, className) {
        //正则匹配，存在class时返回数组，不存在时返回null
        var classes = element.className.match(/\S+/g);

        if (classes === null || classes.indexOf(className) === -1) {
            return false;
        } else {
            return true;
        }
    }

    // 为element增加一个样式名为newClassName的新样式
    function addClass(element, newClassName) {
        if (!hasClass(element, newClassName)) {
            //兼顾到原来已经有不同的样式
            element.className = (element.className + ' ' + newClassName).trim();
        }
    }

    // 移除element中的样式oldClassName
    function removeClass(element, oldClassName) {
        if (hasClass(element, oldClassName)) {
            var temp = element.className.replace(oldClassName, "");
            element.className = temp.trim();
        }
    }

}());