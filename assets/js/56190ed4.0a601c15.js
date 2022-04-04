"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[950],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return g}});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=c(t),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(m,r(r({ref:e},p),{},{components:t})):a.createElement(m,r({ref:e},p))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1051:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={sidebar_position:2},l="CSTA SignalR client API",c={unversionedId:"csta-api/csta-signalr-json",id:"csta-api/csta-signalr-json",title:"CSTA SignalR client API",description:"It's recommended to use the SignalR API for new development, if your programming language support SignalR.",source:"@site/docs/csta-api/csta-signalr-json.md",sourceDirName:"csta-api",slug:"/csta-api/csta-signalr-json",permalink:"/api-documentation/docs/csta-api/csta-signalr-json",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CSTA overview",permalink:"/api-documentation/docs/csta-api/csta-overview"},next:{title:"CSTA TCP client API",permalink:"/api-documentation/docs/csta-api/csta-tcp-xml-api"}},p={},u=[{value:"Clients",id:"clients",level:2},{value:"How to use",id:"how-to-use",level:2},{value:".NET sample client",id:"net-sample-client",level:2},{value:"Use Case",id:"use-case",level:3},{value:"TypeScript ES6 sample client",id:"typescript-es6-sample-client",level:2},{value:"Use Case",id:"use-case-1",level:3},{value:"Get access to uni-tel CSTA SignalR API",id:"get-access-to-uni-tel-csta-signalr-api",level:2}],d={toc:u};function g(n){var e=n.components,t=(0,i.Z)(n,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"csta-signalr-client-api"},"CSTA SignalR client API"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's recommended to use the SignalR API for new development, if your programming language support SignalR. "))),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("p",null,"SignalR is a modern two-way communication that support multiple transport technologies, ideally using WebSocket. A thorough guide can be found in Microsoft's own documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/signalr/"},"here"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Technology"),(0,o.kt)("th",{parentName:"tr",align:null},"Package"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},".NET"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.nuget.org/packages/Microsoft.AspNetCore.SignalR.Client"},"Microsoft.AspNetCore.SignalR.Client"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@microsoft/signalr"},"@microsoft/signalr"))))),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SignalR client support JSON requests, responses and events. They follow the CSTA format in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.ecma-international.org/wp-content/uploads/ECMA-323_6th_edition_december_2011.pdf"},"ECMA-323 CSTA Standard"),", but are supported in JSON instead of XML."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SignalR hub: Instantiate a client class and connect"),(0,o.kt)("li",{parentName:"ol"},"Authentication: Login using CSTA StartApplicationSession request"),(0,o.kt)("li",{parentName:"ol"},"Call other CSTA methods on the client to interact with your hosted pbx")),(0,o.kt)("h2",{id:"net-sample-client"},".NET sample client"),(0,o.kt)("p",null,"The C# sample client is written for .NET Core 6, but should be backwards compatible to older ASP.NET Core versions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.SignalR.Client;\nusing Microsoft.Extensions.Options;\nusing Unitel.Csta.Standard.Events;\nusing Unitel.Csta.Standard.Requests;\n\nnamespace Unitel.Csta.SignalR.TestClient\n{\n    public class SignalRClient\n    {\n        private readonly ILogger<SignalRClient> _logger;\n        private readonly string _uri;\n\n        private HubConnection _connection;\n\n        delegate void NotifyClientConnectionDelegate<T>(T message);\n        \n        public event NotifyClientConnectionDelegate<ConnectionClearedEvent> NotifyOnConnectionClearedEvent;\n        public event NotifyClientConnectionDelegate<DeliveredEvent> NotifyOnDeliveredEvent;\n        public event NotifyClientConnectionDelegate<EstablishedEvent> NotifyOnEstablishedEvent;\n\n        public event NotifyClientSignalRClosed NotifySignalRClosed;\n\n        public SignalRClient(ILogger<SignalRClient> logger)\n        {\n            _logger = logger;\n            _uri = "GATEWAY_API" + "/csta";\n            _connection = new HubConnectionBuilder().WithUrl(new Uri(_uri)).Build();\n        }\n\n        public async Task Start()\n        {\n            SetupSignalRConnectionEventListeners();\n            SetupCstaEventListeners();\n\n            try\n            {\n                _logger.LogDebug($"SignalR client connecting...");\n\n                if (_connection.State == HubConnectionState.Disconnected)\n                {\n                    await _connection.StartAsync();\n                }\n                else\n                {\n                    _logger.LogDebug($"SignalR client already connected.");\n                }\n            }\n            catch (Exception e)\n            {\n                _logger.LogError(e, $"Failed to start SignalR client, {e.Message}");\n                NotifySignalRClosed();\n                throw;\n            }\n        }\n\n        public async Task Stop()\n        {\n            try\n            {\n                _logger.LogDebug($"SignalR client shutting down...");\n                if (_connection != null)\n                {\n                    await _connection.StopAsync();\n                    await _connection.DisposeAsync();\n                    _connection = null;\n                }\n            }\n            catch (Exception e)\n            {\n                _logger.LogError(e, $"Failed to stop SignalR client, {e.Message}");\n                throw;\n            }\n        }\n\n        public async Task<StartApplicationSessionPosResponse> StartApplicationSession(StartApplicationSession request)\n        {\n            return await _connection.InvokeAsync<StartApplicationSessionPosResponse>("StartApplicationSession", request);\n        }\n        \n        public async Task<MonitorStartResponse> MonitorStart(MonitorStart request)\n        {\n            return await _connection.InvokeAsync<MonitorStartResponse>("MonitorStart", request);\n        }\n\n        public async Task<MakeCallResponse> MakeCall(MakeCall request)\n        {\n            return await _connection.InvokeAsync<MakeCallResponse>("MakeCall", request);\n        }\n\n        public async Task<ClearConnectionResponse> ClearConnection(ClearConnection request)\n        {\n            return await _connection.InvokeAsync<ClearConnectionResponse>("ClearConnection", request);\n        }\n\n        private void SetupCstaEventListeners()\n        {\n            _connection.On<ConnectionClearedEvent>("ConnectionCleared", (message) =>\n            {\n                NotifyOnConnectionClearedEvent(message);\n                _logger.LogDebug($"ConnectionClearedEvent");\n            });\n\n            _connection.On<DeliveredEvent>("Delivered", (message) =>\n            {\n                NotifyOnDeliveredEvent(message);\n                _logger.LogDebug($"DeliveredEvent");\n            });\n\n            _connection.On<EstablishedEvent>("Established", (message) =>\n            {\n                NotifyOnEstablishedEvent(message);\n                _logger.LogDebug($"EstablishedEvent");\n            });\n        }\n\n        private void SetupSignalRConnectionEventListeners()\n        {\n            _connection.Closed += error =>\n            {\n                _logger.LogInformation("SignalR Client connection closed.");\n\n                NotifySignalRClosed();\n\n                return Task.CompletedTask;\n            };\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"use-case"},"Use Case"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'class Test \n{\n\n  public void ExecuteTest() \n  {\n    var client = new CstaClient();\n    client.NotifySignalRClosed += () => { _logger.LogInformation("Connection closed"); };\n    client.NotifyOnEvent += (e) => { _logger.LogInformation("Event received"); };\n\n    await client.Start();\n\n    await client.StartApplicationSession(CreateStartApplicationSessionRequest());\n    await client.MakeCall(CreateMakeCallRequest("222", "333"))\n  }\n\n  private StartApplicationSessionRequest CreateStartApplicationSessionRequest()\n  {\n      return new StartApplicationSessionRequest\n      {\n          ApplicationInfo = new ApplicationInfo\n          {\n              ApplicationSpecificInfo = new ApplicationSpecificInfo\n              {\n                  UserId = "username",\n                  Password = "password",\n                  PbxDomain = "pbxDomain"\n              }\n          }\n      };\n  }\n\n  private MakeCallRequest CreateMakeCallRequest(string callerId, string calleeId)\n  {\n      return new MakeCallRequest\n      {\n          CallingDevice = callerId,\n          CalledDirectoryNumber = calleeId,\n          PrivateData = new RequestResponsePrivateData\n          {\n              RequestId = Guid.NewGuid().ToString(),\n          }\n      };\n  }\n}\n\n\n')),(0,o.kt)("h2",{id:"typescript-es6-sample-client"},"TypeScript ES6 sample client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class CstaClient {\n  connection!: HubConnection;\n\n  async connect(): Promise<void> {\n    this.connection = new HubConnectionBuilder().withUrl(GATEWAY_API).build();\n    await this.connection.start();\n    console.log("Connected to csta gateway");\n  }\n\n  async disconnect(): Promise<void> {\n    await this.connection.stop();\n  }\n\n  async startApplicationSession(username: string, password: string, pbxDomain: string) {\n    const response = await this.connection.invoke("StartApplicationSession", {\n      applicationInfo: {\n        applicationSpecificInfo: {\n          "vendorData:userID": username,\n          "vendorData:password": password,\n          "vendorData:pbxDomain": pbxDomain,\n        },\n      },\n      requestedSessionDuration: 120,\n    });\n    console.log(response);\n  }\n\n  async monitorStart(trunkId: string, deviceId: string): Promise<void> {\n    const response = await this.connection.invoke("MonitorStart", {\n      monitorObject: { deviceObject: "u-" + trunkId + "-" + deviceId },\n    });\n    console.log("MonitorStart response", response);\n  }\n\n  async makeCall(callingDevice: string, calledDirectoryNumber: string): Promise<void> {\n    const response = await this.connection.invoke("MakeCall", {\n      callingDevice: callingDevice,\n      calledDirectoryNumber: calledDirectoryNumber,\n    });\n    console.log("MakeCall Response", response);\n  }\n\n  async clearConnection(callId: string): Promise<void> {\n    const response = await this.connection.invoke("ClearConnection", {\n        connectionToBeCleared: {\n          callId: callId,\n        },\n        privateData: {\n          requestId: "request-clearconnection-" + callId,\n        },\n      });\n\n    console.log("ClearConnection Response", response);\n  }\n\n  subscribeToEvents(): void {\n    this.connection.on("Delivered", (e: DeliveredEvent) => {\n      console.log("Delivered", e);\n    });\n\n    this.connection.on("Established", (e: EstablishedEvent) => {\n      console.log("Established", e);\n    });\n\n    this.connection.on("ConnectionCleared", (e: ConnectionClearedEvent) => {\n      console.log("ConnectionCleared", e);\n    });\n  }\n}\n\nexport default new CstaClient();\n')),(0,o.kt)("h3",{id:"use-case-1"},"Use Case"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const client = new CstaClient();\nawait client.connect();\nawait client.startApplicationSession("username", "password", "pbxDomain");\nawait client.makeCall("22334455", "333");\n')),(0,o.kt)("h2",{id:"get-access-to-uni-tel-csta-signalr-api"},"Get access to uni-tel CSTA SignalR API"),(0,o.kt)("p",null,"If you want to know more, feel free to contact us ",(0,o.kt)("a",{parentName:"p",href:"https://uni-tel.dk/kontakt-uni-tel/"},"here"),". The contact form is in Danish only, but inquiries in English are most welcome."))}g.isMDXComponent=!0}}]);