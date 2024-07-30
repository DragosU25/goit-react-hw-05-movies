"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[610],{687:function(n,e,r){r.d(e,{Hx:function(){return l},Jw:function(){return d},Y5:function(){return p},vw:function(){return f},wr:function(){return u}});var t=r(861),a=r(757),i=r.n(a),c=r(759),o="c0eccbee8238aa3ee19c6b09d37fc317",s="https://api.themoviedb.org/3",u=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/trending/movie/week"),{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/movie/").concat(e),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/credits?language=en-US"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews?language=en-US"),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(s,"/search/movie"),{params:{api_key:o,query:e}});case 3:return r=n.sent,n.abrupt("return",r.data.results||[]);case 7:return n.prev=7,n.t0=n.catch(0),console.error("Error fetching movies:",n.t0),n.abrupt("return",[]);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},610:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,a,i,c,o,s,u,p,d,l,f,v=r(861),m=r(439),h=r(168),g=r(757),x=r.n(g),Z=r(791),w=r(689),b=r(87),k=r(687),j=r(566),y=r(867),P=r(184),_=(0,y.ZP)(b.rU)(t||(t=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: inherit;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n\n  &:hover {\n    color: #007bff;\n  }\n\n  svg {\n    margin-right: 0.5rem;\n  }\n"]))),S=function(n){var e=n.to,r=n.children;return(0,P.jsxs)(_,{to:e,children:[(0,P.jsx)(j.jTe,{size:"24"}),r]})},U=y.ZP.div(a||(a=(0,h.Z)(["\n  padding: 2rem;\n  background-color: #f0f2f5;\n  min-height: 100vh;\n"]))),C=y.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background-color: white;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n"]))),E=y.ZP.img(c||(c=(0,h.Z)(["\n  width: 300px;\n  border-radius: 10px;\n  margin-bottom: 1rem;\n"]))),z=y.ZP.h1(o||(o=(0,h.Z)(["\n  margin: 1rem 0;\n"]))),H=y.ZP.p(s||(s=(0,h.Z)(["\n  font-weight: bold;\n  margin: 0.5rem 0;\n"]))),L=y.ZP.p(u||(u=(0,h.Z)(["\n  margin: 0.5rem 0;\n"]))),O=y.ZP.p(p||(p=(0,h.Z)(["\n  margin: 0.5rem 0;\n"]))),T=y.ZP.div(d||(d=(0,h.Z)(["\n  margin-top: 2rem;\n  width: 100%;\n"]))),Y=y.ZP.ul(l||(l=(0,h.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n"]))),q=y.ZP.li(f||(f=(0,h.Z)(["\n  a {\n    display: block;\n    padding: 0.5rem 1rem;\n    background-color: #007bff;\n    color: white;\n    border-radius: 5px;\n    transition: background-color 0.3s;\n\n    &:hover {\n      background-color: #0056b3;\n    }\n  }\n"]))),A=function(){var n,e,r=null!==(n=null===(e=(0,w.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",t=(0,w.UO)().movieId,a=(0,Z.useState)({img:"",title:"",score:"",overview:"",genre:""}),i=(0,m.Z)(a,2),c=i[0],o=i[1],s=(0,Z.useState)(!0),u=(0,m.Z)(s,2),p=u[0],d=u[1],l=(0,Z.useState)(null),f=(0,m.Z)(l,2),h=f[0],g=f[1];return(0,Z.useEffect)((function(){var n=function(){var n=(0,v.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.Y5)(t);case 3:e=n.sent,o({img:e.poster_path,title:e.title,score:e.vote_average,overview:e.overview,genre:e.genres.map((function(n){return n.name})).join(", ")}),d(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),g(n.t0),d(!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),p?(0,P.jsx)("div",{children:"Loading..."}):h?(0,P.jsxs)("div",{children:["Error: ",h.message]}):(0,P.jsxs)(U,{children:[(0,P.jsx)(S,{to:r,children:"Back to movies"}),(0,P.jsxs)(C,{children:[(0,P.jsx)(z,{children:c.title}),(0,P.jsx)(E,{src:"https://image.tmdb.org/t/p/w500/".concat(c.img),alt:c.title}),(0,P.jsxs)(H,{children:["Score: ",c.score]}),(0,P.jsxs)(L,{children:["Overview: ",c.overview]}),(0,P.jsxs)(O,{children:["Genre: ",c.genre]})]}),(0,P.jsxs)(T,{children:[(0,P.jsx)("p",{children:"Additional information:"}),(0,P.jsxs)(Y,{children:[(0,P.jsx)(q,{children:(0,P.jsx)(b.rU,{to:"cast",children:"Cast"})}),(0,P.jsx)(q,{children:(0,P.jsx)(b.rU,{to:"reviews",children:"Reviews"})})]}),(0,P.jsx)(Z.Suspense,{fallback:(0,P.jsx)("div",{children:"Loading subpage..."}),children:(0,P.jsx)(w.j3,{})})]})]})}}}]);
//# sourceMappingURL=610.97d52ccd.chunk.js.map