import{_ as E,d as y,g,R as h,o as a,c as t,b as o,i,t as k}from"./app.c90e916d.js";const x={class:"imgContent"},D={class:"img-container"},V=["src"],B={key:2,class:"plus"},I={class:"tip"},$=y({__name:"uploadImg",props:{modelValue:null,tip:null,max:null},emits:["update:modelValue"],setup(r,{emit:c}){const l=r,e=g(""),d=g(!1),v="image/jpg,image/jpeg,image/png,image/gif".split(",");function f(n){const u=n.target.files[0];if(!u)return;const{size:p,name:m,type:F}=u;if(p>(l.max||500)*1024){console.warn("\u6587\u4EF6\u5927\u5C0F",`${p/1024}k`),alert(`\u6587\u4EF6\u5C3A\u5BF8\u4E0D\u5F97\u8D85\u8FC7${l.max||500}k, '${m}' \u4E0D\u7B26\u5408\u8981\u6C42`),s();return}if(u&&v.includes(F)){const _=new FileReader;e.value="",d.value=!0,_.readAsDataURL(u),_.onloadend=C=>{c("update:modelValue",u),e.value=C.target.result,d.value=!1}}else alert(`\u6587\u4EF6\u4EC5\u652F\u6301\u56FE\u7247\u683C\u5F0F, '${m}' \u4E0D\u7B26\u5408\u8981\u6C42`),s();n.target.value=null}function s(){c("update:modelValue",""),e.value=""}return h(()=>{e.value=l.modelValue}),(n,u)=>(a(),t("div",x,[o("div",D,[e.value?(a(),t("img",{key:0,src:e.value,class:"img"},null,8,V)):i("",!0),o("input",{type:"file",accept:"image/*",ref:"file",onChange:f,title:""},null,544),e.value?(a(),t("i",{key:1,class:"remove",onClick:s},"\xD7")):i("",!0),e.value?i("",!0):(a(),t("i",B,"+"))]),o("div",I,k(r.tip||"\u4EC5\u652F\u6301jpg,png,gif\u6587\u4EF6"),1)]))}});var w=E($,[["__scopeId","data-v-15de6b85"],["__file","uploadImg.vue"]]);export{w as default};
