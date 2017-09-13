"use strict";var saveAs=saveAs||function(e){if(!("undefined"==typeof e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function t(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function e(t){var n=new MouseEvent("click");t.dispatchEvent(n)},a=/constructor/i.test(e.HTMLElement)||e.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),l=function t(n){(e.setImmediate||e.setTimeout)(function(){throw n},0)},u="application/octet-stream",d=4e4,c=function e(t){var o=function e(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};setTimeout(o,d)},m=function e(t,n,o){n=[].concat(n);for(var r=n.length;r--;){var i=t["on"+n[r]];if("function"==typeof i)try{i.call(t,o||t)}catch(e){l(e)}}},f=function e(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},w=function t(l,d,w){w||(l=f(l));var p=this,g=l.type,v=g===u,h,y=function e(){m(p,"writestart progress write writeend".split(" "))},b=function t(){if((s||v&&a)&&e.FileReader){var o=new FileReader;return o.onloadend=function(){var t=s?o.result:o.result.replace(/^data:[^;]*;/,"data:attachment/file;"),n=e.open(t,"_blank");n||(e.location.href=t),t=void 0,p.readyState=p.DONE,y()},o.readAsDataURL(l),void(p.readyState=p.INIT)}if(h||(h=n().createObjectURL(l)),v)e.location.href=h;else{var r=e.open(h,"_blank");r||(e.location.href=h)}p.readyState=p.DONE,y(),c(h)};return p.readyState=p.INIT,r?(h=n().createObjectURL(l),void setTimeout(function(){o.href=h,o.download=d,i(o),y(),c(h),p.readyState=p.DONE})):void b()},p=w.prototype,g=function e(t,n,o){return new w(t,n||t.name||"download",o)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=f(e)),navigator.msSaveOrOpenBlob(e,t)}:(p.abort=function(){},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,g)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content);(function($,e){function t(e,t){return t.indexOf(e)>=0}var n=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,o=$("#hardcore"),r=!1,i=0,a=0,A=0,s=0,Q=!1,l=$("#input"),u=$("#progress"),d=0,c=$("#wordcount"),D=$("#charcount"),m=!1,f=null,w=0,p=[8,9,13,16,17,18,20,27,37,38,39,40,91,93],g={96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",222:"'"},v={",":"<",".":">","/":"?",";":":","'":'"',1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+"},h=5,y=2;$("#email").on("keyup",function(){$(this).parents(".form-group").toggleClass("valid",n.test($("#email").val()))}).on("blur",function(){$(this).parents(".form-group").toggleClass("invalid",!n.test($("#email").val()))}),$("form").on("submit",function(e){if(e.preventDefault(),n.test($("#email").val())){l.val(decodeURIComponent(escape(atob(localStorage.getItem("mdwa.draft")))));var t=$("#email").val();amplitude.getInstance().setUserId(t);var o=(new amplitude.Identify).setOnce("created_at",Math.floor(Date.now()/1e3));amplitude.identify(o),amplitude.logEvent("sign_up",{email:t}),localStorage.setItem("mdwa.email",t),localStorage.setItem("mdwa.returning","true"),x(0),S(),$("#die").addClass("returning").hide()}else $("form").addClass("shake"),setTimeout(function(){$("form").removeClass("shake")},1e3)});var b=function e(){u.width(100*d+"%")},_=function e(){a=l.val().split(/\s+/).length,c.text(a+(1==a?" word":" words")),A=l.val().replace(/\s+/,'').length, D.text(A+(1== A?" character":" characters")) },E=function e(){if(m){var t=k()-w;var G = "words"==session_type?a:A;localStorage.setItem("mdwa.draft",btoa(unescape(encodeURIComponent(u.val())))),amplitude.logEvent("stop_writing",{session_type:session_type,session_limit:session_limit,duration:t,won:!1,words:a,dangers:i}),l.val(""),clearInterval(f),m=!1,$("#tweet").attr("href","https://twitter.com/intent/tweet?text=I+wrote+"+a+"+words+using+The+Most+Dangerous+Writing+App+-+until+it+deleted+everything+.+%23MDWA&url=http%3A%2F%2Fwww.themostdangerouswritingapp.com"),$("#tweet").text("I wrote "+a+" words using The Most Dangerous Writing App - until it deleted everything."),$("#die").show(),setTimeout(function(){$("#die").addClass("visible")},20)}},S=function e(){clearInterval(f),m=!1,won=!0,u.addClass("won"),setTimeout(function(){u.addClass("hide")},3e3),hardcore_mode&&($("#hardcore").hide(),l.removeClass("hardcore")),$("#win").show(),$("#wordcount").hide()},C=function e(){var t=k()-w; var G=("words"==session_type?a:A);d=("timed"==session_type?t:G)/session_limit,s+=.1,b(),hardcore_mode&&(hardcore.style.opacity=s>.1?0:1),!won&&d>=1?(amplitude.logEvent("stop_writing",{session_type:session_type,session_limit:session_limit,duration:t,won:!0,words:a,dangers:i}),S()):s>h?E():void(s>y&&(r=!0,x((s-y)/(h-y))))},x=function e(t){0==t?(l.css("opacity",1),$("body").css("box-shadow","none"),u.removeClass("danger")):(l.css("opacity",1-t),$("body").css("box-shadow","inset 0px 0px "+Math.floor(100*t)+"px 0px rgba(242, 77, 77, "+.7*t+")"),u.addClass("danger"))},F=function e(t,n){var o=void 0;return g.hasOwnProperty(t)?o=g[t]:48<=t&&t<=90?(o=String.fromCharCode(t),n||(o=o.toLowerCase())):o="",n&&v.hasOwnProperty(o)&&(o=v[o]),o},I=function n(o){_();var a=o||e.event,l=a.keyCode||a.which,u=a.ctrlKey||a.metaKey;if(a.ctrlKey&&t(l,[78,192])&&(a.metaKey||a.altKey))return void $("body").toggleClass("night-mode");if(!(won||l&&t(l,p))){if(u&&t(l,[65,67,86,88]))return void a.preventDefault();hardcore&&(hardcore.innerHTML=F(l,a.shiftKey)),s=0,r&&i++,r=!1,m?x(0):(amplitude.logEvent("start_writing",{session_type:session_type,session_limit:session_limit}),m=!0,w=k(),f=setInterval(C,100))}};l.on("scroll",function(){$("#input-wrap").toggleClass("cut-top",this.scrollTop>0),$("#input-wrap").toggleClass("cut-bottom",this.scrollHeight-10>$(this).height()+this.scrollTop&&this.scrollHeight>$(this).height())}),l.on("compositionstart compositionend", function() {Q = !Q});l.on("input", function(e) {if (Q) {I(e)}});l.on("keydown", function(e) {if (!Q) {I(e)}});var O=function e(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),l.focus_end()},T=function e(){$("body").toggleClass("night-mode"),l.focus_end()},k=function e(){return(new Date).getTime()/1e3},A=function e(){return hardcore_mode?(o.show(),l.addClass("hardcore")):o.hide(),won&&S(),l.focus_end()};$("#toggle-night-mode").on("click",T),$("#toggle-fullscreen").on("click",O),$("#download").on("click",function(){var e=l.val().replace(/[",.!-::']/g,""),t=e.indexOf(" ",25);e=e.substr(0,t>0?t:30);var n=(new Date).toLocaleDateString(),o=e+" (MDWA "+n+").txt",r=new Blob([l.val()],{type:"text/plain;charset=utf-8"});return saveAs(r,o),!1}),A(),$("input.float-label").label_better({animationTime:250,easing:"ease-in-out",offset:-8})}).call(void 0,jQuery,window);