"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{651:function(t,n,e){e.d(n,{$G:function(){return p},Df:function(){return i},HI:function(){return s},tx:function(){return f},zv:function(){return o}});var r=e(861),u=e(757),a=e.n(u),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlNGUxOTY2YmQ5MjdiZjFkNTVjZTNiNWI2ZjExNSIsInN1YiI6IjY1ZTRjZjBkYTY3MjU0MDE2MmE5OWQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5YUfqFEIeYNOXV5glwwmsAfcFy2uJj6yBmzayh7sSr8",c.Z.defaults.headers.common.accept="application/json";var i=function(){var t=(0,r.Z)(a().mark((function t(){var n,e=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"day",t.next=3,c.Z.get("/trending/all/".concat(n));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},732:function(t,n,e){e.d(n,{u:function(){return a}});e(791);var r=e(87),u=e(184),a=function(t){var n=t.to,e=t.state,a=t.text;return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:n,state:e,children:a})})}},524:function(t,n,e){e.d(n,{M:function(){return r},c:function(){return u}});var r="https://image.tmdb.org/t/p",u="Something went wrong!"},544:function(t,n,e){e.r(n);var r=e(861),u=e(439),a=e(757),c=e.n(a),i=e(791),s=e(732),o=e(651),f=e(524),p=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],a=n[1],h=(0,i.useState)(!1),d=(0,u.Z)(h,2),l=d[0],v=d[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,(0,o.Df)();case 4:n=t.sent,e=n.data.results,a(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),alert(t.t0.message||f.c);case 12:return t.prev=12,v(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Tranding Today"}),l&&(0,p.jsx)("div",{children:"Loading..."}),!l&&(0,p.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.title,r=t.name,u=t.original_name;return(0,p.jsx)(s.u,{to:"/movies/".concat(n),text:e||r||u},n)}))})]})}}}]);
//# sourceMappingURL=544.76ae5e7b.chunk.js.map