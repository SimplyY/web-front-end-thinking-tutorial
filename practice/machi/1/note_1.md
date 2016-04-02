#上课笔记（1）

1.<pre><code>var res=array.concat(item)
  </code></pre>，用于拼接数组。

涉及深复制与前复制，浅复制类似于c里说的只是复制了一个指针（如concat，修改item或者array会改变res的内容，同理修改res亦然）；而深复制就是申请一个新内存空间来存放同样的东西，在js里，除了原始值类型可以直接用“=”来复制，其他的都要遍历到原始值再复制。

[这里我百度了些关于js内存的机制的说法](http://www.2cto.com/kf/201506/409654.html
)
[还有这个](http://tieba.baidu.com/p/2310739951
)

2.高阶函数

foreach与for循环类似，而且没有返回值--这一点也是它与map的区别；map得到的新数组对应对原数组每个元素执行function后的每个返回值；

filter过滤；

3.闭包

>就是一个函数拥有自己的作用域
[一些资料](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

4.回调函数
[call](http://www.cnblogs.com/a546558309/p/4201241.html)

5.语义化

课程里老师曾提到过这个，感觉是说能够让机器理解代码然后工作就像人类理解语言一样，这个在html里也有说到，但是不知道有什么作用。

6.fork+pr

7.[查文档神器](http://devdocs.io/)

8.chrome的控制台调试，（这里我很郁闷，安上了chrome之后edge里的书签都。不。见。了QAQ）

9.谢谢老师非常翔实的指导