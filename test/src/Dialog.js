import React from 'react';
//组件中需要调用react， React.createElement()方法

export default function dialog(props) {
  let {text, children} = props;
  //children可能有，也可能没有，可能为一个值或数组
  return <div>
    {text}
  </div>;
}