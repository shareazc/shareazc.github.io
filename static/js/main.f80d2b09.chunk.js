(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,n,t){},111:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(34),o=t.n(l),i=(t(83),t(8)),c=t(9),s=t(11),m=t(10),d=t(12),h=t(20),u=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(r.a.Component),p=Object(h.f)(u),f=t(23),g=t(13),b=t(113),v=t(114),E=t(14),y=t(53),w=t.n(y);function k(){var e=Object(g.a)(["\n  .jumbo {\n    background: url(",") no-repeat fixed bottom;\n    background-size: cover;\n    height: 75vh;\n    position: relative;\n    z-index: -2;\n  }\n\n  .overlay {\n    background-color: #f1f1f1;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n  }\n\n  .h1,\n  h1 {\n    font-size: 3rem;\n  }\n\n  .p,\n  p {\n    font-size: 2rem;\n  }\n\n  .h1,\n  h1,\n  .p,\n  p {\n    color: #181818;\n    //text-shadow: 1px 1px white;\n  }\n"]);return k=function(){return e},e}var j=E.a.div(k(),w.a),x=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(b.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(v.a,null,r.a.createElement("h1",null,"Hi! I'm Share"),r.a.createElement("h1",null,"I'm a Front-end developer"),r.a.createElement("p",null,"I'm also a musician and dog behaviorist"))))}}]),n}(r.a.Component),O=t(43);O.initializeApp({apiKey:"AIzaSyCO01QU4U0ypV0EPJLkdBkpdOYHghHs1go",authDomain:"portfolio-37662.firebaseapp.com",databaseURL:"https://portfolio-37662.firebaseio.com",projectId:"portfolio-37662",storageBucket:"portfolio-37662.appspot.com",messagingSenderId:"60013903437",appId:"1:60013903437:web:5d5b1c148a9f1ebd"});var I=O,N=t(5),C=t.n(N),z=t(57),T=t.n(z);function A(){var e=Object(g.a)(["\n  .projectCard {\n    margin-bottom: 2rem;\n    display: flex;\n    flex-direction: row;\n    background-color: #f1f1f1;\n  }                   #f7f7f7\n\n  .thumbnail {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .projectImage {\n    padding: 2rem;\n  }\n\n  .projectInfo {\n    padding: 3rem;\n    align-content: center;\n    justify-content: center;\n  }\n\n  @media only screen and (max-width: 768px) {\n\n    .content {\n      width: 100%;\n    }\n\n    .thumbnail {\n      max-width: 100%;\n    }\n  }\n  }\n\n  @media only screen and (max-width:600px) {\n    .projectCard {\n      display: block;\n    }\n\n    .content {\n      width: 100%;\n    }\n\n    .thumbnail {\n      max-width: 100%;\n    }\n  }\n\n  \n"]);return A=function(){return e},e}var q=E.a.div(A()),S=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(m.a)(n).call(this,e))).state={projects:[]},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;I.database().ref().child("projects").on("value",function(n){var t=n.val(),a=[];for(var r in t)a.push({id:r,name:t[r].name,description:t[r].description,img:t[r].img,url:t[r].url});e.setState({projects:a})})}},{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(q,null,r.a.createElement("div",{className:"Projects"},r.a.createElement("h1",null,"See my work here"),r.a.createElement("br",null),this.state.projects.map(function(e){return r.a.createElement("div",{className:"projectCard"},r.a.createElement("div",{className:"content projectImage"},r.a.createElement("img",{src:e.img,className:"thumbnail",alt:""})),r.a.createElement("div",{className:"content projectInfo"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement(T.a,{variant:"link"},r.a.createElement(f.b,{to:e.url},"Read More"))))}))))}}]),n}(r.a.Component),D=t(30);function L(){var e=Object(g.a)(["\n    .footer {\n        background-color: #222222;\n        display: flex;\n        flex-direction: column;\n        height: 30vh;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .icons {\n        display: flex;\n        flex-direction: row;\n\n    }\n\n    p {\n        color: #bbb;\n    }\n\n    h3 {\n    color: #bbb;\n\n    &:hover {\n        color: white;\n        }\n    }\n\n    .middle {\n        width: 10vw;\n    }\n"]);return L=function(){return e},e}var U=E.a.div(L()),M=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(U,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("p",null,"Reach me on social media")),r.a.createElement("div",{className:"icons"},r.a.createElement("h3",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/shareni-azcarraga/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.c,null))),r.a.createElement("div",{className:"middle"}),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/shareazc",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(D.b,null))))))}}]),n}(r.a.Component),F=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(S,null),r.a.createElement(M,null))}}]),n}(r.a.Component),G=t(58),R=t.n(G),H=t(59),J=t.n(H),W=t(60),Y=t.n(W);function _(){var e=Object(g.a)(["\n  .about {\n    display: flex;\n  }\n\n  .about img {\n    object-fit: contain;\n    max-width: 25%;\n  }\n\n  .portrait {\n    width: 40%;\n    margin-top: 0;\n    text-align: center;\n  }\n\n  .intro {\n    font-size: 1.5rem;\n    padding: 2rem;\n    clear: left;\n  }\n\n  .collage {\n    object-fit: contain;\n    width: 100%;\n  }\n\n  .quote {\n    padding: 2rem;\n    background-color: #f1f1f1;\n\n    p {\n      font-size: 1.5rem;\n      font-style: italic;\n      color: #ef5350;\n    }\n\n    h5 {\n      margin-right: 0;\n      text-align: right;\n    }\n  }\n\n  @media only screen and (max-width: 600px) {\n\n    .about {\n      flex-wrap: wrap;\n    }\n\n    .about img {\n      display: block;\n      max-height: 25rem;\n      margin: auto;\n    }\n\n    .intro {\n      font-size: 1rem;\n      text-align: center;\n      padding: 2rem;\n    }\n  }\n"]);return _=function(){return e},e}var B={color:"#ef5350"},K=E.a.div(_()),X=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement("div",{className:"about"},r.a.createElement("img",{src:R.a,alt:""}),r.a.createElement("div",{className:"intro"},r.a.createElement(C.a,null,r.a.createElement("p",null,"Hi, I'm Share. I'm a front-end developer with a passion for good UI design and UX research. I believe that it is our responsability as developers to shine a new light on technology as a human-comprehensive and intuitive tool to solve the new challenges we face everyday."),r.a.createElement("p",null,"I have a mix-matched background in"," ",r.a.createElement("i",{style:B},"music, psychology")," and as an",r.a.createElement("i",{style:B}," entrepreneur")," of my own business. I recently graduated from",r.a.createElement("b",{style:B}," Laboratoria"),": an intensive 6-month long dev Bootcamp that empowers women and helps them kickstart a career in the tech industry."),r.a.createElement("p",null,"Aside from that I also love barbeques because they put together my two main favorite things: food and hanging out."),r.a.createElement("p",null,"I\u2019m based in Guadalajara, MX and you can download my resume",r.a.createElement("a",{href:Y.a,download:"Shareni-Azcarraga-resume",style:B}," ","here."))))),r.a.createElement("div",{className:"quote"},r.a.createElement(C.a,null,r.a.createElement("p",null,"\u201cFor me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others. You'd be surprised how far that gets you.\u201d "),r.a.createElement("h5",null,"\u2015 Neil deGrasse Tyson"))),r.a.createElement("img",{src:J.a,className:"collage",alt:"collage"}),r.a.createElement("div",{className:"interests"})),r.a.createElement(M,null))}}]),n}(r.a.Component),P=t(61),Q=t.n(P),V=t(115),Z=t(116);function $(){var e=Object(g.a)(["\n  .navbar {\n    background-color: #222;\n    height: 15%;\n  }\n\n  .navbar-brand,\n  .h6,\n  h6 {\n    color: #bbb;\n    margin: 0;\n\n    &:hover {\n      color: white;\n    }\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  svg {\n    color: #32cd32;\n  }\n\n  }\n"]);return $=function(){return e},e}var ee=E.a.div($()),ne=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(ee,null,r.a.createElement(V.a,{variant:"dark",expand:"lg",autofocus:!0},r.a.createElement(V.a.Brand,null,r.a.createElement(Z.a.Link,null,r.a.createElement(f.b,{to:"/"},r.a.createElement("h6",null,"Share Azc\xe1rraga")))),r.a.createElement(V.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(V.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Z.a,{className:"ml-auto"},r.a.createElement(Z.a.Item,null,r.a.createElement(Z.a.Link,null,r.a.createElement(f.b,{to:"/about"},r.a.createElement("h6",null,"Get to know me")))),r.a.createElement(Z.a.Item,null,r.a.createElement(Z.a.Link,null,r.a.createElement(f.b,{to:"/projects"},r.a.createElement("h6",null,"See my work")))),r.a.createElement(Z.a.Item,null,r.a.createElement(Z.a.Link,{target:"_blank",href:"mailto:shareni.azcarraga@gmail.com?subject=I'd like to Hire you!"},r.a.createElement("h6",null,"Currently available for hiring ",r.a.createElement(D.a,null))))))))}}]),n}(r.a.Component);function te(){var e=Object(g.a)(["\n\n.reqCard {\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: row;\n}\n\n.thumbnail {\n  max-width: 15rem;\n  height: auto;\n  -background-color: #f1f1f1\n  \n}\n\n.reqImage {\n  padding: 4rem;\n}\n\n.reqInfo {\n  padding-top: 8rem;\n  align-content: center;\n  justify-content: center;\n}\n\n@media only screen and (max-width:600px) {\n  .reqCard {\n    display: block;\n  }\n\n  .reqInfo {\n    padding-top: 0rem;\n    text-align: center;\n  }\n\n  .content {\n    width: 100%;\n  }\n\n  .thumbnail {\n    max-width: 100%;\n  }\n}\n\n"]);return te=function(){return e},e}var ae=E.a.div(te()),re=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(s.a)(this,Object(m.a)(n).call(this,e))).state={requirements:[]},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;I.database().ref().child("organa").on("value",function(n){var t=n.val(),a=[];for(var r in t)a.push({id:r,title:t[r].title,text:t[r].text,img:t[r].img});e.setState({requirements:a})})}},{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(ae,null,r.a.createElement("div",{className:"requirements"},this.state.requirements.map(function(e){return r.a.createElement("div",{className:"reqCard"},r.a.createElement("div",{className:"content reqImage"},r.a.createElement("img",{src:e.img,className:"thumbnail",alt:""})),r.a.createElement("div",{className:"content reqInfo"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.text)))}))))}}]),n}(r.a.Component),le=t(67),oe=t.n(le),ie=t(68),ce=t.n(ie),se=t(69),me=t.n(se),de=t(70),he=t.n(de),ue=t(71),pe=t.n(ue),fe=t(72),ge=t.n(fe);function be(){var e=Object(g.a)(["\na {\n  font-style: italic;\n  color: #ef5350;\n\n  :hover {\n    color: crimson;\n    text-decoration: underline;\n  }\n}\n\n.title {\n  text-align: center;\n  color: white;\n  background-color: #222222;\n  min-height: 90vh;\n  padding-top: 10vh;\n  padding-bottom:10vh;\n\n  & h1 {\n    font-size: 10vh;\n    margin-bottom: 2rem;\n  }\n\n  & p {\n    font-style: italic;\n    font-size: 15pt\n  }\n}\n\n.mockup {\n  background: url(",") no-repeat;\n  background-size: contain;\n  height: 130vh;\n}\n\n.role {\n  padding: 10vh 0 10vh 0;\n}\n\n.assistance {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.requirements {\n  padding: 10vh 0 10vh 0;\n}\n\n.third {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.qrCodes {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.fourth {\n  padding: 10vh 0 10vh 0;\n}\n\n.uxUi {\n  display: flex;\n  text-align: center;\n  margin-top: 5rem;\n}\n\n.uxUi div {\n  width: 50%;\n  padding: 0 5rem 0 5rem;\n  border-style: solid;\n  border-color: #f1f1f1;\n  border-width: 0.5rem;\n}\n\n.scanner {\n  background: url(",") no-repeat;\n  background-size: contain;\n  height: 20rem;\n}\n\n.screens {\n  padding: 10vh 0 10vh 0;\n  text-align: center;\n}\n\n\n.prototype {\n  text-align: center;\n  color: white;\n  background-color: #222222;\n  padding: 10vh 0 10vh 0;\n  display: block;\n  justify-content: center;\n}\n\n.dashboard {\n  text-align: center;\n  color: white;\n  background-color: #222222;\n  padding: 10vh 0 10vh 0;\n  display: block;\n  justify-content: center;\n}\n\n\n.fifth {\n  padding: 10vh 0 10vh 0;\n}\n\n.features {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.stacks {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 10vh 0 10vh 0;\n}\n\n.stacks div {\n  width: 50%;\n  padding: 0 5rem 0 5rem;\n  border-style: solid;\n  border-color: #f1f1f1;\n  border-width: 0.5rem;\n}\n\n.end {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n@media only screen and (max-width: 768px) {\n  .prototype img {\n    max-height: 10rem;\n  }\n\n  .dashboard img {\n    max-height: 10rem;\n  }\n}\n\n@media only screen and (max-width:600px) {\n\n  .mockup {\n    background: url(",") no-repeat;\n    background-size: contain;\n}\n\n.uxUi {\n  flex-wrap: wrap;\n}\n\n.uxUi div {\n  width: 100%;\n}\n\n.scanner {\n  background: url(",") no-repeat;\n  background-size: contain;\n  height: 100vh;\n}\n\n.prototype img {\n  max-height: 10rem;\n}\n\n.dashboard img {\n  max-height: 10rem;\n}\n\n.stacks div {\n  padding: 0;\n}\n\n"]);return be=function(){return e},e}var ve={color:"#ef5350"},Ee=E.a.div(be(),oe.a,me.a,ce.a,he.a),ye=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null,r.a.createElement("div",{className:"title"},r.a.createElement(C.a,null,r.a.createElement("h1",null,"Organa: Talent Manager"),r.a.createElement("p",null,"In Laboratoria, our Personal Development Coordinator takes on the monumental task of overseeing that each student has the emotional and professional tools needed to thrive and become a front-end developer from scratch, the students often have complex life situations that need close follow-up and personalized solutions, on top of that she also has to take care of taking assistance each day - Her only tool? A spreadsheet."),r.a.createElement("p",null,"She deserved better."))),r.a.createElement("div",{className:"mockup"}),r.a.createElement("div",{className:"second"},r.a.createElement(C.a,null,r.a.createElement("p",null,"This project was comissioned as part of an Open House Event in Laboratoria. We had two days to develop our minimum viable product and pitch our project to some of the biggest tech companies in Guadalajara. For this two-day challenge, we set out to create an app that could take assistance easily and autonomously in order to reduce the time spent on this daily task (roughly 30 minutes)."))),r.a.createElement("div",{className:"role"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"My role"),r.a.createElement("p",null,"I was part of the pitch team and responsible for the experience strategy. I designed the interface of the app and the high-fidelity prototype as well as developed the style of the app from the front-end and the development of the QR Code generator for this application."))),r.a.createElement("div",{className:"assistance"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"Not just an assistance log"),r.a.createElement("p",null,"After an interview with our client, we noticed that the main issue was that taking assistance was too time-consuming and the obtained information was hard to read due to the massive amount of it."),r.a.createElement("p",null,"We were able to identify their needs and propose valuable features for this project:"))),r.a.createElement("div",{className:"requirements"},r.a.createElement(re,null)),r.a.createElement("div",{className:"third"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"Let's make this happen."),r.a.createElement("p",null,"This was the first time in 4 months of programming that we had the opportunity to try newer technologies such as React and even if that mean spending extra time with a learning curve we as a team decided that the learning experience was worth the risk."),r.a.createElement("p",null,"In favor of maintainability we also decided to connect our project remotely to the students' database instead of having a static file within the code. This ultimately allowed us to enhance the staff's control over the students' list should there be any last-minute change in it."),r.a.createElement("p",null,"And since one of our priorities was to optimize time, we chose quick-response codes as our main tool, they could be scanned in any orientation and withstand damage without losing readability."))),r.a.createElement("div",{className:"data"},r.a.createElement(C.a,null)),r.a.createElement("div",{className:"fourth"},r.a.createElement(C.a,null,r.a.createElement("p",null,"I wanted the best experience for our client but I wasn't sure how to deliver since my expertise in design was limited so I observed what we wanted to improve:"),r.a.createElement("p",null,"We had a cluttered screen with an ridiculous amount of rows and colums full of important and some not-so-important information, all of this piled on a rather ugly and impersonal spreadsheet labeled almost as confidential due to the private notes from each student it contained."),r.a.createElement("p",null,"Knowing what had to change, I set simple goals:"),r.a.createElement("div",{className:"uxUi"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("h2",null,"UX")),r.a.createElement("p",null,"Our first step was to separate the scanner screen that every student would have access to from the dashboard that contained information exclusive for our client. It would be much easier to just set up a tablet or laptop with the scanner and let every student log their assistance as they arrived."),r.a.createElement("p",null,"And just to be extra sure that no curious eyes would try to read private information, we added a login screen in order to be able to access the dashboard.")),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("h2",null,"UI")),r.a.createElement("p",null,"My main goal was to reduce the clutter that caused unnecessary eye stress to our client and display the information in a simple and orderly fashion."),r.a.createElement("p",null,"I also wanted the first impression of the app to be as user-friendly as possible, considering that most of the newer students often feel intimidated by technology."),r.a.createElement("p",null,"And finally I wanted the general style to be familiar with our client's brand guidelines whilst maintaining a straight-forward and clean screen."))))),r.a.createElement("div",{className:"scanner"}),r.a.createElement("div",{className:"screens"},r.a.createElement(C.a,null,r.a.createElement("p",null,r.a.createElement("h3",null,"Due to privacy reasons, I will only show the prototype version of the next screens.")))),r.a.createElement("div",{className:"prototype"},r.a.createElement("p",null,r.a.createElement("i",null,"The scanner screen that all students would have access to.")),r.a.createElement("img",{src:pe.a,alt:"Screen showing the scanner"})),r.a.createElement("div",{className:"dashboard"},r.a.createElement("p",null,r.a.createElement("i",null,"Once logged in, this is the dashboard our client would see.")),r.a.createElement("img",{src:ge.a,alt:"Dashboard screen for the client"})),r.a.createElement("div",{className:"fifth"},r.a.createElement(C.a,null,r.a.createElement("p",null,"After this, we decided Organa had the potential to become a real tool for Laboratoria and with help of our coaches, we started marking issues from the original code to work on them."),r.a.createElement("p",null,"This project is currently being used in Laboratoria and it is intended to be a sort of a heirloom with every generetion adding to it and improving it's functionality. Even after we graduate, the hi-fi prototype will guide the next batch of developers."),r.a.createElement("p",null,"Organa has accomplished it's goal in reducing the time spent by our Personal Development Coordinatior every day taking assistance and making her mornings a bit less monotonous. We also hope that through this project we inspire more students to realize that they don't need to be senior developers to create tools that help people."))),r.a.createElement("div",{className:"features"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"Technical features"),r.a.createElement("p",null,"\u2022 Code validation:"),r.a.createElement("p",{style:ve},"Does not accept foreign/invalid/external codes. Only takes assistance once per code scanned."),r.a.createElement("p",null,"\u2022 Updates the dashboard automatically as the codes are scanned"),r.a.createElement("p",null,"\u2022 Updates the date automatically"),r.a.createElement("p",null,"\u2022 Filters list of absentees"),r.a.createElement("p",null,"\u2022 Shows full student list"))),r.a.createElement("div",{className:"stacks"},r.a.createElement("div",null,r.a.createElement("h2",null,"Stacks"),r.a.createElement("p",null,"\u2022 Adobe Xd"),r.a.createElement("p",null,"\u2022 Adobe Illustrator"),r.a.createElement("p",null,"\u2022 HTML5"),r.a.createElement("p",null,"\u2022 CSS3 + Styled Components"),r.a.createElement("p",null,"\u2022 Javascript"),r.a.createElement("p",null,"\u2022 Google Firebase"),r.a.createElement("p",null,"\u2022 React JS + React Bootstrap"))),r.a.createElement("div",{className:"end"},r.a.createElement(C.a,null,r.a.createElement("p",null,"Check out this project on ",r.a.createElement("a",{href:"https://github.com/shareazc/open-house-organa/blob/master/organa/README.md",target:"_blank",rel:"noopener noreferrer"}," Github.")),r.a.createElement("p",null,"You can see the hi-fi prototype",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1yj1rQCJIHzIW_Iaoxl154F97FI9OZlDVKBovKRIn2xo/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}," here."))))),r.a.createElement(M,null))}}]),n}(r.a.Component);function we(){var e=Object(g.a)(["\na {\n    font-style: italic;\n    color: #ef5350;\n\n    :hover {\n        color: crimson;\n        text-decoration: underline;\n    }\n}\n\n.title{\n    text-align: center;\n    color: white;\n    background-color: #222222;\n    min-height: 90vh;\n    padding: 10vh 0 10vh 0;\n\n    & h1 {\n        font-size: 10vh;\n        margin-bottom: 2rem;\n        }\n    \n    & p {\n        font-style: italic;\n        font-size: 15pt\n        }\n} \n\n.mockup{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 60%\n}\n\n.description {\n    padding-top: 10vh;\n\n    p {\n        margin: 10vh 0 10vh 0;\n    }\n}\n\n.challenge {\n    padding: 10vh 0 10vh 0;\n    background-color: #f1f1f1;\n}\n\n.chicken {\n    padding: 10vh 0 10vh 0;\n}\n\n.stacks {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding-bottom: 10vh;\n}\n\n.stacks div {\n\n    width: 50%;\n    padding: 0 5rem 0 5rem;\n    border-style: solid;\n    border-color: #f1f1f1;\n    border-width: 0.5rem;\n}\n\n.end{\n    background-color: #f1f1f1;\n    padding: 10vh 0 10vh 0;\n}\n\n@media only screen and (max-width:600px) {\n    .stacks {\n        flex-wrap: wrap;\n    }\n    \n    .stacks div {\n        width: 100%;\n    }\n}\n"]);return we=function(){return e},e}var ke={color:"#ef5350"},je=E.a.div(we()),xe=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je,null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Apocallypse"),r.a.createElement("p",null,"It's the end of the world, good luck avoiding getting killed by falling meteorites."),r.a.createElement("p",null,"Also, you're a chicken.")),r.a.createElement("img",{src:"https://i.imgur.com/ywYYQLm.jpg",alt:"Mobile mockup of the game",className:"mockup"}),r.a.createElement("div",{className:"description"},r.a.createElement(C.a,null,r.a.createElement("p",null,"This project was born out of two of my dearest interest: videogames and animals."),r.a.createElement("p",null,"I had previously made a mobile game (See Tic-Tac-Toe Native) however I wasn't too thrilled with it, so I began researching how game development worked. The amount of game engines that existed was intimidating so I decided to take step one on known territory: ",r.a.createElement("b",{style:ke},"Unity."),"  I had neved used it before but I had played games developed on Unity and liked them, so I thought that was a good place to start as any and set to work."))),r.a.createElement("div",{className:"challenge"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"Learning a new language in a week"),r.a.createElement("p",null,"The biggest challenge I encountered with this project was that I didn't know Unity used ",r.a.createElement("b",{style:ke},"C# "),"as developing language and I only knew Javascript so it took me a bit to understand the new syntax. I also learned that when you're developing a game and you program the movement to take input from the player it's a different thing to program input take from a keyboard than a touchscreen."))),r.a.createElement("div",{className:"chicken"},r.a.createElement(C.a,null,r.a.createElement("p",null,"The whole chicken-theme began as a joke. I was talking to my wife about all those predictions of the end of the world and she said \"We're all gonna die, well, probably not chickens but that's because they're the devil incarnate.\" (She's really scared of birds) And I thought, you know what? Chickens are actually very smart! A lot of training behaviourists pay big money to train chickens, their quickness help people develop their coordination and sensitivity, so yeah, chickens could totally survive the apocalypse but because of how cool they are."),r.a.createElement("p",null,'Also in spanish the word for small chicken is "pollito", so when it came down to choose a name for the game I just thought "pollito" + apocalypse = Apocallypse.'))),r.a.createElement("div",{className:"stacks"},r.a.createElement("div",null,r.a.createElement("h2",null,"Stacks"),r.a.createElement("p",null,"\u2022 Unity Game Engine"),r.a.createElement("p",null,"\u2022 C#"),r.a.createElement("p",null,"\u2022 Adobe Illustrator"))),r.a.createElement("div",{className:"end"},r.a.createElement(C.a,null,r.a.createElement("p",null,"You can download the game for Android ",r.a.createElement("a",{href:"https://bit.ly/2JKtsbm",download:"Apocallypse"},"here.")),r.a.createElement("p",null,r.a.createElement("i",null,"Be aware that your phone must be enabled to install apps from external sources."))))),r.a.createElement(M,null))}}]),n}(r.a.Component);function Oe(){var e=Object(g.a)(["\na {\n    font-style: italic;\n    color: #ef5350;\n\n    :hover {\n        color: crimson;\n        text-decoration: underline;\n    }\n}\n.title{\n    text-align: center;\n    color: white;\n    background-color: #222222;\n    min-height: 90vh;\n    padding: 10vh 0 10vh 0;\n\n    & h1 {\n        font-size: 10vh;\n        margin-bottom: 2rem;\n        }\n    \n    & p {\n        font-style: italic;\n        font-size: 15pt\n        }\n} \n\n.mockup{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 60%\n}\n\n.description{\n    padding: 10vh 0 10vh 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.research {\n    background-color: #f1f1f1;\n    padding: 10vh 0 10vh 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.qrCode {\n    padding-top:3 rem;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 30%\n}\n\n.game {\n    padding: 10vh 0 10vh 0;\n}\n\n.end{\n    background-color: #f1f1f1;\n    padding: 10vh 0 10vh 0;\n}\n\n@media only screen and (max-width:600px) {}\n"]);return Oe=function(){return e},e}var Ie=E.a.div(Oe()),Ne=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie,null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"GXTO"),r.a.createElement("p",null,"The classic game of tic-tac-toe developed on React Native")),r.a.createElement("img",{src:"https://i.imgur.com/ZLp8pLb.jpg",alt:"Tic tac toe mock-up",className:"mockup"}),r.a.createElement("div",{className:"description"},r.a.createElement(C.a,null,r.a.createElement("p",null,"This is the first project I ever made on React Native that's very dear to me despite it's simplicity I really enjoyed working on it."),r.a.createElement("p",null,"My tester was my 4 year old nephew and the game is meant to be played with the help of an adult, or more specifically, my brother so I tried to go easy on him and mute the colors a little bit."))),r.a.createElement("div",{className:"research"},r.a.createElement(C.a,null,r.a.createElement("h3",null,"Why tic-tac-toe?"),r.a.createElement("p",null,"After doing some ",r.a.createElement("a",{href:"https://bit.ly/2Yhds9K",target:"_blank",rel:"noopener noreferrer"},"research")," I discovered that tic-tac-toe is a highly recommended game for small children (3 - 9 years old) due to several cognitive processes they develop playing the game:"),r.a.createElement("p",null,r.a.createElement("ul",null,r.a.createElement("li",null,"The temporal perception of the game, that is that only the first player to complete it, wins"),r.a.createElement("li",null,"They learn how to predict their opponent's movements, in order to learn to block them"),r.a.createElement("li",null,"Once they've successfully learned to coordinate how to block and how to get the 3 figures in a row, they can develop strategies to win. This requires thinking 2 or more moves ahead."))))),r.a.createElement("div",{className:"game"},r.a.createElement(C.a,null,r.a.createElement("p",null,"To play this game you need to download the Expo app and scan this QR code"),r.a.createElement("img",{src:"https://i.imgur.com/ypYOqGV.png",alt:"qrCode to access the game on Expo Client app",className:"qrCode"}))),r.a.createElement("div",{className:"end"},r.a.createElement(C.a,null,r.a.createElement("p",null,"You can also check out the project on ",r.a.createElement("a",{href:"https://expo.io/@sdanvers/gxto-react-native",rel:"noopener noreferrer",target:"_blank"},"Expo.")),r.a.createElement("p",null,"Or see the full repository on ",r.a.createElement("a",{href:"https://github.com/shareazc/GXTO",rel:"noopener noreferrer",target:"_blank"},"GitHub."))))),r.a.createElement(M,null))}}]),n}(r.a.Component),Ce=t(73),ze=t.n(Ce),Te=t(74),Ae=t.n(Te);function qe(){var e=Object(g.a)(["\na {\n    font-style: italic;\n    color: #ef5350;\n\n    :hover {\n        color: crimson;\n        text-decoration: underline;\n    }\n}\n\n.title{\n    text-align: center;\n    color: white;\n    background-color: #222222;\n    min-height: 90vh;\n    padding: 10vh 0 10vh 0;\n\n    & h1 {\n        font-size: 10vh;\n        margin-bottom: 2rem;\n        }\n    \n    & p {\n        font-style: italic;\n        font-size: 15pt\n        }\n} \n\n\n.description{\n    padding: 10vh 0 10vh 0;\n}\n\n.screenshot1 {\n    text-align: center;\n    background-color: #f1f1f1;\n    padding: 10vh 0 10vh 0;\n    display: block;\n    justify-content: center;\n}\n\n.screenshot2 {\n    text-align: center;\n    background-color: #f1f1f1;\n    padding: 10vh 0 10vh 0;\n    display: block;\n    justify-content: center;\n}\n\n.stacks {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 10vh 0 10vh 0;\n}\n\n.stacks div {\n    width: 50%;\n    padding: 0 5rem 0 5rem;\n    border-style: solid;\n    border-color: #f1f1f1;\n    border-width: 0.5rem;\n}\n\n.end{\n    background-color: #f1f1f1;\n    padding: 10vh 0 10vh 0;\n}\n\n@media only screen and (max-width: 768px) {\n\n    .stacks div {\n        padding: 0;\n    }\n\n    .screenshot1 img {\n        max-height: 10rem;\n    }\n\n    .screenshot2 img {\n        max-height: 10rem;\n    }\n}\n\n@media only screen and (max-width:600px) {\n    .stacks div {\n        padding: 0;\n    }\n\n    .screenshot1 img {\n        max-height: 5rem;\n    }\n\n    .screenshot2 img {\n        max-height: 5rem;\n    }\n}\n}\n"]);return qe=function(){return e},e}var Se=E.a.div(qe()),De=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"MD.Links"),r.a.createElement("p",null,"When life gives you broken links... create a npm module to tell them apart from working ones.")),r.a.createElement("div",{className:"description"},r.a.createElement(C.a,null,r.a.createElement("p",null,"Checking if a url is broken or not may not be as easy as it sounds, specially when you have a large number of them and you're not really feeling like spending your day waiting for 404 codes to appear when there's so much more to be done."),r.a.createElement("p",null,"This was the first project I did that didn't involve a tangible interface, and to be honest, I did panic a little and then researched like a madwoman until I could understand how it all worked. The functionality is pretty straight-forward: You input the name of the file that contains the urls and this package will return a list of how many work and how many are broken."))),r.a.createElement("div",{className:"screenshot1"},r.a.createElement("p",null,r.a.createElement("i",null,"This is how you excecute the library from terminal")),r.a.createElement("img",{src:ze.a,alt:"this is how you excecute MDLinks"})),r.a.createElement("div",{className:"screenshot2"},r.a.createElement("p",null,r.a.createElement("i",null,"And this is what the library returns")),r.a.createElement("img",{src:Ae.a,alt:"This is the result with live or dead links"})),r.a.createElement("div",{className:"stacks"},r.a.createElement("div",null,r.a.createElement("h2",null,"Stacks"),r.a.createElement("p",null,"\u2022 Javascript"),r.a.createElement("p",null,"\u2022 NodeJS"))),r.a.createElement("div",{className:"end"},r.a.createElement(C.a,null,r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/shareazc/GDL002-md-links"},"Check out the GitHub repository."))))),r.a.createElement(M,null))}}]),n}(r.a.Component);t(110);var Le=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(p,null,r.a.createElement(ne,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:F}),r.a.createElement(h.a,{path:"/about",component:X}),r.a.createElement(h.a,{path:"/projects",component:S}),r.a.createElement(h.a,{path:"/organa",component:ye}),r.a.createElement(h.a,{path:"/mobile",component:xe}),r.a.createElement(h.a,{path:"/tic-tac-toe",component:Ne}),r.a.createElement(h.a,{path:"/markdown",component:De}),r.a.createElement(h.a,{component:Q.a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,n,t){e.exports=t.p+"static/media/DnD-Cropped.a7a97480.jpg"},58:function(e,n,t){e.exports=t.p+"static/media/self.1f512508.jpg"},59:function(e,n,t){e.exports=t.p+"static/media/collagePortfolio.99124422.jpg"},60:function(e,n,t){e.exports=t.p+"static/media/CV-Share-Azcarraga.1348113a.pdf"},61:function(e,n){},67:function(e,n,t){e.exports=t.p+"static/media/mockupOrgana.49c6c26a.jpg"},68:function(e,n,t){e.exports=t.p+"static/media/mockupOrganaMob.76c04baf.png"},69:function(e,n,t){e.exports=t.p+"static/media/OrganaDev.0eca54d8.jpg"},70:function(e,n,t){e.exports=t.p+"static/media/OrganaDevMob.7c90ee9b.jpg"},71:function(e,n,t){e.exports=t.p+"static/media/organaScanDemo.8b02316e.gif"},72:function(e,n,t){e.exports=t.p+"static/media/organaDashbDemo.cf047900.gif"},73:function(e,n,t){e.exports=t.p+"static/media/MDLinks1.8bd20cf5.png"},74:function(e,n,t){e.exports=t.p+"static/media/MDLinks2.fc1aca80.png"},78:function(e,n,t){e.exports=t(111)},83:function(e,n,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.f80d2b09.chunk.js.map