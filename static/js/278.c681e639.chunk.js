"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{651:function(t,n,e){e.d(n,{$G:function(){return h},Df:function(){return o},HI:function(){return s},tx:function(){return p},zv:function(){return f}});var r=e(861),u=e(757),a=e.n(u),c=e(340),i=e(524);c.Z.defaults.baseURL=i.M,c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlNGUxOTY2YmQ5MjdiZjFkNTVjZTNiNWI2ZjExNSIsInN1YiI6IjY1ZTRjZjBkYTY3MjU0MDE2MmE5OWQxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5YUfqFEIeYNOXV5glwwmsAfcFy2uJj6yBmzayh7sSr8",c.Z.defaults.headers.common.accept="application/json";var o=function(){var t=(0,r.Z)(a().mark((function t(){var n,e=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"day",t.next=3,c.Z.get("/trending/all/".concat(n));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},524:function(t,n,e){e.d(n,{M:function(){return r},c:function(){return u}});var r="https://api.themoviedb.org/3",u="Something went wrong!"},278:function(t,n,e){e.r(n);var r=e(861),u=e(439),a=e(757),c=e.n(a),i=e(791),o=e(87),s=e(651),f=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],a=n[1],p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,u;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e=n.target.elements[0].value.trim().toLowerCase(),t.next=4,(0,s.$G)(e);case 4:r=t.sent,u=r.data.results,a(u);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[(0,f.jsxs)("form",{onSubmit:p,children:[(0,f.jsx)("input",{type:"text",name:"query",id:"query"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),!!e.length&&(0,f.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.original_name,r=t.title;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(n),children:r||e})},n)}))})]})}}}]);
//# sourceMappingURL=278.c681e639.chunk.js.map