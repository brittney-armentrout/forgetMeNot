(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(70)},39:function(e,t,n){},59:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(30),i=n.n(l),c=n(31),s=n(13);n(39);var u=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper z-depth-3"},r.a.createElement("a",{href:"/",className:"brand-logo"},"forgetMeNot"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"})))},o=n(5),m=n(6),d=n(8),h=n(7),p=n(9),b=n(14),f=n(16),v=n(3),E=function(e){return console.log(e.style),r.a.createElement("button",{style:e.style,onClick:e.action},e.title)},g=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:e.name,className:"form-label"},e.title),r.a.createElement("input",{className:"form-input",id:e.name,name:e.name,type:e.type,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))))},j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={User:{username:"",password:""}},n.handleLoginSubmit=n.handleLoginSubmit.bind(Object(v.a)(Object(v.a)(n))),n.handleClearLogin=n.handleClearLogin.bind(Object(v.a)(Object(v.a)(n))),n.handleLoginInput=n.handleLoginInput.bind(Object(v.a)(Object(v.a)(n))),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleLoginSubmit",value:function(e){}},{key:"handleClearLogin",value:function(e){e.preventDefault(),this.setState({User:{username:"",password:""}})}},{key:"handleLoginInput",value:function(e){var t=this,n=e.target.value,a=e.target.name;this.setState(function(e){return{User:Object(f.a)({},e.User,Object(b.a)({},a,n))}},function(){return console.log(t.state.User)})}},{key:"render",value:function(){return r.a.createElement("form",{className:"container",onSubmit:this.handleLoginSubmit},r.a.createElement(g,{inputType:"text",title:"Username",name:"username",value:this.state.User.username,handleChange:this.handleLoginInput}),r.a.createElement(g,{inputType:"text",title:"Password",name:"password",value:this.state.User.password,handleChange:this.handleLoginInput}),r.a.createElement(E,{action:this.handleLoginSubmit,type:"primary",title:"Submit"}))}}]),t}(a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Login"),r.a.createElement(j,null))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={newUser:{name:"",email:"",username:"",password:""}},n.handleFormSubmit=n.handleFormSubmit.bind(Object(v.a)(Object(v.a)(n))),n.handleClearForm=n.handleClearForm.bind(Object(v.a)(Object(v.a)(n))),n.handleInput=n.handleInput.bind(Object(v.a)(Object(v.a)(n))),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleFormSubmit",value:function(e){}},{key:"handleClearForm",value:function(e){e.preventDefault(),this.setState({newUser:{name:"",email:"",username:"",password:""}})}},{key:"handleInput",value:function(e){var t=this,n=e.target.value,a=e.target.name;this.setState(function(e){return{newUser:Object(f.a)({},e.newUser,Object(b.a)({},a,n))}},function(){return console.log(t.state.newUser)})}},{key:"render",value:function(){return r.a.createElement("form",{className:"container",onSubmit:this.handleFormSubmit},r.a.createElement(g,{inputType:"text",title:"Name",name:"name",value:this.state.newUser.name,handleChange:this.handleInput}),r.a.createElement(g,{inputType:"text",title:"Email",name:"email",value:this.state.newUser.email,handleChange:this.handleInput}),r.a.createElement(g,{inputType:"text",title:"Username",name:"username",value:this.state.newUser.username,handleChange:this.handleInput}),r.a.createElement(g,{inputType:"text",title:"Password",name:"password",value:this.state.newUser.password,handleChange:this.handleInput}),r.a.createElement(E,{action:this.handleFormSubmit,type:"primary",title:"Submit"})," ")}}]),t}(a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Sign Up Form"),r.a.createElement(y,null))}}]),t}(a.Component),C=n(19),N=n.n(C),k={getFriends:function(){return N.a.get("/api/friends")},getFriendDetail:function(){return N.a.get("/api/detail")}};n(59);function F(e){var t=e.children;return r.a.createElement("div",{className:"flex-box"},r.a.createElement("ul",{className:"list-group"},t))}function S(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).loadFriends=function(){k.getFriends().then(function(e){return n.setState({friends:e.data})}).catch(function(e){return console.log(e)})},n.handleFriendClick=function(){},n.handleUpcomingClick=function(){},n.state={friends:[],name:"",address:"",img:""},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadFriends()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flex-container",id:"favoritesFlex"},r.a.createElement("h2",null,"Favorites"),this.state.friends.length?r.a.createElement(F,null,this.state.friends.map(function(t){return r.a.createElement(S,{key:t._id,id:t.id,img:t.img,handleClick:e.handleFriendClick})})):r.a.createElement("h3",null,"No Favorites Yet!"),")} */}")}}]),t}(a.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Main"),r.a.createElement(U,null))}}]),t}(a.Component);var L=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card col s12"},r.a.createElement("h2",null,"404 Page Not Found")))};var I=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:O}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:w}),r.a.createElement(s.a,{exact:!0,path:"/main",component:x}),r.a.createElement(s.a,{component:L}))))};i.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e8e42a4e.chunk.js.map