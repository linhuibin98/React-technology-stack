import React from 'react';
import ReactDOM from 'react-dom';

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
 * 2. 在JSX中出现的{}是存放JS的，但是要求js代码执行完成有返回结果
 *    => 不能直接放一个对象数据类型的值（对象、数组、函数）都不行
 *    => 可以是基本类型的值(布尔类型不显示、null、undefined代表空)
 * 
 */
let root = document.querySelector('#root');
ReactDOM.render(<div>hello world</div>, root, () => {
  console.log('1111');
});