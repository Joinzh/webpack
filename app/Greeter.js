// var config = require('./config.json');  //  引入json文件
//
// module.exports = function () {  //  导出模块
//     var greet = document.createElement('div'); // 创建div节点
//     greet.innerText = config.greetText; //  写入内容
//     return greet;  //  返回节点
// }

import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'
class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter
