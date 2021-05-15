(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"id":"101","selectedCount":0,"name":"The Barefoot Investor","author":"Scott Pape","rate":"4.63","voters":"822","people":["Carolina Peters","John Doe","Maria Smith","Leo Wolf","Samantha William","Peter Brown"],"image":"1.jpg"},{"id":"102","selectedCount":0,"name":"Start with Why","author":"Simon Sinek","rate":"4.06","voters":"31,736","people":["Carolina Peters","Samantha William","Peter Brown"],"image":"2.jpg"},{"id":"103","selectedCount":0,"name":"The Intelligent Investor","author":"Benjamin Graham","rate":"4.26","voters":"28,584","people":["John Doe","Maria Smith","Leo Wolf","Peter Brown"],"image":"3.jpg"},{"id":"104","selectedCount":0,"name":"Shoe Dog: A memoir by the Creator of Nike","author":"Phil Knight","rate":"4.44","voters":"18,916","people":["Carolina Peters","John Doe","Maria Smith"],"image":"4.jpg"},{"id":"105","selectedCount":0,"name":"How to Win Friends and Influence People","author":"Dale Carnegie","rate":"4.13","voters":"297,843","people":["Carolina Peters","John Doe","Maria Smith","Samantha William","Peter Brown"],"image":"5.jpg"},{"id":"106","selectedCount":0,"name":"Playing to Win: How Strategy Really Works","author":"A.G. Lafley, Roger L. Martin","rate":"3.96","voters":"1,930","people":[],"image":"6.jpg"},{"id":"107","selectedCount":0,"name":"Astrophysics for People in a Hurry","author":"Neil Degrasse Tyson","rate":"4.21","voters":"994","people":["John Doe","Leo Wolf","Peter Brown"],"image":"7.jpg"},{"id":"108","selectedCount":0,"name":"Sapiens: A Brief History of Humankind","author":"Yuval Noah Harari","rate":"4.39","voters":"55,876","people":["Carolina Peters","Peter Brown"],"image":"8.jpg"},{"id":"109","selectedCount":0,"name":"A Brief History Of Time: From Big Bang To Black Holes","author":"Stephen Hawking","rate":"4.11","voters":"170,752","people":["Peter Brown"],"image":"9.jpg"},{"id":"110","selectedCount":0,"name":"The Gene: An Intimate History","author":"Siddhartha Mukherjee","rate":"4.35","voters":"7,609","people":["Carolina Peters","Maria Smith","Samantha William","Peter Brown"],"image":"10.jpg"},{"id":"111","selectedCount":0,"name":"It Ends With Us","author":"Colleen Hoover","rate":"4.45","voters":"81,535","people":["Carolina Peters","Samantha William"],"image":"11.jpg"},{"id":"112","selectedCount":0,"name":"A Horse Walks into a Bar","author":"David Grossman , Translated by  Jessica Cohen","rate":"3.56","voters":"724","people":["Carolina Peters","John Doe","Maria Smith","Leo Wolf","Samantha William","Peter Brown"],"image":"12.jpg"},{"id":"113","selectedCount":0,"name":"Nineteen Eighty-Four","author":"George Orwell","rate":"4.13","voters":"1,943,955","people":["Carolina Peters","John Doe","Leo Wolf","Samantha William","Peter Brown"],"image":"13.jpg"}]')},44:function(e,t,a){},45:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(22),i=a.n(r),s=(a(44),a(45),a(15)),c=a(16),l=a(18),d=a(17),j=a(57),h=a(58),u=a(59),p=a(1),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsx)(j.a,{style:{color:"white",backgroundColor:"#172b4d",padding:"15px",fontFamily:"Arial",textAlign:"center"},expand:"lg",children:Object(p.jsx)(h.a,{children:Object(p.jsx)(u.a,{children:"Online Book Store"})})})}}]),a}(o.Component),m=a(20),O=a(25),f=a(35),x=a(24),g=a(30),v=a(21),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).incrementCount=function(e){var t=Object(f.a)(o.state.books),a=Object(m.a)({},t[e]);a.selectedCount+=1,t[e]=a,o.setState({books:t})},o.sendBooks=function(){o.props.sendData(o.state.books.filter((function(e){return e.selectedCount>0})))},o.incrementCount=function(e){var t=Object(f.a)(o.state.books),a=Object(m.a)({},t[e]);a.selectedCount+=1,t[e]=a,o.setState({books:t})},o.state={books:g},o}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t={borderRadius:"5px",padding:"8px"},a={fontWeight:"bold",width:"250px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},o={width:"250px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{style:{padding:"20px  20px 0 20px",fontSize:"18px",fontWeight:"bold"},children:[Object(p.jsx)("div",{style:{display:"inline-block"},children:" Books "}),Object(p.jsx)("div",{style:{float:"right",display:"inline-block"},children:Object(p.jsx)(v.b,{to:"/cart",className:"btn-primary",onClick:this.sendBooks,children:"Add to Cart"})})]}),Object(p.jsx)("div",{className:"row",style:{padding:"20px 20px"},children:this.state.books.map((function(n,r){return Object(p.jsx)("div",{className:"col-md-3",style:t,children:Object(p.jsxs)(x.a,{style:{padding:"8px"},children:[Object(p.jsxs)(x.a.Title,{style:a,title:n.name,children:[" ",n.name]}),Object(p.jsxs)(x.a.Body,{children:[Object(p.jsx)(x.a.Text,{style:o,title:n.author,children:n.author}),Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:"images/minus.svg",width:"15px",style:{cursor:"pointer"},onClick:function(){e.decrementCount(r)}}),Object(p.jsxs)("span",{style:{padding:" 0 10px"},children:[" ",n.selectedCount]}),Object(p.jsx)("img",{src:"images/plus.svg",width:"15px",style:{cursor:"pointer"},onClick:function(){e.incrementCount(r)}})]})]})]})},n.id)}))})]})}}]),a}(o.Component),y=a(11),k=a(26),B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).customerId="admin_123",console.log("ss",o.state),o}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"form-container",children:Object(p.jsxs)(y.a,{children:[Object(p.jsx)("div",{className:"fields-container",children:this.props.selectedBooks.map((function(t,a){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{style:{textAlign:"center",fontWeight:"bolder"},children:[" Book ",a+1]}),Object(p.jsxs)(y.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(y.a.Label,{style:{fontWeight:"bolder"},children:"Book Id"}),Object(p.jsx)(y.a.Control,{type:"input",placeholder:"Enter Book Id",defaultValue:t.id})]}),Object(p.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(y.a.Label,{style:{fontWeight:"bolder"},children:"Customer Id"}),Object(p.jsx)(y.a.Control,{type:"input",placeholder:"Enter Customer Id",defaultValue:e.customerId})]}),Object(p.jsxs)(y.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(y.a.Label,{style:{fontWeight:"bolder"},children:"Quantity"}),Object(p.jsx)(y.a.Control,{type:"input",placeholder:"Enter Quantity",defaultValue:t.selectedCount})]})]},"form-".concat(t.id))}))}),Object(p.jsxs)(y.a.Group,{controlId:"formBasicCheckbox",children:[Object(p.jsx)("div",{style:{fontWeight:"bolder"},children:"Payment Mode"}),Object(p.jsxs)(k.a,{sm:10,children:[Object(p.jsx)(y.a.Check,{type:"radio",label:"Google Pay",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),Object(p.jsx)(y.a.Check,{type:"radio",label:"Debit Card",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),Object(p.jsx)(y.a.Check,{type:"radio",label:"Credit Card",name:"formHorizontalRadios",id:"formHorizontalRadios3"})]})]}),Object(p.jsx)(v.b,{to:"/order-success",className:"btn-primary",children:"Place Order"})]})}),Object(p.jsx)("div",{})]})}}]),a}(o.Component),w=a(34),S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(w.a,{variant:"success",children:[Object(p.jsx)(w.a.Heading,{children:"Thank You !!!!"}),Object(p.jsx)("p",{children:"Your order has been placed successfully !!!"})]})})}}]),a}(o.Component),P=a(8),W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).getData=o.getData.bind(Object(O.a)(o)),o.state={selectedBooks:[]},o}return Object(c.a)(a,[{key:"getData",value:function(e){console.log("eeeff",e),this.setState({selectedBooks:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsxs)(P.c,{children:[Object(p.jsx)(P.a,{exact:!0,path:"/",render:function(t){return Object(p.jsx)(C,Object(m.a)(Object(m.a)({},t),{},{sendData:e.getData}))}}),Object(p.jsx)(P.a,{path:"/cart",render:function(t){return Object(p.jsx)(B,Object(m.a)(Object(m.a)({},t),{},{selectedBooks:e.state.selectedBooks}))}}),Object(p.jsx)(P.a,{path:"/order-success",component:S})]})})}}]),a}(o.Component);var D=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(b,{}),Object(p.jsx)(W,{})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),o(e),n(e),r(e),i(e)}))};a(53);i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v.a,{children:Object(p.jsx)(D,{})})}),document.getElementById("root")),H()}},[[54,1,2]]]);
//# sourceMappingURL=main.70708104.chunk.js.map