(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{66757:function(n,e,t){"use strict";var r=t(19319),i=t(94178),o=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function a(n,e){return 1===arguments.length?l(n):u(n,e)}function l(n){const e=c.getItem(n);return i(e)}function u(n,e){try{return c.setItem(n,JSON.stringify(e)),!0}catch(t){return!1}}a.set=u,a.get=l,a.remove=function(n){return c.removeItem(n)},a.clear=function(){return c.clear()},a.backend=function(n){return n&&(c=n),c},a.on=o.on,a.off=o.off,n.exports=a},94178:function(n){"use strict";n.exports=function(n){const e=function(n){try{return JSON.parse(n)}catch(e){return n}}(n);return void 0===e?null:e}},19319:function(n){"use strict";var e={};n.exports={getItem:function(n){return n in e?e[n]:null},setItem:function(n,t){return e[n]=t,!0},removeItem:function(n){return!!(n in e)&&delete e[n]},clear:function(){return e={},!0}}},67240:function(n,e,t){"use strict";var r=t(94178),i={};function o(n){n||(n=t.g.event);var e=i[n.key];e&&e.forEach((function(e){e(r(n.newValue),r(n.oldValue),n.url||n.uri)}))}n.exports={on:function(n,e){i[n]?i[n].push(e):i[n]=[e],t.g.addEventListener?t.g.addEventListener("storage",o,!1):t.g.attachEvent?t.g.attachEvent("onstorage",o):t.g.onstorage=o},off:function(n,e){var t=i[n];t.length>1?t.splice(t.indexOf(e),1):i[n]=[]}}},72454:function(n,e,t){"use strict";t.d(e,{E7:function(){return h},HS:function(){return p},Nk:function(){return d},k1:function(){return s},lm:function(){return f}});var r=t(46313),i=t(23831),o=t(73942),c=t(3055),a=t(49125),l=t(37391),u=t(90880),s=a.cd*a.iI+5*a.iI+a.cd*a.iI,d=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],c.Mz,c.Mz,(function(n){return"\n    background-color: ".concat((n.theme.background||i.Z.background).page,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyle",componentId:"sc-ecogjt-1"})(["padding:","px;",""],a.cd*a.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||i.Z.background).panel,";\n    border-right: 1px solid ").concat((n.theme.borders||i.Z.borders).medium,";\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["width:fit-content;padding:","px;position:relative;z-index:2;",""],a.cd*a.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||i.Z.borders).medium,";\n  ")})),h=(r.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],l.w5,(function(n){return"\n    height: calc(100vh - ".concat(c.Mz+(n.heightOffset||0),"px);\n  ")})),r.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["display:flex;align-items:center;justify-content:center;padding:","px;border-radius:","px;",""],a.iI,o.n_,(function(n){return n.primary&&"\n    ".concat((0,u.eR)(),"\n    background: ").concat((n.theme||i.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((n.theme||i.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((n.theme||i.Z).interactive.linkSecondary,";\n    }\n  ")})))},51404:function(n,e,t){"use strict";t.d(e,{Z:function(){return P}});var r=t(77555),i=t(82684),o=t(93461),c=t(57384),a=t(80845),l=t(72454),u=t(28598);function s(n,e){var t=n.children;return(0,u.jsx)(l.HS,{ref:e,children:t})}var d=i.forwardRef(s),f=t(32063),p=t(34376),h=t(61519),m=t(57639),g=t(882),v=t(31866);var b=function(n){var e=n.size;return(0,u.jsxs)("svg",{width:e,height:e,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,u.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.86364 2.5H4.13636C3.68449 2.5 3.31818 2.94772 3.31818 3.5V7.5C3.31818 8.05228 3.68449 8.5 4.13636 8.5H9.86364C10.3155 8.5 10.6818 8.05228 10.6818 7.5V3.5C10.6818 2.94772 10.3155 2.5 9.86364 2.5ZM4.13636 1.5C3.23263 1.5 2.5 2.39543 2.5 3.5V7.5C2.5 8.60457 3.23263 9.5 4.13636 9.5H5.5V16.1667V16.5H4.13636C3.23263 16.5 2.5 17.3954 2.5 18.5V22.5C2.5 23.6046 3.23263 24.5 4.13636 24.5H9.86364C10.7674 24.5 11.5 23.6046 11.5 22.5V18.5C11.5 17.3954 10.7674 16.5 9.86364 16.5H6.5V16.1667C6.5 14.9394 7.61929 13.9444 9 13.9444H16C17.933 13.9444 19.5 12.5516 19.5 10.8333V9.5H21.8636C22.7674 9.5 23.5 8.60457 23.5 7.5V3.5C23.5 2.39543 22.7674 1.5 21.8636 1.5H16.1364C15.2326 1.5 14.5 2.39543 14.5 3.5V7.5C14.5 8.60457 15.2326 9.5 16.1364 9.5H18.5V10.8333C18.5 12.0606 17.3807 13.0556 16 13.0556H9C8.02066 13.0556 7.13526 13.4131 6.5 13.9893V9.5H9.86364C10.7674 9.5 11.5 8.60457 11.5 7.5V3.5C11.5 2.39543 10.7674 1.5 9.86364 1.5H4.13636ZM9.86364 17.5H6.5H5.5H4.13636C3.68449 17.5 3.31818 17.9477 3.31818 18.5V22.5C3.31818 23.0523 3.68449 23.5 4.13636 23.5H9.86364C10.3155 23.5 10.6818 23.0523 10.6818 22.5V18.5C10.6818 17.9477 10.3155 17.5 9.86364 17.5ZM16.1364 2.5H21.8636C22.3155 2.5 22.6818 2.94772 22.6818 3.5V7.5C22.6818 8.05228 22.3155 8.5 21.8636 8.5H16.1364C15.6845 8.5 15.3182 8.05228 15.3182 7.5V3.5C15.3182 2.94772 15.6845 2.5 16.1364 2.5Z",fill:"url(#paint0_linear_2738_141228)"}),(0,u.jsx)("defs",{children:(0,u.jsxs)("linearGradient",{id:"paint0_linear_2738_141228",x1:"2.5",y1:"13",x2:"23.5",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,u.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,u.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},x=t(86673),y=t(19711),w=t(46261),j=t(10503),C=t(99994),Z=t(49125),I=3*Z.iI;var _=function(n){var e=n.navigationItems,t=(0,p.useRouter)().pathname,r=(0,i.useMemo)((function(){return(e||[{Icon:j.rV,IconSelected:b,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"pipelines"}},{Icon:j.pd,IconSelected:h.Z,id:"pipeline-runs",label:function(){return"Pipelines runs"},linkProps:{href:"pipeline-runs"}}]).map((function(n,e){var r=n.Icon,i=n.IconSelected,o=n.id,c=n.isSelected,a=n.label,s=n.linkProps,d=c?c(t):!!t.match(new RegExp("^/".concat(o,"[/]*"))),f=d&&i?i:r;return(0,u.jsx)(x.Z,{mt:e>=1?Z.cd:0,children:(0,u.jsxs)(w.Z,{height:5*Z.iI,label:a(),size:null,widthFitContent:!0,children:[d&&i&&(0,u.jsx)(g.Z,{backgroundGradient:C.yr,backgroundPanel:!0,basic:!0,borderWidth:2,linkProps:s,paddingUnits:1,children:(0,u.jsx)("div",{style:{height:I,width:I},children:(0,u.jsx)(f,{muted:!0,size:I})})}),!d&&(0,u.jsx)(v.ZP,{block:!0,noHoverUnderline:!0,noPadding:!0,linkProps:s,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(o),children:(0,u.jsx)(l.E7,{primary:!f,children:f?(0,u.jsx)(f,{muted:!0,size:I}):(0,u.jsx)(y.ZP,{children:"Edit"})})})]})},"button-".concat(o))}))}),[e,t]);return(0,u.jsx)(m.Z,{children:r})},k=t(41374),O=t(3055),H=t(91427),S=t(24141);var P=function(n){var e,t=n.after,s=n.afterHidden,p=n.afterWidth,h=n.before,m=n.beforeWidth,g=n.breadcrumbs,v=n.children,b=n.headerMenuItems,x=n.navigationItems,y=n.subheaderChildren,w=n.title,j=n.uuid,C=(0,S.i)().width,Z="dashboard_after_width_".concat(j),I="dashboard_before_width_".concat(j),P=(0,i.useRef)(null),N=(0,i.useState)((0,H.U2)(Z,p)),z=N[0],V=N[1],M=(0,i.useState)(!1),E=M[0],D=M[1],R=(0,i.useState)((0,H.U2)(I,m)),T=R[0],A=R[1],B=(0,i.useState)(!1),W=B[0],F=B[1],L=(0,i.useState)(null),U=(L[0],L[1]),G=k.ZP.projects.list().data,q=null===G||void 0===G?void 0:G.projects,J=[];return g?J.push.apply(J,(0,r.Z)(g)):(null===q||void 0===q?void 0:q.length)>=1&&J.push.apply(J,[{label:function(){var n;return null===(n=q[0])||void 0===n?void 0:n.name}},{bold:!0,label:function(){return w}}]),(0,i.useEffect)((function(){null===P||void 0===P||!P.current||E||W||null===U||void 0===U||U(P.current.getBoundingClientRect().width)}),[E,z,W,T,null===P||void 0===P?void 0:P.current,U,C]),(0,i.useEffect)((function(){E||(0,H.t8)(Z,z)}),[s,E,z]),(0,i.useEffect)((function(){W||(0,H.t8)(I,T)}),[W,T]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{title:w}),(0,u.jsx)(a.Z,{breadcrumbs:J,menuItems:b,version:null===q||void 0===q||null===(e=q[0])||void 0===e?void 0:e.version}),(0,u.jsxs)(l.Nk,{children:[0!==(null===x||void 0===x?void 0:x.length)&&(0,u.jsx)(l.lm,{children:(0,u.jsx)(_,{navigationItems:x})}),(0,u.jsx)(o.Z,{flex:1,flexDirection:"column",children:(0,u.jsxs)(f.Z,{after:t,afterHeightOffset:O.Mz,afterHidden:s,afterMousedownActive:E,afterWidth:z,before:h,beforeHeightOffset:O.Mz,beforeMousedownActive:W,beforeWidth:l.k1+(h?T:0),hideAfterCompletely:!0,leftOffset:h?l.k1:null,mainContainerRef:P,setAfterMousedownActive:D,setAfterWidth:V,setBeforeMousedownActive:F,setBeforeWidth:A,children:[y&&(0,u.jsx)(d,{children:y}),v]})})]})]})}},65597:function(n,e,t){"use strict";t.d(e,{c:function(){return l},f:function(){return u}});var r=t(46313),i=t(23831),o=t(49125),c=t(73942),a=t(37391),l=r.default.div.withConfig({displayName:"Tablestyle__TableContainerStyle",componentId:"sc-8ammqd-0"})(["position:relative;overflow:auto;"," ",""],a.w5,(function(n){return n.minHeight&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")})),u=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-1"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(n){return"\n    box-shadow: ".concat((n.theme.shadow||i.Z.shadow).popup,";\n    background-color: ").concat((n.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(n){return n.leftOffset&&"\n    left: ".concat(n.leftOffset,"px;\n  ")}),(function(n){return n.topOffset&&"\n    top: ".concat(n.topOffset,"px;\n  ")}),(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")}))},17903:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r=t(82394),i=t(12691),o=t.n(i),c=t(82684),a=t(10919),l=t(19711),u=t(46313),s=t(23831),d=t(49125),f=u.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;"]),p=u.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||s.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),h=(0,u.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||s.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(d.iI/2,"px ").concat(d.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(d.iI,"px ").concat(2*d.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),m=u.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})(["",""],h),g=u.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," ",""],h,(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||s.Z.interactive).activeBorder,";\n  ")})),v=t(28598);function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var y=function(n){var e=n.alignTop,t=n.buildLinkProps,r=n.columnFlex,i=n.columnMaxWidth,u=n.columns,s=void 0===u?[]:u,d=n.compact,h=n.isSelectedRow,b=n.noBorder,y=n.onClickRow,w=n.rows,j=n.uuid,C=(0,c.useMemo)((function(){return r.reduce((function(n,e){return n+(e||0)}),0)}),r),Z=(0,c.useCallback)((function(n){if(r[n]){var e=Math.round(r[n]/C*100);return"".concat(e,"%")}return null}),[]),I=(0,c.useMemo)((function(){return null===w||void 0===w?void 0:w.map((function(n,r){var c=null===t||void 0===t?void 0:t(r),l=n.map((function(n,t){return(0,v.jsx)(g,{alignTop:e,compact:d,maxWidth:null===i||void 0===i?void 0:i(t),noBorder:b,selected:null===h||void 0===h?void 0:h(r),width:Z(t),children:n},"".concat(j,"-row-").concat(r,"-cell-").concat(t))})),u=(0,v.jsx)(p,{noHover:!(c||y),onClick:y?function(){return y(r)}:null,children:l},"".concat(j,"-row-").concat(r));return c?(0,v.jsx)(o(),x(x({},c),{},{passHref:!0,children:(0,v.jsx)(a.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:u})})):u}))}),[e,t,Z,i,s,d,h,b,y,w]);return(0,v.jsxs)(f,{children:[(null===s||void 0===s?void 0:s.length)>=1&&(0,v.jsx)(p,{noHover:!0,children:s.map((function(n,e){return(0,v.jsx)(m,{compact:d,noBorder:b,children:(0,v.jsx)(l.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid})},"".concat(j,"-col-").concat(n.uuid,"-").concat(e))}))}),I]})}},87372:function(n,e,t){"use strict";var r,i,o,c,a,l,u,s,d=t(82394),f=t(26304),p=t(26653),h=t(46313),m=t(33591),g=t(31969),v=t(2005),b=t(31012),x=t(19711),y=t(49125),w=t(86673),j=t(28598),C=["children","condensed","inline","level","marketing","spacingBelow"];function Z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(t),!0).forEach((function(e){(0,d.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var _=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," ",""],x.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(v.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(v.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(v.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),k=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||g.Z.content).active,";\n  ")})),O=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],_,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),b.aQ),m.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),b.aQ),m.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),b.aQ)),H=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],_,b.MJ),S=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],_,m.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.sm(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.lg(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI),m.media.xl(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*y.iI,7*y.iI)),P=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],_,b.BL),N=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],_),z=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],_),V=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],_),M=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],_,(function(n){return 1===n.level&&"\n    ".concat(b.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(b.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),E=function(n){var e,t=n.children,r=n.condensed,i=n.inline,o=n.level,c=n.marketing,a=n.spacingBelow,l=(0,f.Z)(n,C);i?e=M:0===Number(o)?e=O:1===Number(o)?e=c?S:H:2===Number(o)?e=P:3===Number(o)?e=N:4===Number(o)?e=z:5===Number(o)&&(e=V);var u=(0,j.jsxs)(e,I(I({},l),{},{level:o,children:[a&&(0,j.jsx)(w.Z,{mb:r?2:3,children:t}),!a&&t]}));return i?u:(0,j.jsx)(k,{children:u})};E.defaultProps={level:3,weightStyle:6},e.Z=E},82944:function(n,e,t){"use strict";var r=t(82394),i=t(91835),o=t(82684),c=t(46313),a=t(69898),l=t(28598);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var d=c.default.input.withConfig({displayName:"TextInput__TextInputStyle",componentId:"sc-1ii4qtc-0"})(["",""],a.p),f=function(n,e){var t=(0,i.Z)({},n);return(0,l.jsx)(a.Z,s(s({},t),{},{input:(0,l.jsx)(d,s({},t)),ref:e}))};e.Z=o.forwardRef(f)},61519:function(n,e,t){"use strict";var r=t(28598);e.Z=function(n){var e=n.size;return(0,r.jsxs)("svg",{width:e,height:e,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 3H9V9H3V3ZM10 2V9H17V16H24V24H17H16H10H9H2V17V16V10V9V2H10ZM16 23V17H10V23H16ZM17 23H23V17H17V23ZM16 16V10H10V16H16ZM9 10V16H3V10H9ZM9 17V23H3V17H9Z",fill:"url(#paint0_linear_2738_140355)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_2738_140355",x1:"2",y1:"13",x2:"24",y2:"13",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})}},73892:function(n,e,t){"use strict";t.r(e);var r=t(12757),i=t(82684),o=t(83455),c=t(60328),a=t(51404),l=t(67971),u=t(87372),s=t(31866),d=t(86673),f=t(17903),p=t(19711),h=t(82944),m=t(41374),g=t(10503),v=t(73899),b=t(73942),x=t(99994),y=t(49125),w=t(72454),j=t(5679),C=t(96510),Z=t(47999),I=t(62084),_=t(65597),k=t(28598);function O(n){var e=n.fetchInstances,t=n.instance,a=(0,i.useRef)(null),u=(0,i.useState)(),s=u[0],f=u[1],h=(0,i.useState)(),v=h[0],b=h[1],x=t.name,w=t.task_arn,j={};w&&(j.task_arn=w);var O=(0,o.Db)(m.ZP.instances.clusters.useUpdate("ecs",x),{onSuccess:function(n){return(0,C.wD)(n,{callback:function(){e(),f(!1)},onErrorCallback:function(n){var e=n.error,t=e.errors,r=e.message;console.log(t,r)}})}}),H=(0,r.Z)(O,1)[0],S=(0,o.Db)(m.ZP.instances.clusters.useDelete("ecs",x,j),{onSuccess:function(n){return(0,C.wD)(n,{callback:function(){e(),f(!1)},onErrorCallback:function(n){var e=n.error,t=e.errors,r=e.message;console.log(t,r)}})}}),P=(0,r.Z)(S,1)[0],N=(0,i.useMemo)((function(){var n=t.status,e=[{label:function(){return(0,k.jsx)(p.ZP,{children:"Delete instance"})},onClick:function(){return b(!0)},uuid:"delete_instance"}];return"STOPPED"===n?e.unshift({label:function(){return(0,k.jsx)(p.ZP,{children:"Resume instance"})},onClick:function(){return H({instance:{action:"resume",name:t.name,task_arn:t.task_arn}})},uuid:"resume_instance"}):"RUNNING"===n&&e.unshift({label:function(){return(0,k.jsx)(p.ZP,{children:"Stop instance"})},onClick:function(){return H({instance:{action:"stop",name:t.name,task_arn:t.task_arn}})},uuid:"stop_instance"}),e}),[t]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("div",{ref:a,style:{position:"relative",zIndex:"1"},children:[(0,k.jsx)(c.Z,{iconOnly:!0,onClick:function(){return f(!s)},children:(0,k.jsx)(g.mH,{size:2*y.iI})}),(0,k.jsx)(Z.Z,{disableEscape:!0,onClickOutside:function(){f(!1),b(!1)},open:s,children:v?(0,k.jsxs)(_.f,{leftOffset:30*-y.iI,topOffset:3*-y.iI,width:30*y.iI,children:[(0,k.jsx)(p.ZP,{children:"Are you sure you want to delete"}),(0,k.jsx)(p.ZP,{children:"this instance? You may not be"}),(0,k.jsx)(p.ZP,{children:"able to recover your data."}),(0,k.jsx)(d.Z,{mt:1}),(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(c.Z,{danger:!0,onClick:P,children:"Confirm"}),(0,k.jsx)(d.Z,{ml:1}),(0,k.jsx)(c.Z,{default:!0,onClick:function(){return b(!1)},children:"Cancel"})]})]}):(0,k.jsx)(I.Z,{items:N,left:25*-y.iI,open:s,parentRef:a,topOffset:3*-y.iI,uuid:"Manage/more_actions",width:25*y.iI})})]})})}e.default=function(){var n=(0,i.useState)(),e=n[0],t=n[1],Z=(0,i.useState)(),I=Z[0],_=Z[1],H=m.ZP.instances.clusters.list("ecs",{},{refreshInterval:3e3,revalidateOnFocus:!0}),S=H.data,P=H.mutate,N=(0,o.Db)(m.ZP.instances.clusters.useCreate("ecs"),{onSuccess:function(n){return(0,C.wD)(n,{callback:function(){P(),t(!1)},onErrorCallback:function(n){var e=n.error,t=e.errors,r=e.message;console.log(t,r)}})}}),z=(0,r.Z)(N,2),V=z[0],M=z[1].isLoading,E=(0,i.useMemo)((function(){var n;return null===S||void 0===S||null===(n=S.instances)||void 0===n?void 0:n.filter((function(n){return n.name}))}),[S]);return(0,k.jsx)(a.Z,{afterWidth:w.k1,beforeWidth:w.k1,breadcrumbs:[{bold:!0,label:function(){return"Manage"}}],navigationItems:[],subheaderChildren:(0,k.jsx)(k.Fragment,{children:e?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u.Z,{default:!0,level:5,monospace:!0,children:"Configure new instance"}),(0,k.jsx)(f.Z,{columnFlex:[null,3],rows:[[(0,k.jsx)(p.ZP,{bold:!0,color:v.cM,children:"Instance name"}),(0,k.jsx)(h.Z,{label:"Spaces will be replaced by underscores",monospace:!0,onChange:function(n){n.preventDefault(),_(n.target.value)},placeholder:"Name your new instance",value:I})]]}),(0,k.jsx)(d.Z,{my:2,children:(0,k.jsxs)(l.Z,{children:[(0,k.jsx)(s.ZP,{background:v.a$,bold:!0,inline:!0,loading:M,onClick:function(){return V({instance:{name:(0,j.RA)(I)}})},uuid:"EnvironmentListPage/new",children:"Create"}),(0,k.jsx)(d.Z,{ml:1}),(0,k.jsx)(s.ZP,{bold:!0,inline:!0,onClick:function(){return t(!1)},uuid:"EnvironmentListPage/cancel",children:"Cancel"})]})})]}):(0,k.jsx)(s.ZP,{background:x.eW,beforeElement:(0,k.jsx)(g.mm,{size:2.5*y.iI}),bold:!0,inline:!0,onClick:function(){_((0,j.Y6)()),t(!0)},uuid:"EnvironmentListPage/new_instance",children:"Create new instance"})}),title:"Manage",uuid:"Manage/index",children:(0,k.jsx)(f.Z,{columns:[{uuid:"Status"},{uuid:"Instance Name"},{uuid:"Type"},{uuid:"Public IP address"},{uuid:"Open"},{label:function(){return""},uuid:"Actions"}],columnFlex:[2,4,2,3,1,null],rows:null===E||void 0===E?void 0:E.map((function(n){var e=n.ip,t=n.name,r=n.status,i=n.type;return[(0,k.jsx)(c.Z,{borderRadius:b.D7,danger:"STOPPED"===r,default:"PROVISIONING"===r,notClickable:!0,padding:"6px",primary:"RUNNING"===r,warning:"PENDING"===r,children:(0,j.vg)(r)}),(0,k.jsx)(p.ZP,{children:t}),(0,k.jsx)(p.ZP,{children:(0,j.vg)(i)}),(0,k.jsx)(p.ZP,{children:e}),(0,k.jsx)(c.Z,{iconOnly:!0,onClick:function(){return window.open("http://".concat(e,":6789"))},children:(0,k.jsx)(g.M0,{size:2*y.iI})}),(0,k.jsx)(O,{fetchInstances:P,instance:n})]}))})})}},5679:function(n,e,t){"use strict";t.d(e,{RA:function(){return d},kC:function(){return f},vg:function(){return x},kE:function(){return _},T3:function(){return j},Mp:function(){return p},Pb:function(){return u},HW:function(){return y},HD:function(){return s},wX:function(){return h},x6:function(){return m},_6:function(){return g},Y6:function(){return Z},Lo:function(){return I},Tz:function(){return w},QV:function(){return C},C5:function(){return b}});var r=t(12757),i=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],o=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],c=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),a=["0","1","2","3","4","5","6","7","8","9"],l=t(24224);function u(n){try{JSON.parse(n)}catch(e){return!1}return!0}function s(n){return"string"===typeof n}function d(n){return n.split(" ").join("_")}function f(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function h(n){return n.charAt(0).toLowerCase()+n.slice(1)}function m(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1],c=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(c,".").concat(o):c}function g(n,e){var t,r=e,i=void 0!==r&&null!==r;if(i||(r=2),1===r)t=n;else{var o=n.length,c=n[o-1];t="y"===c&&"day"!==n?"".concat(n.slice(0,o-1),"ies"):"".concat(n,"s"===c?"es":"s")}return i?"".concat(r," ").concat(t):t}function v(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function b(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)?n.slice(0,e-2):n.slice(0,e-1)}function x(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f(v(n.toLowerCase()))}function y(n){return!isNaN(n)}function w(n){var e,t=n.match(/\d+(\.?\d*)%/)||[];return Number(null===(e=t[0])||void 0===e?void 0:e.slice(0,-1))}function j(n){return"".concat(m(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((n||0)*Math.pow(100,e))/100}(n)),"%")}function C(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function Z(){return"".concat((0,l.mp)(i)," ").concat((0,l.mp)(c))}function I(){return"".concat((0,l.mp)(o)).concat((0,l.mp)(a))}function _(n){return n.toLowerCase().replace(/\W+/g,"_")}},13157:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage",function(){return t(73892)}])}},function(n){n.O(0,[4259,2212,7689,1374,5763,6792,9898,9774,2888,179],(function(){return e=13157,n(n.s=e);var e}));var e=n.O();_N_E=e}]);