输入输出:
console.log  字符串连接使用+
语法同printf

调试:
content_script  F12
popup 右键 inspect popup
background 扩展页面，点击main.html

重新载入扩展 ：
C-R
C-R

chrome.extension
扩展用来通信
port = chrome.extension.connect()

读写本地文件
chrome.storage.local.get("" , function() {} )

//钩子
chrome.webRequest.onBeforeRequest.addListener
chrome.webRequest.onBeforeSendHeaders.addListener
chrome.webRequest.onCompleted.addListener

chrome.tabs.onCreated.addListener
chrome.tabs.onRemoved.addListener

//正则表达式
// test 能找到就为true
var pattern = new RegExp("s$");
var pattern = /s$/;
/youku\.com/i.test(youku.com)

//chrome.storage.local
存储在真实目录
d:\tools\360SE\360Chrome\Chrome\User Data\Default\Local Storage\

//时间
Date.now() 返回一个整数，表示1970年。。。到现在的毫秒数
new Date(millseconds) 可以初始化Date对象


//字符串
parseInt("123")
parseInt("0x10")







































