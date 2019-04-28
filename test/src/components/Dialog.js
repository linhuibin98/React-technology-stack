import React from 'react';

export default function Dialog (props) {
  let {type, content, children} = props;
  let typeValue = type || '系统提示';
  if (typeof type === 'number') {
    // eslint-disable-next-line default-case
    switch (type) {
      case 0:
        typeValue = '系统提示';
        break;
      case 1:
        typeValue = '系统警告';
        break;
      case 2:
        typeValue = '系统错误';
    }
  }
  console.log(React.Children.map(children, child => child))
  let objStyle = {
    width: '50%',
    margin: '0 auto'
  };
  return <section className="panel panel-default" style={objStyle}>
    <div className="panel-heading">{typeValue}</div>
    <div className="panel-body">{content}</div>
    {
      children ? <div className="panel-footer">
        {React.Children.map(children, child => child)}
      </div> : null
    }
  </section>
}