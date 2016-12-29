var litchDeclare = "0.0.1.0" //declare my only
var baesite = ['', '', 'http://tools.17xiuwang.com/'];
var redirList = "";
var ruleName = ['configlist', 'redirectlist', 'refererslist', 'proxylist'];

console.log("litch extension " + litchDeclare)

// 设置sock5 代理
function setSocks5() {
    var config = {
        mode: "fixed_servers",
        rules: {
            proxyForHttp: {
                scheme: "socks5",
                host: "127.0.0.1"
            },
            proxyForHttps: {
                scheme: "socks5",
                host: "127.0.0.1"
            },
            bypassList: ["foobar.com"]
        }
    };
    chrome.proxy.settings.set(
        {value:config, scope: 'regular'},
        function() {} );
};

function isNeedUpdate() {
    d = new Date(Date.now() );
    console.log(new Date().toString() );
    var url = baesite[2] + "rulelist/update";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var servertime = xhr.responseText;
            console.log("Server Time" + new Date(parseInt(servertime)).toString() );
        }
    };
    xhr.send()
};

//Base64 decode
function utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while (i < utftext.length) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
}

function decode64(input) {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = utf8_decode(output);

    return output;
}

function fetchRules(url,value)
{
    var newUrl = url + value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", newUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //console.log("ret rules "+ value + " OK!")
            redirList = xhr.responseText;
            initRules(value);
        };
    };
    xhr.send()
};

function initRules(value)
{
    //console.log("redirList: " + redirList);
    var list = JSON.parse(decode64(redirList) );
    console.log(value + " ");
    //console.log(list);
    for(i in list)
    {
        console.log("    "+JSON.stringify(list[i]) );
    }
    //console.log(JSON.stringify(list)+"\n")
};

chrome.webRequest.onBeforeRequest.addListener(function (details) {
        //test only
        return
    /* console.log(details.url); */
        // 过滤 www.163.com url
        // return {cancel : details.url.indexOf("://www.163.com") != -1};
        // 过滤优酷
        x =  details.url.indexOf("atm.youku.com")
        if(x != -1)
        {
            console.log("block " + details.url);
            return {cancel : true}
        }
        //return {cancel : details.url.indexOf("atm.youku.com") != -1};
},
    {urls: ["http://*/*", "https://*/*"]},
    ["blocking"]);

//setSocks5()
//isNeedUpdate();
for (var i = 0; i < ruleName.length; i++) {
    //fetchRules(baesite[2] + "rulelist/" + ruleName[i], ruleName[i]);
    fetchRules(baesite[2] + "rulelist/", ruleName[i]);
}