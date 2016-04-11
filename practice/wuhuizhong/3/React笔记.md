#React笔记
##用法简述
1. 虚拟DOM：React为了更高超的性能而使用虚拟DOM作为其不同的实现。 它同时也可以由服务端Node.js渲染 － 而不需要过重的浏览器DOM支持
2. 数据流：React实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

&nbsp;&nbsp;&nbsp;&nbsp;React组件通过一个 render() 方法，接受输入的参数并返回展示的对象。 

&nbsp;&nbsp;&nbsp;&nbsp;以下这个例子使用了JSX，它类似于XML的语法
输入的参数通过 **render()**
传入组件后，将存储在**this.props**

    var HelloMessage = React.createClass({
      render: function() {
    
       return <div>Hello {this.props.name}</div>;
      }
    });
    React.render(<HelloMessage name="John" />, mountNode);
&nbsp;&nbsp;&nbsp;&nbsp;上述代码实现为：Hello John

&nbsp;&nbsp;&nbsp;&nbsp;对比以下代码一起理解：

    var Timer = React.createClass({
	      getInitialState: function() {
	    	return {secondsElapsed: 0};
	      },
	      tick: function() {
	    	this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	      },
	      componentDidMount: function() {
	    	this.interval = setInterval(this.tick, 1000);
	      },
	      componentWillUnmount: function() {
	    	clearInterval(this.interval);
	      },
	      render: function() {
	    	return (
	      		<div>Seconds Elapsed: {this.state.secondsElapsed}</div>
	    	);
	      }
	 });
    
    React.render(<Timer />, mountNode);



&nbsp;&nbsp;&nbsp;&nbsp;Timer是一个react组件，组件还可以保持内部状态数据（通过 this.state ）。React.creatClass创建一个组件，这里说明以下组件生命周期的各个方法：


- **componentDidMount()**


&nbsp;&nbsp;&nbsp;&nbsp;这个方法会在组件加载完毕之后立即执行。在这个时候之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。

&nbsp;&nbsp;&nbsp;&nbsp;如果你想和其他JavaScript框架一起使用，可以在这个方法中执行setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。

    componentDidMount: function() {
      setTimeout(function() {
    	this.setState({items: {name: 'test'}})
      }, 1000)
    }

- **componentWillUnmount()**

&nbsp;&nbsp;&nbsp;&nbsp;在组件从DOM unmount（卸载）后立即执行。主要用来执行一些必要的清理任务。例如清除setTimeout等函数，或者任意的在componentDidMount创建的DOM元素。【？？？】

    componentDidMount:function(){
    	this.inc = setInterval(this.update,500)
    },
    componentWillUnmount:function(){
    	console.log("goodbye cruel world!")
    	clearInterval(this.inc)
    }
    

下面几个方法最开始的那个时间更新例子中没有用到，补充笔记链接：

[http://fraserxu.me/2014/08/31/react-component-lifecycle/](http://fraserxu.me/2014/08/31/react-component-lifecycle/)


##React 	

###HTML&分离文件

最开始创建html，注意题头写入**JSXTransformer.js**：

    <!DOCTYPE html>
    <html>
      <head>
    	<script src="build/react.js"></script>
    	<script src="build/JSXTransformer.js"></script>
      </head>
      <body>
    	<div id="example"></div>
    	<script type="text/jsx">
      		React.render(
    			<h1>Hello, world!</h1>,
				document.getElementById('example')
      		);
    	</script>
      </body>
    </html>

在JavaScript 代码里写着 XML 格式的代码称为 JSX；可以去 JSX 语法 里学习更多 JSX 相关的知识。为了把 JSX 转成标准的 JavaScript，我们用`<script type="text/jsx">`标签包裹着含有 JSX 的代码，然后引入 `JSXTransformer.js `库来实现在浏览器里的代码转换。


直接把react写在在html文件中，格式为：


    <script type="text/jsx">


分离文件为在html中引用：

	<script type="text/jsx" src="src/helloworld.js"></script>

###离线转换

依赖npm，在命令行中键入：

	npm install -g react-tools

然后将你的 `src/helloworld.js` 文件转成标准的 JavaScript:

	jsx --watch src/ build/

一旦你修改了，`build/helloworld.js` 文件会自动生成。

这时可以删除html中的：

	<script src="build/JSXTransformer.js"></script>

并在`</body>`前加入：
	
	<script src="build/helloworld.js"></script>

这样便完成了JSX的转换。

## 数据呈现 ##

React响应式更新（！！）

如下：

    <!DOCTYPE html>
    <html>
    <head>
    	<title>Hello React</title>
    	<script src="http://fb.me/react-0.13.0.js"></script>
    	<script src="http://fb.me/JSXTransformer-0.13.0.js"></script>
    </head>
    <body>
    <div id="example"></div>
    <script type="text/jsx">
    
    	var HelloWorld = React.createClass({
    		render: function() {
    			return (
    					<p>
    						Hello, <input type="text" placeholder="Your name here" />!
    						It is {this.props.date.toTimeString()}
    					</p>
    			);
    		}
    	});
    
    	setInterval(function() {
    		React.render(
    				<HelloWorld date={new Date()} />,
    				document.getElementById('example')
    		);
    	}, 500);
    
    </script>
    </body>
    </html>
    
在以上例子的js文件中这一段代码：

	setInterval(function() {
    		React.render(
    				<HelloWorld date={new Date()} />,
    				document.getElementById('example')
    		);
    	}, 500);

这个循环函数更新了时间，却没有改变输入框的内容。

在输入框输入你的名字。你会发现 React 在用户界面中只改变了时间，你在输入框的输入内容会保留着，即使你没有写任何代码来完成这个功能。React 也为你解决了这个问题，做了正确的事。

我们想到的解决方案是React 是不会去操作 DOM 的，除非不得不操作 DOM 。它用一种更快的内置仿造的 DOM 来操作差异，为你计算出效率最高的 DOM 改变。

这个组件的输入被称为 props - "properties"的缩写。它们通过 JSX 语法进行参数传递。你必须知道，**在组件里这些属性是不可直接改变的**，也就是说 **this.props** 是**只读**的。

React 组件非常简单。你可以认为它们就是简单的函数，接受 props 和 state (后面会讨论) 作为参数，然后渲染出 HTML。正是由于它们如此简单，使得它们非常容易理解。

**注意**：React 组件只能渲染单个根节点。如果你想要返回多个节点，它们必须被包含在同一个节点里。【？？？】

##JSX语法

通常的JS语法是通过“模板引擎”和“展示逻辑”。此外，展示逻辑通常是很复杂的，通过模板语言实现这些逻辑会产生大量代码。

我们得出解决这个问题最好的方案是通过 JavaScript 直接生成模板，这样你就可以用一个真正语言的所有表达能力去构建用户界面。为了使这变得更简单，我们做了一个非常简单、可选类似 HTML 语法 ，通过函数调用即可生成模板的编译器，称为 **JSX**。

**JSX 让你可以用 HTML 语法去写 JavaScript 函数调用。**你完全可以选择是否使用 JSX，并不是 React 必须的。

React 可以渲染 **HTML 标签 (strings)** 或 **React 组件 (classes)**。（即利用 JSX 编写 DOM 结构，可以用原生的 HTML 标签，也可以直接像普通标签一样引用 React 组件。）

要渲染 HTML 标签，只需在 JSX 里使用**小写字母**开头的标签名（className）：

	var myDivElement = <div className="foo" />;
	React.render(myDivElement, document.body);

要渲染 React 组件，只需创建一个**大写字母**开头的本地变量（MyComponent）：

	var MyComponent = React.createClass({/*...*/});
	var myElement = <MyComponent someProperty={true} />;
	React.render(myElement, document.body);

React 的 JSX 里约定分别使用首字母大、小写来区分本地组件的类和 HTML 标签，小写的字符串是 HTML 标签，大写开头的变量是 React 组件。

**注意：**由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。

###JS表达式

- **属性表达式**

要使用 JavaScript 表达式作为属性值，只需把这个表达式用一对大括号 ({}) 包起来，不要用引号 ("")。

	// 输入 (JSX):
	var person = <Person name={window.isLoggedIn ? window.name : ''} />;
	// 输出 (JS):
	var person = React.createElement(
	  Person,
	  {name: window.isLoggedIn ? window.name : ''}
	);
	
- **子节点表达式**

同样地，JavaScript 表达式可用于描述子结点：

	// 输入 (JSX):
	var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
	// 输出 (JS):
	var content = React.createElement(
	  Container,
	  null,
	  window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
	);

- **注释**

在JSX 里添加注释，你只需要在一个标签的子节点内(非最外层)小心地用 {} 包围要注释的部分。

	var content = (
	  <Nav>
	    {/* 一般注释, 用 {} 包围 */}
	    <Person
	      /* 多
	         行
	         注释 */
	      name={window.isLoggedIn ? window.name : ''} // 行尾注释
	    />
	  </Nav>
	);

###JSX与HTML的关键区别||JSX陷阱

- **HTML实体**

因为HTML实体可以插入JSX的文本中，但是想在JSX表达式中显示HTML实体，可能会遇到二次转义的问题（因为React默认会转义所有字符串，为了防止各种 XSS 攻击）

	// 错误: 会显示 “First &middot; Second”
	<div>{'First &middot; Second'}</div>

有多种绕过的方法：

1. 直接用Unicode 字符。这时要确保文件是 UTF-8 编码且网页也指定为 UTF-8 编码。

		<div>{'First · Second'}</div>

2. 安全的做法是先找到 实体的 Unicode 编号 ，然后在 JavaScript 字符串里使用。

		<div>{'First \u00b7 Second'}</div>
		<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
可以在数组里混合使用字符串和 JSX 元素。

		<div>{['First ', <span>&middot;</span>, ' Second']}</div>
3. 万不得已，可以直接使用原始 HTML。

		<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
 

###自定义HTML属性

如果往原生 HTML 元素里传入 HTML 规范里不存在的属性，React 不会显示它们。如果需要使用自定义属性，要加 data- 前缀。

	<div data-custom-attribute="foo" />

以 aria- 开头的 [网络无障碍] 属性可以正常使用。

	<div aria-hidden={true} />

###属性扩散

有时候你需要给组件设置多个属性，你不想一个个写下这些属性，或者有时候你甚至不知道这些属性的名称，这时候 spread attributes 的功能就很有用了。

	var props = {};
	props.foo = x;
	props.bar = y;
	var component = <Component {...props} />;

props 对象的属性会被设置成 Component 的属性。

属性也可以被覆盖，写在后面的属性值会覆盖前面的属性：

	var props = { foo: 'default' };
	var component = <Component {...props} foo={'override'} />;
	console.log(component.props.foo); // 'override'

##事件处理

我们知道，在 js 里，函数其实也是一个对象，那么函数自然也可以拥有它自己的方法，有点绕，在 js 里，每个函数都有一个公共的 prototype —— Function，而这个原型自带有好几个属性和方法，其中就有这里困惑的 **bind、call、apply **方法。

**apply()**接收 2 个参数，第一个是传递给这个函数用来绑定 this 的值，第二个是一个参数数组。

**call()**呢，它的第一个参数也是绑定给 this 的值，但是后面接受的是不定参数，而不再是一个数组，也就是说你可以像平时给函数传参那样把这些参数一个一个传递

无论是 call() 也好， apply() 也好，都是立马就调用了对应的函数，而 **bind()** 不会， bind() 会生成一个新的函数，bind() 函数的参数跟 call() 一致，第一个参数也是绑定 this 的值，后面接受传递给函数的不定参数。 bind() 生成的新函数返回后，你想什么时候调就什么时候调。

----------


React 里面绑定事件的方式和在 HTML 中绑定事件类似，使用驼峰式命名指定要绑定的 onClick 属性为组件定义的一个方法 {this.handleClick.bind(this)}。

注意要显式调用 bind(this) 将事件函数上下文绑定要组件实例上，这也是 React 推崇的原则：没有黑科技，尽量使用显式的容易理解的 JavaScript 代码。

###“合成事件”&&“原生事件”

“合成事件”会以事件委托（event delegation）的方式绑定到组件最上层，并且在组件卸载（unmount）的时候自动销毁绑定的事件。

所有通过 JSX 这种方式绑定的事件都是绑定到“合成事件”，除非你有特别的理由，建议总是用 React 的方式处理事件。

给事件处理函数传递额外参数的方式：bind(this, arg1, arg2, ...)

    render: function() {
    	return <p onClick={this.handleClick.bind(this, 'extra param')}>;
    },
    handleClick: function(param, event) {
    	// handle click
    }

##State

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

常用的通知 React 数据变化的方法是调用 setState(data, callback)。这个方法会合并（merge） data 到 this.state，并重新渲染组件。渲染完成后，调用可选的 callback 回调。大部分情况下不需要提供 callback，因为 React 会负责把界面更新到最新状态。

###哪些组件应该有State？

大部分组件的工作应该是从 props 里取数据并渲染出来。但是，有时需要对用户输入、服务器请求或者时间变化等作出响应，这时才需要使用 State。

**尝试把尽可能多的组件无状态化。** 这样做能隔离 state，把它放到最合理的地方，也能减少冗余，同时易于解释程序运作过程。

常用的模式是创建多个只负责渲染数据的无状态（stateless）组件，在它们的上层创建一个有状态（stateful）组件并把它的状态通过 props 传给子级。这个有状态的组件封装了所有用户的交互逻辑，而这些无状态组件则负责声明式地渲染数据。

###哪些不应该作为State？

this.state 应该仅包括能表示用户界面状态所需的最少数据。因此，它不应该包括：

- 计算所得数据：不要担心根据 state 来预先计算数据 —— 把所有的计算都放到 render() 里更容易保证用户界面和数据的一致性。


> 例如，在 state 里有一个数组（listItems），我们要把数组长度渲染成字符串， 直接在 render() 里使用 this.state.listItems.length + ' list items' 比把它放到 state 里好的多。


- React 组件： 在 render() 里使用当前 props 和 state 来创建它。
- 基于 props 的重复数据： 尽可能使用 props 来作为惟一数据来源。把 props 保存到 state 的一个有效的场景是需要知道它以前值的时候，因为未来的 props 可能会变化。














