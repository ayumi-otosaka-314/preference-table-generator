import{C as s,F as _,t as A}from"./index-06ac8d8d.js";import{d as C,f as R,o as a,c,b as e,u as h,g as x,n as v,t as w,h as F,F as y,i as N,j as D}from"./index-86e611c4.js";const E={class:"w-70","un-border":"2px black solid"},T={class:"h-40","un-border-b":"2px black solid"},j={class:"wh-full relative overflow-hidden","un-hover":"[&>div]:translate-y-0"},I={class:"absolute-0 z-1 flex translate-y-45","un-transform":"","un-transition":"","un-bg":"black/66","un-flex":"center"},L={"un-grid":"~ cols-2",class:"gap-2"},P=e("i",{class:"i-ph-upload-simple-bold inline-block","un-text":"white 6"},null,-1),V=e("i",{class:"i-ph-link-simple-bold inline-block","un-text":"white 6"},null,-1),$=[V],O=e("i",{class:"i-ph-text-t-bold inline-block","un-text":"white 6"},null,-1),J=[O],U=e("i",{class:"i-ph-prohibit-bold inline-block","un-text":"white 6"},null,-1),Y=[U],q=["src"],G=C({__name:"RailCard",props:{item:null},setup(n){const o=n,i=R(null),r=t=>t.length>6?{fontSize:"0.8125rem"}:{},d=t=>t.length>10?{fontSize:"1.2rem"}:{fontSize:"1.6rem"};function l(){var t;(t=i.value)==null||t.click()}function m(){var f,b;const t=(b=(f=i.value)==null?void 0:f.files)==null?void 0:b[0];if(t){const p=new FileReader;p.readAsDataURL(t),p.onload=function(B){var k;const g=(k=B.target)==null?void 0:k.result;typeof g=="string"&&(o.item.type=s.upload,o.item.content=g)}}}function u(){const t=window.prompt("请输入图片链接");t?(o.item.type=s.link,o.item.content=t):alert("无效的地址")}function S(){const t=window.prompt("请输入文本内容，不超过20个字");t&&t.length<=20?(o.item.type=s.text,o.item.content=t):alert("无效的文本内容")}function z(){o.item.type=void 0,o.item.content=""}return(t,f)=>(a(),c("div",E,[e("div",T,[e("div",j,[e("div",I,[e("div",L,[e("button",{class:"wh-12 block m-0 p-0 leading-0","un-hover":"bg-[#36ad6a]","un-focus":"outline-none","un-transition":"","un-flex":"center","un-bg":"[#18a058]","un-border":"0 rounded-1",onClick:l},[e("input",{type:"file",class:"wh-0 opacity-0 absolute z-0",onChange:m,ref_key:"uploadBtnRef",ref:i},null,544),P]),e("button",{class:"wh-12 block m-0 p-0 leading-0","un-hover":"bg-[#36ad6a]","un-focus":"outline-none","un-transition":"","un-flex":"center","un-bg":"[#18a058]","un-border":"0 rounded-1",onClick:u},$),e("button",{class:"wh-12 block m-0 p-0 leading-0","un-hover":"bg-[#36ad6a]","un-focus":"outline-none","un-transition":"","un-flex":"center","un-bg":"[#18a058]","un-border":"0 rounded-1",onClick:S},J),e("button",{class:"wh-12 block m-0 p-0 leading-0","un-hover":"bg-[#36ad6a]","un-focus":"outline-none","un-transition":"","un-flex":"center","un-bg":"[#18a058]","un-border":"0 rounded-1",onClick:z},Y)])]),(n.item.type===h(s).upload||n.item.type===h(s).link)&&n.item.content?(a(),c("img",{key:0,class:"wh-full object-cover",src:n.item.content,alt:""},null,8,q)):x("",!0),n.item.type===h(s).text?(a(),c("div",{key:1,class:"wh-full p-4 box-border leading-[1.2]","un-flex":"center",style:v(d(n.item.content))},w(n.item.content),5)):x("",!0)])]),e("div",{class:"h-10 leading-[1.2] whitespace-pre-line","un-flex":"center","un-text":"center 4.5",style:v(r(n.item.label))},w(n.item.label),5)]))}}),H=e("h2",{"un-text":"12"},"铁道车辆个人喜好表",-1),K={"un-flex":"shrink-0","un-grid":"~ cols-3",class:"gap-2"},W=C({__name:"RailVehiclePreference",setup(n){const o=F(["入坑车辆","最喜欢","乘坐次数最多","乘坐距离最长","最想安利","最想乘坐","最想拍摄","体验最独特","不想乘坐"].map(l=>({label:l,content:""}))),i=R(null);function r(){const l={version:1,list:o};_.saveAs(new Blob([JSON.stringify(l)],{type:"text/plain;charset=utf-8"}),"铁道车辆个人喜好表.json")}function d(){i.value&&A(i.value).then(l=>{l&&_.saveAs(l,"铁道车辆个人喜好表.png")}).catch(function(l){console.error("生成失败!",l)})}return(l,m)=>(a(),c(y,null,[e("div",{class:"w-full bg-white p-6","un-flex":"col",ref_key:"picAreaRef",ref:i},[H,e("div",K,[(a(!0),c(y,null,N(o,u=>(a(),D(G,{item:u,key:u.label},null,8,["item"]))),128))])],512),e("div",{class:"mt-4 space-x-4"},[e("button",{onClick:r},"导出数据"),e("button",{onClick:d},"生成图片")])],64))}});export{W as default};