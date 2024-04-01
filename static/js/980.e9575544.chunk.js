"use strict";(self.webpackChunkVadUniProject=self.webpackChunkVadUniProject||[]).push([[980],{980:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var i,r,s,o,a,c,l,d,p=t(4420),x=t(4815),u=t(168),m=t(5867),f=m.ZP.li(i||(i=(0,u.Z)(["\n  position: relative;\n  width: 274px;\n  height: 426px;\n  border-radius: 14px;\n  outline: 1px solid #3470ff;\n  padding: 10px;\n\n  font-family: Manrope;\n\n  .item-description {\n    font-weight: 600;\n  }\n\n  .item-text {\n    margin-bottom: 10px;\n  }\n\n  .statement-text {\n    width: 274px;\n    height: 160px;\n    overflow: auto;\n  }\n  .text-wrapper {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .button-wrapper {\n    display: flex;\n    margin-top: auto;\n    justify-content: space-between;\n  }\n\n  .item-buttons {\n    border-radius: 4px;\n    border-color: transparent;\n    color: #fff;\n    background-color: #4054ff;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    font-size: 16px;\n\n    &:hover {\n      background-color: #2c3ab2;\n    }\n  }\n"]))),h=t(7694),b=t.n(h),g=t(184),j=function(n){var e=n.studentItemData,t=(0,p.I0)(),i=e.name,r=e.course,s=e.specialty,o=e.statement,a=e.email,c=e.id,l=e.phone,d=e.group;return(0,g.jsxs)(f,{children:[(0,g.jsx)("p",{className:"item-description",children:"\u041f\u0406\u0411 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430:"}),(0,g.jsx)("p",{className:"item-text",children:i}),(0,g.jsx)("p",{className:"item-description",children:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430:"}),(0,g.jsx)("p",{className:"item-text",children:a}),(0,g.jsx)("p",{className:"item-description",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:"}),(0,g.jsx)("p",{className:"item-text",children:l}),(0,g.jsxs)("div",{className:"text-wrapper",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"item-description",children:"\u0413\u0440\u0443\u043f\u0430:"}),(0,g.jsx)("p",{className:"item-text",children:d})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"item-description",children:"\u041a\u0443\u0440\u0441:"}),(0,g.jsx)("p",{className:"item-text",children:r})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"item-description",children:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c:"}),(0,g.jsx)("p",{className:"item-text",children:s})]})]}),(0,g.jsx)("p",{className:"item-description",children:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u044f\u0432\u0438:"}),(0,g.jsx)("p",{className:"statement-text",id:c,children:o}),(0,g.jsxs)("div",{className:"button-wrapper",children:[(0,g.jsx)("button",{onClick:function(){return function(n){t((0,x.yZ)(n))}(c)},type:"button",className:"item-buttons",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"}),(0,g.jsx)("button",{type:"button",onClick:function(){return function(n){var e=document.getElementById(n).textContent;navigator.clipboard.writeText(e).then((function(){return b().Notify.success("\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u044f\u0432\u0438 \u0441\u043a\u043e\u043f\u0456\u0439\u043e\u0432\u0430\u043d\u043e!")})).catch((function(n){return console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043a\u043e\u043f\u0456\u044e\u0432\u0430\u043d\u043d\u044f:",n)}))}(c)},className:"item-buttons",children:"\u041a\u043e\u043f\u0456"})]})]})},N=m.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 29px;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  margin-bottom: 100px;\n"]))),v=function(n){var e=n.studentStatements;return(0,g.jsx)(N,{children:null!==e&&e.map((function(n){return(0,g.jsx)(j,{studentItemData:n},n.id)}))})},Z=t(2791),w=t(596),y=t(9245),k=m.ZP.section(s||(s=(0,u.Z)(["\n  height: 100vh;\n"]))),P=m.ZP.div(o||(o=(0,u.Z)(["\n  padding-left: 200px;\n  padding-right: 200px;\n"]))),z=m.ZP.h1(a||(a=(0,u.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]))),I=m.ZP.header(c||(c=(0,u.Z)(["\n  height: 100px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #3470ff;\n  border-left: 1px solid #3470ff;\n  border-right: 1px solid #3470ff;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  padding: 10px;\n\n  font-size: 18px;\n  font-weight: 500;\n\n  .head-text {\n    margin-left: 30px;\n  }\n\n  .logout-btn {\n    font-size: 16px;\n    width: 70px;\n    height: 35px;\n    margin-left: auto;\n    border-radius: 8px;\n    border-color: transparent;\n    color: #fff;\n    background-color: #4054ff;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      background-color: #2c3ab2;\n    }\n  }\n"]))),C=m.ZP.img(l||(l=(0,u.Z)(["\n  width: 100px;\n  height: 100px;\n"]))),S=t(1053),V=t(1321),A=function(){var n=(0,p.I0)();return(0,g.jsxs)(I,{children:[(0,g.jsx)(C,{src:S,alt:"logo"}),(0,g.jsx)("p",{className:"head-text",children:"\u0414\u0435\u0440\u0436\u0430\u0432\u043d\u0438\u0439 \u0443\u043d\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0439\u043d\u043e-\u043a\u043e\u043c\u0443\u043d\u0456\u043a\u0430\u0446\u0456\u0439\u043d\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0439 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430\u044f\u0432"}),(0,g.jsx)("button",{onClick:function(){n((0,V.g)())},className:"logout-btn",children:"\u0412\u0438\u0445\u0456\u0434"})]})},D=t(1413),U=t(3433),B=t(1134),E=t(8034),M=m.ZP.form(d||(d=(0,u.Z)(["\n  width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n  font-size: 16px;\n\n  .filter-title {\n    text-align: center;\n    margin-bottom: 10px;\n  }\n\n  .filter-select {\n    width: 50px;\n    height: 30px;\n    font-size: 16px;\n    margin-left: 6px;\n  }\n\n  .filter-lable {\n    margin-right: 20px;\n  }\n\n  .filter-submit {\n    font-size: 16px;\n    height: 30px;\n  }\n\n  .filter-submit {\n    border-radius: 8px;\n    border-color: transparent;\n    color: #fff;\n    background-color: #4054ff;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      background-color: #2c3ab2;\n    }\n  }\n"]))),T=function(){var n=(0,p.I0)(),e=(0,B.cI)(),t=e.register,i=e.handleSubmit;return(0,g.jsxs)(M,{onSubmit:i((function(e){n((0,E.e)(e)),console.log(e)})),children:[(0,g.jsx)("p",{className:"filter-title",children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430 \u043a\u0443\u0440\u0441\u0430\u043c\u0438"}),(0,g.jsxs)("label",{className:"filter-lable",children:["\u0412\u0456\u0434:",(0,g.jsx)("select",(0,D.Z)((0,D.Z)({},t("start")),{},{defaultValue:1,className:"filter-select",children:(0,U.Z)(Array(6)).map((function(n,e){return(0,g.jsx)("option",{value:e+1,children:e+1},e+1)}))}))]}),(0,g.jsxs)("label",{className:"filter-lable",children:["\u0414\u043e:",(0,g.jsx)("select",(0,D.Z)((0,D.Z)({},t("end")),{},{defaultValue:6,className:"filter-select",children:(0,U.Z)(Array(6)).map((function(n,e){return(0,g.jsx)("option",{value:e+1,children:e+1},e+1)}))}))]}),(0,g.jsx)("button",{type:"submit",className:"filter-submit",children:"\u0412\u0456\u0434\u0441\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438"})]})},q=function(){var n=(0,p.I0)(),e=(0,p.v9)(w.xU),t=(0,p.v9)(w.Bn),i=(0,p.v9)(w.AD);(0,Z.useEffect)((function(){n((0,x.js)())}),[n]);var r=t.filter((function(n){return n.course>=i[0]&&n.course<=i[1]}));return(0,g.jsxs)(P,{children:[(0,g.jsx)(A,{}),(0,g.jsxs)(k,{children:[(0,g.jsx)(z,{children:"\u0417\u0430\u044f\u0432\u0438 \u043d\u0430 \u043f\u043e\u0441\u0435\u043b\u0435\u043d\u043d\u044f \u0432 \u0433\u0443\u0440\u0442\u043e\u0436\u0438\u0442\u043e\u043a"}),(0,g.jsx)(T,{}),(0,g.jsx)(v,{studentStatements:r}),e&&(0,g.jsx)(y.a,{})]})]})}},1053:function(n,e,t){n.exports=t.p+"static/media/logo.32c19765d2c13b748243.png"}}]);
//# sourceMappingURL=980.e9575544.chunk.js.map