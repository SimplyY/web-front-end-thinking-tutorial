#作业笔记
1. import与bind
import 导入某个包里的某个组件，import * from './**'，起初有些不懂那个./，后来查了一下js路径，只说了../是到上层目录，然后试了试不加的情况（jsx文件与入口文件在同一目录下）发现也是可以用..就没再纠结；
bind 显式调用?bind(this)将事件函数上下文绑定要组件实例上，有的是bind(this,arg1,agr2..)，据说这样的很少出现，this后边的arg们是前边事件处理函数家的参数；
2. this.props
文档里说
>React 里有一个非常常用的模式就是对组件做一层抽象。组件对外公开一个简单的属性（Props）来实现功能，但内部细节可能有非常复杂的实现。

     通常用在静态资料上，让父元件传递资料給子元件而元件內部可以通过this.props 取得該值，就是通过?props?属性传递，在父组件给子组件设置?props，然后子组件就可以通过props
?访问到父组件的数据／方法，这样就搭建起了父子组件间通信的桥梁。

   还可以使用?[JSX 展开属性](http://reactjs.cn/react/docs/jsx-spread-zh-CN.html)?来合并现有的 props 和其它值；

   直接在组件中使用key/value的形式来指定属性
   '''React.render(??
????<HelloWorld?name="Jack"/>,??
????document.getElementById('container')??
    );??'''

   '''
   var?HelloWorld?=?React.createClass({??
????render:?function()?{??
????????return?(??
????????????<div>Hello,?{this.props.name}</div>??
????????);??
????}??
    });??//通过this.props.name就可以获取name属性值啦
    '''
3. this.states
React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
初始化state 可以在组件类的构造函数里搞一下，或者用getInitialState函数（该函数只在组件装载前调用一次）；

4. this.Setstate
调用?setState(data, callback)是常用的通知 React 数据变化的方法。这个方法会合并（merge）?data到?this.state，并重新渲染组件。渲染完成后，调用可选的?callback
?回调。大部分情况下不需要提供?callback，因为 React 会负责把界面更新到最新状态。
https://facebook.github.io/react/docs/interactivity-and-dynamic-uis-zh-CN.html

5. jsx
JSX 写的一个链接：
'''<--!a href="http://facebook.github.io/react/"-->Hello!</a>'''
用 JS 代码来写就成这样了：
'''React.createElement('a', {href: 'http://facebook.github.io/react/'}, 'Hello!')'''
如果要在jsx里插入Js表达式（逻辑啊赋值，比较，算数，按位，字符串）就要加{}；
jsx并没有修改js语义，官方建议jsx(可以简洁且熟知地包含属性的树状结构语法)；
【这部分内容并记不太住…准备用的时候再翻…

6. render
reactDom.render()
'''render(ReactElement,元素
 DomElement,要被元素替换的容器
 [回调函数]，这个是可选的，如果选择了，那么就在元素被渲染后开始执行
 )
'''
react.render
在使用render方法时，尽量确保只返回一个节点(节点内可包含任意数目子节点)。而且大多数情况下使用()括号将返回结果包住【我当时往demo里复制过例子，render里放俩标签发现确实会报错…。
没找到这个的说明，感觉就是函数必须要有返回值，返回一个（父）组件；
>如果不想要渲染任何东西，可以将返回值设置为null或者false. 在这种情况下React实际会渲染一个<noscript>标签，然后在执行diff算法时会被用到。

7.webpack
   ![放一张官网不明觉厉的图](http://cdn1.infoqstatic.com/statics_s2_20160405-  0343u1/resource/articles/react-and-webpack/zh/resources/0602005.jpg)
就像demo里，root.jsx感觉就像是c语言里的一个.h文件，main.js是一个入口文件它会输出到界面上，然后bundle.js是最后打包输出的东西模块还有入口都在里边，index.html就可以直接用这个脚本用自己定义的元素了。但是webpack需要配置的文件我可能如果用的话还是会从网络上搞，还有就是不太明白怎么用webpack搞出一个常用的react的项目…；

#####代码阅读
react的输入框：
'''this.state = { inputStr: ''//设置新状态以便动态获取input里的值}'''
'''return item.toLowerCase().indexOf(inputStr.toLowerCase()) >= 0//将输入的字符串与数据字符串化为小写进行比较（避免了因为大小写的问题而导致没有匹配出来）//如果匹配后发现确实存在，那么就返回伪数据数组里这个字符串进tips'''

避免了dom操作（用到document,window等参数），在jsx里的操作都是对虚拟的组件进行的操作，用Virtual DOM这个过渡层来表达JS对DOM修改操作，通过引入这个过渡层，所有对DOM的操作不会立刻显示在DOM树上，而是等待事件完成所有的DOM修改之后，通过React内部实现的diff算法来计算出最小diff，然后再以最小的步骤将 diff 作用到真实的 DOM 上，最后得益于「组件」这个概念，每个React组件都拥有一个完整的生命周期，对DOM状态的操作都会批量更新，以期尽可能的减少页面重绘，来追求更好的性能。