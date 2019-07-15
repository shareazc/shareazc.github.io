(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),l=n.n(r),c=(n(75),n(20)),i=n(23),s=n(7),d=n(8),u=n(10),h=n(9),m=n(11),p=n(14),f=n(105),b=n(106),v=n(15),w=n(51),g=n.n(w);function E(){var e=Object(p.a)(["\n  .jumbo {\n    background: url(",") no-repeat fixed bottom;\n    background-size: cover;\n    height: 75vh;\n    position: relative;\n    z-index: -2;\n  }\n\n  .overlay {\n    background-color: #f1f1f1;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n  }\n\n  .h1,\n  h1 {\n    font-size: 3rem;\n  }\n\n  .p,\n  p {\n    font-size: 2rem;\n  }\n\n  .h1,\n  h1,\n  .p,\n  p {\n    color: #181818;\n    //text-shadow: 1px 1px white;\n  }\n"]);return E=function(){return e},e}var y=v.a.div(E(),g.a),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(y,null,o.a.createElement(f.a,{fluid:!0,className:"jumbo"},o.a.createElement("div",{className:"overlay"}),o.a.createElement(b.a,null,o.a.createElement("h1",null,"Hi! I'm Share"),o.a.createElement("h1",null,"I'm a Front-end developer"),o.a.createElement("p",null,"I'm also a musician and dog behaviorist"))))}}]),t}(o.a.Component),k=n(42);k.initializeApp({apiKey:"AIzaSyCO01QU4U0ypV0EPJLkdBkpdOYHghHs1go",authDomain:"portfolio-37662.firebaseapp.com",databaseURL:"https://portfolio-37662.firebaseio.com",projectId:"portfolio-37662",storageBucket:"portfolio-37662.appspot.com",messagingSenderId:"60013903437",appId:"1:60013903437:web:5d5b1c148a9f1ebd"});var O=k,x=n(12),N=n.n(x),I=n(55),C=n.n(I);function S(){var e=Object(p.a)(["\n  .projectCard {\n    margin-bottom: 2rem;\n    display: flex;\n    flex-direction: row;\n    background-color: #f1f1f1;\n  }                   #f7f7f7\n\n  .thumbnail {\n    max-width: 100%;\n    height: auto;\n  }\n\n  .projectImage {\n    padding: 2rem;\n  }\n\n  .projectInfo {\n    padding: 3rem;\n    align-content: center;\n    justify-content: center;\n  }\n\n  @media only screen and (max-width:425px) {\n    .projectCard {\n      display: block;\n    }\n\n    .content {\n      width: 100%;\n    }\n\n    .thumbnail {\n      max-width: 100%;\n    }\n  }\n"]);return S=function(){return e},e}var q=v.a.div(S()),z=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={projects:[]},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.database().ref().child("projects").on("value",function(t){var n=t.val(),a=[];for(var o in n)a.push({id:o,name:n[o].name,description:n[o].description,img:n[o].img,url:n[o].url});e.setState({projects:a})})}},{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement(q,null,o.a.createElement("div",{className:"Projects"},o.a.createElement("h1",null,"See my work here"),o.a.createElement("br",null),this.state.projects.map(function(e){return o.a.createElement("div",{className:"projectCard"},o.a.createElement("div",{className:"content projectImage"},o.a.createElement("img",{src:e.img,className:"thumbnail",alt:""})),o.a.createElement("div",{className:"content projectInfo"},o.a.createElement("h2",null,e.name),o.a.createElement("p",null,e.description),o.a.createElement(C.a,{variant:"link"},o.a.createElement(c.b,{to:e.url},"Read More"))))}))))}}]),t}(o.a.Component),W=n(30);function L(){var e=Object(p.a)(["\n    .footer {\n        background-color: #222222;\n        display: flex;\n        flex-direction: column;\n        height: 30vh;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .icons {\n        display: flex;\n        flex-direction: row;\n\n    }\n\n    p {\n        color: #bbb;\n    }\n\n    h3 {\n    color: #bbb;\n\n    &:hover {\n        color: white;\n        }\n    }\n\n    .middle {\n        width: 10vw;\n    }\n"]);return L=function(){return e},e}var D=v.a.div(L()),R=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(D,null,o.a.createElement("div",{className:"footer"},o.a.createElement("div",null,o.a.createElement("p",null,"Reach me on social media")),o.a.createElement("div",{className:"icons"},o.a.createElement("h3",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/shareni-azcarraga/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(W.c,null))),o.a.createElement("div",{className:"middle"}),o.a.createElement("h3",null,o.a.createElement("a",{href:"https://github.com/shareazc",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(W.b,null))))))}}]),t}(o.a.Component),J=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,null),o.a.createElement(z,null),o.a.createElement(R,null))}}]),t}(o.a.Component),T=n(58),A=n.n(T);function M(){var e=Object(p.a)(["\n.self {\n    background-color: black;\n    object-fit: scale-down;\n    float: right;\n  }\n\n.portrait {\n    width: 100%;\n    background-color: #f1f1f1;\n    padding: 3rem;\n  }\n\n.intro {\n  }\n\n.collage {\n  }\n\n.quote {\n  }\n\n.interests {\n  }\n\n  @media only screen and (max-width: 425px) {\n    .self {\n        float: none;\n    }\n\n    .self img {\n        background-color: #f1f1f1;\n        height: 25rem;\n    }\n  }\n"]);return M=function(){return e},e}var B=v.a.div(M()),F=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null,o.a.createElement("div",{className:"portrait"},o.a.createElement("div",{className:"self"},o.a.createElement("img",{src:A.a,alt:"portrait-picture"}))),o.a.createElement("div",{className:"intro"},o.a.createElement("p",null,"I believe that the more we as developers help people to connect through technology and provide human, comprehensive solutions, the more we can inspire more people to take direct action towards creating and supporting communities."),o.a.createElement("p",null,"I have a mix-matched background in music, psychology and as an entrepreneur of my own business. I recently graduated from Laboratoria: an intensive dev Bootcamp that empowers women and helps them kickstart a career in the tech industry."),o.a.createElement("p",null,"Aside from that I also love barbeques because they put together my two favorite things: food and hanging out."),o.a.createElement("p",null,"I\u2019m based in Guadalajara, MX")),o.a.createElement("div",{className:"collage"}),o.a.createElement("div",{className:"quote"}),o.a.createElement("div",{className:"interests"}),o.a.createElement(N.a,null)),o.a.createElement(R,null))}}]),t}(o.a.Component),G=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement("h1",null,"Contact info"))}}]),t}(o.a.Component),H=n(59),P=n.n(H),Q=n(107),V=n(108);function U(){var e=Object(p.a)(["\n  .navbar {\n    background-color: #222;\n    height: 15%;\n  }\n\n  .navbar-brand,\n  .h6,\n  h6 {\n    color: #bbb;\n\n    &:hover {\n      color: white;\n    }\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  svg {\n    color: #32cd32;\n  }\n\n  }\n"]);return U=function(){return e},e}var _=v.a.div(U()),K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(_,null,o.a.createElement(Q.a,{variant:"dark",expand:"lg"},o.a.createElement(Q.a.Brand,null,o.a.createElement(V.a.Link,null,o.a.createElement(c.b,{to:"/"},o.a.createElement("h6",null,"Share Azc\xe1rraga")))),o.a.createElement(Q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(Q.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(V.a,{className:"ml-auto"},o.a.createElement(V.a.Item,null,o.a.createElement(V.a.Link,null,o.a.createElement(c.b,{to:"/about"},o.a.createElement("h6",null,"Get to know me")))),o.a.createElement(V.a.Item,null,o.a.createElement(V.a.Link,null,o.a.createElement(c.b,{to:"/projects"},o.a.createElement("h6",null,"See my work")))),o.a.createElement(V.a.Item,null,o.a.createElement(V.a.Link,null,o.a.createElement(c.b,{to:"/contact",className:"hoverable"},o.a.createElement("h6",null,"Currently available for hiring ",o.a.createElement(W.a,null)))))))))}}]),t}(o.a.Component);function X(){var e=Object(p.a)(["\n\n.reqCard {\n  margin-bottom: 2rem;\n  display: flex;\n  flex-direction: row;\n}\n\n.thumbnail {\n  max-width: 15rem;\n  height: auto;\n  -background-color: #f1f1f1\n  \n}\n\n.reqImage {\n  padding: 4rem;\n}\n\n.reqInfo {\n  padding-top: 8rem;\n  align-content: center;\n  justify-content: center;\n}\n\n@media only screen and (max-width:425px) {\n  .reqCard {\n    display: block;\n  }\n\n  .reqInfo {\n    padding-top: 0rem;\n    text-align: center;\n  }\n\n  .content {\n    width: 100%;\n  }\n\n  .thumbnail {\n    max-width: 100%;\n  }\n}\n\n"]);return X=function(){return e},e}var Y=v.a.div(X()),$=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={requirements:[]},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.database().ref().child("organa").on("value",function(t){var n=t.val(),a=[];for(var o in n)a.push({id:o,title:n[o].title,text:n[o].text,img:n[o].img});e.setState({requirements:a})})}},{key:"render",value:function(){return o.a.createElement(N.a,null,o.a.createElement(Y,null,o.a.createElement("div",{className:"requirements"},this.state.requirements.map(function(e){return o.a.createElement("div",{className:"reqCard"},o.a.createElement("div",{className:"content reqImage"},o.a.createElement("img",{src:e.img,className:"thumbnail",alt:""})),o.a.createElement("div",{className:"content reqInfo"},o.a.createElement("h2",null,e.title),o.a.createElement("p",null,e.text)))}))))}}]),t}(o.a.Component),Z=n(65),ee=n.n(Z),te=n(66),ne=n.n(te);function ae(){var e=Object(p.a)(["\n.title {\n  text-align: center;\n  color: white;\n  background-color: #222222;\n  min-height: 90vh;\n  padding-top: 10vh;\n  padding-bottom:10vh;\n\n  & h1 {\n    font-size: 10vh;\n  }\n\n  & p {\n    font-style: italic;\n    font-size: 15pt\n  }\n}\n\n.first {\n  padding: 10vh 0 10vh 0;\n}\n\n.mockup {\n  background: url(",") no-repeat;\n  background-size: contain;\n  height: 130vh;\n}\n\n.role {\n  padding: 10vh 0 10vh 0;\n}\n\n.assistance {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.requirements {\n  padding: 10vh 0 10vh 0;\n}\n\n.third {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.data {\n  padding: 10vh 0 10vh 0;\n}\n\n.qrCodes {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.fourth {\n  padding: 10vh 0 10vh 0;\n}\n\n.scanner {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n.dashboard {\n  padding: 10vh 0 10vh 0;\n}\n\n.fifth {\n  padding: 10vh 0 10vh 0;\n}\n\n.end {\n  padding: 10vh 0 10vh 0;\n  background-color: #f1f1f1;\n}\n\n@media only screen and (max-width:425px) {\n  .mockup {\n    background: url(",") no-repeat;\n    background-size: contain;\n}\n\n"]);return ae=function(){return e},e}var oe=v.a.div(ae(),ee.a,ne.a),re=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,null,o.a.createElement("div",{className:"title"},o.a.createElement(N.a,null,o.a.createElement("h1",null,"Organa: Talent Manager"),o.a.createElement("p",null,"In Laboratoria, our Personal Development Coordinator takes on the monumental task of overseeing that each student has the emotional and professional tools needed to thrive and become a front-end developer from scratch, the students often have complex life situations that need close follow-up and personalized solutions, on top of that she also has to take care of taking assistance each day - Her only tool? A spreadsheet.")," ",o.a.createElement("p",null,"She deserved better."))),o.a.createElement("div",{className:"mockup"}),o.a.createElement("div",{className:"first"},o.a.createElement(N.a,null,o.a.createElement("p",null,"Our client needed a tool to enhance and optimize their daily tasks. Sitting by the door to greet every student, input their name and side notes on a spreadsheet was, simply put, a waste of time."))),o.a.createElement("div",{className:"second"},o.a.createElement(N.a,null,"This project was comissioned as part of an Open House Event in Laboratoria. We had two days to develop our minimum viable product and pitch our project to some of the biggest tech companies in Guadalajara.")),o.a.createElement("div",{className:"role"},o.a.createElement(N.a,null,o.a.createElement("h3",null,"My role"),o.a.createElement("p",null,"I was part of the pitch team and responsible for the experience strategy. I designed the interface of the app and the high-fidelity prototype as well as developed the style of the app from the front-end and the development of the QR Code generator for this application."))),o.a.createElement("div",{className:"assistance"},o.a.createElement(N.a,null,o.a.createElement("h3",null,"Not just an assistance log"),o.a.createElement("p",null,"We developed this application with the premise that our client could just set up her laptop with the browser and use her time for other activities."),o.a.createElement("p",null,"By shifting the responsibility of taking assistance from our client to each student we could reduce the time consume by this task by 50%."))),o.a.createElement("div",{className:"requirements"},o.a.createElement($,null)),o.a.createElement("div",{className:"third"},o.a.createElement(N.a,null,o.a.createElement("h3",null,"Let's make this happen."),o.a.createElement("p",null,"First, we chose the technology. In 4 months we had learned to code in Vanilla Javascript but the last 3 weeks before this project came up we had been learning the bases of React JS so we faced our first important decision: Should we go Vanilla or ReactJS? Vanilla was the safest route and what we felt the most comfortable working with, we wouldn't have to spend extra time trying to figure out or work around a new technology that we had not yet fully mastered."),o.a.createElement("p",null,"On the other hand, we could probably use the practice with ReactJS and even though it would also come with its own learning curve and time wasn't something we could afford to lose in this project. We chose ReactJS because although it was a risky bet we believed that we could get the best results and learn the most from."))),o.a.createElement("div",{className:"data"},o.a.createElement(N.a,null,o.a.createElement("h3",null,"Data data data"),o.a.createElement("p",null,"The second decision came in, in order to be able to work with real data we were provided with two options: We could create our own JSON file and just copy-paste the information of each student or fetch the data remotely from an external server. The fastest route would be to create the JSON file but in the long run, this could cause maintainability issues and it would be impossible to escalate this project if the JSON became too large."),o.a.createElement("p",null,"So we fetched the data remotely."),o.a.createElement("p",null,"Our client preferred to use QR Codes to log the assistance of each student so we also needed to generate a code for each person but we noticed that just generating a code for each element of the provided database wouldn't be ideal because not everyone had the same values nor were they relevant for the purpose of our app and this would ultimately make the database too lengthy, also we noticed that we would have to narrow our results since the database included coaches and 4 students that were no longer part of the group."))),o.a.createElement("div",{className:"qrCodes"},o.a.createElement(N.a,null,"And we also had to learn how to work with QR Codes, which we had never done before so that had another learning curve on its own. So overall, we listed what we would need to prioritize in order to deliver our minimum viable product in 2 days without prior knowledge on this kind of technologies:",o.a.createElement("ul",null,o.a.createElement("li",null,"Generate a personal QR Code for each student"),o.a.createElement("li",null,"Compare the information in that code to the information from the database we were provided"),o.a.createElement("li",null,"Add and store each code to an array for the assistance of the day"),o.a.createElement("li",null,"Display the assistance/absence of the group on a dashboard")))),o.a.createElement("div",{className:"fourth"},o.a.createElement(N.a,null,"In our first iteration, we would need two main screens, the screen of the scanner and the dashboard with the summary so we used the library react-router-dom to add routes that would let us show this without fuss. We also wanted our app to be fully responsive so we used react-bootstrap due to its benefits in responsiveness and support from the community and the fact that the elements that we imported were already components compatible with React. In order to have better control of these components and give them the branding style of the client, we used styled-components which also allows us to enhance maintainability. Finally, we used the library moment to easily display the current date and have it self-update automatically")),o.a.createElement("div",{className:"scanner"},o.a.createElement(N.a,null,o.a.createElement("h3",null,"The scanner"),o.a.createElement("p",null,"We used a library react-qr-scanner that would allow us to access the device's webcam and get data from there, the data it would receive would be a code that we would have to generate. The flow was as followed: Once the qr scanner detected a code, we would need to store that code locally and then add the next code that was scanned and so on. Once we had an array of codes, we would need to send this to a database that we would then access to display on-screen how many people assisted. We chose Google Firebase Services to store our data for its documentation and easily accessible learning resources. But we came across our first bump in the road: We noticed that the scanner was always scanning something as long as it had access to the camera, so even though we were able to obtain the ID from our code, it was lost when the scanner updated and scanned again. In order to fix this, we stored the data received in the state and added each element received that then became an array of IDs that we could send to our firebase database in real-time."))),o.a.createElement("div",{className:"dashboard"},o.a.createElement(N.a,null,"Now for the dashboard. We took the original array and set it as a total for all the students. We removed the number of students that were no longer active and then the logic for the absences was: Once a code was scanned, it would be added to the database by its ID, we would take this total of ID's and compare it to the total of students minus the inactive students, the result would be the absent students. This was our minimum viable product for Organa in a day and a half. We presented this version to 20+ tech companies in Guadalajara in an Open House event.")),o.a.createElement("div",{className:"fifth"},o.a.createElement(N.a,null,"After this, we decided Organa had the potential to become a real tool for Laboratoria, so we set out to keep working and perfecting this product. In the next week, we planned a sprint and marked issues from the original code. We needed to be able to keep the app's state intact despite refreshing the page or changing tabs from the menu. We also set up a login screen to add security due to the personal information handled in this application. We also added an info icon in the scanner because we noticed that the users were having difficulties in the scan process. So we added a simple troubleshooting dialogue. We also had to change the ID's received for the corresponding student's name and a complete list of all the students so it would be easier for our client to work with this data.")),o.a.createElement("div",{className:"end"},o.a.createElement(N.a,null,"Overall, we worked one and a half weeks on this project and the final product is currently being used in Laboratoria. It's also open source so everyone can contribute after their code has been reviewed. Organa is our legacy to future Laboratoria generations and hopefully, we can inspire more students to take the lead and develop solutions for their every-day problems."))),o.a.createElement(R,null))}}]),t}(o.a.Component),le=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"MobileGame Project")}}]),t}(o.a.Component),ce=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"Tic-Tac-Toe Project")}}]),t}(o.a.Component),ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"MdLinks Project")}}]),t}(o.a.Component);n(102);var se=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(K,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:J}),o.a.createElement(i.a,{path:"/about",component:F}),o.a.createElement(i.a,{path:"/projects",component:z}),o.a.createElement(i.a,{path:"/contact",component:G}),o.a.createElement(i.a,{path:"/organa",component:re}),o.a.createElement(i.a,{path:"/mobile",component:le}),o.a.createElement(i.a,{path:"/tic-tac-toe",component:ce}),o.a.createElement(i.a,{path:"/markdown",component:ie}),o.a.createElement(i.a,{component:P.a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,n){e.exports=n.p+"static/media/DnD-Cropped.a7a97480.jpg"},58:function(e,t,n){e.exports=n.p+"static/media/self.1f512508.jpg"},59:function(e,t){},65:function(e,t,n){e.exports=n.p+"static/media/mockupOrgana.49c6c26a.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/mockupOrganaMob.76c04baf.png"},70:function(e,t,n){e.exports=n(103)},75:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.7d796f11.chunk.js.map