"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[222],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(v,s(s({ref:t},p),{},{components:n})):a.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:2},c="CSTA TCP client API",l={unversionedId:"csta-api/csta-tcp-xml-api",id:"csta-api/csta-tcp-xml-api",title:"CSTA TCP client API",description:"This API uses XML over TCP like a classic physical telephony server. The client can be written in any",source:"@site/docs/csta-api/csta-tcp-xml-api.md",sourceDirName:"csta-api",slug:"/csta-api/csta-tcp-xml-api",permalink:"/api-documentation/docs/csta-api/csta-tcp-xml-api",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CSTA overview",permalink:"/api-documentation/docs/csta-api/csta-overview"},next:{title:"CSTA SignalR client API",permalink:"/api-documentation/docs/csta-api/csta-signalr-json"}},p=[{value:"How to use",id:"how-to-use",children:[],level:2},{value:"Use case",id:"use-case",children:[],level:2},{value:"uni-tel CSTA TCP Server",id:"uni-tel-csta-tcp-server",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"csta-tcp-client-api"},"CSTA TCP client API"),(0,i.kt)("p",null,"This API uses XML over TCP like a classic physical telephony server. The client can be written in any\nprogramming language that supports creating a TCP socket."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The TCP client support XML requests/responses/events documents."))),(0,i.kt)("p",null,"To use this API open a TCP socket. Then send CSTA request by sending the XML (as a string) to the socket.\nCSTA request responses and CSTA events are received as strings from the TCP socket. You need to split up\nthe received text into XML document strings and then deserialized into a typed object if needed."),(0,i.kt)("h2",{id:"use-case"},"Use case"),(0,i.kt)("p",null,"This example connects to the CSTA server and then sends a MakeCall request. Local number 200 calls 69102201."),(0,i.kt)("p",null,"Send TCP string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="StartApplicationSession request"',title:'"StartApplicationSession','request"':!0},'<?xml version="1.0" encoding="utf-16"?>\n<StartApplicationSession>\n  <applicationInfo>\n    <applicationSpecificInfo>\n      <vendorData:userID>bill@uni-tel.dk</vendorData:userID>\n        <vendorData:password>*******<vendorData:password>\n        <vendorData:pbxDomain>69102201.pbx.one-connect.dk</vendorData:pbxDomain>\n      </applicationSpecificInfo>\n    </applicationInfo>\n  <requestedSessionDuration>120</requestedSessionDuration>\n</StartApplicationSession>\n')),(0,i.kt)("p",null,"Wait for a response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="StartApplicationSession response"',title:'"StartApplicationSession','response"':!0},'<StartApplicationSessionPosResponse xmlns="http://www.ecma.ch/standards/ecma-323/csta/ed6">\n  <sessionID>HotFShcrHZWUfc6tMIjD0A</sessionID>\n  <actualProtocolVersion>http://www.ecma.ch/standards/ecma-323/csta/ed6</actualProtocolVersion>\n  <actualSessionDuration>120</actualSessionDuration>\n</StartApplicationSessionPosResponse>\n')),(0,i.kt)("p",null,"Send TCP string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="MakeCall request"',title:'"MakeCall','request"':!0},"<MakeCall>\n  <callingDevice>200</callingDevice>\n  <calledDirectoryNumber>69102201</calledDirectoryNumber>\n  <autoOriginate>doNotPrompt</autoOriginate>\n  <privateData>\n    <requestID>155-a04dbfd1-ec67-4637-93b8-8248f13fe691</requestID>\n  </privateData>\n</MakeCall>\n")),(0,i.kt)("p",null,"Wait for a response like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="MakeCall response"',title:'"MakeCall','response"':!0},'<MakeCallResponse xmlns="http://www.ecma.ch/standards/ecma-323/csta/ed6">\n  <privateData>\n    <requestID>155-a04dbfd1-ec67-4637-93b8-8248f13fe691</requestID>\n  </privateData>\n  <callingDevice>\n    <callID>N/A</callID>\n    <deviceID>200</deviceID>\n  </callingDevice>\n  <callLinkageData>\n    <globalCallData>\n      <globalCallLinkageId>N/A</globalCallLinkageId>\n    </globalCallData>\n  </callLinkageData>\n</MakeCallResponse>\n\n')),(0,i.kt)("h2",{id:"uni-tel-csta-tcp-server"},"uni-tel CSTA TCP Server"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Contact uni-tel"))))}d.isMDXComponent=!0}}]);