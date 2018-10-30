//使用说明。首先登陆京东账号 ，需要登陆  https://paipai.jd.com/auction-list/
//进入chrome控制台，按f12，或者网页上右键-检查
//首先把下面这两个复制到chrome控制台。按回车
;(function(d,s){d.body.appendChild(s=d.createElement('script')).src='https://cdn.bootcss.com/jquery/1.11.0/jquery.min.js'})(document);
;(function(d,s){d.body.appendChild(s=d.createElement('script')).src='https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.js'})(document);

//使用说明。首先登陆京东账号 ，需要登陆  https://paipai.jd.com/auction-list/
//小白如何进入chrome控制台，按f12，或者网页上右键-检查
//首先把下面这两个复制到chrome控制台。按回车

//接下来把下面所有的代码再复制到控制台，按回车
//	setTimeTask2(数字);  直接复制，括号是英文括号，注意，中文括号没用。
//比如你这个目标商品，你最高能承受的价位是200元，setTimeTask2(200);
// 如果最后时刻别人出价220，程序不会进行出价。如果别人出价170，程序会出价171。
// 全自动的，不需要人守着浏览器。
//只测试了chrome，其他的不清楚。
axios.defaults.withCredentials = true;
var getMoney=0;
var auctionInfoId=window.location.pathname.split("/")[2];
var endTime;
function sentMoney(money){
  	console.log('要发送'+money);
  	axios({
  	method: 'post',
  	url: '//used-api.jd.com/auctionRecord/offerPrice',
   	headers: {"Content-Type": "application/x-www-form-urlencoded"},
    data: {
           auctionId: auctionInfoId,
           price: money,
            //下面的trackid和eid要你在拍卖页面拍卖一次，在offerprice的requestheader中去取，每个人不一样
           trackId: "b2861542b6898754ed935bf952888464",
           eid: "LODBPQY57A24AMAI7L6NGCGAOZHT2NHATP7OFIRWJAGJTTFJ5TIFX5SNKECUSOHBTY5V3UXT3XBQPRW5KK7LYC2CWU"
       },
     transformRequest: [function (t) {
         var e = "";
         for (var a in t) e += encodeURIComponent(a) + "=" + encodeURIComponent(t[a]) + "&";
         return e
     	}]
	}).then((res)=>{
        console.log(res.data);
    }); 
    
  }
// function setTimeTask(time,money) {
// 	var msTime=time*1000;
// 	var now=0;
//     function countDown() {
//     	now=now+50;
//     	console.log('=========now========'+now/1000);
//         msTime=msTime-50;
//         if (msTime < 900) {
//         	if (null!=money&&money>getMoney) {
//         		sentMoney(getMoney+1);
//         		console.log('请刷新页面查看获拍结果，有可能失败');
//         	}else if(money<getMoney){
//         		console.log('超出预期价格，失败');
//         	}
//             clearInterval(timer);
//         }if(msTime < 1600){
//         	$.ajax({
//                 async : true,
//                 url : "//used-api.jd.com/auctionRecord/getCurrentAndOfferNum",
//                 type : "GET",
//                 dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
//                 jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
//                 jsonpCallback: '__jp53', //设置回调函数名
//                 data : {
//                     auctionId : window.location.pathname.split("/")[2]
//                 }, 
//                 success: function(response, status, xhr){
//                 	getMoney=response.data.currentPrice;
//                     console.log("======获取到数据======"+getMoney+"======time="+msTime/1000);
//                 }
//             });
//         }
//     }
//     timer = setInterval(countDown, 50);
// }

// function jdAuction(money){
//   var a = document.getElementById("J-count-down");
//   var time=parseInt(a.childNodes[0].innerHTML*60*60)+parseInt(a.childNodes[4].innerHTML*60)+parseInt(a.childNodes[8].innerHTML)
//   console.log("========remain=========="+time);
//   setTimeTask(time,money);
// }



function getRemainTime() {
        	$.ajax({
                async : true,
                url : "//used-api.jd.com/auction/detail",
                type : "GET",
                dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
                jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
                jsonpCallback: '__jp53', //设置回调函数名
                data : {
                    auctionId : window.location.pathname.split("/")[2]
                }, 
                success: function(response, status, xhr){
                    console.log("===remain==="+response.data.auctionInfo.endTime);
                    endTime=parseInt(response.data.auctionInfo.endTime);
                }
            }); 
}


function setTimeTask2(money) {
	getRemainTime();
	function countDown() {
    	var nowtimestamp=new Date().getTime();
    	if (nowtimestamp<endTime) {
    		//倒计时还有2秒
    		if (endTime-nowtimestamp<1500) {
	              	    $.ajax({
                             async : true,
                             url : "//used-api.jd.com/auctionRecord/getCurrentAndOfferNum",
                             type : "GET",
                             dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
                             jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
                             jsonpCallback: '__jp53', //设置回调函数名
                             data : {
                                 auctionId : window.location.pathname.split("/")[2]
                             }, 
                             success: function(response, status, xhr){
                             	getMoney=response.data.currentPrice;
                             	console.log(nowtimestamp+"获取到数据"+getMoney);
                             }
                        });
                      if (endTime-nowtimestamp<300) {
                        if (null!=money&&money>getMoney) {
      
                            sentMoney(getMoney+1);
                            console.log('请刷新页面查看获拍结果，有可能失败');
                        }else if(money<getMoney){
                          console.log('超出预期价格，失败');
                        }
                          clearInterval(timer);
                      }
    		}else{
          var oDate = new Date(); 
    			console.log("此时"+oDate.getHours()+":"+oDate.getMinutes()+":"+
          oDate.getSeconds()+"========剩余时间========"+(endTime-nowtimestamp));
    		}
    		
		}
}
    timer = setInterval(countDown, 50);
}



