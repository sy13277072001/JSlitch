/**
 * @author: cuixiaohuan
 * Date: 16/4/13
 * Time: 下午8:41
 */

function buyProc()
{
    
}

function chromeCompatible() {
    var port = chrome.extension.connect();
    console.log("port is " + typeof(port) )
}

function testJd() {
    //匹配正则表示是否是购物车页面
    //target = "2350832"
	console.log("购物车页面!")
    target = "2351657"
    reg_targ = "http://cart.jd.com/addToCart.html"
    if (location.href.search("http://cart.jd.com.*") != -1)
    {
        console.log("购物车页面!")
        btnShopping = document.getElementsByClassName("submit-btn")
        btnShopping.onclick()
        return
    } else {
        console.log("! 不是购物车页面!")
    }
        

    if (location.href.search("http://www.jd.com/") != -1)
    {
        console.log("京东首页2!")
        setInterval(function () {
            x = document.getElementById("key")
            x.value = "韩版女装";
            x.parentElement.childNodes[3].click()
        }, 100)
  
        //$("#key").val("韩版女装");
    }
    /**
     * just test for run by self
     */
    //全高配
    //if (location.href == "http://item.jd.com/2350832.html") {
    //不用抢
    if (location.href.search("http://item.jd.com/" + target) != -1)
    {
        // setTimeout("window.close()",12000)  
        console.log("抢购页面")
        gwc = document.getElementById("InitCartUrl")
        if (gwc.className.search("disable") == -1)
        {
            console.log("可以购买啦!!!!")
            //gwc.click()
        } else {
            console.log("他妹的没货啊!!")
            /*
            window.setTimeout(function rel() {
                location.reload(true)
            }, 2000)
            */
        }
    }
};
chromeCompatible()