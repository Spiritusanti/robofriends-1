(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(3),s=n.n(c),a=n(6),i=n(2),u=n(14),d=(n(25),n(4)),h=n(5),l=n(8),b=n(7),j=n(1),p=function(e){var t=e.name,n=e.email,r=e.id;return Object(j.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("p",{children:n})]})]})},O=function(e){var t=e.robots;return Object(j.jsx)("div",{children:t.map((function(e,n){return Object(j.jsx)(p,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){e.searchfield;var t=e.searchChange;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},g=function(e){return Object(j.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return Object(j.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count," "]})}}]),n}(o.a.Component),m=o.a.memo((function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(j.jsx)(v,{color:"red"})]})})),x="CHANGE_SEARCH_FIELD",y="REQUEST_ROBOTS_PENDING",C="REQUEST_ROBOTS_SUCCESS",R="REQUEST_ROBOTS_FAILED",w=(n(27),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(j.jsx)("h1",{children:"Loading"}):Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)(m,{}),Object(j.jsx)(f,{searchChange:n}),Object(j.jsx)(g,{children:Object(j.jsx)(O,{robots:c})})]})}}]),n}(r.Component)),S=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:x,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:C,payload:t})})).catch((function(t){return e({type:R,payload:t})}))}))}}}))(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(28);var E={searchField:""},k={isPending:!1,robots:[],error:""},F=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case C:return Object.assign({},e,{robots:t.payload,isPending:!1});case R:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(i.d)(F,Object(i.a)(u.a));s.a.render(Object(j.jsx)(a.a,{store:N,children:Object(j.jsx)(S,{})}),document.getElementById("root")),ServiceWorker.register()}},[[29,1,2]]]);
//# sourceMappingURL=main.5b688225.chunk.js.map