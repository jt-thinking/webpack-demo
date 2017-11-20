  import _ from 'lodash';
  import printMe from './print.js';
  import './style.css';


  function component() {
      var element = document.createElement('div');
      var btn = document.createElement('button');

      // lodash 是由当前 script 脚本 import 导入进来的
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      element.classList.add('hello');

      btn.innerHTML = 'Click me and check the console111!';
      btn.onclick = printMe;
      element.appendChild(btn);

    

      return element;
  }

  document.body.appendChild(component());