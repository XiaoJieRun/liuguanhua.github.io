webpackJsonp([4,6],{308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"UserLogin",function(){return u}),n.d(t,"NotLogin",function(){return l}),n.d(t,"DetectLogin",function(){return p}),n.d(t,"LoadLoop",function(){return m}),n.d(t,"LoadFail",function(){return f}),n.d(t,"NotResult",function(){return h});var i=n(31),s=n(70),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(t){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={btnval:"\u767b\u5f55"},t.loginSubmit=t.loginSubmit.bind(t),t}return a(n,t),c(n,[{key:"enterSumit",value:function(e){Object.is(e.keyCode,13)&&this.loginSubmit()}},{key:"loginSubmit",value:function(){var e=this,t=this.refs.userToken.value;if(!t)return this.$showMsg("\u4eb2,token\u4e0d\u80fd\u4e3a\u7a7a!");this.setState({btnval:"\u767b\u5f55\u4e2d..."}),this.$request({method:"post",url:"accesstoken",data:{accesstoken:t},success:function(n){n.success?(e.$showMsg("\u767b\u5f55\u6210\u529f!"),n.accesstoken=t,Object(s.b)("saveUser",n),e.props.history.push({pathname:"/user",search:"?name="+n.loginname})):(e.$showMsg("\u767b\u5f55\u5931\u8d25!"),e.setState({btnval:"\u767b\u5f55"}))},error:function(){e.$showMsg("\u767b\u5f55\u5931\u8d25!"),e.setState({btnval:"\u767b\u5f55"})}})}},{key:"render",value:function(){return e.createElement("div",{className:"user-login-form"},e.createElement("div",{className:"ipt-row"},e.createElement("input",{ref:"userToken",className:"bd-radius bd-none pdl",type:"text",name:"user-token",onKeyDown:this.enterSumit.bind(this),placeholder:"Access Token"})),e.createElement("div",{className:"ipt-row"},e.createElement("input",{className:"bd-radius bg-color ft-white bd-none",type:"submit",value:this.state.btnval,onClick:this.loginSubmit,name:"btn-submit"})))}}]),n}(e.Component),l=function(t){return e.createElement("div",{className:"not-login-wrap tc"},t.isLogo&&e.createElement("img",{className:"not-login-photo",src:n(319),alt:""}),e.createElement("h2",{"data-layout-align":"center center","data-layout":"layout"},"\u8fd8\u672a\u767b\u5f55\uff0c\u73b0\u5728\u5c31\u53bb",e.createElement(i.b,{className:"ft-color",to:"/user/login"},"\u767b\u5f55")))};l.defaultProps={isLogo:!0};var p=function(t){return function(n){function i(e){return r(this,i),o(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e))}return a(i,n),c(i,[{key:"render",value:function(){return this.$userExp()?e.createElement(t.realuser,this.props):e.createElement(l,null)}}]),i}(e.Component)},m=function(){return e.createElement("div",{className:"tc pdtb"},"\u73a9\u547d\u52a0\u8f7d\u4e2d...")},f=function(){return e.createElement("div",{className:"tc pdtb"},"\u52a0\u8f7d\u5931\u8d25!")},h=function(t){return e.createElement("div",{className:"tc pdtb"},t.text)};h.defaultProps={text:"\u6682\u65e0\u6570\u636e!"}}.call(t,n(0))},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(308),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(t){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e)),a=t.$userExp();t.state={title:"",content:"",tab:"dev",accesstoken:a&&a.accesstoken,arrRadio:[{type:"ask",name:"\u95ee\u7b54",isChecked:!0},{type:"share",name:"\u5206\u4eab",isChecked:!1},{type:"job",name:"\u62db\u8058",isChecked:!1},{type:"dev",name:"\u6d4b\u8bd5",isChecked:!1}]};var i=t.state;return t.themeTitle=function(e){i.title=e.target.value},t.themeContent=function(e){i.content=e.target.value},t.issueSubmit=function(){if(i.title.length<10)return t.$showMsg("\u4eb2,\u8bf7\u8f93\u516510\u5b57\u4ee5\u4e0a!");if(!i.content)return t.$showMsg("\u4eb2,\u8bf7\u8f93\u5165\u5185\u5bb9!");var e=i.accesstoken,n=i.title,r=i.tab,o=i.content;t.$request({method:"post",url:"topics",data:{accesstoken:e,title:n,tab:r,content:o},success:function(e){e.success?(t.$showMsg("\u53d1\u8868\u6210\u529f!"),t.props.history.push({pathname:"/index/article-details",search:"?id="+e.topic_id})):t.$showMsg("\u53d1\u8868\u5931\u8d25!")},error:function(){t.$showMsg("\u53d1\u8868\u5931\u8d25!")}})},t}return a(n,t),s(n,[{key:"selectThemeCate",value:function(e,t){var n=this.state.arrRadio;n[e].isChecked||(n.map(function(t,n){t.isChecked=!!Object.is(e,n)}),this.setState({tab:n[e].type,arrRadio:n},function(){}))}},{key:"render",value:function(){return e.createElement("div",{className:"issue-content-wrap"},e.createElement("div",{className:"ipt-row"},e.createElement("input",{type:"text",name:"theme-title",placeholder:"\u7ed9\u6807\u9898\u53d6\u4e2a\u540d!",onInput:this.themeTitle,className:"bd-none w100 pd"})),e.createElement("div",{className:"ipt-row"},e.createElement("textarea",{onInput:this.themeContent,placeholder:"\u8bf4\u70b9\u4ec0\u4e48\u5427...",name:"theme-cnt",className:"bd-none w100 pd"})),e.createElement(u,{arrRadio:this.state.arrRadio,selectThemeCate:this.selectThemeCate.bind(this),themeType:this.themeType,issueSubmit:this.issueSubmit}))}}]),n}(e.Component),u=function(t){function n(e){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return a(n,t),s(n,[{key:"render",value:function(){var t=this;return e.createElement("div",null,e.createElement("div",{className:"ipt-row pd","data-layout-align":"space-between center","data-layout":"layout"},"\u9009\u62e9\u7c7b\u522b"," ",this.props.arrRadio.map(function(n,r){return e.createElement("div",{key:r,className:"radio-wrap"+(n.isChecked?" select-radio-active":""),"data-layout-align":"space-between center","data-layout":"layout"},e.createElement("span",{className:"ilbk"},e.createElement("input",{type:"radio",defaultChecked:n.isChecked,name:"theme-cate wh100",onClick:t.props.selectThemeCate.bind(t,r),id:n.type})),e.createElement("label",{htmlFor:n.type},n.name))})),e.createElement("div",{className:"ipt-row tc plw theme-issue-submit"},e.createElement("input",{className:"bd-radius bg-color ft-white bd-none w100 public-button",type:"submit",onClick:this.props.issueSubmit,name:"btn-submit"})))}}]),n}(e.Component);t.default=Object(i.DetectLogin)({realuser:c})}.call(t,n(0))},319:function(e,t,n){e.exports=n.p+"static/media/logo.3bd6cd42.png"}});
//# sourceMappingURL=4.007cccb1.chunk.js.map