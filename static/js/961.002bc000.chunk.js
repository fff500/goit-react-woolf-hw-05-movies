"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{651:function(e,r,n){n.d(r,{D:function(){return o},H:function(){return u}});var t=n(861),a=n(757),c=n.n(a),s=n(340),i=n(524);s.Z.defaults.baseURL=i.M,s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlNGUxOTY2YmQ5MjdiZjFkNTVjZTNiNWI2ZjExNSIsInN1YiI6IjY1ZTRjZjBkYTY3MjU0MDE2MmE5OWQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5YUfqFEIeYNOXV5glwwmsAfcFy2uJj6yBmzayh7sSr8",s.Z.defaults.headers.common.accept="application/json";var o=function(){var e=(0,t.Z)(c().mark((function e(){var r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:"day",e.next=3,s.Z.get("/trending/all/".concat(r));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},524:function(e,r,n){n.d(r,{M:function(){return t}});var t="https://api.themoviedb.org/3"},961:function(e,r,n){n.r(r);var t=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(689),u=n(651),l=n(524),d=n(184);r.default=function(){var e=(0,i.useState)({}),r=(0,a.Z)(e,2),n=r[0],c=r[1],h=(0,o.UO)().movieId;(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a,i,o,d,h,p,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.H)(r);case 3:n=e.sent,t=n.data,a=t.original_title,i=t.title,o=t.popularity,d=t.overview,h=t.genres,p=t.poster_path,f=t.release_date,c({title:i||a,popularity:o,overview:d,genres:h,posterSrc:"".concat(l.M).concat(p),releasYear:f.substring(0,4)}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(r){return e.apply(this,arguments)}}();e(h)}),[h]);var p=n.title,f=n.popularity,v=n.overview,j=n.genres,x=n.posterSrc,m=n.releasYear;return console.log(n),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{children:"Go back"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:x,alt:"".concat(p," poster")})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"".concat(p," (").concat(m,")")}),(0,d.jsxs)("p",{children:["User score: ",f]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:v})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{children:j.map((function(e){var r=e.id,n=e.name;return(0,d.jsx)("li",{children:n},r)}))})]})]})]})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=961.002bc000.chunk.js.map