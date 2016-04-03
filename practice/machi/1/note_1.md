#上课笔记（1）

1. 
    res=array.concat(item)，用于拼接数组。

涉及深复制与前复制，浅复制类似于c里说的只是复制了一个指针（如concat，修改item或者array会改变res的内容，同理修改res亦然）；而深复制就是申请一个新内存空间来存放同样的东西，在js里，除了原始值类型可以直接用“=”来复制，其他的都要遍历到原始值再复制。

[这里我谷歌了些关于深复制与浅复制的说法](https://www.zhihu.com/question/23031215
)


2. 高阶函数

foreach与for循环类似，而且没有返回值--这一点也是它与map的区别；map得到的新数组对应对原数组每个元素执行function后的每个返回值；

filter过滤；

3. 闭包

>就是一个函数拥有自己的作用域
[一些资料](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

4. 回调函数
[call](http://www.cnblogs.com/a546558309/p/4201241.html)
[后来找了算是官方的解释吧](https://developer.mozilla.org/cn/docs/Web/JavaScript/Closures)
5. 语义化
确实之前理解得挺失误的……
[谷歌了一下](http://www.css88.com/archives/1668)


6. fork+pr

7. [查文档神器](http://devdocs.io/)

8. chrome的控制台调试，（这里我很郁闷，安上了chrome之后edge里的书签都。不。见。了QAQ）

9. 谢谢老师非常翔实的指导