define("user:page/account/index/index",["require","exports","module","common:widget/ui/donut/donut","common:widget/oui/lib/handlebars/1.0.0/handlebars","common:widget/oui/arale/tip/1.1.4/tip","common:widget/ui/dialog/dialog","common:widget/oui/lib/jquery/1.9.1/jquery","common:widget/common-cmbc-dialog/common-cmbc-dialog"],function(i,t,n){function e(i){var t=parseFloat(Math.round(100*i)/100,10).toFixed(2);return t.replace(/\B(?=(\d{3})+(?!\d))/g,",")}function o(){var i=notification.data,t=i.notification;t&&"ROLL_OVER"==t.type&&f[t.type]()}var a=i("common:widget/ui/donut/donut"),c=i("common:widget/oui/lib/handlebars/1.0.0/handlebars"),s=i("common:widget/oui/arale/tip/1.1.4/tip"),l=i("common:widget/ui/dialog/dialog"),d=i("common:widget/oui/lib/jquery/1.9.1/jquery"),r=i("common:widget/common-cmbc-dialog/common-cmbc-dialog"),t={init:function(){t.tab(d("#assets-tab")),p("total-pie"),p("invest-pie"),p("balance-pie"),t.identification(),new s({element:"#tipCon_6",trigger:"#frozenTips",direction:"right"}),d(".J_hasNoSetMSTG").on("click",function(){r.init()}),d(".close",".FUND_TIPS").click(function(){d(".FUND_TIPS").hide(),d.post("/tips/tipsAction.action",{type:"INDEX"})}),o(),d("#hasnomenu").on("click",function(){l.modalDialog({content:d("#confirm-not-menu").html(),cssClass:"exchange-dialog",maskConfig:{cssClass:"exchange-mask"}}).after("hide",function(){this.destroy()}).show()})},identification:function(){d(".safe-rank",".user-security-box").each(function(i){if(!d(this).hasClass("light")){var t=d(this),n=t.data("txt").split("||"),e=t.attr("href");return d("#tipCon_1").css({position:"absolute",left:t.offset().left-10+"px",top:t.offset().top+40+"px"}).find(".ui-poptip-content").html("<div>"+n[0]+"<a href='"+e+"'>"+n[1]+"</a><i class='iconfont closeTip' style='position: absolute;right:-1px;top:2px;cursor: pointer;color:#d9c6a4; font-size:16px;padding: 0 2px; height: 16px;line-height: 16px;'>&#xF045;</i></div>").end().show(),!1}}),d(".closeTip").on("click",function(){d(this).parents(".ui-poptip").hide()}),d(".safe-rank",".user-security-box").each(function(i){if(d(this).hasClass("light")){var t=i+2;new s({element:"#tipCon_"+t,trigger:d(this),direction:"right"})}})},getProgress:function(){var i=0;d(".safe-rank").each(function(){var t=/light/.test(this.className);t&&(i+=25)}),d("#sec-level").text(25>=i?"低":i>25&&75>=i?"中":"高")},tab:function(i){var t=i.find(".acc-tab-li"),n=i.find(".account-tab-content"),e=i.find(".active").data("name");i.find(".account-tab-content[data-name="+e+"]").show(),t.click(function(){e=d(this).data("name"),t.removeClass("active"),d(this).addClass("active"),n.hide(),i.find(".account-tab-content[data-name="+e+"]").show()})}},u={"total-pie":[{id:"pie-u",color:"#154d85",y:investAmount.uplan,url:"/account/invest!plan.action"},{id:"pie-x",color:"#ee7565",y:investAmount.autoinvestplan,url:"/account/invest!autoInvestPlanList.action"},{id:"pie-s",color:"#e4cd85",y:investAmount.loan,url:"/account/invest!loan.action"},{id:"pie-d",color:"#9197d4",y:investAmount.frozen},{id:"pie-k",color:"#6acea5",y:investAmount.available}],"invest-pie":[{id:"pie-u",color:"#154d85",y:investAmount.uplan,url:"/account/invest!plan.action"},{id:"pie-x",color:"#ee7565",y:investAmount.autoinvestplan,url:"/account/invest!autoInvestPlanList.action"},{id:"pie-s",color:"#e4cd85",y:investAmount.loan,url:"/account/invest!loan.action"}],"balance-pie":[{id:"pie-d",color:"#9197d4",y:investAmount.frozen},{id:"pie-k",color:"#6acea5",y:investAmount.available}]},m=function(i){for(var t=0,n=[],o=0,a=u[i],c=0;c<a.length;c++)t+=a[c].y;a.sort(function(i,t){return i.y-t.y});for(var c=0;c<a.length;c++)n[a[c].id]={},n[a[c].id].id=a[c].id,n[a[c].id].amount=e(a[c].y),0==t?n[a[c].id].percent="0%":c==a.length-1?n[a[c].id].percent=(1e3-o)/10+"%":(o+=1e3*(a[c].y/t).toFixed(3),n[a[c].id].percent=1e3*(a[c].y/t).toFixed(3)/10+"%");return n},p=function(i){var t=d("#account-"+i),n=new a({container:document.getElementById(i),width:220,height:220,data:u[i]});n.on("select",function(i){var n=i.id;d(".assers-detail li",t).removeClass("active"),d(".assers-detail li."+n,t).addClass("active"),d(".my-balance-list li",t).removeClass("active"),d(".my-balance-list li."+n,t).addClass("active")}),n.on("unselect",function(i){var n=i.id;d(".assers-detail li."+n,t).removeClass("active"),d(".my-balance-list li."+n,t).removeClass("active")}),n.on("click",function(i){i.url&&(location.href=i.url)});var e=c.compile(d("#"+i+"-list-template").html()),o=e(m(i));d("#account-"+i).append(o),d(".assers-detail li,.my-balance-list li").hover(function(){var i=d(this).data("id");n.selectPointById(i)},function(){var i=d(this).data("id");n.unselectPointById(i)}),d(".assers-detail li").click(function(){var i=d(this).data("id");n.clickPointById(i)})},f={ROLL_OVER:function(){d(".ROLL_OVER").removeClass("fn-hide"),d(".close",".ROLL_OVER").click(function(){d(".ROLL_OVER").hide()})}};n.exports=t});