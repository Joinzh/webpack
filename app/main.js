// const greeter = require('./Greeter'); //  导入模块
// document.querySelector('#root').appendChild(greeter()) //  插入节点

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css' // 导入css

render(<Greeter />, document.getElementById('root'));
