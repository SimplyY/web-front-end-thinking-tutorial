(function() {
    var search = document.getElementById('search');
    var ul = document.createElement('ul');
    search.appendChild(ul);

    var inputNode = document.getElementsByTagName('input')[0];
    var data = ['ab', 'abe', 'ansjka', 'bc', 'bgs', 'cs', 'dw', 'eac', 'fg', 'gw'];

    listenChange();

    //listening the change of input
    function listenChange(){
        if(inputNode.addEventListener){
            inputNode.addEventListener('input', handler, false);
        }else if(inputNode.attachEvent){
            //IE8及以下
            inputNode.attachEvent('onpropertychange', handler);
        }
    }

    //if the inputText change, call the callback function
    function handler(){
        var inputVal = (inputNode.value).trim();
        if(!inputVal){
            clear();
            return;
        }
        clear();
        autoSuggest(inputVal);
        replaceContent(ul);
    }

    function autoSuggest(value){
        var listNode;
        var list = findResults(value);

        for (var i = 0, len = list.length; i < len; i++) {
            listNode = document.createElement('li');
            listNode.className= "li";
            listNode.innerHTML = list[i];
            ul.appendChild(listNode);
        }
    }

    function replaceContent(ul){
        //click
        delegate(ul, 'li', 'click', function(){
            //this.innerHTML获取target的内容
            inputNode.value = this.innerHTML;
            //after click,remove list
            clear();
        });

        //keydown
        keyMove();
    }

    function delegate(parent, child, eventName, handler){
        var childNode = parent.querySelectorAll(child);
        var childArr = Array.prototype.slice.call(childNode);

        parent.addEventListener(eventName, function(e){
            e = e || window.event;
            var eventTarget = e.target || e.srcElement;

            if(childArr.indexOf(eventTarget) !== -1){
                handler.call(eventTarget, e);
            }
        }, false);
    }

    function keyMove(){
        document.onkeydown = function(event){
            event = event || window.event;
            var currentLi = document.getElementsByClassName('active')[0];

            //向上
            if(event.keyCode === 38){
                if(currentLi){
                    var preLi = currentLi.previousSibling;
                    if(preLi){
                        removeClass(currentLi, 'active');
                        addClass(preLi, 'active');
                    }
                }
            }
            //向下
            if(event.keyCode === 40){
                if(!currentLi){
                    currentLi = ul.getElementsByTagName('li')[0];
                    addClass(currentLi, 'active');
                }else{
                    var nextLi = currentLi.nextSibling;
                    if(nextLi){
                        removeClass(currentLi, 'active');
                        addClass(nextLi, 'active');
                    }
                }

            }
            //enter
            if(event.keyCode === 13){
                inputNode.value = currentLi.innerHTML;
                clear();
            }
        };
    }

    //get match results
    function findResults(value){
        var re = new RegExp('^' + value);
        var list = [];

        for (var i = 0, len = data.length; i < len; i++) {
            if(re.test(data[i])){
                list.push(data[i]);
            }
        }

        return list;
    }

    function clear(){
        var listNode = ul.getElementsByClassName('li');

        for (var len = listNode.length, i = len - 1; i >= 0; i--) {
            ul.removeChild(listNode[i]);
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
