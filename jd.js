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
           eid: "LODBPQY57A24AMAI7L6NGCGAOZHT2NHATP7OFIRWJAGJTTFJ5TIFX5SNKECUSOHBTY5V3UXT3XBQPRW5KK7LYC2CWU",
	    token: "aq9cp34lriqm8aoua8c1572922341456bucx~NmZdTnNcdENTcH59clNaEGFmXkslRGxTUnRwf31TXwF5dQMNZER6UwYlI29+QxZuby1ETjgRMy1BextvIgABQSgYFRQNRD8CFSg3JRhDV25vIlZUIgMKU08dZSUhAgVWKBgVAio6dBkCMTUiIAQxEHcfaxo3BzoCBh1lYRhDC1MhN1Jkc0oKUwUgKz4hPU8eEWZRWT0VMy1BHGsRZgIFWyMxVmRzXApTFzMyKBhDQW5vJ19RPxE/LUF7G28wExhXEWYbZHMWJBgNIi8RZls2bm8oWFk1Mj8cBjIbb2g9T1E+LWsafTp0EBMxG29oPU9AOCpDUTwDClM+bRtvNBMEXC4sRU0NRGwqPm0bbyAEBFwuK2saazp0BRE0IhFmTTEQPShbXQ1EbC1BchtvaD1PXiwhR2RzXApTBSArPiE9T09hGBVcPhQzLUF7G283DlADaxZSTCQUOCQRLXolMBUdQXdrGEsiCXgBAig3LC1PDl0ga0RLPkkkFAcoNSgnFTEQYRgVUDgKMy1Bextvdz1PHhFmUWRzXApTB3VyeCECXAIodARbZVJnRgdycytzAFoAKSVVDmQHMBMbLT41GENBbm8tRFUNRGwtQScmITcEMRAwZhsaNAIyAgRjfW8mCV1Zb2gVWyJEbFMILyMvMAcCW38wUEg/UyMUUXMjeiFSAkgkI09VO147AFd2cjdmTU9Rb34VSSEcYkFbODI0MVkPW380RQgjEmdEVHN+f3ZSXgF5cQ8MPxc/U09jIz4qQ1cQNT5BQCdfYQBBbWUkN0NXEHxmSg==|~1572922458792~1~20190627~eyJkZWhhIjoiMmI1ZTRiNzFmZmMzMTg4YmYwYTBlMzIxNzM5NGQxM2MiLCJ2aXdlIjoiMCIsImJhaW4iOnsiaWMiOiIxIiwibGUiOiIxMDAiLCJjdCI6IjAiLCJkdCI6ImkifX0=|1dfij-16d,n;1de-15v,12;1dh-14s,20;1dh-148,2h;1dg-132,3k;1dh-11y,4m;1dh-11j,54;1dg-10v,62;1dh-10l,6g;1dh-zt,7k;1dh-z0,8o;1dg-yq,99;1dh-y3,ak;1dh-xx,b0;1dg-xn,c2;1dh-xl,ck;1dh-xh,d8;1dg-xe,dr;1dg-xe,dz;1di-xe,ed;1dg-xg,el;1dh-xq,ev;1dg-xw,ey;bd1q-xw,ey;1d2an-153,1d;1dh-14i,25;1dh-137,45;1dg-12q,4x;1dh-120,6g;1dh-11j,7c;1dg-11c,7m;1dh-115,7z;1dh-111,83;1dg-10v,8c;1dh-10s,8k;1dh-10r,8m;1dh-10o,8s;1dg-10n,8t;1dh-10m,8u;bd1u-10m,8u;1d0-10m,8u;1d31-10m,8u;1drl-129,fu;1d6g-129,ft;1di-129,fs;1dh-129,fl;1dg-129,fh;1dh-129,fa;1do-12b,f8;1db-12c,f1;1df-12d,es;1dh-12d,dw;1dh-12b,d8;1dg-12a,d3;1dh-127,cj;1dh-124,bq;1dg-124,bc;1dh-124,az;1dh-124,af;1dg-124,aa;1dh-125,a1;1dh-125,a0;1dg-127,9w;1dh-128,9v;1dh-128,9u;1d1e-128,9t;1d2a-128,9u;1dz-127,9v;1d23-126,9v;1db-125,9v;1de-123,9w;1dg-123,9x;1dv-122,9x;1db-120,9x;1da-11z,9x;1df-11y,9x;1dr-11x,9x;1d14-11w,9x;1dl-11w,9t;1dt-11w,9i;1dh-11x,8w;1dg-124,8g;1dh-12o,75;1dh-13k,5f;1dg-147,4c;1dh-152,2r;1dh-15g,28;1dg-160,16;1dh-164,u;1dh-16d,b;1df-16h,5;cw1gt-1hc,b5;1de7-18b,8;1d0-18b,8;1da-176,y;1db-15s,1v;1da-14k,2s;1db-13x,3a;1da-12t,45;1db-11y,56;1db-10v,6g;1da-zv,7k;1da-yz,8l;1db-ya,9e;1da-xk,a9;1dd-x0,ax;1d42c-oj,g;1d2w-oj,f;1da-oj,d;1dl-oi,b;1db-oi,a;1da-oh,7;1db-of,4;1da-of,2;1dc0r-178,d;1d0-178,d;1db-15q,1t;1da-143,3c;1db-12p,4u;1da-119,6c;1db-zu,7s;1da-ym,92;1db-x9,af;1dk3d-cy,af;1d1-cy,af;1d9-cy,8z;1da-cy,7t;1da-cy,6f;1db-cy,54;1da-cy,3y;1db-cv,2j;1db-cn,19;1da-ci,8;1dukc-165,0;1d0-165,0;1db-15f,p;1da-14u,16;1db-14r,19;1da-149,1o;1db-13o,23;1da-135,2h;1db-12i,2x;1db-11y,3d;1da-119,3t;1db-10k,4a;1da-zx,4q;1db-zq,4x;1da-ze,55;1db-z9,5a;1db-z4,5f;1da-z0,5j;1da-yz,5k;1db-yz,5l;1du-yx,5n;1du-yt,5p;1db-yt,5s;ewb;1d0-yt,5u;gw0;1da-ys,5w;1db-ys,5y;ew0;1dl-ys,6m;1da-ys,6o;gw1;1d1o-yt,90;gw7;1d5v-yo,bl;1db-ye,bl;1da-y0,bp;1db-xg,bu;1da-wj,c3;1db-vs,c8;1da-um,cl;1db-uf,cn;1da-u3,ct;1db-tl,d3;1da-t7,dc;1db-sw,dh;1db-sl,dl;1da-sb,dp;1db-s2,ds;1da-rw,du;1db-rq,dx;1da-ri,dz;1db-rb,e2;1da-r6,e4;1db-qx,e8;1da-qr,ec;1db-ql,eg;1da-qg,ei;1db-qa,em;1db-q8,en;1da-q4,eq;1da-q3,eq;1dl-q2,er;1d1f-q3,ep;1da-q5,em;1db-q9,el;1da-qd,ei;1dc-qi,ed;1d9-qm,eb;1db-qs,e8;1da-qu,e7;1db-qv,e7;1db-qx,e6;ewk;gw2;1dj-qy,ec;1da-qz,ec;gw4;1di-r1,er;gwg;1d18-r1,fx;gw6;1dz-r1,hk;gwf;1d10-r1,iy;gwe;1dh-r1,je;1da-r1,jd;gw6;1d5-r0,jf;1da-r0,jd;1db-qz,jb;1da-qy,ja;1db-qx,j8;1da-qw,j7;1db-qt,j3;1da-qp,j1;1db-qn,iy;1da-qj,iv;1db-qf,iq;1da-qa,il;1db-q6,ih;1da-q1,ic;1db-q0,i9;1da-px,i3;1db-pv,hz;1db-ps,hw;1da-pr,ht;1db-pq,hq;1da-po,hp;1db-po,hm;1da-pn,hj;1db-pl,hh;1da-pl,hf;1db-pl,hd;1da-pl,hb;1db-pk,hb;1da-pk,h9;1db-pk,h7;bd1p-pk,h7;doei:,1,8,0,0,8,1000,-1000,1000,-1000;dmei:,1,8,8,1000,-1000,1000,-1000,1000,-1000;emc:,d:236;emcf:,d:236;ivli:;iivl:;ivcvj:;scvje:;1572922341452,1572922458789,0,0,253,253,0,19,0,0,0;tl12"
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
                          console.log('最新价格'+ getMoney+'超出预期价格，失败');
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



