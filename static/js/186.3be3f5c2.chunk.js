"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{651:function(n,e,t){t.d(e,{$G:function(){return h},Df:function(){return i},HI:function(){return o},tx:function(){return p},zv:function(){return f}});var r=t(861),u=t(757),c=t.n(u),a=t(340),s=t(524);a.Z.defaults.baseURL=s.M,a.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlNGUxOTY2YmQ5MjdiZjFkNTVjZTNiNWI2ZjExNSIsInN1YiI6IjY1ZTRjZjBkYTY3MjU0MDE2MmE5OWQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5YUfqFEIeYNOXV5glwwmsAfcFy2uJj6yBmzayh7sSr8",a.Z.defaults.headers.common.accept="application/json";var i=function(){var n=(0,r.Z)(c().mark((function n(){var e,t=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:"day",n.next=3,a.Z.get("/trending/all/".concat(e));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?query=".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},186:function(n,e,t){t.r(e);var r=t(861),u=t(439),c=t(757),a=t.n(c),s=t(791),i=t(689),o=t(651),f=t(524),p=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),t=e[0],c=e[1],h=(0,s.useState)(!1),l=(0,u.Z)(h,2),v=l[0],d=l[1],m=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,o.tx)(e);case 4:t=n.sent,r=t.data.results,c(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),alert(n.t0.message||f.c);case 12:return n.prev=12,d(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();n(m)}),[m]),(0,p.jsxs)(p.Fragment,{children:[!!t.length&&(0,p.jsx)("ul",{children:t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:(0,p.jsxs)("b",{children:["Author: ",t]})}),(0,p.jsx)("p",{children:r})]},e)}))}),!v&&!t.length&&(0,p.jsx)("div",{style:{marginTop:"16px"},children:"We don't have any reviews for this movie"})]})}},524:function(n,e,t){t.d(e,{M:function(){return r},c:function(){return u}});var r="https://api.themoviedb.org/3",u="Something went wrong!"}}]);
//# sourceMappingURL=186.3be3f5c2.chunk.js.map