"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[210],{1210:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(5861),a=r(885),c=r(7757),s=r.n(c),u=r(2791),i=r(9969),o=r(6871),p=r(5095),f={container:"Cast_container__IOVBP",list:"Cast_list__DkDxq",item:"Cast_item__WeiI6",image:"Cast_image__x4kwD",name:"Cast_name__zZ-v-",character:"Cast_character__olJKM"},m=r(184),h=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],h=(0,u.useState)(!0),l=(0,a.Z)(h,2),v=l[0],d=l[1],x=(0,u.useState)(!1),_=(0,a.Z)(x,2),k=_[0],b=_[1],w=(0,o.UO)().movieId;return(0,u.useEffect)((function(){d(!0);var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.M1)(Number(w));case 3:e=t.sent,c(e),d(!1),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),b(!0),Promise.reject(t.t0);case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[w]),(0,m.jsxs)("div",{className:f.container,children:[v&&(0,m.jsx)(p.Z,{}),k&&(0,m.jsx)("h1",{className:f.error,children:"Error"}),r.length<1?(0,m.jsx)("h1",{className:f.error,children:"No cast"}):(0,m.jsx)("ul",{className:f.list,children:r.map((function(t){var e=t.id,r=t.name,n=t.profile_path,a=t.character;return(0,m.jsxs)("li",{className:f.item,children:[(0,m.jsx)("img",{src:n&&"https://image.tmdb.org/t/p/w500/".concat(n)||"https://pbs.twimg.com/media/C5OTOt3UEAAExIk.jpg",alt:r,className:f.image}),(0,m.jsx)("p",{className:f.name,children:r}),(0,m.jsxs)("p",{className:f.character,children:["Character: ",a]})]},e)}))})]})}},9969:function(t,e,r){r.d(e,{Df:function(){return f},HI:function(){return p},M1:function(){return h},TP:function(){return m},tx:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s),i="2ad314a52028ffb1db124a28b0df35b2",o="https://api.themoviedb.org/3/",p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(e),{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(o).concat("trending/movie/day","?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,u().get("".concat(o,"movie/").concat(e,"?api_key=").concat(i));case 4:return r=t.sent,n=r.data,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,u().get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i));case 4:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,u().get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i));case 4:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=210.307abc73.chunk.js.map