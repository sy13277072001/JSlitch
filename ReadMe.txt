�������:
console.log  �ַ�������ʹ��+
�﷨ͬprintf

����:
content_script  F12
popup �Ҽ� inspect popup
background ��չҳ�棬���main.html

����������չ ��
C-R
C-R

chrome.extension
��չ����ͨ��
port = chrome.extension.connect()

��д�����ļ�
chrome.storage.local.get("" , function() {} )

//����
chrome.webRequest.onBeforeRequest.addListener
chrome.webRequest.onBeforeSendHeaders.addListener
chrome.webRequest.onCompleted.addListener

chrome.tabs.onCreated.addListener
chrome.tabs.onRemoved.addListener

//������ʽ
// test ���ҵ���Ϊtrue
var pattern = new RegExp("s$");
var pattern = /s$/;
/youku\.com/i.test(youku.com)

//chrome.storage.local
�洢����ʵĿ¼
d:\tools\360SE\360Chrome\Chrome\User Data\Default\Local Storage\

//ʱ��
Date.now() ����һ����������ʾ1970�ꡣ���������ڵĺ�����
new Date(millseconds) ���Գ�ʼ��Date����


//�ַ���
parseInt("123")
parseInt("0x10")







































