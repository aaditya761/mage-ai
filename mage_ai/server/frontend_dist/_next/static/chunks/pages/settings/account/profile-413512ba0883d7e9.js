(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6308],{2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c},W:function(){return o}});var r=t(85617),i=t(3055),o=34*t(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},79585:function(e,n,t){"use strict";t.d(n,{DQ:function(){return s},HY:function(){return c},SA:function(){return l},WH:function(){return o},eC:function(){return u},fF:function(){return d},tC:function(){return a}});var r=t(81132),i=t(9736),o="Workspace",c="Preferences",d="Git settings",u="Users",a="Account",s="Profile",l=function(e){var n=e.owner,t=e.roles,l=e.project_access,f=[{linkProps:{href:"/settings/workspace/preferences"},uuid:c}];(n||t===r.No.ADMIN||0!==(2&l))&&f.push({linkProps:{href:"/settings/workspace/users"},uuid:u}),(!(0,i.YB)()||t<=r.No.EDITOR)&&f.push({linkProps:{href:"/settings/workspace/sync-data"},uuid:d});var h=[{items:f,uuid:o}];return(0,i.YB)()?h.concat([{items:[{linkProps:{href:"/settings/account/profile"},uuid:s}],uuid:a}]):h}},30775:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(1210),i=t(82394),o=t(12691),c=t.n(o),d=t(10919),u=t(86673),a=t(19711),s=t(85617),l=t(23831),f=t(49125),h=t(90880),p=(f.iI,s.default.div.withConfig({displayName:"indexstyle__SectionTitleStyle",componentId:"sc-1y8dyue-0"})(["padding:","px ","px;"],1*f.iI,2.5*f.iI)),g=s.default.div.withConfig({displayName:"indexstyle__ItemStyle",componentId:"sc-1y8dyue-1"})([""," padding:","px ","px;"," ",""],(0,h.eR)(),1.5*f.iI,2.5*f.iI,(function(e){return!e.selected&&"\n    &:hover {\n      background-color: ".concat((e.theme.background||l.Z.background).codeArea,";\n    }\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.background||l.Z.background).codeTextarea,";\n  ")})),m=t(28598),b=t(82684);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=function(e){var n=e.isItemSelected,t=e.sections;return(0,m.jsx)(u.Z,{py:f.Gg,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.items,r=e.title,i=e.uuid;return(0,m.jsxs)(u.Z,{children:[(0,m.jsx)(p,{children:(0,m.jsx)(a.ZP,{bold:!0,muted:!0,small:!0,uppercase:!0,children:r?r():i})}),null===t||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.linkProps,o=e.onClick,u=e.uuid,a=t?t():u,s=(0,m.jsx)(g,{selected:null===n||void 0===n?void 0:n(v(v({},e),{},{uuidWorkspace:i})),children:a});return r?(0,b.createElement)(c(),v(v({},r),{},{key:u,passHref:!0}),(0,m.jsx)(d.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,sameColorAsText:!0,children:s})):(0,m.jsx)(d.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:o,preventDefault:!0,sameColorAsText:!0,children:s},u)}))]},i)}))})},w=t(2850),P=t(79585),y=t(9736);var j=function(e){var n=e.after,t=e.afterHidden,i=e.children,o=e.uuidItemSelected,c=e.uuidWorkspaceSelected,d=(0,y.PR)()||{};return(0,m.jsx)(r.Z,{after:n,afterHidden:!n||t,afterWidth:n?50*f.iI:0,afterWidthOverride:!0,before:(0,m.jsx)(w.M,{children:(0,m.jsx)(k,{isItemSelected:function(e){var n=e.uuid,t=e.uuidWorkspace;return c===t&&o===n},sections:(0,P.SA)(d)})}),beforeWidth:w.W,title:"Settings",uuid:"settings/index",children:i})}},29237:function(e,n,t){"use strict";var r=t(85617),i=t(67971),o=t(86673),c=t(19711),d=t(23831),u=t(73942),a=t(37391),s=t(49125),l=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),h=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],u.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||d.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||d.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||d.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||d.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||d.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),p=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],u.n_,u.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||d.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||d.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),g=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),m=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],u.M8,u.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,d=e.contentContainerRef,u=e.dark,a=e.footer,s=e.fullHeight,f=void 0===s||s,b=e.fullWidth,x=void 0===b||b,v=e.header,k=e.headerHeight,w=e.headerIcon,P=e.headerPaddingVertical,y=e.headerTitle,j=e.maxHeight,I=e.maxWidth,Z=e.minWidth,_=e.noPadding,O=e.overflowVisible,W=e.subtitle,S=e.success;return(0,l.jsxs)(h,{borderless:n,dark:u,fullHeight:f,fullWidth:x,maxHeight:j,maxWidth:I,minWidth:Z,overflowVisible:O,ref:r,success:S,children:[(v||y)&&(0,l.jsxs)(p,{headerPaddingVertical:P,height:k,children:[v&&v,y&&(0,l.jsx)(i.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,l.jsxs)(i.ZP,{alignItems:"center",children:[w&&w,(0,l.jsx)(o.Z,{ml:w?1:0,children:(0,l.jsx)(c.ZP,{bold:!0,default:!0,children:y})})]})})]}),(0,l.jsxs)(g,{maxHeight:j,noPadding:_,overflowVisible:O,ref:d,children:[W&&(0,l.jsx)(o.Z,{mb:2,children:(0,l.jsx)(c.ZP,{default:!0,children:W})}),t]}),a&&(0,l.jsx)(m,{children:a})]})}},96283:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(38860),o=t.n(i),c=t(29237),d=t(41788),u=t(30775),a=t(86673),s=t(20582),l=t(82531),f=t(49125),h=t(79585),p=t(9736),g=t(28598);function m(){var e=((0,p.PR)()||{}).id,n=l.ZP.users.detail(e),t=n.data,r=n.mutate,i=null===t||void 0===t?void 0:t.user;return(0,g.jsx)(u.Z,{uuidItemSelected:h.DQ,uuidWorkspaceSelected:h.tC,children:(0,g.jsx)(a.Z,{p:f.cd,children:(0,g.jsx)(c.Z,{children:(0,g.jsx)(s.Z,{disabledFields:["roles"],onSaveSuccess:r,user:i})})})})}m.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,d.Z)(m)},10736:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/account/profile",function(){return t(96283)}])}},function(e){e.O(0,[844,1424,1005,3881,9774,2888,179],(function(){return n=10736,e(e.s=n);var n}));var n=e.O();_N_E=n}]);