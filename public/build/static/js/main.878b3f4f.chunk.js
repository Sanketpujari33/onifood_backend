(this.webpackJsonponifood=this.webpackJsonponifood||[]).push([[0],{14:function(e,t,s){},28:function(e,t,s){},35:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(29),r=s.n(n),i=(s(35),s(2)),l=s(5),j=s(3),o=s(7),d=s.n(o),b=s(6),u=s(0),h=c.a.createContext();function m(){return Object(a.useContext)(h)}var O=function(e){var t=e.children,s=Object(b.f)(),c=Object(a.useState)(""),n=Object(j.a)(c,2),r=n[0],o=n[1],m=Object(a.useState)(!1),O=Object(j.a)(m,2),x=O[0];function p(){return(p=Object(l.a)(Object(i.a)().mark((function e(t,s,a,c){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/user/signup",{name:t,email:s,password:a,confirmPassword:c});case 2:n=e.sent,console.log(n,r),o(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(l.a)(Object(i.a)().mark((function e(t,s){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/user/login",{email:t,password:s});case 3:return a=e.sent,console.log("dataaa",a.data),o(a.data),localStorage.setItem("user",JSON.stringify(a.data)),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function N(){return(N=Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("user"),e.next=3,d.a.get("/user/logout");case 3:t=e.sent,console.log(t),o(null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O[1],Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("user"),console.log(t,898787),t?(o(JSON.parse(t)),console.log(r),s.push("/")):o(null);case 3:case"end":return e.stop()}}),e)}))),[]);var f={user:r,login:function(e,t){return v.apply(this,arguments)},signUp:function(e,t,s,a){return p.apply(this,arguments)},logout:function(){return N.apply(this,arguments)}};return Object(u.jsx)(h.Provider,{value:f,children:!x&&t})};s(14);var x=function(e){var t=Object(b.f)(),s=Object(a.useState)(""),c=Object(j.a)(s,2),n=c[0],r=c[1],o=Object(a.useState)(""),d=Object(j.a)(o,2),m=d[0],O=d[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],f=Object(a.useState)(""),g=Object(j.a)(f,2),y=g[0],w=g[1],C=Object(a.useContext)(h),S=C.signUp,B=(C.user,function(){var e=Object(l.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(n,v,m,y);case 3:t.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}());return Object(u.jsx)("div",{className:"container-grey",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"sig",children:"SIGN UP"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsxs)("div",{className:"loginBox",children:[Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Name"}),Object(u.jsx)("input",{className:"name input",type:"text",name:"Name",placeholder:"Your Name",required:"",onChange:function(e){return r(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Email"}),Object(u.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return N(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Password"}),Object(u.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return O(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Confirm  Password"}),Object(u.jsx)("input",{className:"confirmPassword input",type:"password",name:"ConfirmPassword",placeholder:"**********",onChange:function(e){return w(e.target.value)}})]}),Object(u.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:B,children:"Sign Up"})]})]})})},p=s.p+"static/media/date.fcfd3f00.png",v=s.p+"static/media/carrot.6508ea02.png",N=s.p+"static/media/fast.f1644b7d.png",f=s.p+"static/media/Capture.611de11d.png",g=s.p+"static/media/star.49259244.png";s(64);var y=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/review/top3");case 3:t=e.sent,c(t.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(u.jsx)("div",{className:"reviewImg",children:Object(u.jsxs)("div",{className:"reviewCard",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"heading",children:"REVIEWS"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsx)("div",{className:"rDetail",children:s&&(null===s||void 0===s?void 0:s.map((function(e,t){return Object(u.jsxs)("div",{className:"rCard",children:[Object(u.jsx)("div",{className:"rimage",children:Object(u.jsx)("img",{alt:"",src:e.user.profileImage,className:"img"})}),Object(u.jsx)("div",{className:"rheader",children:Object(u.jsx)("h3",{className:"rh3",children:e.user.name})}),Object(u.jsx)("div",{className:"rsummary",children:Object(u.jsx)("p",{className:"parSRS",children:e.review})}),Object(u.jsx)("div",{children:Object(u.jsxs)("h4",{children:["Plan Name : ",e.plan.name]})}),Object(u.jsx)("div",{className:"frate",children:Array.from(Array(e.rating).keys()).map((function(e,t){return Object(u.jsx)("img",{alt:"",src:g,className:"img"})}))})]},t)})))})]})})},w=(s(65),s.p+"static/media/check-mark.1c103279.png"),C=s(4);var S=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/plans/top3");case 3:t=e.sent,c(t.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(u.jsxs)("div",{className:"plansCard",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"heading",children:"START EATING HEALTHY TODAY"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsx)("div",{className:"planDetails",children:s&&(null===s||void 0===s?void 0:s.map((function(e,t){return Object(u.jsxs)("div",{className:"pCard",children:[Object(u.jsx)("h3",{className:"h3",children:e.name}),Object(u.jsxs)("div",{className:"pCard1",children:[Object(u.jsxs)("div",{className:"priceBox",children:[Object(u.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(u.jsx)("div",{className:"duration",children:"/month"})]}),Object(u.jsx)("p",{className:"point",children:"That\u2019s only 2\u20b9 per meal"})]}),Object(u.jsxs)("div",{className:"pCard2",children:[Object(u.jsxs)("div",{className:"ppoints",children:[Object(u.jsx)("img",{src:w,alt:"",className:"img"}),Object(u.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(u.jsxs)("div",{className:"ppoints",children:[Object(u.jsx)("img",{src:w,alt:"",className:"img"}),Object(u.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(u.jsxs)("div",{className:"ppoints",children:[Object(u.jsx)("img",{src:w,alt:"",className:"img"}),Object(u.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(u.jsxs)("button",{className:"btn",children:[" ",Object(u.jsx)(C.b,{to:"/planDetail/".concat(e._id),children:"I'm Hungry"})]})]},t)})))})]})},B=(s(28),s.p+"static/media/Avocado.a47677c6.mp4");var E=function(){return Object(u.jsxs)("div",{className:"contactCard",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"heading",children:"CONTACT US"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsxs)("div",{className:"cDetail",children:[Object(u.jsx)("div",{className:"videoBox",children:Object(u.jsx)("video",{src:B,className:"video",muted:"muted",type:"video/mp4",loop:!0,autoPlay:!0})}),Object(u.jsxs)("div",{className:"contactInfo",children:[Object(u.jsxs)("div",{className:"entry",children:[Object(u.jsx)("div",{className:"entry-text",children:"Name"}),Object(u.jsx)("input",{type:"text",name:"Name",placeholder:"Your Name",required:!0})]}),Object(u.jsxs)("div",{className:"entry",children:[Object(u.jsx)("div",{className:"entry-text",children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Your Email"})]}),Object(u.jsxs)("div",{className:"entry",children:[Object(u.jsx)("div",{className:"entry-text",children:"How did you find us"}),Object(u.jsxs)("select",{name:"",id:"",className:"select",children:[Object(u.jsx)("option",{value:"",children:"friends"}),Object(u.jsx)("option",{value:"",children:"search"}),Object(u.jsx)("option",{value:"",children:"advertsiment"}),Object(u.jsx)("option",{value:"",children:"other"})]})]}),Object(u.jsxs)("div",{className:"textBox",children:[Object(u.jsx)("div",{className:"entry-text",children:"Drop us a line"}),Object(u.jsx)("textarea",{name:"",id:"",placeholder:"Your Message"})]}),Object(u.jsxs)("div",{className:"checkbox ",children:[Object(u.jsx)("input",{type:"checkbox",name:"email",className:"checkbox"}),Object(u.jsx)("span",{className:"checkbox-conditions",children:"I have read and agree with all the Privacy Policy and Terms Conditions"})]}),Object(u.jsx)("div",{className:"sendBtn",children:Object(u.jsx)(C.b,{to:"#",className:" btn-full form-button",children:"SEND"})})]})]})]})};s(66);var k=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"bgImageCard",children:Object(u.jsx)("div",{className:"introCard",children:Object(u.jsxs)("div",{className:"iCard",children:[Object(u.jsxs)("div",{className:"headerBox",children:[Object(u.jsx)("div",{className:"header1",children:Object(u.jsx)("h1",{className:"hh1",children:"MEAL PLANS."})}),Object(u.jsxs)("div",{className:"header2",children:[Object(u.jsx)("h1",{className:"hh1",children:"FOR"}),Object(u.jsx)("h1",{className:" animateh1",children:"EVERYONE"})]})]}),Object(u.jsxs)("div",{className:"btnBox",children:[Object(u.jsx)("button",{className:"bookNowBtn btn",children:" Book Now"}),Object(u.jsx)("button",{className:"showMoreBtn btn",children:"Show Me More"})]})]})})}),Object(u.jsxs)("div",{className:"featureCard",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"heading",children:"AWESOME FEATURES"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsxs)("div",{className:"fDetail",children:[Object(u.jsxs)("div",{className:"fCard",children:[Object(u.jsx)("div",{className:"fimage",children:Object(u.jsx)("img",{src:p,className:"fimg",alt:""})}),Object(u.jsx)("div",{className:"fheader",children:Object(u.jsx)("h3",{className:"h3",children:"365 DAYS/YEAR"})}),Object(u.jsx)("div",{className:"fsummary",children:Object(u.jsx)("p",{className:"para1",children:"Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style."})})]}),Object(u.jsxs)("div",{className:"fCard",children:[Object(u.jsx)("div",{className:"fimage",children:Object(u.jsx)("img",{src:N,alt:"",className:"fimg"})}),Object(u.jsx)("div",{className:"fheader",children:Object(u.jsx)("h3",{className:"h3",children:"30 MINUTES OR FREE"})}),Object(u.jsx)("div",{className:"fsummary",children:Object(u.jsx)("p",{className:"para1",children:"You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."})})]}),Object(u.jsxs)("div",{className:"fCard",children:[Object(u.jsx)("div",{className:"fimage",children:Object(u.jsx)("img",{src:v,alt:"",className:"fimg"})}),Object(u.jsx)("div",{className:"fheader",children:Object(u.jsx)("h3",{className:"h3",children:"100% ORGANIC"})}),Object(u.jsx)("div",{className:"fsummary",children:Object(u.jsx)("p",{className:"para1",children:"All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"})})]})]})]}),Object(u.jsxs)("div",{className:"stepsCard",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"heading",children:"STEPS TO FOLLOW"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsxs)("div",{className:"fDetail",children:[Object(u.jsx)("div",{className:"sbox1",children:Object(u.jsx)("img",{src:f,alt:" ",className:"fimg"})}),Object(u.jsxs)("div",{className:"sbox2",children:[Object(u.jsxs)("div",{className:"stepsBox",children:[Object(u.jsx)("div",{className:"num",children:" 1 "}),Object(u.jsx)("div",{className:"steps",children:Object(u.jsx)("p",{className:"para",children:"Choose the subscription plan that best fits your needs and sign up today."})})]}),Object(u.jsxs)("div",{className:"stepsBox",children:[Object(u.jsx)("div",{className:"num",children:" 2 "}),Object(u.jsx)("div",{className:"steps",children:Object(u.jsx)("p",{className:"para",children:"Order your delicious meal using our mobile app or website. Or you can even call us!"})})]}),Object(u.jsxs)("div",{className:"stepsBox",children:[Object(u.jsx)("div",{className:"num",children:" 3 "}),Object(u.jsx)("div",{className:"steps",children:Object(u.jsx)("p",{className:"para",children:"Enjoy your meal after less than 20 minutes. See you the next time!"})})]})]})]})]}),Object(u.jsx)(y,{}),Object(u.jsx)(S,{}),Object(u.jsx)(E,{})]})};s(67),s(68);var P=function(){var e,t=m(),s=t.user,c=t.logout;return Object(a.useEffect)((function(){var e=document.querySelector("nav");window.addEventListener("scroll",(function(){window.pageYOffset>0?e.setAttribute("class","activeNavBar"):0===window.pageYOffset&&e.classList.remove("activeNavBar")}))}),[]),Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{className:"brand",children:Object(u.jsx)(C.b,{to:"/",children:"Onifood"})}),Object(u.jsx)("nav",{children:Object(u.jsx)("div",{className:"menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/allPlans",children:"Plans"})}),s?Object(u.jsxs)(u.Fragment,{children:[console.log(s),Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/profilePage",children:null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.name})}),Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"",onClick:c,children:"Logout"})})]}):Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/login",children:"Login"})})]})})})]})};s(69);function T(){return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"footer-content",children:[Object(u.jsx)("h3",{children:"Foolish Developer"}),Object(u.jsx)("p",{children:"You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."}),Object(u.jsxs)("ul",{className:"socials",children:[Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/",children:Object(u.jsx)("i",{className:"fa fa-facebook"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/",children:Object(u.jsx)("i",{className:"fa fa-twitter"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/",children:Object(u.jsx)("i",{className:"fa fa-google-plus"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/",children:Object(u.jsx)("i",{className:"fa fa-youtube"})})}),Object(u.jsx)("li",{children:Object(u.jsx)(C.b,{to:"/",children:Object(u.jsx)("i",{className:"fa fa-linkedin-square"})})})]}),Object(u.jsxs)("div",{className:"footer-bottom",children:[Object(u.jsxs)("p",{children:["Copyright \xa92021 ",Object(u.jsx)(C.b,{to:"/",children:" EVERYONE. All rights reserved."})]}),Object(u.jsx)("div",{className:"footer-menu",children:Object(u.jsxs)("ul",{className:"f-menu",children:[Object(u.jsx)("li",{className:"text-value",children:Object(u.jsx)(C.b,{to:"#",children:"About us"})}),Object(u.jsx)("li",{className:"text-value",children:Object(u.jsx)(C.b,{to:"#",children:"ios App"})}),Object(u.jsx)("li",{className:"text-value",children:Object(u.jsx)(C.b,{to:"#",children:"Android App"})})]})})]})]})})}var A=function(){var e=Object(b.f)(),t=Object(a.useState)(""),s=Object(j.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),d=o[0],m=o[1],O=Object(a.useState)(!1),x=Object(j.a)(O,2),p=(x[0],x[1],Object(a.useContext)(h)),v=p.login,N=(p.user,function(){var t=Object(l.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(d,c);case 3:e.push("/"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}());return Object(u.jsx)("div",{className:"container-grey",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"log",children:"LOGIN"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsxs)("div",{className:"loginBox",children:[Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Email"}),Object(u.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return m(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Password"}),Object(u.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return n(e.target.value)}})]}),Object(u.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:N,children:"Login"}),Object(u.jsxs)("div",{className:"otherOption",children:[Object(u.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(u.jsx)(C.b,{to:"/signup",className:"otherbtns",children:"Sign Up"})}),Object(u.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(u.jsx)(C.b,{to:"/forgetPassword",className:"otherbtns",children:"Forget Password"})})]})]})]})})};var D=function(){var e=Object(b.f)(),t=Object(a.useState)(""),s=Object(j.a)(t,2),c=s[0],n=s[1],r=function(){var t=Object(l.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("/user/forgetpassword",{email:c});case 3:t.sent,e.push("/resetpassword"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"container-grey",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"forg",children:"FORGET PASSWORD"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsxs)("div",{className:"loginBox",children:[Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Email"}),Object(u.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return n(e.target.value)}})]}),Object(u.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:r,children:"Send Email"})]})]})})};var I=function(){var e=Object(b.f)(),t=Object(a.useState)(""),s=Object(j.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),h=o[0],m=o[1],O=function(){var t=Object(l.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.post("/user/resetpassword/:token",{password:c,confirmPassword:h});case 3:t.sent,e.push("/login"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"container-grey",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"h1",children:"RESET PASSWORD"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsxs)("div",{className:"loginBox",children:[Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Password"}),Object(u.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return n(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Confirm  Password"}),Object(u.jsx)("input",{className:"confirmPassword input",type:"password",name:"ConfirmPassword",placeholder:"**********",onChange:function(e){return m(e.target.value)}})]}),Object(u.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:O,children:"Reset Password"})]})]})})};s(70);var R=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/plans/allPlans");case 3:t=e.sent,console.log(t.data),c(t.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(u.jsxs)("div",{className:"allplansCard",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"h1plane",children:"START EATING HEALTHY TODAY"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsx)("div",{className:"allplanDetails",children:Object(u.jsx)("div",{className:"planDetails",children:s&&(null===s||void 0===s?void 0:s.map((function(e,t){return Object(u.jsxs)("div",{className:"apCard",children:[Object(u.jsx)("h3",{className:"h3",children:e.name}),Object(u.jsxs)("div",{className:"pCard1",children:[Object(u.jsxs)("div",{className:"priceBox",children:[Object(u.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(u.jsx)("div",{className:"duration",children:"/month"})]}),Object(u.jsx)("p",{className:"point",children:"That\u2019s only 2\u20b9 per meal"})]}),Object(u.jsxs)("div",{className:"pCard2",children:[Object(u.jsxs)("div",{className:"ppoints",children:[Object(u.jsx)("img",{src:w,alt:"",className:"img"}),Object(u.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(u.jsxs)("div",{className:"ppoints",children:[Object(u.jsx)("img",{src:w,alt:"",className:"img"}),Object(u.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(u.jsxs)("div",{className:"ppoints",children:[Object(u.jsx)("img",{src:w,alt:"",className:"img"}),Object(u.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(u.jsxs)("button",{className:"btn",children:[" ",Object(u.jsx)(C.b,{to:"/planDetail/".concat(e._id),children:"I'm Hungry"})]})]},t)})))})})]})};s(71);var Y=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("user")).data),t=Object(j.a)(e,2),s=t[0];t[1],Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(s.name),o(s.password),N(s.email),O(s.password);case 4:case"end":return e.stop()}}),e)}))),[]);var c=Object(a.useState)(),n=Object(j.a)(c,2),r=n[0],o=n[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),m=h[0],O=h[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],f=Object(a.useState)(""),g=Object(j.a)(f,2),y=g[0],w=g[1],C=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(s._id),e.next=4,d.a.patch("/user/"+s._id,{email:v,name:y,password:r,confirmPassword:m,role:s.role,_id:s._id});case 4:t=e.sent,console.log(t.data.data),localStorage.setItem("user",JSON.stringify(t.data.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"container-grey",children:Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"h1",children:"Profile"}),Object(u.jsx)("div",{className:"line"}),Object(u.jsx)("div",{className:"profileImage",children:Object(u.jsx)("img",{src:s.profileImage})})]}),Object(u.jsxs)("div",{className:"loginBox",children:[Object(u.jsx)("div",{className:"entryBox",children:Object(u.jsx)("input",{type:"file"})}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Email"}),Object(u.jsx)("input",{className:"email input",type:"email",value:v,onChange:function(e){return N(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Password"}),Object(u.jsx)("input",{className:"password input",type:"text",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Confirm Password"}),Object(u.jsx)("input",{className:"password input",type:"text",value:m,onChange:function(e){return O(e.target.value)}})]}),Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:"Name"}),Object(u.jsx)("input",{className:"password input",type:"text",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(u.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:C,children:"Update Profile"})]})]})})};s(72);var L=function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(b.g)().id,r=Object(a.useState)(),o=Object(j.a)(r,2),h=o[0],O=o[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],f=Object(a.useState)(),g=Object(j.a)(f,2),y=g[0],w=g[1],C=m().user;function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}console.log(n),Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var t,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside useeffect"),e.next=3,d.a.get("/plans/plan/"+n);case 3:return t=e.sent,console.log(t,565785765),delete t.data.data._id,delete t.data.data.__v,c(t.data.data),e.next=10,d.a.get("/review/"+n);case 10:s=e.sent,console.log(s),console.log(s.data.data),O(s.data.data);case 14:case"end":return e.stop()}}),e)}))),[]);var B=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123645),console.log("user ",C.data._id),e.next=4,d.a.post("/review/crud/"+n,{review:v,rating:y,user:C.data._id,plan:n});case 4:return t=e.sent,console.log("reve data"+t),e.next=8,d.a.get("/review/"+n);case 8:s=e.sent,O(s.data.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("rate",y);var E=function(){var e=Object(l.a)(Object(i.a)().mark((function e(t){var s,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.delete("/review/crud/"+n,{data:{id:t}});case 3:return s=e.sent,console.log(s.config.data),e.next=7,d.a.get("/review/"+n);case 7:a=e.sent,console.log(a),O(a.data.data),alert("review deleted"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"pDetailBox",children:[Object(u.jsxs)("div",{className:"h1Box",children:[Object(u.jsx)("h1",{className:"h1",children:"PLAN DETAILS"}),Object(u.jsx)("div",{className:"line"})]}),Object(u.jsx)("div",{className:"planDetailBox",children:Object(u.jsx)("div",{className:"planDetail",children:Object(u.jsx)("div",{className:"loginBox",children:Object.keys(s).map((function(e,t){return Object(u.jsxs)("div",{className:"entryBox",children:[Object(u.jsx)("div",{className:"entryText",children:S(e)}),Object(u.jsx)("div",{className:" input",children:S(s[e].toString())})]},t)}))})})}),Object(u.jsxs)("div",{className:"reviewBox",children:[Object(u.jsxs)("div",{className:"reviewEnrty",children:[Object(u.jsx)("input",{type:"text",value:v,onChange:function(e){return N(e.target.value)}}),Object(u.jsxs)("select",{name:"",id:"",className:"select",onChange:function(e){w(e.target.value)},children:[Object(u.jsx)("option",{value:"5",children:"5 Excellent"}),Object(u.jsx)("option",{value:"4",children:"4 Very Good"}),Object(u.jsx)("option",{value:"3",children:"3 Good"}),Object(u.jsx)("option",{value:"2",children:"2 Poor"}),Object(u.jsx)("option",{value:"1",children:"1 Very Poor"})]}),Object(u.jsx)("button",{className:"btn",onClick:B,children:"Submit"})]}),h&&(null===h||void 0===h?void 0:h.map((function(e,t){return Object(u.jsxs)("div",{className:"reviewsCard",children:[Object(u.jsxs)("div",{className:"pdreviews",children:[Object(u.jsxs)("div",{className:"pdrdetail",children:[Object(u.jsx)("h3",{children:e.user.name}),Object(u.jsxs)("div",{className:"input",children:[" ",e.review]})]}),Object(u.jsx)("div",{className:"rate",children:Object(u.jsx)("label",{htmlFor:"star5",title:"text",children:e.rating})})]}),Object(u.jsx)("div",{className:"rcBtn",children:Object(u.jsx)("button",{className:"showMoreBtn btn",onClick:function(){E(e._id)},children:"Delete"})})]},t)})))]})]})};var F=function(){return Object(u.jsx)(C.a,{children:Object(u.jsxs)(O,{children:[Object(u.jsx)(P,{}),Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{path:"/signup",children:Object(u.jsx)(x,{})}),Object(u.jsx)(b.a,{path:"/login",children:Object(u.jsx)(A,{})}),Object(u.jsx)(b.a,{path:"/forgetPassword",children:Object(u.jsx)(D,{})}),Object(u.jsx)(b.a,{path:"/resetpassword",children:Object(u.jsx)(I,{})}),Object(u.jsx)(b.a,{path:"/allPlans",children:Object(u.jsx)(R,{})}),Object(u.jsx)(b.a,{path:"/profilePage",children:Object(u.jsx)(Y,{})}),Object(u.jsx)(b.a,{path:"/planDetail/:id",children:Object(u.jsx)(L,{})}),Object(u.jsx)(b.a,{path:"/",children:Object(u.jsx)(k,{})})]}),Object(u.jsx)(T,{})]})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(F,{}),document.getElementById("root")),_()}},[[73,1,2]]]);
//# sourceMappingURL=main.878b3f4f.chunk.js.map