(function(o,x,k){var b=1000;var l="cma";function n(d){return Object.prototype.toString.call(d)==="[object Array]"}var t=function(){var q=location.hostname;var f=/^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;var d=q.split(".");var p=d.length-2;if(f.test(q)||2===d.length){return q}for(;0<=p;--p){if("www"===d[p]){return d.slice(p+1).join(".")}if(-1===",com,net,org,gov,edu,info,name,int,mil,arpa,asia,biz,pro,coop,aero,museum,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cf,cg,ch,ci,ck,cl,cm,cn,co,cq,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,es,et,ev,fi,fj,fk,fm,fo,fr,ga,gb,gd,ge,gf,gh,gi,gl,gm,gn,gp,gr,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,in,io,iq,ir,is,it,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,ml,mm,mn,mo,mp,mq,mr,ms,mt,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nt,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,pt,pw,py,qa,re,ro,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sy,sz,tc,td,tf,tg,th,tj,tk,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,va,vc,ve,vg,vn,vu,wf,ws,ye,yu,za,zm,zr,zw,".indexOf(","+d[p]+",")){return d.slice(p).join(".")}}return q};_py.getLast=function(f){for(var d=this.length-1;0<=d;d--){if(n(this[d])){if(this[d][0]==f){return this[d][1]}}}};_py.serialize=function(){function s(B,D){for(var C=0;C<B.length;C++){if(B[C]===D){return C}}return -1}for(var q=["domain","urlParam","pi","e","p","mapping"],d=[],p=[],u=[],f,e=0;e<this.length;e++){f=this[e][0],-1===s(q,f)&&(p[f]=p[f]||[],0<p[f].length?-1===s(p[f],this[e][1])&&p[f].push(this[e][1]):(p[f].push(this[e][1]),d.push([f,p[f]])))}for(e=0;e<d.length;e++){u.push(d[e][0]+"="+k(d[e][1].join(",")))}return u.join("&")};o.ipy={r:/(^|&)jump=(\d*)/i,cookie:{set:function(q,p,f,d,e){z=new Date();z.setTime(z.getTime()+(f||0));x.cookie=q+"="+k(p||"")+(f?"; expires="+z.toGMTString():"")+";path=/; domain="+(d||location.host)+(e?"; secure":"")},get:function(d){return(d=x.cookie.match(RegExp("(^|;)\\s*"+d+"=([^;]*)","i")))?decodeURIComponent(d[2]):""}},setCookie:function(f,d){ipy.cookie.set(f,d,31536000000,t())},setSession:function(f,d){ipy.cookie.set(f,d,0,t())},getJump:function(){var d=ipy.cookie.get("ipysession");return d&&(d=d.match(ipy.r))?parseInt(d[2]):0},setJump:function(d){var f=ipy.cookie.get("ipysession");f?f.match(ipy.r)?ipy.setSession("ipysession",f.replace(/jump=(\d*)/,"jump="+d)):ipy.setSession("ipysession",f+"&jump="+d):ipy.setSession("ipysession","jump="+d)},getInfo:function(p){var d=ipy.cookie.get(p);if(d){return d}try{if(o.localStorage){if(localStorage.getItem(p)){return localStorage.getItem(p)}}}catch(f){}return""},setInfo:function(p,d){if(d==null||d==""){return}ipy.setCookie(p,d);try{if(o.localStorage){localStorage.setItem(p,d)}}catch(f){}},getQueryString:function(f){if(f==""||f==null){return}var s=o.location.href,d=s.split(f),e="";if(d.length>1){s=d[1];e=s.split("&")[0].replace("=","");return e}var p=new RegExp("(^|&)"+f+"=([^&]*)(&|$)"),q=o.location.search.substr(1).match(p);if(q!=null&&q){return q[2]}var u=o.location.hash.substr(1).match(p);if(u!=null&&u){return u[2]}return""},setExendParam:function(u,B,s){var f=u||"",d=B||"",q=s||"";ipy.getExtendParam(f,d,q)},getExtendParam:function(d,p,s){var q="",f="";if(d!=null&&d){q="p="+d}if(p!=null&&p){_py.push(["pv",p])}if(s!=null&&s){q+="&ext="+s}ipy.extendSend(q)},itemInfo:function(f){var d=[],s;switch(typeof f){case"string":s=f;break;case"object":var p=["id","name","origPrice","price","brand","imgUrl","productUrl","categoryId","category","promotion","discount","soldOut","domain","currency"];for(var e=0;e<p.length;e++){var q=(f[p[e]]==undefined)?"":f[p[e]];q=q.toString();d.push(k(q))}ipy.id=f.id||"";s=d.join(",");break;default:return s=""}return s},extendSend:function(d){var f="";if(_py.getLast("e")){f="e="+_py.getLast("e")+"&"}f+=d,A=_py.getLast("domain"),i=("https:"==location.protocol?"https":"http")+"://"+A+"/adv?"+_py.serialize()+ipy.getSession()+"&e="+h(f)+"&rd="+new Date().getTime();(new Image()).src=i},getSession:function(){var e=_py.getLast("c");if(e&&e!=null){var d=ipy.getJump();if(!isNaN(d)&&d==0){ipy.setJump(d+1);return""}d++;ipy.setJump(d);return"&s="+d}return""},getP:function(){var d=_py.getLast("p");var e=ipy.id?ipy.id:"";d=d?d:e;return d}};if(_py.getLast("mapping")!==1){var r="setTimeout(function() {var f=document;e = f.createElement('iframe');e.src='"+("http:"!=location.protocol?"https://cm.ipinyou.com/cmas.html?a="+_py.getLast("a"):"http://fm.p0y.cn/cm/cma.html?a="+_py.getLast("a"))+"';f.body.insertBefore(e,f.body.firstChild);e.style.display='none';}, "+b+")"}var i=location.href,a=x.referrer,v,m,g;o.parent!=o&&(i=a,a="");i&&_py.push(["u",i]);a&&_py.push(["r",a]);var y=_py.getLast("urlParam")||"pyck",w=ipy.getQueryString(y);w=w?w:ipy.getInfo("ipycookie");ipy.setInfo("ipycookie",w);w&&_py.push(["c",w]);var A=_py.getLast("domain");var v=_py.getLast("e");if(v!=""&&v){v="e="+_py.getLast("e")}else{v=""}m=ipy.itemInfo(_py.getLast("pi"));i=("https:"==location.protocol?"https":"http")+"://"+A+"/adv?"+_py.serialize()+ipy.getSession()+"&pi="+k(m)+"&p="+k(ipy.getP())+"&e="+k(v)+"&rd="+new Date().getTime();a=x.createElement("iframe");a.src="javascript:false;";a.style.display="none";function j(){if(x.body){x.body.insertBefore(a,x.body.firstChild);try{c=a.contentWindow.document,c.write('<!doctype html><html><body onload="'+r+'"><script src="'+i+'"><\/script></body></html>'),c.close()}catch(d){a.contentWindow.location.replace('javascript:void((function(){document.write("<!doctype html><html><body onload=\\"'+r+"\\\"><script>document.domain='"+document.domain+"';var s=document.createElement('script');document.body.insertBefore(s,document.body.firstChild);s.src='"+i+"';<\/script></body></html>\");document.close()})());")}}else{setTimeout(j,50)}}setTimeout(j,10)})(window,document,encodeURIComponent);