import{d as T,r as p,o as Y,a as c,c as i,b as a,g as $,_ as j,x,y as ls,F as M,u as L,l as C,t as b,e as X,j as z,n as S,p as os,h as cs,w as is,i as ps,k as rs,f as H,m as us}from"./app.7c718477.js";const ds=class{constructor({src:e,onloadedmetadata:d,ontimeupdate:n,onerror:o,isDebugger:r=!1}){this.audio=null,this.status="pause",this.muted=!1,this.timer="",this.playbackRate=1,this.src=e,this.onloadedmetadata=d,this.ontimeupdate=n,this.onerror=o,this.isDebugger=r}log(...e){this.isDebugger&&console.log(...e)}initPlayer(e=this.src,d=1){this.audio=new Audio(e),this.audio.volume=d,this.changeRate(this.playbackRate),this.audio.onloadedmetadata=n=>{this.log("onloadedmetadata",n.type),this.onloadedmetadata(n.target.duration)},this.audio.ontimeupdate=n=>{this.log("ontimeupdate",n.target.currentTime),this.ontimeupdate(n.target.currentTime)},this.audio.onerror=n=>{this.log("onerror",n),this.onerror(n)},this.audio.onpause=n=>{this.status=n.type},this.audio.onplay=n=>{this.status=n.type}}play(){this.audio&&this.audio.play()}toggleMute(){this.audio.muted=!this.audio.muted,this.muted=this.audio.muted}pause(){this.audio&&this.audio.pause()}togglePlay(){this.audio&&this.audio.paused?this.play():this.pause()}reload(e){this.pause(),this.audio&&this.audio.currentTime&&(this.audio.currentTime=0),this.audio.src=e,this.status="ended",this.togglePlay()}changeTime(e){this.log("changeTime",e),this.audio.currentTime=e,this.status!=="play"&&e>0&&this.play()}changeVolume(e){this.audio.volume=e,this.muted=e===0,this.audio.muted=this.muted}changeRate(e){this.audio.playbackRate=e,this.playbackRate=e}getSecondTimeFomate(e){const d=Math.floor(e);let n=Math.floor(d%3600/60),o=d-60*n;const r=y=>String(y).padStart(2,"0");return r(n)+":"+r(o)}},hs={class:"slider-container"},vs=T({__name:"slider",props:{modelValue:null,active:null,background:null},emits:["update:modelValue","change"],setup(e,{emit:d}){p(0);const n=p(null),o=p(null),r=p(0),y=Math.random()*1e4,F=Math.random()*1e5;function m(u){const h=u.clientX-n.value.offsetLeft;document.onmousemove=A=>{document.getSelection().removeAllRanges();const q=A.clientX-h;r.value=o.value.clientWidth-n.value.clientWidth;const k=Math.min(r.value,Math.max(q,0));D(k/r.value)},document.onmouseup=()=>{document.onmousemove=document.onmouseup=null}}function _(u){if(!u.target.className.includes("slider-liner"))return;const h=u.offsetX-n.value.clientWidth/2;D(h/r.value)}function D(u){d("update:modelValue",Number(u).toFixed(2)),d("change",u)}return Y(()=>{o.value=document.getElementById(y),n.value=document.getElementById(F),r.value=o.value.clientWidth-n.value.clientWidth}),(u,h)=>(c(),i("div",hs,[a("div",{class:"slider-liner",id:y,onClick:_,style:$({background:`linear-gradient(to right, ${e.active||"#20a0ff"} ${e.modelValue*100}%, ${e.background||"#ddd"} ${e.modelValue*100}%)`})},[a("div",{class:"slider-pointer",id:F,onMousedown:m,style:$({left:r.value*e.modelValue+"px",background:e.active||"#20a0ff"})},null,36)],4)]))}});const U=j(vs,[["__scopeId","data-v-9114335a"]]),v=e=>(os("data-v-831aa1c6"),e=e(),cs(),e),ys={class:"audio-player-warper"},ms={class:"audio-player-control-btn"},Ds=v(()=>a("path",{d:"M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"},null,-1)),Fs=[Ds],_s=v(()=>a("path",{d:"M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"},null,-1)),gs=[_s],fs={key:1,viewBox:"0 0 1024 1024",class:"audio-player-control-icon"},Cs=v(()=>a("path",{d:"M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"},null,-1)),bs=[Cs],As={key:0,class:"audio-player-mini"},qs=v(()=>a("path",{d:"M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"},null,-1)),ks=[qs],xs=v(()=>a("path",{d:"M616.0602684 468.78768158L771.30480958 468.78768158c35.3562355 0 64.11552429-28.75928879 64.11552429-64.11552429l-1e-8-164.95456696c0-35.3562355-28.75928879-64.11552429-64.11552429-64.11552429l-155.24454117 0c-35.3562355 0-64.11552429 28.75928879-64.11552429 64.11552429L551.94474411 404.67215728c0 35.34851076 28.75928879 64.11552429 64.11552429 64.11552431z m2.31742859-226.75266265L768.98738098 242.03501893 768.98738098 402.35472869l-150.60968399 0 0-160.31970976z","p-id":"3010"},null,-1)),Ms=v(()=>a("path",{d:"M299.04376221 848.39793396L724.95623779 848.39793396c60.90974808 0 110.46409607-49.55434799 110.46409607-110.46409607l0-202.85997391c0-18.34630967-14.87016678-33.21647644-33.21647644-33.21647644s-33.21647644 14.87016678-33.21647644 33.21647644L768.98738098 737.93383789c0 24.27892686-19.75221634 44.03114318-44.03114319 44.03114318l-425.91247558 0c-24.27892686 0-44.03114318-19.75221634-44.03114319-44.03114318l0-451.86767578c0-24.27892686 19.75221634-44.03114318 44.03114319-44.03114318L488.67121887 242.03501893c18.34630967 0 33.21647644-14.87016678 33.21647644-33.21647645s-14.87016678-33.21647644-33.21647643-33.21647644l-189.62745667 0c-60.90974808 0-110.46409607 49.55434799-110.46409607 110.46409607L188.57966614 737.93383789c0 60.90974808 49.55434799 110.46409607 110.46409607 110.46409607z","p-id":"3011"},null,-1)),Ls=v(()=>a("path",{d:"M490.86505127 497.09893418L370.25061797 617.72109223l0-98.97737504c0-18.34630967-14.87016678-33.21647644-33.21647643-33.21647644s-33.21647644 14.87016678-33.21647643 33.21647644L303.81766511 660.52399827c0 19.02608872 8.34274292 36.13643647 21.55208586 47.89352416 0.19311905 0.20084381 0.37078857 0.40168762 0.5716324 0.59480667a33.25355529 33.25355529 0 0 0 8.51268767 6.16436004 63.73314858 63.73314858 0 0 0 33.47911836 9.46283341L500.00344467 724.63952255c18.34630967 0 33.21647644-14.87016678 33.21647644-33.21647644s-14.87016678-33.21647644-33.21647644-33.21647643l-76.28974914 0L537.83932876 544.08093642c12.96987533-12.96987533 12.96987533-34.00440217 0-46.97427749-6.48880005-6.48880005-14.98603821-9.72547531-23.49100113-9.72547531s-16.99447632 3.23667527-23.48327636 9.71775056z","p-id":"3012"},null,-1)),zs=[xs,Ms,Ls],ws={key:1,class:"audio-player-warper-content"},Es={class:"audio-player-title"},Vs={class:"audio-player-title-btn"},Bs=v(()=>a("span",null,"倍速",-1)),Ss=["onClick"],$s=v(()=>a("path",{d:"M18.285714 201.142857c0-100.571429 82.285714-182.857143 182.857143-182.857143h621.714286c100.571429 0 182.857143 82.285714 182.857143 182.857143v621.714286c0 100.571429-82.285714 182.857143-182.857143 182.857143h-621.714286a183.369143 183.369143 0 0 1-182.857143-182.857143z m694.857143-109.714286v109.714286c0 60.342857 49.371429 109.714286 109.714286 109.714286h109.714286v-109.714286c0-60.342857-49.371429-109.714286-109.714286-109.714286h-109.714286z m-621.714286 109.714286v621.714286c0 60.342857 49.371429 109.714286 109.714286 109.714286h621.714286c60.342857 0 109.714286-49.371429 109.714286-109.714286v-438.857143h-109.714286a183.369143 183.369143 0 0 1-182.857143-182.857143v-109.714286h-438.857143c-60.342857 0-109.714286 49.371429-109.714286 109.714286z m129.828572 601.6c-14.628571-14.628571-14.628571-36.571429 0-51.2L479.085714 493.714286h-131.657143a36.644571 36.644571 0 0 1-36.571428-36.571429c0-20.114286 16.457143-36.571429 36.571428-36.571428h219.428572c9.142857 0 18.285714 3.657143 25.6 10.971428 7.314286 5.485714 10.971429 14.628571 10.971428 25.6v219.428572c0 20.114286-16.457143 36.571429-36.571428 36.571428a36.644571 36.644571 0 0 1-36.571429-36.571428v-131.657143l-257.828571 257.828571c-14.628571 14.628571-36.571429 14.628571-51.2 0z","p-id":"5623"},null,-1)),Ts=[$s],Ps={key:0,class:"audio-player-error"},Rs={key:1,class:"audio-player-control"},Is={class:"audio-player-control-progress"},Ws={class:"audio-player-control-time"},Ns=v(()=>a("path",{d:"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"},null,-1)),Os=[Ns],Xs=v(()=>a("path",{d:"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"},null,-1)),Us=[Xs],Ys=v(()=>a("path",{d:"M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"},null,-1)),js=[Ys],Hs={class:"audio-player-volume-slider"},Js={key:0,class:"audio-player-list"},Gs=["onClick"],Ks=T({__name:"audio-player",props:{list:null,miniable:{type:Boolean},rates:null},emits:["change","close"],setup(e,{emit:d}){const n=e,o=p(""),r=p("00:00"),y=p("00:00"),F=p(0),m=p(!1),_=p(0),D=p(1),u=p(!1),h=p({}),A=p(0),q=p(0),k=p(0),P=p(0),g=p(0),f=p(0),w=p(0),E=p(0),J=x(()=>{var s;return((s=o.value)==null?void 0:s.status)==="play"}),G=x(()=>{var s;return((s=o.value)==null?void 0:s.muted)===!0}),K=x(()=>{var s;return(s=o.value)==null?void 0:s.playbackRate}),Q=x(()=>({transform:`translate(${g.value}px, ${f.value}px)`,cursor:"move"}));function R(){var s;(s=o.value)==null||s.pause()}function V(){var s;(s=o.value)==null||s.togglePlay()}function B(){var s;(s=o.value)==null||s.toggleMute()}function Z(s){var t;(t=o.value)==null||t.changeTime(F.value*s)}function ss(s){var t;(t=o.value)==null||t.changeVolume(s)}function es(s){o.value.changeRate(s)}function as(s){var t;s===h.value?V():(h.value=s,(t=o.value)==null||t.reload(s.src))}function I(s){u.value=s,d("change",s)}function ts(){R(),d("close")}function ns(s){u.value&&(w.value=document.body.clientWidth,E.value=document.body.clientHeight,k.value=g.value,P.value=f.value,A.value=s.clientX,q.value=s.clientY,document.addEventListener("mousemove",W),document.addEventListener("mouseup",N))}function W(s){const t=k.value+s.clientX-A.value,l=P.value+s.clientY-q.value;t>0?g.value=0:t<-w.value+84?g.value=-w.value+84:g.value=t,l>E.value-120?f.value=E.value-120:l<-60?f.value=-60:f.value=l}function N(){document.removeEventListener("mouseup",N),document.removeEventListener("mousemove",W)}return Y(()=>{var s;h.value=n.list[0],o.value=new ds({src:h.value.src,onloadedmetadata:t=>{var l;m.value=!1,F.value=t,y.value=(l=o.value)==null?void 0:l.getSecondTimeFomate(t)},ontimeupdate:t=>{var l;r.value=(l=o.value)==null?void 0:l.getSecondTimeFomate(t),_.value=t/F.value},onerror:()=>{m.value=!0}}),(s=o.value)==null||s.initPlayer(h.value.src,D.value)}),ls(()=>{R()}),(s,t)=>(c(),i("div",{class:S(["audio-player-container",{mini:u.value}]),onMousedown:ns,style:$(u.value?L(Q):"")},[a("div",ys,[a("div",ms,[m.value?(c(),i("svg",fs,bs)):(c(),i(M,{key:0},[L(J)?(c(),i("svg",{key:1,viewBox:"0 0 17 32",class:"audio-player-control-icon",onClick:V},gs)):(c(),i("svg",{key:0,viewBox:"-9 0 32 32",class:"audio-player-control-icon",onClick:V},Fs))],64))]),u.value?(c(),i("div",As,[(c(),i("svg",{onClick:ts,viewBox:"0 0 1024 1024"},ks)),(c(),i("svg",{viewBox:"0 0 1024 1024",onClick:t[0]||(t[0]=l=>I(!1))},zs))])):C("",!0),u.value?C("",!0):(c(),i("div",ws,[a("div",Es,[a("div",null,b(h.value.name),1),a("div",Vs,[m.value?C("",!0):(c(),i(M,{key:0},[Bs,(c(!0),i(M,null,X(e.rates||[.5,1,2],l=>(c(),i("span",{class:S({"rate-active":L(K)===l}),key:l,onClick:O=>es(l)},b(l),11,Ss))),128))],64)),e.miniable?(c(),i("svg",{key:1,onClick:t[1]||(t[1]=l=>I(!0)),viewBox:"0 0 1024 1024",width:"20",height:"20"},Ts)):C("",!0)])]),m.value?(c(),i("div",Ps," 文件加载失败 ")):(c(),i("div",Rs,[a("div",Is,[z(U,{modelValue:_.value,"onUpdate:modelValue":t[2]||(t[2]=l=>_.value=l),onChange:Z},null,8,["modelValue"])]),a("div",Ws,b(r.value)+" / "+b(y.value),1),L(G)?(c(),i("svg",{key:0,viewBox:"0 0 32 32",class:"audio-player-control-icon volume",onClick:B},Os)):D.value==1?(c(),i("svg",{key:1,viewBox:"0 0 32 32",class:"audio-player-control-icon volume",onClick:B},Us)):(c(),i("svg",{key:2,viewBox:"0 0 32 32",class:"audio-player-control-icon volume",onClick:B},js)),a("div",Hs,[z(U,{modelValue:D.value,"onUpdate:modelValue":t[3]||(t[3]=l=>D.value=l),onChange:ss},null,8,["modelValue"])])]))]))]),!u.value&&e.list&&e.list.length>1?(c(),i("div",Js,[a("ul",null,[(c(!0),i(M,null,X(e.list,(l,O)=>(c(),i("li",{class:S({active:l.src===h.value.src}),key:O,onClick:ne=>as(l)},b(l.name),11,Gs))),128))])])):C("",!0)],38))}});const Qs=j(Ks,[["__scopeId","data-v-831aa1c6"]]),Zs=a("h1",{id:"音频播放器",tabindex:"-1"},[H("音频播放器 "),a("a",{class:"header-anchor",href:"#音频播放器","aria-hidden":"true"},"#")],-1),se=a("ul",null,[a("li",null,"【默认】常规模式，可播放、暂停、调节播放进度、音量"),a("li",null,"【可选】迷你模式，可播放、暂停、恢复、关闭、拖拽"),a("li",null,"【设置】支持配速，默认[1, 1.5, 2]")],-1),ee=a("h2",{id:"demo",tabindex:"-1"},[H("Demo "),a("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),ae=us(`<div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">player</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">miniable</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:rates</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[1, 2, 3]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> player </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./player/audio-player.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">本地mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./player/audio/sample.mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">错误的mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>list</td><td>Array</td><td>音频文件数组</td></tr><tr><td>miniable</td><td>Boolean</td><td>是否可最小化，默认否</td></tr><tr><td>rates</td><td>Array</td><td>倍速，默认[1, 1.5, 2]</td></tr></tbody></table>`,3),oe=JSON.parse('{"title":"音频播放器","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/音频播放器.md"}'),te={name:"components/音频播放器.md"},ce=T({...te,setup(e){const d=[{name:"本地mp3",src:is("/audio/sample.mp3")},{name:"错误的mp3",src:"..."}];return(n,o)=>{const r=ps("ClientOnly");return c(),i("div",null,[Zs,se,ee,z(r,null,{default:rs(()=>[z(Qs,{miniable:"",list:d,rates:[1,2,3]})]),_:1}),ae])}}});export{oe as __pageData,ce as default};
