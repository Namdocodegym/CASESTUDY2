(function(w,d){zaraz.debug=(cr="")=>{document.cookie=`zarazDebug=${cr}; path=/`;location.reload()};window.zaraz._al=function(cm,cn,co){w.zaraz.listeners.push({item:cm,type:cn,callback:co});cm.addEventListener(cn,co)};zaraz.preview=(cA="")=>{document.cookie=`zarazPreview=${cA}; path=/`;location.reload()};zaraz.i=function(cu){const cv=d.createElement("div");cv.innerHTML=unescape(cu);const cw=cv.querySelectorAll("script");for(let cx=0;cx<cw.length;cx++){const cy=d.createElement("script");cw[cx].innerHTML&&(cy.innerHTML=cw[cx].innerHTML);for(const cz of cw[cx].attributes)cy.setAttribute(cz.name,cz.value);d.head.appendChild(cy);cw[cx].remove()}d.body.appendChild(cv)};zaraz.f=async function(dC,dD){const dE={credentials:"include",keepalive:!0,mode:"no-cors"};if(dD){dE.method="POST";dE.body=new URLSearchParams(dD);dE.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(dC,dE)};!function(c_,da,db,dc,dd,de){function df(dh,di){de?dc(dh,di||32):dd.push(dh,di)}function dg(dj,dk,dl,dm){return dk&&da.getElementById(dk)||(dm=da.createElement(dj||"SCRIPT"),dk&&(dm.id=dk),dl&&(dm.onload=dl),da.head.appendChild(dm)),dm||{}}de=/p/.test(da.readyState),c_.addEventListener("on"+db in c_?db:"load",(function(){for(de=1;dd[0];)df(dd.shift(),dd.shift())})),df._=dg,c_.defer=df,c_.deferscript=function(dn,dp,dq,dr){df((function(){dg("",dp,dr).src=dn}),dq)}}(this,d,"pageshow",setTimeout,[]);defer((function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()();Object.defineProperty(zaraz.deferred,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...ds){let dt=Array.prototype.push.apply(this,ds);for(;zaraz.deferred.length;)zaraz.deferred.pop()();return dt}})}),5500);addEventListener("visibilitychange",(function(){for(;zaraz.deferred.length;)zaraz.deferred.pop()()}));window.zaraz._p=async a=>new Promise((b=>{if(a){a.e&&a.e.forEach((c=>{try{new Function(c)()}catch(d){console.error(`Error executing script: ${c}\n`,d)}}));Promise.allSettled((a.f||[]).map((e=>fetch(e[0],e[1]))))}b()}));zaraz.pageVariables={};zaraz.__zcl={};zaraz.track=async function(cE,cF,cG){return new Promise(((cH,cI)=>{const cJ={name:cE,data:{}};for(const cK of[localStorage,sessionStorage])Object.keys(cK||{}).filter((cM=>cM.startsWith("_zaraz_"))).forEach((cL=>{try{cJ.data[cL.slice(7)]=JSON.parse(cK.getItem(cL))}catch{cJ.data[cL.slice(7)]=cK.getItem(cL)}}));Object.keys(zaraz.pageVariables).forEach((cN=>cJ.data[cN]=JSON.parse(zaraz.pageVariables[cN])));Object.keys(zaraz.__zcl).forEach((cO=>cJ.data[`__zcl_${cO}`]=zaraz.__zcl[cO]));cJ.data.mcListeners=zaraz.mcListeners;
//
cJ.data={...cJ.data,...cF};cJ.zarazData=zarazData;fetch("/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(cJ)}).catch((()=>{console.warn("Large event payload sent to Cloudflare Zaraz, cannot assure deliverability.");return fetch("/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(cJ)})})).then((function(cQ){zarazData._let=(new Date).getTime();cQ.ok||cI();return 204!==cQ.status&&cQ.json()})).then((async cP=>{await zaraz._p(cP);"function"==typeof cG&&cG()})).finally((()=>cH()))}))};zaraz.set=function(cR,cS,cT){try{cS=JSON.stringify(cS)}catch(cU){return}prefixedKey="_zaraz_"+cR;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[cR];if(void 0!==cS){cT&&"session"==cT.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,cS):cT&&"page"==cT.scope?zaraz.pageVariables[cR]=cS:localStorage&&localStorage.setItem(prefixedKey,cS);zaraz.__watchVar={key:cR,value:cS}}};for(const{m:cV,a:cW}of zarazData.q.filter((({m:cX})=>["debug","set"].includes(cX))))zaraz[cV](...cW);for(const{m:cY,a:cZ}of zaraz.q)zaraz[cY](...cZ);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(bM,bN,bO,bP){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[bM]||(zaraz.__zarazTriggerMap[bM]="");zaraz.__zarazTriggerMap[bM]+="*"+bN+"*";zaraz.track("__zarazEmpty",{...bO,__zarazClientTriggers:zaraz.__zarazTriggerMap[bM]},bP)};window.dataLayer=w.dataLayer||[];zaraz._processDataLayer=dv=>{for(const dw of Object.entries(dv))zaraz.set(dw[0],dw[1],{scope:"page"});if(dv.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(dv.event))return;let dx={};for(let dy of dataLayer.slice(0,dataLayer.indexOf(dv)+1))dx={...dx,...dy};delete dx.event;dv.event.startsWith("gtm.")||zaraz.track(dv.event,dx)}};const du=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...dz){let dA=du.apply(this,dz);zaraz._processDataLayer(dz[0]);return dA}});dataLayer.forEach((dB=>zaraz._processDataLayer(dB)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((cp=>clearTimeout(cp)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((cq=>cq.item.removeEventListener(cq.type,cq.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.mcListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=fw=>{const{event:fx,...fy}=fw;zaraz.track(fx,{...fy,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(ea=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.mcListeners={"google-analytics_v4_20ac":["visibilityChange"]};zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","x=new XMLHttpRequest,x.withCredentials=!0,x.open(\"POST\",\"https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=5bfa9a34-7f06-4333-b7cf-0ece73176928&_u=KGDAAEADQAAAAC%7E&z=309544284\",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith(\"1g\") && domain.length > 2) {fetch(\"https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=5bfa9a34-7f06-4333-b7cf-0ece73176928&_u=KGDAAEADQAAAAC%7E&z=309544284&slf_rd=1\".replace(\"www.google.com\", \"www.google.\"+domain.slice(2)));}}},x.send();"],"f":[["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=5bfa9a34-7f06-4333-b7cf-0ece73176928&_u=KGDAAEADQAAAAC%7E&z=309544284&slf_rd=1",{}]]})})(window,document);