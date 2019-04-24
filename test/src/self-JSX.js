//JSX渲染原理， 自己实现



/**
 * 1. 创建一个对象（默认有四个属性： type、props、ref、key）
 *2. 根据传递的值修改这个对象
 *  type: 传递的type
 *  props：
 * 
 */

function createElement(type, props, children) {
  //创建一个对象，设置默认属性值
  let obj = {
    type: null,
    props: {
      chidren: ''
    },
    ref: null,
    key: null
  };
  // 接收传入的type, props, 覆盖原有的默认值
  //obj = {...obj, type, props}; // => {type: type, props: props}
  obj = {...obj, type, props: {...props, children}};
  // 把 ref 和 key 提取出来
  if ('key' in obj.props) {
    obj.key = obj.props.key;
    obj.props.key = undefined;
  }

  if ('ref' in obj.props) {
    obj.ref = obj.props.ref;
    obj.props.ref = undefined;
  }

  return obj;
}



console.log(createElement(
  'h1', 
  {id: 'titileBox', className: 'title', style: {color: 'red'}, ref: 'aa', key: 12},
  '\u73e0\u5cf0\u57f9\u8BAD'
));

/**
 * //无传入key、ref
 *  {
 *      type: 'h1',
 *      props: {
 *          id: 'titileBox', 
 *          className: 'title', 
 *          style: styleObj,
 *          children: '\u73e0\u5cf0\u57f9\u8BAD'
 *      },
 *      ref: null,
 *      key: null,
 *      __proto__: Object.prototype
 * }
 * 
 * // 传入了 ref 、key
 * { type: 'h1',
  props:
   { id: 'titileBox',
     className: 'title',
     style: { color: 'red' },
     ref: undefined,
     key: undefined,
     children: '珠峰培训' },
  ref: 'aa',
  key: 12 }
 */

 /**
  * render: 把创建的对象生成对应的dom元素， 最后插入到页面中
  */

function render(obj, container, callback) {
  let {type, props} = obj;
  let newElement = document.createElement(type);
  for (let attr in props) {
    if (!props.hasOwnProperty(attr)) break; // 不是私有的, 直接结束遍历
    if (!props[attr]) continue; // 如果当前属性没有值，直接不处理即可
    let value = props[attr];
    //=> class-name
    if (attr === 'calssName') {
      newElement.setAttribute('class', value);
    }

    //style
    if (attr === 'style') {
      if (value === '') continue;
      for (let styKey in value) {
        if (value.hasOwnProperty(styKey)) {
          newElement['style'][styKey] = value[styKey];
        }
      }
      continue;
    }

    //children
    if (attr === 'children') {
      if (typeof value === 'string') {
        let text = document.createTextNode(value);
        newElement.appendChild(text);
      }
    }

    newElement.setAttribute(attr, value);
  }

  container.appendChild(newElement);
}

let objValue = createElement(
  'h1', 
  {id: 'titileBox', className: 'title', style: {color: 'green'}, ref: 'aa', key: 12},
  '\u73e0\u5cf0\u57f9\u8BAD'
);
let root = document.querySelector('#root')
render(objValue, root);

