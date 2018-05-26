# BeAlert
这是一个美化版的alert和confirm弹出框插件，适用于IE7+、chrome、Edge、fireFox、Safari等绝大多数浏览器。
功能可自己拓展，这里只是一个基础版本的插件 ，能够取代系统自带的alert和confirm。
# How to use?
 1、需要jquery的支持，所以请先确认已经引入jquery文件；
```
<script src="jquery.min.js"></script>
```
 2、添加css和js文件到你的页面中
```
<link rel="stylesheet" href="BeAlert.css">
```
```
<script src="BeAlert.js"></script>
```
 3、按说明调用函数
 ```javascript
 alert(title,message,callback,config);
 ```
 ```javascript
 confirm(title,message,callback,config);
 ```
# Settings
<table>
    <thead>
        <tr>
            <th>参数</th>
            <th>默认值</th>
            <th width='50%'>描述</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>title</td>
        <td>null</td>
        <td>标题</td>
    </tr>
    <tr>
        <td>message</td>
        <td>null</td>
        <td>内容</td>
    </tr>
    <tr>
        <td>callback</td>
        <td>null</td>
        <td>回调函数</td>
    </tr>
    <tr>
        <td>config</td>
        <td>null</td>
        <td>配置参数:<br>
            <em>width</em>:  宽度,<br>
            <em>height</em>: 最小高度,<br>
            <em>type</em>: 'warning'|'error'|'success'|'info'|'question',<br>
            <em>showConfirmButton</em>: 是否显示确认按钮,<br>
            <em>showCancelButton</em>: 是否显示取消按钮,<br>
            <em>confirmButtonText</em>: '确认',<br>
            <em>cancelButtonText</em>: '取消'<br>
        </td>
    </tr>
    </tbody>
</table>
 ```javascript
 confirm(title,message,callback,config);
 ```
# Example
![图片](https://github.com/luker2013/BeAlert/blob/master/alert.png)
<br>
![图片](https://github.com/luker2013/BeAlert/blob/master/confirm.png)

