import React from 'react';
import ReactDOM, {render} from 'react-dom';
// import './self-JSX'
// import Dialog from './components/Dialog';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// 基于类创建组件
class Dialog extends React.Component {
  constructor() {
    super();
    return
  }
  render() {
    return <section>
      <h3>系统提示</h3>
    </section>
  }
}


let data = [{name: 'lll'}, {name: 'hhh'}, {name: 'bbb'}];
let root = document.querySelector('#root'); 

//从react-dom中导入一个ReactDom，逗号后面的内容是把ReactDom对象进行解构

/**
 * ReactDom.render([JSX], [container], [callback]): 把JSX语法渲染到页面中
 * 
 * JSX：react虚拟元素
 * container：容器，我们想把元素放到页面中的那个容器中
 * callback：当把内容放到页面中呈现触发的回调函数
 * 
 * JSX：react独有的语法，javascript+xml（html）
 * 
 * 1. 不建议我们把JSX直接渲染到Body中，而是放在自己创建的容器中，一般我们都放在一个ID为ROOT的DIV中即可
 * 2. 在JSX中出现的{}是存放JS的，但是要求js代码执行完成有返回结果（变量，表达式）
 *    => 不能直接放一个对象数据类型的值（对象（除了给style赋值）、数组、函数）都不行, 数组中若没有对象元素，只有基本数据类型或JSX元素是可以显示的
 *    => 可以是基本类型的值(布尔类型不显示、null、undefined代表空)
 *    => 循环判断的语句都不支持，但支持三元运算符
 * 3. 循环数组创建JSX元素（一般基于数组的map方法完成迭代），需要给创建的元素设置唯一的key值（当前本次循环内唯一即可）
 * 4. 只能出现一个根元素
 * 5. 给元素设置样式类用的是 className 而不是 class
 * 6. style中不能直接写样式字符串， 需要基于一个样式对象来遍历赋值
 * 
 */

 /**
  * JSX渲染机制
  * 1. 基于Babel中的语法解析模块（Babel-preset-react）把JSX语法编译为React.createElement(...)结构
  * 2. 执行React.createElement(type, props, chidren),创建一个对象
  * 3. ReactDom.render(Jsx语法最后生成的对象，容器)，基于Render方法把生成的对象动态创建为Dom元素，插入到指定容器中
  */



//知识点
/**
 *  createElement在处理组件的时候，返回的对象中：type就不在是字符串标签名了，而是一个函数（类），但属性还是在props中
 * 
 */

render(<div>
    {/* 注释：JSX中调取组件，只需要把组件当做一个标签调取使用即可（单闭合和双闭合都可以） */}
    <Dialog type='请登录' content='sadsd'>
    <div>
      <input type='text' className='form-control' placeholder='请输入用户名'></input>
      <br />
      <input type='password' className='form-control' placeholder='请输入密码'></input>
    </div>
    <button className="btn btn-danger">登录</button>
    <button className="btn btn-danger">取消</button>
    </Dialog>
  </div>, root)

/*
ReactDOM.render(
<div>
  <p>hello world !</p>
  <ul>
    {
      data.map((item, index) => {
        return <li key={index}>{item.name}</li>
      })
    }
  </ul>
</div>
, root, () => {
  console.log('1111');
});
*/
