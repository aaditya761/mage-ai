(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7869],{48591:function(e,n,t){"use strict";var i=t(21831),o=t(75582),r=t(82684),c=t(37958);n.Z=function(e){var n=e.children,t=e.uuid,u=e.uuids,l=void 0===u?[]:u,a=(0,c.j)("apiReloads"),d=(0,o.Z)(a,1)[0],s=(0,i.Z)(l);t&&s.push(t);var f=s.map((function(e){return String(d[e])||"-"})).join("_");return r.cloneElement(n,{key:f})}},44162:function(e,n,t){"use strict";t.d(n,{HC:function(){return y},Kf:function(){return s},Nk:function(){return f},PY:function(){return v},gE:function(){return b},jv:function(){return h},nz:function(){return p},oh:function(){return a},qn:function(){return d},t1:function(){return m},y9:function(){return g}});var i=t(85617),o=t(23831),r=t(86422),c=t(73942),u=t(49125),l=t(90880),a=68;function d(e,n){var t,i,c=((null===n||void 0===n||null===(t=n.theme)||void 0===t?void 0:t.borders)||o.Z.borders).light,u=((null===n||void 0===n||null===(i=n.theme)||void 0===i?void 0:i.monotone)||o.Z.monotone).grey500,l=n||{},a=l.blockColor,d=l.isSelected,s=l.theme;return d?c=(s||o.Z).content.active:r.tf.TRANSFORMER===e||a===r.Lq.PURPLE?(c=(s||o.Z).accent.purple,u=(s||o.Z).accent.purpleLight):r.tf.DATA_EXPORTER===e||a===r.Lq.YELLOW?(c=(s||o.Z).accent.yellow,u=(s||o.Z).accent.yellowLight):r.tf.DATA_LOADER===e||a===r.Lq.BLUE?(c=(s||o.Z).accent.blue,u=(s||o.Z).accent.blueLight):r.tf.MARKDOWN===e?(c=(s||o.Z).accent.sky,u=(s||o.Z).accent.skyLight):r.tf.SENSOR===e||a===r.Lq.PINK?(c=(s||o.Z).accent.pink,u=(s||o.Z).accent.pinkLight):r.tf.DBT===e?(c=(s||o.Z).accent.dbt,u=(s||o.Z).accent.dbtLight):r.tf.EXTENSION===e||a===r.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).teal,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).tealLight):r.tf.CALLBACK===e?(c=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).rose,u=((null===s||void 0===s?void 0:s.accent)||o.Z.accent).roseLight):r.tf.CONDITIONAL===e||r.tf.SCRATCHPAD===e||a===r.Lq.GREY||r.tf.CUSTOM===e&&!a?(c=(s||o.Z).content.default,u=(s||o.Z).accent.contentDefaultTransparent):r.tf.GLOBAL_DATA_PRODUCT!==e||a||(c=(s||o.Z).monotone.white,u=(s||o.Z).monotone.whiteTransparent),{accent:c,accentLight:u}}var s=(0,i.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(e){return!e.selected&&!e.hasError&&"\n    border-color: ".concat(d(e.blockType,e).accentLight,";\n  ")}),(function(e){return e.selected&&!e.hasError&&"\n    border-color: ".concat(d(e.blockType,e).accent,";\n  ")}),(function(e){return!e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(e){return e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).danger,";\n  ")}),(function(e){return e.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(e){return e.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),v=i.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(d(e.blockType,e).accent,";\n    }\n  ")})),p=i.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,u.iI,(function(e){return"\n    background-color: ".concat((e.theme||o.Z).background.content,";\n  ")}),(function(e){return e.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((e.theme||o.Z).borders.medium2,";\n  ")}),(function(e){return e.zIndex&&"\n    z-index: ".concat(6+(e.zIndex||0),";\n  ")})),h=i.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,u.iI,u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(e){return e.lightBackground&&"\n    background-color: ".concat((e.theme||o.Z).background.content,";\n  ")}),(function(e){return!e.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),b=i.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*u.iI,.5*u.iI,(function(e){return e.additionalZIndex>0&&"\n      z-index: ".concat(8+e.additionalZIndex,";\n    ")}),(function(e){return"\n        background-color: ".concat((e.theme.text||o.Z.text).fileBrowser,";\n      ")})),m=i.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),g=i.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*u.iI,1*u.iI,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(e.normalPadding?u.iI:a,"px;\n  ")})),y=i.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,a)},1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var i=t(82394),o=t(21831),r=t(82684),c=t(47999),u=t(49894),l=t(93461),a=t(57384),d=t(41424),s=t(72454),f=t(28598);function v(e,n){var t=e.children;return(0,f.jsx)(s.HS,{ref:n,children:t})}var p=r.forwardRef(v),h=t(32063),b=t(85019),m=t(82531),g=t(66166),y=t(3055),x=t(49125),O=t(91427),j=t(24141);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,i=e.after,v=e.afterHidden,Z=e.afterWidth,C=e.afterWidthOverride,P=e.before,k=e.beforeWidth,S=e.breadcrumbs,_=e.children,D=e.errors,I=e.headerMenuItems,E=e.headerOffset,M=e.mainContainerHeader,T=e.navigationItems,R=e.setErrors,N=e.subheaderChildren,A=e.title,F=e.uuid,L=(0,j.i)().width,H="dashboard_after_width_".concat(F),U="dashboard_before_width_".concat(F),B=(0,r.useRef)(null),W=(0,r.useState)(C?Z:(0,O.U2)(H,Z)),Y=W[0],z=W[1],V=(0,r.useState)(!1),K=V[0],X=V[1],G=(0,r.useState)(P?Math.max((0,O.U2)(U,k),13*x.iI):null),q=G[0],J=G[1],Q=(0,r.useState)(!1),$=Q[0],ee=Q[1],ne=(0,r.useState)(null)[1],te=m.ZP.projects.list({},{revalidateOnFocus:!1}).data,ie=null===te||void 0===te?void 0:te.projects,oe={label:function(){var e;return null===ie||void 0===ie||null===(e=ie[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},re=[];S?(t&&re.push(oe),re.push.apply(re,(0,o.Z)(S))):(null===ie||void 0===ie?void 0:ie.length)>=1&&re.push.apply(re,[oe,{bold:!0,label:function(){return A}}]),(0,r.useEffect)((function(){null===B||void 0===B||!B.current||K||$||null===ne||void 0===ne||ne(B.current.getBoundingClientRect().width)}),[K,Y,$,q,B,ne,L]),(0,r.useEffect)((function(){K||(0,O.t8)(H,Y)}),[v,K,Y,H]),(0,r.useEffect)((function(){$||(0,O.t8)(U,q)}),[$,q,U]);var ce=(0,g.Z)(Z);return(0,r.useEffect)((function(){C&&ce!==Z&&z(Z)}),[C,Z,ce]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:A}),(0,f.jsx)(d.Z,{breadcrumbs:re,menuItems:I,project:null===ie||void 0===ie?void 0:ie[0],version:null===ie||void 0===ie||null===(n=ie[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(s.Nk,{children:[0!==(null===T||void 0===T?void 0:T.length)&&(0,f.jsx)(s.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:T,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(h.Z,{after:i,afterHeightOffset:y.Mz,afterHidden:v,afterMousedownActive:K,afterWidth:Y,before:P,beforeHeightOffset:y.Mz,beforeMousedownActive:$,beforeWidth:s.k1+(P?q:0),headerOffset:E,hideAfterCompletely:!0,leftOffset:P?s.k1:null,mainContainerHeader:M,mainContainerRef:B,setAfterMousedownActive:X,setAfterWidth:z,setBeforeMousedownActive:ee,setBeforeWidth:J,children:[N&&(0,f.jsx)(p,{children:N}),_]})})]}),D&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===R||void 0===R?void 0:R(null)},children:(0,f.jsx)(u.Z,w(w({},D),{},{onClose:function(){return null===R||void 0===R?void 0:R(null)}}))})]})}},91207:function(e,n,t){"use strict";t.d(n,{Z:function(){return A}});var i=t(82394),o=t(75582),r=t(17717),c=t(82684),u=t(37958),l=t(83455),a=t(35490),d=t(86422),s=t(60328),f=t(85617),v=t(93461),p=t(67971),h=t(28598),b=f.default.div.withConfig({displayName:"ButtonGroup__ButtonGroupStyle",componentId:"sc-15vbmc8-0"})([""]),m=f.default.div.withConfig({displayName:"ButtonGroup__VerticalDivider",componentId:"sc-15vbmc8-1"})(["width:1px;"]),g=function(e){var n=e.children,t=e.divider,i=c.Children.toArray(n).length;return(0,h.jsx)(b,{children:(0,h.jsx)(p.ZP,{children:c.Children.map(n,(function(e,n){return e&&(0,h.jsxs)(v.Z,{children:[n>=1&&t&&(0,h.jsx)(m,{}),c.cloneElement(e,{borderRadiusLeft:i>=2&&0===n,borderRadiusRight:i>=2&&n===i-1,halfPaddingLeft:i>=2&&0!==n,halfPaddingRight:i>=2&&n!==i-1,noBorder:i>=2&&n>0&&n<i-1,noBorderRight:i>=2&&n!==i-1})]},"button-group-child-".concat(n))}))})})},y=t(57722),x=t(73828),O=t(11135),j=t(98781),Z=t(86673),w=t(82531),C=t(16115),P=t(94353),k=t(60701),S=t(55512),_=t(24224),D=t(32821),I=t(90211),E=t(96510),M=t(51504),T=t(41150);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e){var n=e.active,t=e.addNewBlock,f=e.disableRefreshWarning,v=e.fetchPipeline,b=e.fetchVariables,m=e.filePath,R=e.hideHeaderButtons,A=e.onContentChange,F=e.onUpdateFileSuccess,L=e.openSidekickView,H=e.pipeline,U=e.saveFile,B=e.selectedFilePath,W=e.sendTerminalMessage,Y=e.setDisableShortcuts,z=e.setErrors,V=e.setFilesTouched,K=e.setSelectedBlock,X=(0,u.j)("apiReloads"),G=(0,o.Z)(X,2)[1],q=(0,c.useState)(null),J=q[0],Q=q[1],$=(0,c.useState)(!1),ee=$[0],ne=($[1],(0,c.useRef)(null)),te=(0,c.useMemo)((function(){return new a.Z}),[]),ie=(0,c.useMemo)((function(){return{api_key:P.l,token:te.decodedToken.token}}),[te]),oe=w.ZP.statuses.list().data,re=(0,c.useMemo)((function(){var e,n;return null===oe||void 0===oe||null===(e=oe.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.repo_path}),[oe]),ce=w.ZP.file_contents.detail(m).data;(0,c.useEffect)((function(){null!==ce&&void 0!==ce&&ce.file_content&&Q(ce.file_content)}),[ce]);var ue=(0,c.useState)(null===J||void 0===J?void 0:J.content),le=ue[0],ae=ue[1],de=(0,c.useCallback)((function(e){ae(e),A&&(null===A||void 0===A||A(e))}),[A]),se=(0,c.useState)(!1),fe=se[0],ve=se[1];(0,c.useEffect)((function(){n&&Y&&(null===Y||void 0===Y||Y(!0))}),[n,Y]),(0,c.useEffect)((function(){var e;B&&(null===ne||void 0===ne||null===(e=ne.current)||void 0===e||e.scrollIntoView())}),[B]);var pe=(0,l.Db)(w.ZP.file_contents.useUpdate((null===J||void 0===J?void 0:J.path)&&encodeURIComponent(null===J||void 0===J?void 0:J.path)),{onSuccess:function(e){return(0,E.wD)(e,{callback:function(e){var n=e.file_content;G((function(e){return N(N({},e),{},(0,i.Z)({},"FileVersions/".concat(null===J||void 0===J?void 0:J.path),Number(new Date)))})),F&&(null===F||void 0===F||F(n))},onErrorCallback:function(e,n){return null===z||void 0===z?void 0:z({errors:n,response:e})}})}}),he=(0,o.Z)(pe,1)[0],be=(0,c.useCallback)((function(e,n){if(U)return U(e,n);he({file_content:N(N({},n),{},{content:e})}).then((function(){decodeURIComponent(m).split(r.sep).pop()===x.dT.METADATA_YAML&&b&&(null===b||void 0===b||b())})),V((function(e){return N(N({},e),{},(0,i.Z)({},null===n||void 0===n?void 0:n.path,!1))})),ve(!1)}),[b,m,U,V,he]),me=(0,c.useMemo)((function(){return(0,S.lU)()}),[]),ge=(0,c.useMemo)((function(){var e,n,t,i;return null===(null===J||void 0===J||null===(e=J.path)||void 0===e?void 0:e.match(me))?x.Lu.TXT:null===J||void 0===J||null===(n=J.path)||void 0===n||null===(t=n.match(me))||void 0===t||null===(i=t[0])||void 0===i?void 0:i.split(".")[1]}),[me,J]),ye=(0,c.useMemo)((function(){if(null!==J&&void 0!==J&&J.path)return(0,h.jsx)(y.Z,{autoHeight:!0,language:x.nB[ge],onChange:function(e){de(e),V((function(e){return N(N({},e),{},(0,i.Z)({},null===J||void 0===J?void 0:J.path,!0))})),ve(!0)},onSave:function(e){be(e,J)},selected:!0,textareaFocused:!0,value:(0,I.Pb)(null===J||void 0===J?void 0:J.content)?JSON.stringify(JSON.parse(null===J||void 0===J?void 0:J.content),null,2):null===J||void 0===J?void 0:J.content,width:"100%"})}),[J,ge,be,de,V]),xe=null!==H&&void 0!==H&&H.blocks?(0,_.sE)(null===H||void 0===H?void 0:H.blocks,(function(e){var n=e.type;return d.tf.DATA_EXPORTER===n})):null,Oe=(0,l.Db)(w.ZP.blocks.pipelines.useUpdate(null===H||void 0===H?void 0:H.uuid,null===xe||void 0===xe?void 0:xe.uuid),{onSuccess:function(e){return(0,E.wD)(e,{callback:function(){null===v||void 0===v||v()}})}}),je=(0,o.Z)(Oe,1)[0],Ze=t&&H&&(ge===x.Lu.PY||ge===x.Lu.SQL||(ge===x.Lu.YAML||ge===x.Lu.R)&&(0,D.V3)(J,null===J||void 0===J?void 0:J.path))&&(0,S.ck)(J.path.split(r.sep))!==d.tf.SCRATCHPAD&&(0,D.lr)(J)&&(0,h.jsx)(s.Z,{onClick:function(){var e=(null===H||void 0===H?void 0:H.type)===j.qL.INTEGRATION,n=(0,S.TU)(J,re,H);t(n,(function(n){e&&xe&&je({block:N(N({},xe),{},{upstream_blocks:[n.uuid]})}),null===K||void 0===K||K(n)}))},primary:!0,children:"Add to current pipeline"}),we=W&&(0,h.jsx)(Z.Z,{m:2,children:(0,h.jsx)(O.ZP,{disabled:!re,inline:!0,loading:ee,onClick:function(){null===L||void 0===L||L(k.cH.TERMINAL),null===W||void 0===W||W(JSON.stringify(N(N({},ie),{},{command:["stdin","pip install -r ".concat(re,"/requirements.txt\r")]})))},title:re?"Pip install packages from your saved requirements.txt file (\u2318+S to save).":"Please use right panel terminal to install packages.",uuid:"FileEditor/InstallPackages",children:"Install packages"})}),Ce="FileEditor/".concat(null===J||void 0===J?void 0:J.path),Pe=(0,T.y)(),ke=Pe.registerOnKeyDown,Se=Pe.unregisterOnKeyDown;return(0,c.useEffect)((function(){return function(){Se(Ce)}}),[Se,Ce]),ke(Ce,(function(e,t){if(n&&!f)if((0,M.y)([C.zX,C.Um],t)||(0,M.y)([C.PQ,C.Um],t))e.preventDefault(),be(le,J);else if(fe&&(0,M.y)([C.zX,C.hS],t)){e.preventDefault();var i="".concat(J.path," has changes that are unsaved. ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(i)&&location.reload()}}),[n,le,f,J,be,fe]),(0,h.jsxs)("div",{ref:ne,children:[!R&&(0,h.jsx)(Z.Z,{p:2,children:(0,h.jsxs)(p.ZP,{justifyContent:"space-between",children:[(0,h.jsxs)(g,{children:[Ze,(0,h.jsx)(s.Z,{disabled:!le,onClick:function(e){e.preventDefault(),be(le,J)},title:le?null:"No changes have been made to this file.",children:"Save file content"})]}),L&&(0,h.jsx)(g,{children:(0,h.jsx)(s.Z,{compact:!0,onClick:function(){L(k.cH.FILE_VERSIONS)},small:!0,title:"View previous changes to this file.",children:"Show versions"})})]})}),ye,m===x.dT.REQS_TXT&&we]})}},23351:function(e,n,t){"use strict";var i=t(82394),o=t(75582),r=t(17717),c=t(37958),u=t(82684),l=t(83455),a=t(60328),d=t(57722),s=t(73828),f=t(93461),v=t(67971),p=t(87372),h=t(86673),b=t(54283),m=t(87815),g=t(19711),y=t(82531),x=t(49125),O=t(55512),j=t(42305),Z=t(90211),w=t(96510),C=t(66653),P=t(24224),k=t(28598);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.onActionCallback,t=e.selectedBlock,S=e.selectedFilePath,D=e.setErrors,I=e.width,E=(0,c.j)("apiReloads"),M=(0,o.Z)(E,2)[1],T=y.ZP.file_versions.files.list(S&&encodeURIComponent(S)),R=T.data,N=T.mutate,A=(0,u.useMemo)((function(){return(null===R||void 0===R?void 0:R.file_versions)||[]}),[R]),F=(0,u.useState)(null),L=F[0],H=F[1],U=(0,u.useMemo)((function(){return null===A||void 0===A?void 0:A[L]}),[L,A]),B=y.ZP.file_contents.detail(U?encodeURIComponent(U.path):null).data,W=(0,u.useMemo)((function(){return null===B||void 0===B?void 0:B.file_content}),[B]),Y=(0,u.useMemo)((function(){return(0,O.lU)()}),[]),z=(0,u.useMemo)((function(){var e,n,t;return null===S||void 0===S||null===(e=S.match(Y))||void 0===e||null===(n=e[0])||void 0===n||null===(t=n.split("."))||void 0===t?void 0:t[1]}),[S,Y]),V=(0,l.Db)(y.ZP.file_contents.useUpdate(S&&encodeURIComponent(S)),{onSuccess:function(e){return(0,w.wD)(e,{callback:function(e){var t;S&&N();var o=null===e||void 0===e||null===(t=e.file_content)||void 0===t?void 0:t.path,c="FileEditor/".concat(o);if(o){var u=o.split(r.sep);if("pipelines"===u[0]){var l=u.slice(1,u.length-1).join(r.sep);c="PipelineDetail/".concat(l)}}M((function(e){return _(_({},e),{},(0,i.Z)({},c,Number(new Date)))})),H((function(e){return e+1})),null===n||void 0===n||n(null===e||void 0===e?void 0:e.file_content)},onErrorCallback:function(e,n){return D({errors:n,response:e})}})}}),K=(0,o.Z)(V,2),X=K[0],G=K[1].isLoading,q=(0,u.useMemo)((function(){var e=A.map((function(e){var n=e.name,t=e.path;return[(0,k.jsxs)(v.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,k.jsxs)(f.Z,{flex:1,children:[(0,k.jsx)(g.ZP,{default:!0,monospace:!0,children:(0,j.JX)(n,{withSeconds:!0})}),(0,k.jsx)(h.Z,{px:2*x.cd,children:(0,k.jsx)(g.ZP,{monospace:!0,children:n})})]}),U&&(null===U||void 0===U?void 0:U.path)===t&&(0,k.jsx)(a.Z,{compact:!0,loading:G,onClick:function(e){(0,C.j)(e),X({file_content:{version:n}})},small:!0,children:"Replace with this version"})]},n)]}));if(U){var n=(0,k.jsx)(h.Z,{p:x.cd,children:(0,k.jsx)(b.Z,{},"spinner")});if(W&&(null===W||void 0===W?void 0:W.path)===(null===U||void 0===U?void 0:U.path)){var t=W.content,i=void 0===t?"":t;n=(0,k.jsx)(d.Z,{autoHeight:!0,language:s.nB[z],padding:!0,readOnly:!0,value:(0,Z.Pb)(i)?JSON.stringify(JSON.parse(i),null,2):i,width:I})}e=(0,P.Hk)([n],L+1,e)}return e}),[W,z,A,G,U,L,X,I]);return(0,k.jsxs)("div",{style:{width:I},children:[(0,k.jsxs)(h.Z,{p:x.cd,children:[(0,k.jsx)(p.Z,{level:5,children:"File versions"}),(0,k.jsx)(g.ZP,{inline:!0,monospace:!0,children:S?decodeURIComponent(S):null===t||void 0===t?void 0:t.uuid})]}),(0,k.jsx)(m.Z,{buildRowProps:function(e){if(U&&L+1===e)return{renderCell:function(e){return e},renderRow:function(e){return e}}},columnFlex:[1],columns:[{uuid:"Version"}],isSelectedRow:function(e){var n;return(null===(n=A[e])||void 0===n?void 0:n.name)===(null===U||void 0===U?void 0:U.name)},onClickRow:function(e){U?e===L?H(null):e<L?H(e):e>L+1&&H(e-1):H(e)},rows:q})]})}},38488:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var i=t(82394),o=t(26304),r=t(82684),c=t(85617),u=t(16634),l=t(67971),a=t(10919),d=t(86673),s=t(19711),f=t(46261),v=t(23831),p=t(22341),h=t(28347),b=t(49125),m=t(33766),g=t(66653),y=t(28598);var x=function(e){var n=e.filePath,t=e.filesTouched,i=void 0===t?{}:t,o=e.isLast,c=e.onClickTab,x=e.onClickTabClose,O=e.renderTabTitle,j=e.savePipelineContent,Z=e.selected,w=e.themeContext,C=(0,r.useState)(!1),P=C[0],k=C[1];return(0,y.jsx)(l.ZP,{flexDirection:"column",fullHeight:!0,onClick:function(e){e.preventDefault(),Z||(c?c(n):(null===j||void 0===j||j(),(0,m.u7)({file_path:encodeURIComponent(n)})))},onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)},children:(0,y.jsx)(h.Gb,{last:o,selected:Z,children:(0,y.jsxs)(l.ZP,{alignItems:"center",fullHeight:!0,children:[(0,y.jsx)(f.Z,{appearAbove:!0,appearBefore:!0,label:n,size:null,widthFitContent:!0,children:(0,y.jsxs)(l.ZP,{alignItems:"center",fullHeight:!0,children:[!i[n]&&(0,y.jsx)(p.iU,{muted:!Z,size:1.5*b.iI}),i[n]&&(0,y.jsx)(f.Z,{label:"Unsaved changes",size:null,widthFitContent:!0,children:(0,y.jsx)("div",{style:{padding:1},children:(0,y.jsx)(u.Z,{borderColor:(w||v.Z).borders.danger,size:1.25*b.iI})})}),(0,y.jsx)(d.Z,{mr:1}),(0,y.jsx)(s.ZP,{muted:!Z,children:O?O(n):n})]})}),(0,y.jsx)(d.Z,{mr:2}),(0,y.jsx)(f.Z,{label:"Close",size:null,widthFitContent:!0,children:(0,y.jsxs)(a.Z,{autoHeight:!0,block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(e){(0,g.j)(e),null===x||void 0===x||x(n)},preventDefault:!0,children:[(P||Z)&&(0,y.jsx)(p.x8,{muted:!Z,size:1.25*b.iI}),!P&&!Z&&(0,y.jsx)("div",{style:{width:1.25*b.iI}})]})})]})})})},O=t(24224),j=["filePaths","isSelectedFilePath","onClickTabClose","selectedFilePath"];function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=function(e){var n=e.filePaths,t=e.isSelectedFilePath,i=e.onClickTabClose,u=e.selectedFilePath,a=(0,o.Z)(e,j),d=(0,r.useContext)(c.ThemeContext),s=(0,r.useMemo)((function(){return n.map((function(e){return decodeURIComponent(e)}))}),[n]),f=(0,r.useMemo)((function(){return null===s||void 0===s?void 0:s.length}),[s]);return(0,y.jsx)(l.ZP,{alignItems:"center",justifyContent:"flex-start",children:null===s||void 0===s?void 0:s.map((function(e,n){var o=t?t(e,u):u===encodeURIComponent(e);return(0,r.createElement)(x,w(w({},a),{},{filePath:e,isLast:n===f-1,key:e,onClickTabClose:function(e){if(i)i(e);else{var n=(0,O.Od)(s,(function(n){return n===e})).map((function(e){return encodeURIComponent(e)}));(0,m.u7)({file_path:n[n.length-1]||null,"file_paths[]":n},{pushHistory:!0})}},selected:o,themeContext:d}))}))})}},28347:function(e,n,t){"use strict";t.d(n,{Gb:function(){return f},fm:function(){return d},lO:function(){return a},rK:function(){return s},zn:function(){return l}});var i=t(85617),o=t(23831),r=t(82386),c=t(49125),u=t(37391),l=300,a=i.default.div.withConfig({displayName:"indexstyle__PipelineContainerStyle",componentId:"sc-1sv9513-0"})([".pipeline-detail-enter-active{opacity:1;transition:opacity ","ms linear;}.pipeline-detail-enter-done{opacity:0;transition:opacity ","ms linear;}"],l,l),d=i.default.div.withConfig({displayName:"indexstyle__OverlayStyle",componentId:"sc-1sv9513-1"})(["height:100vh;opacity:1;position:fixed;width:100vw;z-index:9999;",""],(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeArea,";\n  ")})),s=i.default.div.withConfig({displayName:"indexstyle__PipelineHeaderStyle",componentId:"sc-1sv9513-2"})(["height:","px;position:sticky;top:","px;width:100%;z-index:5;"," "," "," ",""],r.Wi,r.Wi,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||o.Z.borders).medium,";\n  ")}),(function(e){return e.relativePosition&&"\n    position: relative;\n  "}),(function(e){return e.secondary&&"\n    height: ".concat(37,"px;\n    top: ").concat(r.Wi,"px;\n    overflow-x: auto;\n    z-index: 3;\n  ")}),(0,u.y$)()),f=i.default.div.withConfig({displayName:"indexstyle__FileTabStyle",componentId:"sc-1sv9513-3"})(["border-right:1px solid transparent;height:100%;padding:","px ","px;"," "," ",""],c.iI,c.cd*c.iI,(function(e){return"\n    &:hover {\n      cursor: default;\n\n      p {\n        color: ".concat((e.theme.content||o.Z.content).active," !important;\n        cursor: default;\n      }\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||o.Z.interactive).hoverBackground,";\n  ")}),(function(e){return!e.selected&&!e.last&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).light," !important;\n  ")}))},55389:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return J}});var i=t(77837),o=t(38860),r=t.n(o),c=t(82394),u=t(75582),l=t(17717),a=t(82684),d=t(37958),s=t(83455),f=t(48591),v=t(1210),p=t(46299),h=t(91207),b=t(47999),m=t(67971),g=t(62084),y=t(19711),x=t(16115),O=t(64318),j=t(54405),Z=t(41150),w=t(28598);var C=function(e){var n=e.children,t=e.fileVersionsVisible,i=e.onSave,o=e.setFilesVersionsVisible,r=(0,a.useState)(null),c=r[0],u=r[1],l=(0,a.useRef)(null),d=(0,a.useRef)(null),s=(0,a.useMemo)((function(){return[{disabled:!i,keyTextGroups:[[(0,j.V5)()?x.RJ:x.hE,x.SS]],label:function(){return"Save"},onClick:function(){return i?i():null},uuid:"save"}]}),[i]),f=(0,a.useMemo)((function(){return[{label:function(){return t?"Hide versions":"Show versions"},onClick:function(){return o(!t)},uuid:"versions"}]}),[t,o]),v="FileHeaderMenu/index",p=(0,Z.y)(),h=p.registerOnKeyDown,C=p.unregisterOnKeyDown;return(0,a.useEffect)((function(){return function(){C(v)}}),[C,v]),h(v,(function(e,n){null!==c&&(n[x.QK]?u((function(e){return 0===e?2:e-1})):n[x.DY]&&u((function(e){return 2===e?0:e+1})))}),[c,u]),(0,w.jsx)(b.Z,{onClickOutside:function(){return u(null)},open:!0,style:{position:"relative"},children:(0,w.jsxs)(m.ZP,{children:[(0,w.jsxs)("div",{style:{position:"relative"},children:[(0,w.jsx)(O.u,{highlighted:0===c,onClick:function(){return u((function(e){return 0===e?null:0}))},onMouseEnter:function(){return u((function(e){return null!==e?0:null}))},ref:l,children:(0,w.jsx)(y.ZP,{children:"File"})}),(0,w.jsx)(g.Z,{items:s,onClickCallback:function(){return u(null)},open:0===c,parentRef:l,uuid:"FileHeaderMenu/file"})]}),(0,w.jsxs)("div",{style:{position:"relative"},children:[(0,w.jsx)(O.u,{highlighted:1===c,onClick:function(){return u((function(e){return 1===e?null:1}))},onMouseEnter:function(){return u((function(e){return null!==e?1:null}))},ref:d,children:(0,w.jsx)(y.ZP,{children:"Edit"})}),(0,w.jsx)(g.Z,{items:f,onClickCallback:function(){return u(null)},open:1===c,parentRef:d,uuid:"FileHeaderMenu/edit"})]}),n]})})},P=t(38488),k=t(23351),S=t(82531),_=t(85617),D=t(23831),I=t(82386),E=t(3055),M=t(37391),T=72-I.uX+E.Mz,R=_.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-11pty4f-0"})(["height:","px;top:","px;z-index:3;",""],72,E.Mz,(function(e){return"\n    background-color: ".concat((e.theme.background||D.Z.background).codeArea,";\n  ")})),N=_.default.div.withConfig({displayName:"indexstyle__MenuStyle",componentId:"sc-11pty4f-1"})(["height:","px;position:relative;z-index:1;",""],36,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||D.Z.borders).medium,";\n  ")})),A=_.default.div.withConfig({displayName:"indexstyle__TabsStyle",componentId:"sc-11pty4f-2"})([""," height:","px;overflow-x:auto;position:sticky;width:100%;z-index:0;"],(0,M.y$)(),36),F=t(91427),L=t(24224),H="open_files";function U(e){(0,F.t8)(H,e)}var B=t(96510),W=t(51504),Y=t(9728);function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e){var n=e.split(l.sep);return n[n.length-1]}var X=function(){var e=(0,d.j)("apiReloads"),n=(0,u.Z)(e,2)[1],t=(0,a.useRef)(null),i=(0,a.useRef)(null),o=(0,a.useCallback)((function(e){i.current||(i.current={}),i.current=V(V({},i.current),e)}),[i]),r=(0,a.useState)([]),l=r[0],b=r[1],m=(0,a.useState)(null),g=m[0],y=m[1],O=(0,a.useState)({}),j=O[0],_=O[1],D=(0,a.useState)(!1),I=D[0],E=D[1],M=(0,a.useMemo)((function(){return l.reduce((function(e,n){var t=K(n);return e[t]||(e[t]=[]),e[t].push(n),e}),{})}),[l]),z=(0,a.useCallback)((function(e){U(e),b(e)}),[]),X=(0,a.useCallback)((function(e){z(function(e){var n=(0,F.U2)(H,[]);return n.includes(e)||n.push(e),U(n),n}(e))}),[z]),G=(0,a.useCallback)((function(e){o((0,c.Z)({},e,null)),_((function(n){return V(V({},n),{},(0,c.Z)({},e,!1))}));var n=function(e){var n=(0,F.U2)(H,[]),t=(0,L.Od)(n,(function(n){return n===e}));return U(t),t}(e);z(n),g===e&&(null===n||void 0===n?void 0:n.length)>=1&&y(n[n.length-1]),0===(null===n||void 0===n?void 0:n.length)&&y(null)}),[g,o,z]),q=(0,a.useCallback)((function(e,n){n||(X(e),y(e))}),[X]);(0,a.useEffect)((function(){var e=(0,F.U2)(H,[]);z(e),y((function(n){return!n&&(null===e||void 0===e?void 0:e.length)>=1?e[0]:n}))}),[z]);var J=S.ZP.files.list(),Q=J.data,$=J.mutate,ee=(0,a.useMemo)((function(){return(null===Q||void 0===Q?void 0:Q.files)||[]}),[Q]),ne=(0,Y.VI)(null,{},[],{uuid:"FilesPage"}),te=(0,u.Z)(ne,1)[0],ie="Files/index",oe=(0,Z.y)(),re=(oe.disableGlobalKeyboardShortcuts,oe.registerOnKeyDown),ce=oe.unregisterOnKeyDown;(0,a.useEffect)((function(){return function(){ce(ie)}}),[ce,ie]),re(ie,(function(e,n){var t=Object.entries(j).reduce((function(e,n){var t=(0,u.Z)(n,2),i=t[0];return t[1]?e.concat(i):e}),[]);if((0,W.y)([x.zX,x.hS],n)&&(null===t||void 0===t?void 0:t.length)>=1){e.preventDefault();var i="You have changes that are unsaved: ".concat(t.join(", "),". ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(i)&&location.reload()}}),[j]);var ue=(0,a.useMemo)((function(){return(0,w.jsx)(P.Z,{filePaths:l,filesTouched:j,isSelectedFilePath:function(e,n){return e===n},onClickTab:function(e){return y(e)},onClickTabClose:function(e){return G(e)},renderTabTitle:function(e){var n=K(e),t=M[n];return t&&(null===t||void 0===t?void 0:t.length)>=2?e:n},selectedFilePath:g})}),[j,l,M,G,g]),le=(0,a.useMemo)((function(){return(0,w.jsx)(p.Z,{fetchFileTree:$,files:ee,onClickFile:function(e){return q(e)},onClickFolder:function(e){return q(e,!0)},onCreateFile:function(e){var n=e.path;return q(n)},ref:t,setErrors:te})}),[$,t,ee,q,te]),ae=(0,s.Db)((function(e){return S.ZP.file_contents.useUpdate((null===e||void 0===e?void 0:e.path)&&encodeURIComponent(null===e||void 0===e?void 0:e.path))({file_content:e})}),{onSuccess:function(e){return(0,B.wD)(e,{callback:function(e){var t=e.file_content;n((function(e){return V(V({},e),{},(0,c.Z)({},"FileVersions/".concat(null===t||void 0===t?void 0:t.path),Number(new Date)))})),o((0,c.Z)({},null===t||void 0===t?void 0:t.path,null))},onErrorCallback:function(e,n){return te({errors:n,response:e})}})}}),de=(0,u.Z)(ae,1)[0],se=(0,a.useCallback)((function(e,n){de(V(V({},n),{},{content:e})),_((function(e){return V(V({},e),{},(0,c.Z)({},null===n||void 0===n?void 0:n.path,!1))}))}),[_,de]),fe=(0,a.useMemo)((function(){return null===l||void 0===l?void 0:l.map((function(e){return(0,w.jsx)("div",{style:{display:g===e?null:"none"},children:(0,w.jsx)(f.Z,{uuid:"FileEditor/".concat(decodeURIComponent(e)),children:(0,w.jsx)(h.Z,{active:g===e,disableRefreshWarning:!0,filePath:e?encodeURIComponent(e):null,hideHeaderButtons:!0,onContentChange:function(n){return o((0,c.Z)({},e,n))},saveFile:se,selectedFilePath:g,setErrors:te,setFilesTouched:_})})},e)}))}),[l,se,g,o,te]),ve=(0,a.useMemo)((function(){return(0,w.jsx)(C,{fileVersionsVisible:I,onSave:function(){var e,n;(null===i||void 0===i||null===(e=i.current)||void 0===e||null===(n=e[g])||void 0===n?void 0:n.length)>=1&&se(i.current[g],{path:g})},setFilesVersionsVisible:E})}),[i,I,se,g,E]);return(0,w.jsx)(v.Z,{after:(0,w.jsx)(f.Z,{uuid:"FileVersions/".concat(g?decodeURIComponent(g):""),children:(0,w.jsx)(k.Z,{selectedFilePath:g,setErrors:te})}),afterHidden:!(I&&g),before:le,headerOffset:T,mainContainerHeader:(null===l||void 0===l?void 0:l.length)>=1&&(0,w.jsxs)(R,{children:[(0,w.jsx)(N,{children:ve}),(0,w.jsx)(A,{children:ue})]}),title:"Files",uuid:"Files/index",children:fe})},G=t(41788);function q(){return(0,w.jsx)(X,{})}q.getInitialProps=(0,i.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var J=(0,G.Z)(q)},37958:function(e,n,t){"use strict";t.d(n,{j:function(){return i}});var i=(0,t(44152).r)({apiReloads:{}}).useGlobalState},42305:function(e,n,t){"use strict";t.d(n,{A5:function(){return y},AY:function(){return x},BP:function(){return g},JX:function(){return m},OC:function(){return s},Pc:function(){return O},Ro:function(){return j},Tz:function(){return b},Y_:function(){return w},d$:function(){return h},jV:function(){return Z},lJ:function(){return C},n1:function(){return v},s8:function(){return a},vk:function(){return r},yD:function(){return d}});var i,o,r,c=t(82394),u=t(92083),l=t.n(u);!function(e){e.TODAY="today",e.WEEK="week",e.MONTH="month"}(r||(r={}));var a=(i={},(0,c.Z)(i,r.TODAY,"today"),(0,c.Z)(i,r.WEEK,"last 7 days"),(0,c.Z)(i,r.MONTH,"last 30 days"),i),d=(o={},(0,c.Z)(o,r.TODAY,0),(0,c.Z)(o,r.WEEK,6),(0,c.Z)(o,r.MONTH,29),o),s="YYYY-MM-DD HH:mm:ss",f="YYYY-MM-DD HH:mm",v="YYYY-MM-DD",p="MMMM D, YYYY";function h(e,n){var t=n.dayAgo,i=n.includeSeconds,o=n.utcFormat,r=l()(e),c=f;return o&&(r=r.utc()),t&&(r=r.subtract(1,"days")),i&&(c=s),r.format(c)}function b(e){var n=h((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==e&&void 0!==e&&e.dateObj?new Date(n):n}function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l().unix(e).format(null!==n&&void 0!==n&&n.withSeconds?s:f)}function g(e,n,t){return l()(e).utc().hours(+n).minutes(+t).format()}function y(e){return l()(e).unix()}function x(e,n,t,i){var o="".concat(e.toISOString().split("T")[0]," ").concat(n,":").concat(t);return i?"".concat(o,":").concat(i):o}function O(e){var n=l().unix(+e).utc();return{date:n.toDate(),hour:String(n.hour()),minute:String(n.minute())}}function j(e,n){var t=l().utc(),i=l().utc();null!==n&&void 0!==n&&n.localTime&&(t=l()().local(),i=l()().local());var o=(t=t.subtract(e,"days")).format(p),r=i.format(p);return null!==n&&void 0!==n&&n.endDateOnly?r:"".concat(o," - ").concat(r)}function Z(e,n){var t=null!==n&&void 0!==n&&n.localTime?l()().local():l().utc();if(e===r.WEEK){var i=d[r.WEEK];t=t.subtract(i,"days")}else if(e===r.MONTH){var o=d[r.MONTH];t=t.subtract(o,"days")}return null!==n&&void 0!==n&&n.isoString?t.startOf("day").toISOString():t.startOf("day").format(s)}function w(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90,n=new Date,t=[],i=0;i<e;i++)t.unshift(n.toISOString().split("T")[0]),n.setDate(n.getDate()-1);return t}function C(e){return e.padStart(2,"0")}},54405:function(e,n,t){"use strict";var i;t.d(n,{V5:function(){return r}}),function(e){e.ANDROID="Android",e.CHROME_OS="ChromeOS",e.IOS="iOS",e.LINUX="Linux",e.MAC="macOS",e.WINDOWS="Windows"}(i||(i={}));var o=i;function r(){return function(){var e,n,t,i,r,c,u,l=o.MAC,a=null===(e=window)||void 0===e||null===(n=e.navigator)||void 0===n?void 0:n.userAgent,d=(null===(t=window)||void 0===t||null===(i=t.navigator)||void 0===i||null===(r=i.userAgentData)||void 0===r?void 0:r.platform)||(null===(c=window)||void 0===c||null===(u=c.navigator)||void 0===u?void 0:u.platform);return d?["macOS","Macintosh","MacIntel","MacPPC","Mac68K"].includes(d)?l=o.MAC:["Win32","Win64","Windows","WinCE"].includes(d)?l=o.WINDOWS:["iPhone","iPad","iPod"].includes(d)&&(l=o.IOS):a&&(a.includes("Macintosh")?l=o.MAC:a.includes("Windows")?l=o.WINDOWS:a.includes("Linux")&&a.includes("X11")?l=o.LINUX:/(iPhone|iPad)/.test(a)?l=o.IOS:a.includes("Android")&&a.includes("Mobi")?l=o.ANDROID:a.includes("CrOS")&&(l=o.CHROME_OS)),l}()===o.MAC}},99017:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files",function(){return t(55389)}])}},function(e){e.O(0,[844,9902,6639,402,5643,1424,1005,7815,5704,7722,3391,6299,9774,2888,179],(function(){return n=99017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);