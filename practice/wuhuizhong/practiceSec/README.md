##笔记二


1.对象为伪数组时，通常用slice将其内容复制到生成的数组里。

slice可以兼容伪数组，所以可以用slice来复制伪数组中的内容。

    

2.注意执行流，这里形成了闭包，以上执行后为undefined，因为最后i为4时才执行的console.log(a[i])，a[4]不存在所以为undefined。


     setTimeout(function(){
    	console.log(a[i]);
      },（i+1） * 1000);	

整体流程：

setTimeOut开始，

确定console.log，1s后再执行

这时i++继续向下执行

1s到了，console.log要执行了，这时i已经等于4了（闭包）

所以输出undefined





