import{p as S,d as k,f as m,h as P,o as b,c as f,x as r,F as O,K as _,b as v,a as w,n as y,t as x,W as T,L as D,M as B,_ as R,B as $,D as C,z as F}from"./chunks/framework.cec8ca25.js";const L=class{constructor(){this.type="stroke",this.width=0,this.height=0,this.arr=[],this.action="pen",this.canvasObj=null}initCanvas(t,a,e){const s=document.getElementById(t);this.canvasObj=s.getContext("2d",{willReadFrequently:!0}),this.width=this.canvasObj.canvas.width,this.height=this.canvasObj.canvas.height,a&&e&&(this.changeStyle({color:a,lineWidth:e}),s.onmousedown=n=>{if(n.button!==0)return;const o=n.offsetX,c=n.offsetY;this.canvasObj.beginPath(),this.canvasObj.moveTo(n.offsetX,n.offsetY),s.onmousemove=h=>{["pen","eraser"].includes(this.action)&&this[this.action](h.offsetX,h.offsetY),s.style.cursor=`url(${S("/ico/pen.ico")}), pointer`},document.onmouseup=h=>{["rect","circle","line","poly"].includes(this.action)&&this[this.action](o,c,h.offsetX,h.offsetY),s.onmousemove=null,document.onmouseup=null,this.saveStep()}})}changeStyle({color:t,lineWidth:a,action:e=this.action}){this.canvasObj.strokeStyle=t,this.canvasObj.fillStyle=t,this.canvasObj.lineWidth=a,this.action=e}pen(t,a){this.canvasObj.save(),this.canvasObj.lineCap="round",this.canvasObj.lineTo(t,a),this.canvasObj.stroke(),this.canvasObj.restore()}eraser(t,a){this.canvasObj.lineCap="round",this.canvasObj.clearRect(t-5,a-5,20,20)}changeType(t){this.type=t}rect(t,a,e,s){this.canvasObj.beginPath(),this.canvasObj.rect(t,a,e-t,s-a),this.type=="stroke"?this.canvasObj.stroke():this.type=="fill"&&this.canvasObj.fill(),this.canvasObj.restore()}circle(t,a,e,s){const n=Math.sqrt(Math.pow(t-e,2)+Math.pow(a-s,2));this.canvasObj.beginPath(),this.canvasObj.arc(t,a,n,0,2*Math.PI),this.type=="stroke"?this.canvasObj.stroke():this.type=="fill"&&this.canvasObj.fill(),this.canvasObj.restore()}line(t,a,e,s){this.canvasObj.beginPath(),this.canvasObj.moveTo(t,a),this.canvasObj.lineTo(e,s),this.canvasObj.stroke()}poly(t,a,e,s,n=3){const o=Math.sqrt(Math.pow(t-e,2)+Math.pow(a-s,2));this.canvasObj.save(),this.canvasObj.translate(t,a),this.canvasObj.rotate(Math.PI/2);var c=o*Math.cos(Math.PI/n),h=o*Math.sin(Math.PI/n);this.canvasObj.beginPath(),this.canvasObj.lineCap="round",this.canvasObj.moveTo(c,h);for(var u=0;u<=n;u++)this.canvasObj.rotate(Math.PI*2/n),this.canvasObj.lineTo(c,-h);this.type=="stroke"?this.canvasObj.stroke():this.type=="fill"&&this.canvasObj.fill(),this.canvasObj.restore()}clearCanvas(){this.arr=[],this.canvasObj.clearRect(0,0,this.width,this.height)}back(){this.arr.pop(),this.canvasObj.clearRect(0,0,this.width,this.height),this.arr.length&&this.canvasObj.putImageData(this.arr[this.arr.length-1],0,0,0,0,this.width,this.height)}saveStep(){this.arr.push(this.canvasObj.getImageData(0,0,this.width,this.height))}drawImage(t,a=0,e=0,s=this.width,n=this.height){this.canvasObj.drawImage(t,a,e,s,n)}},N=t=>(D("data-v-edd2cb85"),t=t(),B(),t),X={class:"toolList"},Y=["onClick"],q={class:"toolList"},z=["onClick"],V=N(()=>r("canvas",{width:"500",height:"500",id:"boradCanvas"},null,-1)),W=k({__name:"demo",setup(t){const a=["pen","rect","circle","line","poly","eraser"],e="image/jpg,image/jpeg,image/png,image/gif".split(","),s=["#333","red","green","orange","blue","yellow"],n=m();let o=m(null),c=m({action:"pen",color:"#333",lineWidth:3});function h(d,l){c.value[d]=l,o.changeStyle(c.value)}function u(){n.value.click()}function I(d){const l=d.target.files[0];if(!l)return;const{name:i,type:g}=l;if(l&&e.includes(g)){const p=new Image,j=new FileReader;j.readAsDataURL(l),j.onloadend=M=>{p.src=M.target.result,p.onload=()=>{o.drawImage(p,0,0,500,p.height/p.width*500),o.saveStep()}}}else alert(`文件仅支持图片格式, '${i}' 不符合要求`);d.target.value=null}return P(()=>{o=new L,o.initCanvas("boradCanvas",c.value.color,c.value.lineWidth)}),(d,l)=>(b(),f(O,null,[r("div",X,[(b(),f(O,null,_(a,i=>r("div",{class:y({active:i===v(c).action}),onClick:g=>h("action",i),key:i},x(i),11,Y)),64)),r("div",{onClick:l[0]||(l[0]=(...i)=>v(o).back&&v(o).back(...i))},"Undo"),r("div",{onClick:l[1]||(l[1]=(...i)=>v(o).clearCanvas&&v(o).clearCanvas(...i))},"Clean"),r("div",{class:"addImg",onClick:u},[w("addImg "),r("input",{type:"file",accept:"image/*",ref_key:"file",ref:n,onChange:I},null,544)])]),r("div",q,[(b(),f(O,null,_(s,i=>r("div",{key:i,onClick:g=>h("color",i),style:T({background:i}),class:y({active:i===v(c).color})},null,14,z)),64))]),V],64))}});const E=R(W,[["__scopeId","data-v-edd2cb85"]]),U=r("h1",{id:"canvas画板",tabindex:"-1"},[w("Canvas画板 "),r("a",{class:"header-anchor",href:"#canvas画板","aria-label":'Permalink to "Canvas画板"'},"​")],-1),K=JSON.parse('{"title":"Canvas画板","description":"","frontmatter":{},"headers":[],"relativePath":"components/Canvas.md"}'),A={name:"components/Canvas.md"},G=k({...A,setup(t){return(a,e)=>{const s=$("ClientOnly");return b(),f("div",null,[U,C(s,null,{default:F(()=>[C(E)]),_:1})])}}});export{K as __pageData,G as default};
