(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/checkbox.d41d8cd9.bin"},35:function(e,t,n){e.exports=n(72)},40:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(30),i=n.n(r),c=n(32),s=n(13);n(40);var o=function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper z-depth-3"},l.a.createElement("a",{href:"/",className:"brand-logo"},"forgetMeNot"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"})))},u=n(5),m=n(6),h=n(8),d=n(7),p=n(9),b=n(14),f=n(16),v=n(3),E=function(e){return console.log(e.style),l.a.createElement("button",{style:e.style,onClick:e.action},e.title)},g=function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:e.name,className:"form-label"},e.title),l.a.createElement("input",{className:"form-input",id:e.name,name:e.name,type:e.type,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))))},O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={User:{username:"",password:""}},n.handleLoginSubmit=n.handleLoginSubmit.bind(Object(v.a)(Object(v.a)(n))),n.handleClearLogin=n.handleClearLogin.bind(Object(v.a)(Object(v.a)(n))),n.handleLoginInput=n.handleLoginInput.bind(Object(v.a)(Object(v.a)(n))),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleLoginSubmit",value:function(e){}},{key:"handleClearLogin",value:function(e){e.preventDefault(),this.setState({User:{username:"",password:""}})}},{key:"handleLoginInput",value:function(e){var t=this,n=e.target.value,a=e.target.name;this.setState(function(e){return{User:Object(f.a)({},e.User,Object(b.a)({},a,n))}},function(){return console.log(t.state.User)})}},{key:"render",value:function(){return l.a.createElement("form",{className:"container",onSubmit:this.handleLoginSubmit},l.a.createElement(g,{inputType:"text",title:"Username",name:"username",value:this.state.User.username,handleChange:this.handleLoginInput}),l.a.createElement(g,{inputType:"text",title:"Password",name:"password",value:this.state.User.password,handleChange:this.handleLoginInput}),l.a.createElement(E,{action:this.handleLoginSubmit,type:"primary",title:"Submit"}))}}]),t}(a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Login"),l.a.createElement(O,null))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={newUser:{name:"",email:"",username:"",password:""}},n.handleFormSubmit=n.handleFormSubmit.bind(Object(v.a)(Object(v.a)(n))),n.handleClearForm=n.handleClearForm.bind(Object(v.a)(Object(v.a)(n))),n.handleInput=n.handleInput.bind(Object(v.a)(Object(v.a)(n))),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleFormSubmit",value:function(e){}},{key:"handleClearForm",value:function(e){e.preventDefault(),this.setState({newUser:{name:"",email:"",username:"",password:""}})}},{key:"handleInput",value:function(e){var t=this,n=e.target.value,a=e.target.name;this.setState(function(e){return{newUser:Object(f.a)({},e.newUser,Object(b.a)({},a,n))}},function(){return console.log(t.state.newUser)})}},{key:"render",value:function(){return l.a.createElement("form",{className:"container",onSubmit:this.handleFormSubmit},l.a.createElement(g,{inputType:"text",title:"Name",name:"name",value:this.state.newUser.name,handleChange:this.handleInput}),l.a.createElement(g,{inputType:"text",title:"Email",name:"email",value:this.state.newUser.email,handleChange:this.handleInput}),l.a.createElement(g,{inputType:"text",title:"Username",name:"username",value:this.state.newUser.username,handleChange:this.handleInput}),l.a.createElement(g,{inputType:"text",title:"Password",name:"password",value:this.state.newUser.password,handleChange:this.handleInput}),l.a.createElement(E,{action:this.handleFormSubmit,type:"primary",title:"Submit"})," ")}}]),t}(a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Sign Up Form"),l.a.createElement(y,null))}}]),t}(a.Component),C=n(19),N=n.n(C),k={getFavorites:function(){return N.a.get("/api/favorites")},getFriendDetail:function(){return N.a.get("/api/detail")}};n(60);function U(e){var t=e.children;return l.a.createElement("div",{className:"flex-box"},l.a.createElement("ul",{className:"list-group"},t))}function F(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}n(61);function S(e){var t=e.children;return l.a.createElement("div",{className:"flex-box"},l.a.createElement("ul",{className:"list-group"},t))}function x(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var L=n(31),I=n.n(L),T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).loadFavorites=function(){k.getFavorites().then(function(e){return n.setState({friends:e.data})}).catch(function(e){return console.log(e)})},n.handleFavClick=function(){},n.handleUpcomingClick=function(){},n.state={Favorites:[]},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadFavorites()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"flex-container",id:"favoritesFlex"},l.a.createElement("h2",null,"Favorites"),this.state.friends.length?l.a.createElement(U,null,this.state.friends.map(function(t){return l.a.createElement(F,{key:t.id,id:t.id,img:t.img,handleClick:e.handleFavClick})})):l.a.createElement("h3",null,"No Favorites Yet!"),l.a.createElement("h2",null,"Upcoming Occasions"),this.state.occasions.length?l.a.createElement(S,null,this.state.upcoming.map(function(t){return l.a.createElement(x,{key:t.id,id:t.id,date:t.date,handleClick:e.handleUpcomingClick},l.a.createElement(I.a,null))})):l.a.createElement("h3",null,"No Upcoming Occasions Yet!"))}}]),t}(a.Component),D=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Main"),l.a.createElement(T,null))}}]),t}(a.Component);var M=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card col s12"},l.a.createElement("h2",null,"404 Page Not Found")))};var P=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:j}),l.a.createElement(s.a,{exact:!0,path:"/signup",component:w}),l.a.createElement(s.a,{exact:!0,path:"/main",componen:D}),l.a.createElement(s.a,{component:M}))))};i.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9a68ba93.chunk.js.map