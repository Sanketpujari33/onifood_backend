(this.webpackJsonponifood=this.webpackJsonponifood||[]).push([[0],{14:function(e,s,t){},28:function(e,s,t){},35:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){},69:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),n=t(29),r=t.n(n),i=(t(35),t(2)),l=t(5),j=t(3),o=t(6),d=t.n(o),b=t(7),h=t(0),u=c.a.createContext();function m(){return Object(a.useContext)(u)}var O=function(e){var s=e.children,t=Object(b.f)(),c=Object(a.useState)(""),n=Object(j.a)(c,2),r=n[0],o=n[1],m=Object(a.useState)(!1),O=Object(j.a)(m,2),x=O[0];function p(){return(p=Object(l.a)(Object(i.a)().mark((function e(s,t,a,c){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/user/signup",{name:s,email:t,password:a,confirmPassword:c});case 2:n=e.sent,console.log(n,r),o(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(l.a)(Object(i.a)().mark((function e(s,t){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/user/login",{email:s,password:t});case 3:return a=e.sent,console.log("dataaa",a.data),o(a.data),localStorage.setItem("user",JSON.stringify(a.data)),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function N(){return(N=Object(l.a)(Object(i.a)().mark((function e(){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("user"),e.next=3,d.a.get("/user/logout");case 3:s=e.sent,console.log(s),o(null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O[1],Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=localStorage.getItem("user"),console.log(s,898787),s?(o(JSON.parse(s)),console.log(r),t.push("/")):o(null);case 3:case"end":return e.stop()}}),e)}))),[]);var f={user:r,login:function(e,s){return v.apply(this,arguments)},signUp:function(e,s,t,a){return p.apply(this,arguments)},logout:function(){return N.apply(this,arguments)}};return Object(h.jsx)(u.Provider,{value:f,children:!x&&s})};t(14);var x=function(e){var s=Object(b.f)(),t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],o=Object(a.useState)(""),d=Object(j.a)(o,2),m=d[0],O=d[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],f=Object(a.useState)(""),g=Object(j.a)(f,2),y=g[0],w=g[1],C=Object(a.useContext)(u),S=C.signUp,B=(C.user,function(){var e=Object(l.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(n,v,m,y);case 3:s.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}());return Object(h.jsx)("div",{className:"container-grey",children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"SIGN UP"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"loginBox",children:[Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Name"}),Object(h.jsx)("input",{className:"name input",type:"text",name:"Name",placeholder:"Your Name",required:"",onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Email"}),Object(h.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return N(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Password"}),Object(h.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return O(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Confirm  Password"}),Object(h.jsx)("input",{className:"confirmPassword input",type:"password",name:"ConfirmPassword",placeholder:"**********",onChange:function(e){return w(e.target.value)}})]}),Object(h.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:B,children:"Sign Up"})]})]})})},p=t.p+"static/media/date.fcfd3f00.png",v=t.p+"static/media/carrot.6508ea02.png",N=t.p+"static/media/fast.f1644b7d.png",f=t.p+"static/media/Capture.611de11d.png",g=t.p+"static/media/star.49259244.png";t(64);var y=function(){var e=Object(a.useState)([]),s=Object(j.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/review/top3");case 3:s=e.sent,console.log(s),c(s.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(h.jsx)("div",{className:"reviewImg",children:Object(h.jsxs)("div",{className:"reviewCard",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"REVIEWS"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsx)("div",{className:"rDetail",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(h.jsxs)("div",{className:"rCard",children:[console.log("ele in review.js",e),Object(h.jsx)("div",{className:"rimage",children:Object(h.jsx)("img",{alt:"",src:e.user.profileImage,className:"img"})}),Object(h.jsx)("div",{className:"rheader",children:Object(h.jsx)("h3",{className:"rh3",children:e.user.name})}),Object(h.jsx)("div",{className:"rsummary",children:Object(h.jsx)("p",{className:"para",children:e.review})}),Object(h.jsx)("div",{children:Object(h.jsxs)("h4",{children:["Plan Name : ",e.plan.name]})}),Object(h.jsx)("div",{className:"frate",children:Array.from(Array(e.rating).keys()).map((function(e,s){return Object(h.jsx)("img",{alt:"",src:g,className:"img"})}))})]},s)})))})]})})},w=(t(65),t.p+"static/media/check-mark.1c103279.png");var C=function(){var e=Object(a.useState)([]),s=Object(j.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/plans/top3");case 3:s=e.sent,console.log(s,23443),c(s.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(h.jsxs)("div",{className:"plansCard",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"START EATING HEALTHY TODAY"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsx)("div",{className:"planDetails",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(h.jsxs)("div",{className:"pCard",children:[Object(h.jsx)("h3",{className:"h3",children:e.name}),Object(h.jsxs)("div",{className:"pCard1",children:[Object(h.jsxs)("div",{className:"priceBox",children:[Object(h.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(h.jsx)("div",{className:"duration",children:"/month"})]}),Object(h.jsx)("p",{className:"point",children:"That\u2019s only 2\u20b9 per meal"})]}),Object(h.jsxs)("div",{className:"pCard2",children:[Object(h.jsxs)("div",{className:"ppoints",children:[Object(h.jsx)("img",{src:w,alt:"",className:"img"}),Object(h.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(h.jsxs)("div",{className:"ppoints",children:[Object(h.jsx)("img",{src:w,alt:"",className:"img"}),Object(h.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(h.jsxs)("div",{className:"ppoints",children:[Object(h.jsx)("img",{src:w,alt:"",className:"img"}),Object(h.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(h.jsx)("button",{className:"btn",children:"I'm Hungry"})]},s)})))})]})},S=(t(28),t.p+"static/media/Avocado.a47677c6.mp4"),B=t(4);var E=function(){return Object(h.jsxs)("div",{className:"contactCard",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"CONTACT US"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"cDetail",children:[Object(h.jsx)("div",{className:"videoBox",children:Object(h.jsx)("video",{src:S,className:"video",muted:"muted",type:"video/mp4",loop:!0,autoPlay:!0})}),Object(h.jsxs)("div",{className:"contactInfo",children:[Object(h.jsxs)("div",{className:"entry",children:[Object(h.jsx)("div",{className:"entry-text",children:"Name"}),Object(h.jsx)("input",{type:"text",name:"Name",placeholder:"Your Name",required:!0})]}),Object(h.jsxs)("div",{className:"entry",children:[Object(h.jsx)("div",{className:"entry-text",children:"Email"}),Object(h.jsx)("input",{type:"email",name:"email",placeholder:"Your Email"})]}),Object(h.jsxs)("div",{className:"entry",children:[Object(h.jsx)("div",{className:"entry-text",children:"How did you find us"}),Object(h.jsxs)("select",{name:"",id:"",className:"select",children:[Object(h.jsx)("option",{value:"",children:"friends"}),Object(h.jsx)("option",{value:"",children:"search"}),Object(h.jsx)("option",{value:"",children:"advertsiment"}),Object(h.jsx)("option",{value:"",children:"other"})]})]}),Object(h.jsxs)("div",{className:"textBox",children:[Object(h.jsx)("div",{className:"entry-text",children:"Drop us a line"}),Object(h.jsx)("textarea",{name:"",id:"",placeholder:"Your Message"})]}),Object(h.jsxs)("div",{className:"checkbox ",children:[Object(h.jsx)("input",{type:"checkbox",name:"email",className:"checkbox"}),Object(h.jsx)("span",{className:"checkbox-conditions",children:"I have read and agree with all the Privacy Policy and Terms Conditions"})]}),Object(h.jsx)("div",{className:"sendBtn",children:Object(h.jsx)(B.b,{to:"#",className:" btn-full form-button",children:"SEND"})})]})]})]})};t(66);var k=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"bgImageCard",children:Object(h.jsx)("div",{className:"introCard",children:Object(h.jsxs)("div",{className:"iCard",children:[Object(h.jsxs)("div",{className:"headerBox",children:[Object(h.jsx)("div",{className:"header1",children:Object(h.jsx)("h1",{className:"hh1",children:"MEAL PLANS."})}),Object(h.jsxs)("div",{className:"header2",children:[Object(h.jsx)("h1",{className:"hh1",children:"FOR"}),Object(h.jsx)("h1",{className:" animateh1",children:"EVERYONE"})]})]}),Object(h.jsxs)("div",{className:"btnBox",children:[Object(h.jsx)("button",{className:"bookNowBtn btn",children:" Book Now"}),Object(h.jsx)("button",{className:"showMoreBtn btn",children:"Show Me More"})]})]})})}),Object(h.jsxs)("div",{className:"featureCard",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"AWESOME FEATURES"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"fDetail",children:[Object(h.jsxs)("div",{className:"fCard",children:[Object(h.jsx)("div",{className:"fimage",children:Object(h.jsx)("img",{src:p,className:"fimg",alt:""})}),Object(h.jsx)("div",{className:"fheader",children:Object(h.jsx)("h3",{className:"h3",children:"365 DAYS/YEAR"})}),Object(h.jsx)("div",{className:"fsummary",children:Object(h.jsx)("p",{className:"para",children:"Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style."})})]}),Object(h.jsxs)("div",{className:"fCard",children:[Object(h.jsx)("div",{className:"fimage",children:Object(h.jsx)("img",{src:N,alt:"",className:"fimg"})}),Object(h.jsx)("div",{className:"fheader",children:Object(h.jsx)("h3",{className:"h3",children:"30 MINUTES OR FREE"})}),Object(h.jsx)("div",{className:"fsummary",children:Object(h.jsx)("p",{className:"para",children:"You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."})})]}),Object(h.jsxs)("div",{className:"fCard",children:[Object(h.jsx)("div",{className:"fimage",children:Object(h.jsx)("img",{src:v,alt:"",className:"fimg"})}),Object(h.jsx)("div",{className:"fheader",children:Object(h.jsx)("h3",{className:"h3",children:"100% ORGANIC"})}),Object(h.jsx)("div",{className:"fsummary",children:Object(h.jsx)("p",{className:"para",children:"All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"})})]})]})]}),Object(h.jsxs)("div",{className:"stepsCard",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"STEPS TO FOLLOW"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"fDetail",children:[Object(h.jsx)("div",{className:"sbox1",children:Object(h.jsx)("img",{src:f,alt:" ",className:"fimg"})}),Object(h.jsxs)("div",{className:"sbox2",children:[Object(h.jsxs)("div",{className:"stepsBox",children:[Object(h.jsx)("div",{className:"num",children:" 1 "}),Object(h.jsx)("div",{className:"steps",children:Object(h.jsx)("p",{className:"para",children:"Choose the subscription plan that best fits your needs and sign up today."})})]}),Object(h.jsxs)("div",{className:"stepsBox",children:[Object(h.jsx)("div",{className:"num",children:" 2 "}),Object(h.jsx)("div",{className:"steps",children:Object(h.jsx)("p",{className:"para",children:"Order your delicious meal using our mobile app or website. Or you can even call us!"})})]}),Object(h.jsxs)("div",{className:"stepsBox",children:[Object(h.jsx)("div",{className:"num",children:" 3 "}),Object(h.jsx)("div",{className:"steps",children:Object(h.jsx)("p",{className:"para",children:"Enjoy your meal after less than 20 minutes. See you the next time!"})})]})]})]})]}),Object(h.jsx)(y,{}),Object(h.jsx)(C,{}),Object(h.jsx)(E,{})]})};t(67),t(68);var P=function(){var e,s=m(),t=s.user,c=s.logout;return Object(a.useEffect)((function(){var e=document.querySelector("nav");window.addEventListener("scroll",(function(){window.pageYOffset>0?e.setAttribute("class","activeNavBar"):0===window.pageYOffset&&e.classList.remove("activeNavBar")}))}),[]),Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{class:"brand",children:Object(h.jsx)("p",{children:"Onifood"})}),Object(h.jsx)("nav",{children:Object(h.jsx)("div",{className:"menu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{to:"/allPlans",children:"Plans"})}),t?Object(h.jsxs)(h.Fragment,{children:[console.log(t),Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{to:"/profilePage",children:null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.name})}),Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{to:"",onClick:c,children:"Logout"})})]}):Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{to:"/login",children:"Login"})})]})})})]})};t(69);function T(){return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"footer-content",children:[Object(h.jsx)("h3",{children:"Foolish Developer"}),Object(h.jsx)("p",{children:"You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."}),Object(h.jsxs)("ul",{className:"socials",children:[Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{href:"#",children:Object(h.jsx)("i",{className:"fa fa-facebook"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{href:"#",children:Object(h.jsx)("i",{className:"fa fa-twitter"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{href:"#",children:Object(h.jsx)("i",{className:"fa fa-google-plus"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{href:"#",children:Object(h.jsx)("i",{className:"fa fa-youtube"})})}),Object(h.jsx)("li",{children:Object(h.jsx)(B.b,{href:"#",children:Object(h.jsx)("i",{className:"fa fa-linkedin-square"})})})]}),Object(h.jsxs)("div",{className:"footer-bottom",children:[Object(h.jsxs)("p",{children:["Copyright \xa92021 ",Object(h.jsx)(B.b,{href:"#",children:" EVERYONE. All rights reserved."})]}),Object(h.jsx)("div",{className:"footer-menu",children:Object(h.jsxs)("ul",{className:"f-menu",children:[Object(h.jsx)("li",{classNameName:"text-value",children:Object(h.jsx)(B.b,{to:"#",children:"About us"})}),Object(h.jsx)("li",{classNameName:"text-value",children:Object(h.jsx)(B.b,{to:"#",children:"ios App"})}),Object(h.jsx)("li",{classNameName:"text-value",children:Object(h.jsx)(B.b,{to:"#",children:"Android App"})})]})})]})]})})}var A=function(){var e=Object(b.f)(),s=Object(a.useState)(""),t=Object(j.a)(s,2),c=t[0],n=t[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),d=o[0],m=o[1],O=Object(a.useState)(!1),x=Object(j.a)(O,2),p=(x[0],x[1],Object(a.useContext)(u)),v=p.login,N=(p.user,function(){var s=Object(l.a)(Object(i.a)().mark((function s(){return Object(i.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v(d,c);case 3:e.push("/"),s.next=9;break;case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0);case 9:case"end":return s.stop()}}),s,null,[[0,6]])})));return function(){return s.apply(this,arguments)}}());return Object(h.jsx)("div",{className:"container-grey",children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"LOGIN"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"loginBox",children:[Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Email"}),Object(h.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return m(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Password"}),Object(h.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return n(e.target.value)}})]}),Object(h.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:N,children:"Login"}),Object(h.jsxs)("div",{className:"otherOption",children:[Object(h.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(h.jsx)(B.b,{to:"/signup",className:"otherbtns",children:"Sign Up"})}),Object(h.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(h.jsx)(B.b,{to:"/forgetPassword",className:"otherbtns",children:"Forget Password"})})]})]})]})})};var D=function(){var e=Object(b.f)(),s=Object(a.useState)(""),t=Object(j.a)(s,2),c=t[0],n=t[1],r=function(){var s=Object(l.a)(Object(i.a)().mark((function s(){var t;return Object(i.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,d.a.post("/user/forgetpassword",{email:c});case 3:t=s.sent,e.push("/resetpassword"),console.log(t),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.log(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(){return s.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container-grey",children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"FORGET PASSWORD"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"loginBox",children:[Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Email"}),Object(h.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return n(e.target.value)}})]}),Object(h.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:r,children:"Send Email"})]})]})})};var I=function(){Object(b.f)();var e=Object(a.useState)(""),s=Object(j.a)(e,2),t=s[0],c=s[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),o=r[0],u=r[1],m=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/user/resetpassword/:token",{password:t,confirmPassword:o});case 3:s=e.sent,console.log(s),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container-grey",children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"RESET PASSWORD"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsxs)("div",{className:"loginBox",children:[Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Password"}),Object(h.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Confirm  Password"}),Object(h.jsx)("input",{className:"confirmPassword input",type:"password",name:"ConfirmPassword",placeholder:"**********",onChange:function(e){return u(e.target.value)}})]}),Object(h.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:m,children:"Reset Password"})]})]})})};t(70);var Y=function(){var e=Object(a.useState)([]),s=Object(j.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/plans/allPlans");case 3:s=e.sent,console.log(s.data),c(s.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(h.jsxs)("div",{className:"allplansCard",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"START EATING HEALTHY TODAY"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsx)("div",{className:"allplanDetails",children:Object(h.jsx)("div",{className:"planDetails",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(h.jsxs)("div",{className:"apCard",children:[Object(h.jsx)("h3",{className:"h3",children:e.name}),Object(h.jsxs)("div",{className:"pCard1",children:[Object(h.jsxs)("div",{className:"priceBox",children:[Object(h.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(h.jsx)("div",{className:"duration",children:"/month"})]}),Object(h.jsx)("p",{className:"point",children:"That\u2019s only 2\u20b9 per meal"})]}),Object(h.jsxs)("div",{className:"pCard2",children:[Object(h.jsxs)("div",{className:"ppoints",children:[Object(h.jsx)("img",{src:w,alt:"",className:"img"}),Object(h.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(h.jsxs)("div",{className:"ppoints",children:[Object(h.jsx)("img",{src:w,alt:"",className:"img"}),Object(h.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(h.jsxs)("div",{className:"ppoints",children:[Object(h.jsx)("img",{src:w,alt:"",className:"img"}),Object(h.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(h.jsxs)("button",{className:"btn",children:[" ",Object(h.jsx)(B.b,{to:"/planDetail/".concat(e._id),children:"I'm Hungry"})]})]},s)})))})})]})};t(71);var R=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("user")).data),s=Object(j.a)(e,2),t=s[0];s[1],Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t.name),o(t.password),N(t.email),O(t.password),console.log("abcd",t);case 5:case"end":return e.stop()}}),e)}))),[]);var c=Object(a.useState)(),n=Object(j.a)(c,2),r=n[0],o=n[1],b=Object(a.useState)(""),u=Object(j.a)(b,2),m=u[0],O=u[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],f=Object(a.useState)(""),g=Object(j.a)(f,2),y=g[0],w=g[1],C=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t._id),e.next=4,d.a.patch("/user/"+t._id,{email:v,name:y,password:r,confirmPassword:m,role:t.role,_id:t._id});case 4:s=e.sent,console.log(s.data.data),localStorage.setItem("user",JSON.stringify(s.data.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return console.log(t),Object(h.jsx)("div",{className:"container-grey",children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"Profile"}),Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("div",{className:"profileImage"})]}),Object(h.jsxs)("div",{className:"loginBox",children:[Object(h.jsx)("div",{className:"entryBox",children:Object(h.jsx)("input",{type:"file"})}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Email"}),Object(h.jsx)("input",{className:"email input",type:"email",value:v,onChange:function(e){return N(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Password"}),Object(h.jsx)("input",{className:"password input",type:"text",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Confirm Password"}),Object(h.jsx)("input",{className:"password input",type:"text",value:m,onChange:function(e){return O(e.target.value)}})]}),Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:"Name"}),Object(h.jsx)("input",{className:"password input",type:"text",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(h.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:C,children:"Update Profile"})]})]})})};t(72);var L=function(){var e=Object(a.useState)({}),s=Object(j.a)(e,2),t=s[0],c=s[1],n=Object(b.g)().id,r=Object(a.useState)(),o=Object(j.a)(r,2),u=o[0],O=o[1],x=Object(a.useState)(""),p=Object(j.a)(x,2),v=p[0],N=p[1],f=Object(a.useState)(),g=Object(j.a)(f,2),y=g[0],w=g[1],C=m().user;function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}console.log(n),Object(a.useEffect)(Object(l.a)(Object(i.a)().mark((function e(){var s,t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside useeffect"),e.next=3,d.a.get("/plans/plan/"+n);case 3:return s=e.sent,console.log(s,565785765),delete s.data.data._id,delete s.data.data.__v,c(s.data.data),e.next=10,d.a.get("/review/"+n);case 10:t=e.sent,console.log(t.data.data),O(t.data.data);case 13:case"end":return e.stop()}}),e)}))),[]),console.log(y);var B=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var s,t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123645),e.next=3,d.a.post("/review/crud/"+n,{review:v,rating:y,user:C.data._id,plan:n});case 3:return s=e.sent,console.log(s),e.next=7,d.a.get("/review/"+n);case 7:t=e.sent,O(t.data.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(Object(i.a)().mark((function e(s){var t,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.delete("/review/crud/"+n,{data:{id:s}});case 3:return t=e.sent,console.log(t.config.data),e.next=7,d.a.get("/review/"+n);case 7:a=e.sent,console.log(a),O(a.data.data),alert("review deleted"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(s){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"pDetailBox",children:[Object(h.jsxs)("div",{className:"h1Box",children:[Object(h.jsx)("h1",{className:"h1",children:"PLAN DETAILS"}),Object(h.jsx)("div",{className:"line"})]}),Object(h.jsx)("div",{className:"planDetailBox",children:Object(h.jsx)("div",{className:"planDetail",children:Object(h.jsx)("div",{className:"loginBox",children:Object.keys(t).map((function(e,s){return Object(h.jsxs)("div",{className:"entryBox",children:[Object(h.jsx)("div",{className:"entryText",children:S(e)}),Object(h.jsx)("div",{className:" input",children:S(t[e].toString())})]},s)}))})})}),Object(h.jsxs)("div",{className:"reviewBox",children:[Object(h.jsxs)("div",{className:"reviewEnrty",children:[Object(h.jsx)("input",{type:"text",value:v,onChange:function(e){return N(e.target.value)}}),Object(h.jsxs)("select",{name:"",id:"",className:"select",onChange:function(e){w(e.target.value)},children:[Object(h.jsx)("option",{value:"5",children:"5 Excellent"}),Object(h.jsx)("option",{value:"4",children:"4 Very Good"}),Object(h.jsx)("option",{value:"3",children:"3 Good"}),Object(h.jsx)("option",{value:"2",children:"2 Poor"}),Object(h.jsx)("option",{value:"1",children:"1 Very Poor"})]}),Object(h.jsx)("button",{className:"btn",onClick:B,children:"Submit"})]}),u&&(null===u||void 0===u?void 0:u.map((function(e,s){return Object(h.jsxs)("div",{className:"reviewsCard",children:[Object(h.jsxs)("div",{className:"pdreviews",children:[Object(h.jsxs)("div",{className:"pdrdetail",children:[Object(h.jsx)("h3",{children:e.user.name}),Object(h.jsxs)("div",{className:"input",children:[" ",e.review]})]}),Object(h.jsx)("div",{className:"rate",children:Object(h.jsx)("label",{htmlFor:"star5",title:"text",children:e.rating})})]}),Object(h.jsx)("div",{className:"rcBtn",children:Object(h.jsx)("button",{className:"showMoreBtn btn",onClick:function(){E(e._id)},children:"Delete"})})]},s)})))]})]})};var F=function(){return Object(h.jsx)(B.a,{children:Object(h.jsxs)(O,{children:[Object(h.jsx)(P,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/signup",children:Object(h.jsx)(x,{})}),Object(h.jsx)(b.a,{path:"/login",children:Object(h.jsx)(A,{})}),Object(h.jsx)(b.a,{path:"/forgetPassword",children:Object(h.jsx)(D,{})}),Object(h.jsx)(b.a,{path:"/resetpassword",children:Object(h.jsx)(I,{})}),Object(h.jsx)(b.a,{path:"/allPlans",children:Object(h.jsx)(Y,{})}),Object(h.jsx)(b.a,{path:"/profilePage",children:Object(h.jsx)(R,{})}),Object(h.jsx)(b.a,{path:"/planDetail/:id",children:Object(h.jsx)(L,{})}),Object(h.jsx)(b.a,{path:"/",children:Object(h.jsx)(k,{})})]}),Object(h.jsx)(T,{})]})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(F,{}),document.getElementById("root")),U()}},[[73,1,2]]]);
//# sourceMappingURL=main.4a81fd40.chunk.js.map