webpackJsonp([0],[,,,,,,,,,function(t,e,a){a(45);var s=a(1)(a(34),a(58),"data-v-da1b6886",null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(38),a(59),null,null);t.exports=s.exports},function(t,e,a){"use strict";var s=a(3),o=a(61),i=a(48),r=a.n(i),n=a(49),l=a.n(n),c=a(51),u=a.n(c),d=a(52),v=a.n(d),p=a(9),m=a.n(p),f=a(10),h=a.n(f);s.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Hello",component:r.a},{path:"/login",name:"Login",component:l.a},{path:"/register",name:"Register",component:u.a},{path:"/vaults/:id",name:"Vault",component:v.a},{path:"/keeps/",name:"Keep",component:m.a},{path:"/selectvault/",name:"SelectVault",component:h.a},{path:"/selectvault/:id",name:"SelectVault",component:h.a}]})},function(t,e,a){"use strict";var s=a(14),o=a.n(s),i=o.a.create({baseURL:"http://localhost:3000/api/",timeout:2e3,withCredentials:!0}),r={activeKeep:{},activeVault:{},vault:[],user:{},myVaults:{},myKeeps:{},keeps:[],error:{}},n=function(t){r.error=t};e.a={state:r,actions:{logout:function(){i.delete("logout").then(function(t){r.user={},Materialize.toast(t.data.message,2e3)}).catch(n)},register:function(t,e,a){i.post("register",{email:t,name:e,password:a}).then(function(t){r.user=t.data.data}).catch(n)},login:function(t,e){var a=this;i.post("login",{email:t,password:e}).then(function(t){console.log(t.data),t.data.data?(r.user=t.data.data,a.getUserVaults(),a.getShareKeeps()):(r.error=t.data.error,Materialize.toast(t.data.error,1e3))}).catch(n)},getVaults:function(){i("vaults").then(function(t){r.vaults=t.data.data}).catch(n)},getVault:function(t){var e=this;i("vaults/"+t).then(function(a){r.activeVault=a.data.data,e.getKeeps(t)}).catch(n)},getUserVaults:function(){i("uservaults").then(function(t){r.myVaults=t.data.data,console.log("my vaults"),console.log(t.data.data)}).catch(n)},getKeeps:function(t){i("vaults/"+t+"/keeps").then(function(t){console.log(t.data.data),r.activeVault.keeps=t.data.data.keeps})},getUserKeeps:function(){i("userkeeps").then(function(t){console.log("the user keeps",t.data.data),r.myKeeps=t.data.data}).catch(n)},getPublicKeeps:function(){i("publickeeps").then(function(t){r.keeps=t.data.data}).catch(n)},createVault:function(t){var e=this;i.post("vaults",t).then(function(t){e.getUserVaults()}).catch(n)},setActiveVault:function(t){i("vaults/"+t).then(function(t){r.activeVault=t.data.data}).catch(n)},removeVault:function(t){var e=this;i.delete("vaults/"+t._id).then(function(t){e.getUserVaults()}).catch(n)},createKeep:function(t){i.post("keeps",t).then(function(e){console.log(t)}).catch(n)},removeKeep:function(t){i.delete("keeps/"+t._id).then(function(t){}).catch(n)},removeKeepFromVault:function(t,e){var a=this;console.log("Helloo!!!"),i.put("vault/"+t+"/removekeep",e).then(function(e){a.setActiveVault(t)}).catch(n)},addKeepToVault:function(t,e){console.log("before api"),console.log(e),i.put("keeptonewvault/"+t,e).then(function(t){console.log("at index add keep to vault")})}}}},function(t,e,a){a(41);var s=a(1)(a(32),a(53),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(50),o=a.n(s);e.default={name:"app",components:{Navbar:o.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(10),o=a.n(s);e.default={name:"hello",components:{selectvault:o.a},data:function(){return{vaultName:"",vaultDesc:"",showVaultForm:!1,showKeepToVaultForm:!0,vaultId:[],keepName:"",keepDesc:"",keepUrl:"",keepTags:"",keepPublic:"",showKeepForm:!1}},mounted:function(){this.$root.$data.store.actions.getPublicKeeps(),this.$root.$data.store.actions.getUserKeeps()},computed:{uservaults:function(t){return this.$root.$data.store.state.myVaults},sharedKeeps:function(){return this.$root.$data.store.state.keeps}},methods:{getVault:function(t){console.log(t),this.$root.$data.store.actions.getKeeps(t)},deleteVault:function(t){this.$root.$data.store.actions.removeVault(t)},addVault:function(){console.log("in addvault function"),this.$root.$data.store.actions.createVault({name:this.vaultName,description:this.vaultDesc}),console.log(this.vaultName),console.log(this.uservaults),this.showVaultForm=!1,this.vaultName="",this.vaultDesc=""},addKeep:function(){var t=document.getElementById("public-check-box").checked;this.$root.$data.store.actions.createKeep({title:this.keepName,articleLink:this.keepDesc,imageUrl:this.keepUrl,public:t,tags:this.keepTags},this.$route.params.id),Materialize.toast("Saved a keep!",1e3),this.showKeepForm=!1,this.keepName="",this.keepDesc="",this.keepUrl="",this.keepPublic="",this.keepTags="",this.$router.push("/")},triggerVaultForm:function(){this.showVaultForm=!this.showVaultForm},triggerKeepForm:function(){this.showVaultForm=!1,this.showKeepForm=!this.showKeepForm},resetKeepForm:function(){this.showVaultForm=!1,this.showKeepForm=!1},showKeepToVault:function(t){this.$root.$data.store.state.user._id?(this.$root.$data.store.state.activeKeep=t,console.log("passed user test"),this.$router.push({path:"/selectvault/"})):(this.$router.push({path:"/register"}),Materialize.toast("You must have an account to view and save keeps!",1e3))},saveKeepToVault:function(){},routeHome:function(){console.log("route home function"),this.showKeepToVault()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"keeps",props:["keep"],data:function(){return{}},methods:{}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{email:"",password:"",showPass:!1}},methods:{loginUser:function(){this.$root.$data.store.actions.login(this.email,this.password),this.email="",this.password="",this.$router.push({path:"/"})},toggleShowPass:function(){this.showPass=!this.showPass}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nav",computed:{user:function(){return this.$root.$data.store.state.user}},methods:{logout:function(){this.$root.$data.store.actions.logout(),this.$router.push({path:"/"})}}},$(document).ready(function(){$(".button-collapse").sideNav()})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"register",data:function(){return{name:"",email:"",password:"",confirmPassword:"",showPass:!1}},methods:{registerUser:function(){this.password==this.confirmPassword?(this.$root.$data.store.actions.register(this.email,this.name,this.password),this.email="",this.password="",this.name="",this.confirmPassword="",this.$router.push({path:"/"})):(this.password="",this.confirmPassword="",Materialize.toast("Your passwords don't match.",2e3))},toggleShowPass:function(){this.showPass=!this.showPass}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"selectvault",props:["sharedKeep"],data:function(){return{vaultName:"",activeKeepId:"",userVaultId:""}},computed:{uservaults:function(){return this.$root.$data.store.state.myVaults},activeKeep:function(){return this.$root.$data.store.state.activeKeep},activeUserId:function(){return this.$root.$data.store.state.user._id}},methods:{routeHome:function(){this.$router.push("/")},addToVault:function(t,e){console.log(t),console.log(e),this.$root.$data.store.actions.addKeepToVault(t,e),Materialize.toast("keep added to vault",5e3)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(9),o=a.n(s);e.default={name:"vault",components:{Keep:o.a},data:function(){return{vault:[],keep:{},myKeeps:{},showKeepForm:!1,url:"",tags:"",public:!0,showmodal:!0}},mounted:function(){this.$root.$data.store.actions.setActiveVault(this.$route.params.id),this.$root.$data.store.actions.getKeeps(this.$route.params.id)},computed:{activeVault:function(){return this.$root.$data.store.state.activeVault},myKeeps:function(){return this.$root.$data.store.state.activeKeeps}},methods:{getVault:function(t){console.log("get vault by vaultId"),console.log(t)},removeKeep:function(t){console.log(this.activeVault._id),console.log(t),this.$root.$data.store.actions.removeKeepFromVault(this.activeVault._id,t)},routeHome:function(){this.showmodal=!1,this.$router.push("/")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),o=a(13),i=a.n(o),r=a(11),n=a(12);s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,data:function(){return{store:n.a}},template:"<App/>",components:{App:i.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,a){t.exports=a.p+"static/img/logo.acba0ca.jpg"},function(t,e,a){a(44);var s=a(1)(a(33),a(57),"data-v-7d755e4a",null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(35),a(56),null,null);t.exports=s.exports},function(t,e,a){a(42);var s=a(1)(a(36),a(54),null,null);t.exports=s.exports},function(t,e,a){var s=a(1)(a(37),a(60),null,null);t.exports=s.exports},function(t,e,a){a(43);var s=a(1)(a(39),a(55),"data-v-53e570ac",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"blue darken-4",attrs:{role:"navigation"}},[a("div",{staticClass:"nav-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.user._id?t._e():a("ul",{staticClass:"right hide-on-med-and-down"},[a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1)]),t._v(" "),t.user._id?a("ul",{staticClass:"right hide-on-med-and-down"},[a("li",[t._v("\n                    Welcome, "+t._s(t.user.name)+"!\n                ")]),t._v(" "),a("li",[a("a",{on:{click:t.logout}},[t._v("Logout")])])]):t._e(),t._v(" "),a("ul",{staticClass:"side-nav",attrs:{id:"mobile-demo"}},[a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"brand-logo center",attrs:{id:"logo-container",href:"#"}},[s("img",{staticStyle:{height:"60px","vertical-align":"center","margin-top":"-7px"},attrs:{src:a(47)}}),t._v(" The Ugly Keepr App! ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button-collapse",attrs:{href:"#","data-activates":"mobile-demo"}},[a("i",{staticClass:"fa fa-bars"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(" Vault Name ")]),t._v(" "),a("h3",[t._v(t._s(t.activeVault.name))]),t._v(" "),a("p",[t._v(t._s(t.activeVault.description))]),t._v(" "),t._l(t.activeVault.keeps,function(e){return a("div",{staticClass:"col s6 m4"},[a("div",[t._v("\n           "+t._s(e.title)+" \n           "),a("a",{on:{click:function(a){t.removeKeep(e._id)}}},[a("i",{staticClass:"fa fa-times"},[t._v("remove keep")])])])])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spacer"},[a("h1",{staticClass:"center-align"},[t._v(" Login ")]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.loginUser(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"col s11 input-field"},[t.showPass?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.showPass?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}):t._e(),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("div",{staticClass:"col s1 input-field"},[a("a",{staticClass:"btn-floating hoverable red",on:{click:t.toggleShowPass}},[a("i",{staticClass:"fa fa-eye"})])])]),t._v(" "),t._m(0)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 center"},[a("button",{staticClass:"waves-effect waves-light btn",attrs:{type:"submit"}},[t._v("Login")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[this.$root.$data.store.state.user._id?t._e():a("div",[a("div",{staticClass:"section white"},[a("div",{staticClass:"row container"},[a("h3",{staticClass:"header"},[t._v("Get Keeps!")]),t._v(" "),a("div",{staticClass:"row"},t._l(t.sharedKeeps,function(e){return a("div",{staticClass:"col s12 m3"},[a("div",{staticClass:"card hoverable blue-grey darken-1"},[a("div",{staticClass:"row thumbnails-row"},[a("div",{staticClass:"col xs-12 col-sm-6 col-md-4"},[a("div",{staticClass:"thumbnail"},[a("img",{attrs:{src:e.imageUrl,alt:"",height:"150",width:"150"}}),t._v(" "),a("div",{staticClass:"caption"},[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.articleLink))]),t._v(" "),t.showKeepToVaultForm?a("button",{staticClass:"waves-effect waves-light btn",on:{click:function(a){t.showKeepToVault(e)}}},[t._v("Save Keep!")]):t._e()])])])])])])}))])])]),t._v(" "),this.$root.$data.store.state.user._id?a("div",[a("h3",[t._v("Vaults - a place for keeps!")]),t._v(" "),t.showVaultForm?t._e():a("button",{staticClass:"waves-effect waves-light btn",on:{click:t.triggerVaultForm}},[t._v("Add Vault")]),t._v(" "),t.showVaultForm?a("div",{staticClass:"container"},[a("h5",[t._v("Add a Vault ")]),t._v(" "),a("form",{staticClass:"row",on:{submit:function(e){e.preventDefault(),t.addVault(e)}}},[a("div",{staticClass:"col s12 input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vaultName,expression:"vaultName"}],attrs:{type:"text",id:"vaultName",required:""},domProps:{value:t.vaultName},on:{input:function(e){e.target.composing||(t.vaultName=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"vaultName"}},[t._v("Title")])]),t._v(" "),a("div",{staticClass:"col s12 input-field"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vaultDesc,expression:"vaultDesc"}],staticClass:"materialize-textarea",attrs:{id:"vaultDesc",cols:"30",rows:"10"},domProps:{value:t.vaultDesc},on:{input:function(e){e.target.composing||(t.vaultDesc=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"vaultDesc"}},[t._v("Description")])]),t._v(" "),a("button",{staticClass:"waves-effect waves-teal btn",attrs:{type:"submit"}},[t._v("Add Vault")]),t._v(" "),a("button",{staticClass:"waves-effect waves-teal btn-flat",on:{click:t.triggerVaultForm}},[a("i",{staticClass:"fa fa-times"})])])]):t._e(),t._v(" "),t.showKeepForm?t._e():a("button",{staticClass:"waves-effect waves-light btn",on:{click:t.triggerKeepForm}},[t._v("Add Keep")]),t._v(" "),t.showKeepForm?a("div",{staticClass:"container"},[a("h5",[t._v("Add a Keep ")]),t._v(" "),a("form",{staticClass:"row",on:{submit:function(e){e.preventDefault(),t.addKeep(e)}}},[a("div",{staticClass:"col s12 input-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepName,expression:"keepName"}],attrs:{type:"text",id:"keepName",required:""},domProps:{value:t.keepName},on:{input:function(e){e.target.composing||(t.keepName=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"keepName"}},[t._v("Title")])]),t._v(" "),a("div",{staticClass:"col s12 input-field"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.keepUrl,expression:"keepUrl"}],staticClass:"materialize-textarea",attrs:{id:"keepUrl",cols:"30",rows:"10"},domProps:{value:t.keepUrl},on:{input:function(e){e.target.composing||(t.keepUrl=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"keepUrl"}},[t._v("Image URL")])]),t._v(" "),a("div",{staticClass:"col s12 input-field"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.keepDesc,expression:"keepDesc"}],staticClass:"materialize-textarea",attrs:{id:"keepDesc",cols:"30",rows:"10"},domProps:{value:t.keepDesc},on:{input:function(e){e.target.composing||(t.keepDesc=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"keepDesc"}},[t._v("Article Link")])]),t._v(" "),a("div",{staticClass:"col s12 input-field"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.keepTags,expression:"keepTags"}],staticClass:"materialize-textarea",attrs:{id:"keepTags",cols:"30",rows:"10"},domProps:{value:t.keepTags},on:{input:function(e){e.target.composing||(t.keepTags=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"keepTags"}},[t._v("Tags (seprate by commas)")])]),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"waves-effect waves-teal btn",attrs:{type:"submit"}},[t._v("Add Keep")]),t._v(" "),a("button",{staticClass:"waves-effect waves-teal btn-flat",on:{click:t.resetKeepForm}},[a("i",{staticClass:"fa fa-times"})])])]):t._e(),t._v(" "),a("div",{staticClass:"row"},t._l(t.uservaults,function(e){return a("div",{staticClass:"col s12 m3"},[a("div",{staticClass:"card hoverable blue-grey darken-1"},[a("router-link",{attrs:{to:"/vaults/"+e._id}},[a("div",{staticClass:"card-content white-text"},[a("span",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.description))])])]),t._v(" "),a("div",{staticClass:"card-action right-align"},[a("a",[a("i",{staticClass:"fa fa-recycle",on:{click:function(a){t.deleteVault(e)}}})])])],1)])}))]):t._e(),t._v(" "),this.$root.$data.store.state.user._id?a("div",[a("h3",[t._v("Shared Keeps")]),t._v(" "),a("div",{staticClass:"row"},t._l(t.sharedKeeps,function(e){return a("div",{staticClass:"col s12 m3"},[a("div",{staticClass:"card hoverable blue-grey darken-1"},[a("div",{staticClass:"row thumbnails-row"},[a("div",{staticClass:"col xs-12 col-sm-6 col-md-4"},[a("div",{staticClass:"thumbnail"},[a("img",{attrs:{src:e.imageUrl,alt:"",height:"150",width:"150"}}),t._v(" "),a("div",{staticClass:"caption"},[a("h3",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.articleLink))]),t._v(" "),t.showKeepToVaultForm?a("button",{staticClass:"waves-effect waves-light btn",on:{click:function(a){t.showKeepToVault(e)}}},[t._v("Save Keep!")]):t._e()])])])])])])}))]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-field col s2 "},[a("input",{staticClass:"filled-in",attrs:{type:"checkbox",id:"public-check-box",checked:""}}),t._v(" "),a("label",{attrs:{for:"KeepPublic"}},[t._v("Public?")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("   \r\nHello\r\n    "+t._s(t.keep.title)+"\r\n    "+t._s(t.keep.views)+" \r\n"+t._s(t.keep.timesVaulted)+"\r\n\r\n\r\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(" Save a Keep ")]),t._v(" "),a("h3",[t._v(t._s(t.activeKeep.title))]),t._v(" "),a("p",[t._v("save the selected keep to one or more vaults below")]),t._v(" "),a("div",{staticClass:"row"},[t._l(t.uservaults,function(e){return a("div",{staticClass:"col s12 m3"},[a("div",{staticClass:"card hoverable blue-grey darken-1"},[a("div",{staticClass:"card-content white-text"},[a("span",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.description))])]),t._v(" "),a("div",{staticClass:"card-action right-align"},[a("button",{staticClass:"waves-effect waves-teal btn-flat",on:{click:function(a){t.addToVault(t.activeKeep._id,e)}}},[a("i",{staticClass:"fa fa-plus"}),t._v("Add Keep to Vault")])])])])}),t._v(" "),a("button",{staticClass:"waves-effect waves-teal btn-flat",on:{click:function(e){t.routeHome()}}},[a("i",{staticClass:"fa fa-plus"}),t._v("Home")])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spacer"},[a("h1",{staticClass:"text-center"},[t._v(" Register as a new user")]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.registerUser(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"name"}},[t._v("Name")])]),t._v(" "),a("div",{staticClass:"input-field col s6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"col s11 input-field"},[t.showPass?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.showPass?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",id:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}):t._e(),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("div",{staticClass:"col s1 input-field"},[a("a",{staticClass:"btn-floating hoverable red",on:{click:t.toggleShowPass}},[a("i",{staticClass:"fa fa-eye"})])])]),t._v(" "),a("div",{staticClass:"col s6"},[a("div",{staticClass:"col s11 input-field"},[t.showPass?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",id:"confirmPassword",required:""},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),t._v(" "),t.showPass?a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{type:"text",id:"confirmPassword",required:""},domProps:{value:t.confirmPassword},on:{input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}):t._e(),t._v(" "),a("label",{attrs:{for:"confirmPassword"}},[t._v("Confirm Password")])])]),t._v(" "),t._m(0)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col s12 center"},[a("button",{staticClass:"waves-effect waves-light btn",attrs:{type:"submit"}},[t._v("Sign Up")])])}]}}],[40]);
//# sourceMappingURL=app.6e68150bd00da3e710a9.js.map