webpackJsonp([10],{"/TeD":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAABGdBTUEAALGPC/xhBQAAANBJREFUOBGllMENgzAMRZOqpy7QCXruLJ2A2Rip507AAr2G/0JSUWJMJL5kYuzvH8dBhCCklJ6yG34P4FJTudfy8lJgkj/GGL81aa0IKD7I7vKD+O+LXj6yiaBsKCS5LdYCylJDbYg8jGTTkcfJIkdCngC1P5E9IeJCnoFWjtB0+ScC29iVMPMyBUg2IgQ3QoR2BUhyO6fRdLLpgg5A/3EMgXHR6BysJVC/Xi/HJvk4RySIHid6SYrX2ONyOw+ZO7gqVI7HnBg4NdQu0A6nfgUzcuKZLNlnDGkAAAAASUVORK5CYII="},0:function(e,t,o){o("j1ja"),e.exports=o("NHnr")},"2lJv":function(e,t,o){"use strict";t.a=function(e){var t=e.name,o=e.ciphertext.address;if(console.log(o),void 0==localStorage.wallet)return!1;var n=JSON.parse(localStorage.wallet),i=n.map(function(e){return e.name}),a=n.map(function(e){return e.ciphertext.address});return i.includes(t)?"similarName":(console.log(a),!!a.includes(o)&&(console.log("address"),"similarAddress"))},o.d(t,"b",function(){return i});var n=o("T452");var i=function(){return(""==n.b?window.location.href:n.b).includes("wallet.xyblock.io")?"http://chain.xyblock.net":"http://block.accelchain.io"}},D4uH:function(e,t,o){"use strict";var n=o("bOdI"),i=o.n(n),a={},s={name:"fa-icon",props:{name:{type:String,validator:function(e){return!e||e in a||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return i()({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,o=e.height;return Math.max(t,o)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,o,n){var i="fa-"+(r++).toString(16);return t[n]=i,' id="'+i+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,o,n,i){var a=o||i;return a&&t[a]?"#"+t[a]:e}),e}},mounted:function(){var e=this;if(this.name||0!==this.$children.length){if(!this.icon){var t=0,o=0;this.$children.forEach(function(n){n.outerScale=e.normalizedScale,t=Math.max(t,n.width),o=Math.max(o,n.height)}),this.childrenWidth=t,this.childrenHeight=o,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(o-e.height)/2})}}else console.warn('Invalid prop: prop "name" is required.')},register:function(e){for(var t in e){var o=e[t];o.paths||(o.paths=[]),o.d&&o.paths.push({d:o.d}),o.polygons||(o.polygons=[]),o.points&&o.polygons.push({points:o.points}),a[t]=o}},icons:a},r=870711;var l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,n){return o("path",e._b({key:"path-"+n},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,n){return o("polygon",e._b({key:"polygon-"+n},"polygon",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[o("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var c=o("VU/8")(s,l,!1,function(e){o("fJ8I")},null,null);t.a=c.exports},F4zd:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o("j1ja");var n=o("7+uW"),i={props:["title"],methods:{goBack:function(){history.go(-1)}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wallet-close"},[n("img",{attrs:{src:o("/TeD")},on:{click:function(t){e.goBack()}}}),e._v(" "),n("h5",[e._v(e._s(e.$t(e.title+".title")))])])},staticRenderFns:[]};var s={data:function(){return{h5Style:"",closeStyle:"",isName:!0}},props:["title"],mounted:function(){this.color(localStorage.path_name);var e=localStorage.path_name;this.isName="send"!=e&&"recv"!=e&&"keyimport"!=e},watch:{$route:function(e,t){this.color(e.path.substring(1));var o=e.path.substring(1);this.isName="send"!=o&&"recv"!=o&&"keyimport"!=o}},methods:{goBack:function(){"/wallet"==this.$route.path?this.$router.push("/"):history.go(-1)},color:function(e){"send"==e||"recv"==e||"keyimport"==e?(this.closeStyle={background:"#fafafa",height:"7rem"},this.h5Style={color:"#E3A33D",padding:"1.5rem 0 0.3rem",borderBottom:" 2px solid #E3A33D"}):(this.h5Style="",this.closeStyle="")}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wallet-close",style:e.closeStyle},[n("img",{attrs:{src:o("pDIl")},on:{click:function(t){e.goBack()}}}),e._v(" "),e.isName?e._e():n("h5",{style:e.h5Style},[e._v(e._s(e.$t(e.title+".title")))]),e._v(" "),e.isName?n("h5",{style:e.h5Style},[e._v(e._s(e.title))]):e._e()])},staticRenderFns:[]};var l={name:"App",data:function(){return{locale:"en",isLang:"0"==localStorage.lng,showClose:"1"==localStorage.to_path,showClose1:"0"==localStorage.to_path,title:null!=localStorage.path_name?localStorage.path_name:"",showVersionToast:!1,showToast:!1,msg:"",isMobile:!1,isIOS:!1,firstEnterApp:!1,beiFenTip:"",showBeiFen:!1}},components:{Close:o("VU/8")(i,a,!1,function(e){o("ZcpF")},"data-v-5dbac9ae",null).exports,Close1:o("VU/8")(s,r,!1,function(e){o("PLeJ")},"data-v-0d1a713e",null).exports,Toast:o("uaoT").a},created:function(){var e=this;/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(this.isMobile=!0,this.isIOS=!0):/(Android)/i.test(navigator.userAgent)?this.isMobile=!0:this.isMobile=!1,setTimeout(function(){e.notification()},3e3),setInterval(function(){e.notification()},864e5)},mounted:function(){"0"==localStorage.lng?this.locale="cn":this.locale="en",localStorage.lng="en"==this.locale?"1":"0",(""==localStorage.path_name||void 0==localStorage.path_name)&&this.$router.push("/"),void 0==localStorage.wallet&&(console.log(234455),this.firstEnterApp=!0,this.$router.push("/slash")),""==localStorage.to_path&&(this.showClose=!1,this.showClose1=!1);var e=this;document.addEventListener("deviceready",function(){e.getVersion()},!1)},watch:{locale:function(e){this.$i18n.locale=e},$route:function(e,t){var o=e.path.substring(1);"wallet"==o&&(this.title=localStorage.name,this.isMobile&&this.getVersion()),"create"==o||"download"==o||"slash"==o?(this.showClose=!0,this.showClose1=!1,this.showLan=!1,localStorage.to_path=1,void 0==localStorage.wallet&&"slash"==o&&(this.showClose=!1,localStorage.to_path=""),"slash"==o&&(this.isMobile&&!this.firstEnterApp&&this.getVersion(),this.firstEnterApp=!1)):""==o?(this.showClose=!1,this.showClose1=!1,this.showLan=!0,localStorage.to_path="",this.isMobile&&this.getVersion()):(this.showClose=!1,this.showClose1=!0,this.showLan=!1,localStorage.to_path=0),this.title=o,localStorage.path_name=o,"wallet"==o&&(localStorage.path_name=localStorage.name,this.title=localStorage.name)}},methods:{notification:function(){this.isMobile?this.beiFenTip="\n      从9月1号起，系统将开启自动升级，升级后需重新导入密钥恢复钱包。为了保障您的数据安全，提醒您尽快完成所有钱包备份！":this.beiFenTip="\n      从9月1号起，本网站服务将迁移至wallet.accelchain.io。为了保障您的数据安全，提醒您尽快完成所有钱包备份，并在新网址重新导入密钥恢复钱包。";var e=localStorage.getItem("preTime")||"",t=(new Date).getTime();console.log(e+"::"+t),e?parseInt(t)-parseInt(e)>864e5&&(this.showBeiFen=!0,localStorage.setItem("preTime","")):(this.showBeiFen=!0,localStorage.setItem("preTime",(new Date).getTime()))},getVersion:function(){var e=this;function t(e){chcp.getVersionInfo(function(t,o){console.log("Current web version: "+o.currentWebVersion),console.log("Previous web version: "+o.previousWebVersion),console.log("Loaded and ready for installation web version: "+o.readyToInstallWebVersion),console.log("Application version name: "+o.appVersion),console.log("Application build version: "+o.buildVersion);var n={"config-file":e};chcp.fetchUpdate(function(e,t){if(e)return console.log("--fetchUpdate error--",e.code,e.description),!1;console.log("--fetchUpdate--",t,t.config),chcp.installUpdate(function(e){e?(console.log("Failed to install the update with error code: "+e.code),console.log(e.description)):console.log("Update installed!")})},n)})}this.$axios.get("https://apk-1256300176.cos.ap-hongkong.myqcloud.com/AcceTest/updateAcce.json").then(function(o){var n=o.data,i=n.appUrl,a=e.currentVersionDot,s=e.iosCurrentVersionDot,r=(n.version,n.newVersion),l=r.slice(0,2),c=Number(r.slice(3)),h=n.iosVersion,p=h.slice(0,2),d=Number(h.slice(3));e.isIOS?p===s.slice(0,2)&&d>Number(s.slice(3))&&(console.log("进行热更新"),t("https://apk-1256300176.cos.ap-hongkong.myqcloud.com/AcceTest/updateIos/chcp.json")):l===a.slice(0,2)?c>Number(a.slice(3))&&(console.log("进行热更新"),t("https://apk-1256300176.cos.ap-hongkong.myqcloud.com/AcceTest/update/chcp.json")):(e.showVersionToast=!0,e.$refs.progress.style.width="0",e.downLoadApp(i))})},downLoadApp:function(e){var t=this;window.requestFileSystem(window.TEMPORARY,5242880,function(o){console.log("file system open: "+o.name),o.root.getFile("wallet.apk",{create:!0,exclusive:!1},function(o){o.remove(function(){console.log("File successufully removed."),t.downloadApk(o,e,!0)},t.onErrorRemoveFile)},t.onErrorCreateFile)},t.onErrorLoadFs)},downloadApk:function(e,t,o){console.log("fileEntry:"+e),console.log("uri",t);var n=this,i=new FileTransfer,a=e.toURL();console.log("fileURL:"+a),i.download(t,a,function(e){console.log("Successful download..."),console.log("download complete: "+e.toURL()),console.log("readBinaryData",o),o?n.openApk(e.toURL()):(n.showVersionToast=!1,n.showToastInfo("下载失败"))},function(e){console.log("download error source "+e.source),console.log("download error target "+e.target),console.log("upload error code"+e.code),n.showVersionToast=!1,n.showToastInfo("下载失败")},null,{}),i.onprogress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100+"%";n.$refs.progress.style.width=t}else this.showToastInfo("下载失败")}},openApk:function(e){this.$refs.progress.style.width="0",this.showVersionToast=!1,cordova.plugins.fileOpener2.open(e,"application/vnd.android.package-archive",{error:function(e){this.showToastInfo("打开失败"),console.log("Error status: "+e.status+" - Error message: "+e.message)},success:function(){console.log("file opened successfully")}})},onErrorLoadFs:function(e){console.log(e),console.log("文件系统加载失败！"),this.showToastInfo()},onErrorCreateFile:function(e){console.log(e),console.log("文件创建失败！"),this.showToastInfo()},onErrorRemoveFile:function(e){console.log(e),console.log("文件删除失败！"),this.showToastInfo()},showToastVal:function(e){this.showToast=e},showToastInfo:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"更新失败";this.showToast=!0,this.msg=t,setTimeout(function(){e.showToast=!1},2e3)}}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[e.showClose?o("close",{attrs:{title:e.title}}):e._e(),e._v(" "),e.showClose1?o("close1",{attrs:{title:e.title}}):e._e(),e._v(" "),e.showVersionToast?o("div",{staticClass:"version-toast"},[o("div",{staticClass:"version-content"},[o("p",[e._v(e._s(e.$t("home.versionUpdate")))])])]):e._e(),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.showVersionToast,expression:"showVersionToast"}],staticClass:"version-progress-bar"},[o("div",{ref:"progress",staticStyle:{"background-color":"rgb(229, 229, 229)","z-index":"10",opacity:"1",position:"absolute",top:"0px",left:"0px",width:"0",height:"10px",transition:"width 2s, opacity 0.6s"}})]),e._v(" "),e.showToast?o("Toast",{attrs:{msg:e.msg},on:{showToast:function(t){e.showToastVal(e.val)}}}):e._e(),e._v(" "),e.showBeiFen?o("Toast",{staticClass:"beiFenBox",attrs:{msg:e.beiFenTip},on:{showToast:function(t){e.showBeiFen=!1}}},[o("p",{attrs:{slot:"title"},slot:"title"},[e._v("安全通知")])]):e._e(),e._v(" "),o("router-view")],1)},staticRenderFns:[]};var h=o("VU/8")(l,c,!1,function(e){o("F4zd")},null,null).exports,p=o("/ocq");n.a.use(p.a);var d=new p.a({routes:[{path:"/",name:"home",component:function(e){return Promise.all([o.e(0),o.e(3)]).then(function(){var t=[o("iN7t")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/slash",name:"slash",component:function(e){return Promise.all([o.e(0),o.e(5)]).then(function(){var t=[o("43ZL")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/create",name:"create",component:function(e){return Promise.all([o.e(0),o.e(6)]).then(function(){var t=[o("AvQg")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/download",name:"download",component:function(e){return Promise.all([o.e(0),o.e(4)]).then(function(){var t=[o("KoBN")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/wallet",name:"wallet",component:function(e){return Promise.all([o.e(0),o.e(1)]).then(function(){var t=[o("TarR")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/send",name:"send",component:function(e){return Promise.all([o.e(0),o.e(2)]).then(function(){var t=[o("vEsW")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/recv",name:"recv",component:function(e){return o.e(7).then(function(){var t=[o("sSg2")];e.apply(null,t)}.bind(this)).catch(o.oe)}},{path:"/keyimport",name:"keyimport",component:function(e){return Promise.all([o.e(0),o.e(8)]).then(function(){var t=[o("DKgh")];e.apply(null,t)}.bind(this)).catch(o.oe)}}]}),u=o("mtWM"),f=o.n(u),g=o("TXmL"),m=o("K/Lq"),w=o.n(m),v=o("wvfG"),y=o.n(v),b=o("POcy"),A=o.n(b),T=o("zYko"),S=o.n(T),E=o("hKoQ"),k=o.n(E),N=(o("D/PP"),o("D4uH")),C=o("T452"),F=o("2lJv");k.a.polyfill();n.a.use(S.a,{color:"#E5E5E5",failedColor:"red",height:"25px",thickness:"10px",transition:{speed:"2s",opacity:"0.6s",termination:2e3},position:"absolute",autoFinish:!1}),n.a.use(A.a),n.a.use(y.a),n.a.use(w.a),n.a.use(g.a),n.a.config.productionTip=!1,n.a.prototype.$axios=f.a,n.a.prototype.currentVersionDot=C.d,n.a.prototype.baseUrl=C.b,n.a.prototype.UtcToLocale=C.a,n.a.prototype.currentVersion=C.c,n.a.prototype.iosCurrentVersionDot=C.e,n.a.prototype.baseUrl=C.b,n.a.prototype.UtcToLocale=C.a,n.a.prototype.currentVersion=C.c,n.a.prototype.isSimilarWallet=F.a,n.a.component("icon",N.a);var I=new g.a({locale:"en",messages:{cn:o("xdGi"),en:o("TKku")}});t.default=I,new n.a({el:"#app",router:d,i18n:I,render:function(e){return e(h)}})},PLeJ:function(e,t){},T452:function(e,t,o){"use strict";o.d(t,"b",function(){return n}),o.d(t,"c",function(){return i}),o.d(t,"d",function(){return a}),o.d(t,"e",function(){return s}),o.d(t,"a",function(){return r});var n="https://wallet.xyblock.io",i=108,a="v1.1.8",s="v1.0.6",r=function(e){if(!e)return"-";function t(e){return e>9?e:"0"+e}var o=new Date(e);return o.getFullYear()+"-"+t(o.getMonth()+1)+"-"+t(o.getDate())+" "+t(o.getHours())+":"+t(o.getMinutes())+":"+t(o.getSeconds())}},T9K6:function(e,t){},TKku:function(e,t){e.exports={common:{openPwdTitle:"Enter the password  for this wallet",open:"ok",cancel:"cancel",notNull:"Can not be empty",pwdError:"Password error",pwdKeyError:"Password or keyprivate error",pwdNotNull:"The password can not be empty",pwdNotSame:"Two input password must be consistent",sendSuc:"Transact success ",sendFailed:"Failure to send a transaction",loseEfficacy:"The wallet has failed, please recreate it",openFail:"Open wallet is failed",balanceNotEnough:"Your balance is insufficient",copyYes:"Replicating Success",lenError:"Enter the correct address",loadingError:"Wallet loading failure",lenToast:"No more than 8 bits after a decimal point",nonceError:"Getting “nonce” failure",haveSimilarName:"There is a homonym purse that can't be imported",haveSimilarWallet:"The user has a corresponding account and will stop the import of this account. If the user needs to import, the original account must be deleted and imported again."},err:{"-32000":"replacement transaction underpriced"},home:{remove1:"Attention! This wallet will be removed!Please confirm your backup operation, otherwise the wallet will disappear forever! Are you sure to continue ? Wallet address:",remove2:"Final warning!Are you sure to remove the wallet?Please confirm your operation again:",ok:"ok",no:"no",updateFailed:"update failed",versionUpdate:"Version update"},keyimport:{title:"import wallet",placeholder:"private key",label:"password",label1:"password again",import:"import",importError:"Import failure, please try again "},slash:{title:"Accel Chain",tip:"ACCE",title1:"Get cryptocurrency by sharing your idle resources",createWallet:"create a new wallet",openWallet:"Open Wallet From Key File",or:"OR",openWallet0:"Open Other Wallet From KeyStore",nodata:"A file that is not saved for the time being"},create:{title:"create",name:"WALLET NAME",nameNotNull:"Wallet Name can not be empty",title1:"Input your Password to create your wallet",label:"PASSWORD",label1:"COMFIRM PASSWORD",btn:"Create",pwdLen:"The password should be no less than 8 bits and kept properly, for no way to be recovered.",pwdToast:"The password should be no less than 8 bits",walletExist:"The purse has already existed",createFail:"created Fail"},download:{title:"download",tip1:"Please",tip2:"DOWNLOAD",tip3:" your ",tip4:"KEY FILE",tip5:"in case of data loss by accident.",tip6:"This local key file will be the",tip7:"ONLY WAY",tip8:"to open this wallet,",tip9:"please keep it properly to protect your peoperty security.",title1:"",btn:"Click to Download",openThis:"Open this Wallet",openOther0:"Open Other Wallet From KeyStore",openOther:"Open Other Wallet From Key File",create:"Create another Wallet",downLoadFile:"Download KeyStore",downLoadKeystroe:"Download Key File"},wallet:{title:"wallet",export:"Export",address:"Address",balance:"Balance",value:"currency price from:DigiFinex.com",send:"Send Token",recv:"Recv Token",records:"Records",showRecords:"Show last 10 transaction records",more:"More",out:"Expense",in:"Income",date:"",fee:"fee",NoTransaction:"No transaction record",DownloadFailure:"Download failure",DownloadSuccess:"The key file has been saved in the ACCEdata folder",refreshText:"pull-to-refresh"},send:{title:"Send Token",generate:"Generate Transaction",viewCode:"click to View the trade code",closeCode:"Closing the transaction code",sendSPT:"You are about to send {amount} to address：",sendNow:"Send Now?",scan:"scan",sendSuccess:"Transact success，TradingID="},recv:{title:"Recv Token",copy:"Click to Copy"},warning:{title:"Are you sure not download the Key File ?",ok:"Yes I am Sure",downLoad:"Download Now"},code:{10001:"服务器内部错误",10002:"接口参数不正确",10007:"内容不存在",20001:"请求发送失败",20002:"请求处理超时",30001:"未找到该钱包地址",31001:"未找到该区块",32001:"未找到该交易",32002:"错误的交易请求"}}},ZcpF:function(e,t){},fJ8I:function(e,t){},pDIl:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAMAAACeyVWkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjUwMEQ0MEE0OUVCMTFFODlGODlFQjBCNjRGNEJEQzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjUwMEQ0MEI0OUVCMTFFODlGODlFQjBCNjRGNEJEQzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEZENzY2NTQ5RUIxMUU4OUY4OUVCMEI2NEY0QkRDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNEZENzY2NjQ5RUIxMUU4OUY4OUVCMEI2NEY0QkRDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps7QnFYAAACNUExURfn5+ff396ysrOvr66urq62trbKysry8vNzc3ODg4L29vbGxsaqqqt/f37i4uLS0tO7u7uLi4t3d3bm5ue3t7fr6+ra2trW1ta6urvDw8LOzs/T09L+/v76+vru7u/b29q+vr/X19dnZ2bq6uujo6NXV1cTExMbGxsXFxbe3t/Ly8uPj47CwsNbW1v///8Em2+wAAAAvdFJOU/////////////////////////////////////////////////////////////8AWqU49wAAANtJREFUeNpUUQkSgjAQSw9K0YIooIIH3rf9//PspdROO7uTmSSbLdDvoaMDsoIGqyZTMoAN24ozkAs6kT8YbJMkN6AdUb7IAoyySvg4bwCWUjr2ImDHhIqcaKucLrkTsXQ6d525tRchZWHo0k7knhPJnpWnB9SLdHdDn3lbnwB1qpTiLxkCfYvcKUWvKx2jYCPOFe8OJEJh3XfdEMfP4NxP2yGOozt38otjs1m6mEVxTOfpWdhD2Ana9TB82EnWQArq6AGujceFmFLEfwG2Lt4NSFv+/9uD9fojwAA4KCl0OURdmAAAAABJRU5ErkJggg=="},uaoT:function(e,t,o){"use strict";var n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"toast"},[o("div",{staticClass:"toast-content"},[o("div",{staticClass:"toast-close",on:{click:function(t){e.close()}}},[o("i"),o("i")]),e._v(" "),e._t("title"),e._v(" "),o("h3",[e._v(e._s(e.$t(e.msg)))])],2)])},staticRenderFns:[]};var i=o("VU/8")({name:"toast",data:function(){return{}},props:["msg"],methods:{close:function(){this.$emit("showToast",!1)}}},n,!1,function(e){o("T9K6")},"data-v-245a8d27",null);t.a=i.exports},xdGi:function(e,t){e.exports={common:{openPwdTitle:"输入您的密码打开钱包",open:"确定",cancel:"取消",notNull:"不能为空",pwdError:"密码错误",pwdKeyError:"密码或密文错误",pwdNotNull:"密码不能为空",pwdNotSame:"两次输入的密码不一致",sendSuc:"发送交易成功",sendFailed:"发送交易失败",loseEfficacy:"钱包已失效，请重新创建",openFail:"打开钱包失败",balanceNotEnough:"余额不足",copyYes:"复制成功",lenError:"请输入正确的地址",loadingError:"加载失败",lenToast:"小数点后不能超过8位",nonceError:"获取“nonce”失败",haveSimilarName:"已存在同名钱包，无法导入",haveSimilarWallet:"用户已经有对应的账户存在，将会停止这个账户的导入。如果用户需要导入，需删除原有的账户再进行导入。"},home:{remove1:"您即将移除一个含有私钥的完整钱包！请确定您已完成备份操作，否则钱包将永远消失！您确定继续移除吗？",remove2:"注意！此钱包将被移除！确定永久消除钱包吗？这是最后警告，请再次确认您的操作：",ok:"是",no:"否",updateFailed:"更新失败",versionUpdate:"发现新版本，正在更新中"},keyimport:{title:"导入钱包",placeholder:"密钥",label:"密码",label1:"再次输入密码",import:"开始导入",importError:"导入失败，请重试"},slash:{title:"Accel加速链",tip:"ACCE",title1:"通过分享你的闲置资源获得加密货币",createWallet:"创建一个新钱包",openWallet:"从密钥文件打开钱包",openWallet0:"用密钥打开钱包",or:"或",nodata:"暂无保存的文件"},err:{"-32000":"置换交易定价偏低"},create:{title:"创建钱包",name:"钱包名称",nameNotNull:"钱包名不能为空",pwdLen:"密码长度不小于8位，需妥善保管，丢失无法找回。",pwdToast:"密码长度不小于8位",title1:"请输入密码创建您的钱包",label:"密码",label1:"再次输入密码",btn:"创建",walletExist:"该钱包已存在",createFail:"创建失败"},download:{title:"下载",tip1:"为了避免意外造成的数据丢失，请您",tip2:"导出密钥文件",tip3:"。本地密钥是您打开钱包的",tip4:"唯一",tip5:"途径，请妥善备份保管。",tip6:"",tip7:"",tip8:"",tip9:"",btn:"点击下载",openThis:"打开这个钱包",openOther0:"用密钥打开其他的钱包",openOther:"用密钥文件打开其他的钱包",create:"创建另一个钱包",downLoadFile:"下载密钥",downLoadKeystroe:"下载密钥文件"},wallet:{title:"我的钱包",export:"备份",address:"账户地址",balance:"账户余额",value:"实时币价来源:DigiFinex.com",send:"发送Token",recv:"接收Token",records:"交易记录",showRecords:"最近10条交易记录",more:"更多",out:"转出",in:"转入",date:"",fee:"手续费",NoTransaction:"暂无交易记录",DownloadFailure:"下载失败",DownloadSuccess:"密钥文件已保存在ACCEdata文件夹中",refreshText:"下拉刷新"},send:{title:"发送 Token",generate:"确认交易",viewCode:"点击查看交易码",closeCode:"收起交易码",sendSPT:"您即将发送{amount}个币到地址：",sendNow:"确定？",scan:"扫一扫",sendSuccess:"交易发送成功，交易ID="},recv:{title:"接收 Token",copy:"点击复制"},warning:{title:"您确定不下载密钥文件吗？",ok:"确定",downLoad:"现在就下载"},code:{10001:"服务器内部错误",10002:"接口参数不正确",10007:"内容不存在",10008:"文件上传失败",10009:"接口请求方法有误",20001:"请求发送失败",20002:"请求处理超时",30001:"未找到该钱包地址",31001:"未找到该区块",32001:"未找到该交易",32002:"错误的交易请求"}}}},[0]);