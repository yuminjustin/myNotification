# myNotification
H5 桌面通知 notification 小功能

如图：

![img](http://www.oschina.net/uploads/img/201307/10095949_a3D7.png "img")  

chrome 浏览器支持了桌面通知的功能，这种方式干净整洁，也能引起用户的注意。于是就研究了下....

我们需要创建这样一个对象：

   window.Notification || window.mozNotification || window.webkitNotification

这个对象经我测试 chrome 、Chromium内核的浏览器和firefox支持。
为了让它使用起来比较容易，于是就做了点封装：
  暴露了 Mytip 对象，无需实例化，直接使用
  包含以下属性：
  
    icon    显示logo
    title   标题
    duration  持续时间 （好像没啥卵用）
    msg      内容
    onclick  对应事件
    onclose  对应事件
  
使用：
    Mytip.icon = "https://avatars2.githubusercontent.com/u/8414340?v=3&s=460"  //换logo
    Mytip.showTip("测试", "test");  //弹出通知

