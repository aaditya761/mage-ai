(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1009],{1210:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(82394),i=r(21831),o=r(82684),s=r(47999),u=r(49894),c=r(93461),a=r(57384),l=r(41424),d=r(72454),f=r(28598);function p(e,t){var r=e.children;return(0,f.jsx)(d.HS,{ref:t,children:r})}var h=o.forwardRef(p),v=r(32063),b=r(85019),j=r(82531),g=r(66166),O=r(3055),m=r(49125),P=r(91427),x=r(24141);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,n=e.after,p=e.afterHidden,y=e.afterWidth,w=e.afterWidthOverride,_=e.before,E=e.beforeWidth,k=e.breadcrumbs,C=e.children,A=e.errors,I=e.headerMenuItems,D=e.headerOffset,M=e.mainContainerHeader,S=e.navigationItems,N=e.setErrors,L=e.subheaderChildren,H=e.title,B=e.uuid,F=(0,x.i)().width,R="dashboard_after_width_".concat(B),W="dashboard_before_width_".concat(B),T=(0,o.useRef)(null),U=(0,o.useState)(w?y:(0,P.U2)(R,y)),z=U[0],Q=U[1],V=(0,o.useState)(!1),K=V[0],X=V[1],G=(0,o.useState)(_?Math.max((0,P.U2)(W,E),13*m.iI):null),$=G[0],q=G[1],J=(0,o.useState)(!1),Y=J[0],ee=J[1],te=(0,o.useState)(null)[1],re=j.ZP.projects.list({},{revalidateOnFocus:!1}).data,ne=null===re||void 0===re?void 0:re.projects,ie={label:function(){var e;return null===ne||void 0===ne||null===(e=ne[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];k?(r&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(k))):(null===ne||void 0===ne?void 0:ne.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return H}}]),(0,o.useEffect)((function(){null===T||void 0===T||!T.current||K||Y||null===te||void 0===te||te(T.current.getBoundingClientRect().width)}),[K,z,Y,$,T,te,F]),(0,o.useEffect)((function(){K||(0,P.t8)(R,z)}),[p,K,z,R]),(0,o.useEffect)((function(){Y||(0,P.t8)(W,$)}),[Y,$,W]);var se=(0,g.Z)(y);return(0,o.useEffect)((function(){w&&se!==y&&Q(y)}),[w,y,se]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:H}),(0,f.jsx)(l.Z,{breadcrumbs:oe,menuItems:I,project:null===ne||void 0===ne?void 0:ne[0],version:null===ne||void 0===ne||null===(t=ne[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===S||void 0===S?void 0:S.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:S,showMore:!0})}),(0,f.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(v.Z,{after:n,afterHeightOffset:O.Mz,afterHidden:p,afterMousedownActive:K,afterWidth:z,before:_,beforeHeightOffset:O.Mz,beforeMousedownActive:Y,beforeWidth:d.k1+(_?$:0),headerOffset:D,hideAfterCompletely:!0,leftOffset:_?d.k1:null,mainContainerHeader:M,mainContainerRef:T,setAfterMousedownActive:X,setAfterWidth:Q,setBeforeMousedownActive:ee,setBeforeWidth:q,children:[L&&(0,f.jsx)(h,{children:L}),C]})})]}),A&&(0,f.jsx)(s.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===N||void 0===N?void 0:N(null)},children:(0,f.jsx)(u.Z,Z(Z({},A),{},{onClose:function(){return null===N||void 0===N?void 0:N(null)}}))})]})}},51099:function(e,t,r){"use strict";r.d(t,{Et:function(){return f},Q:function(){return d}});r(82684);var n=r(60328),i=r(67971),o=r(86673),s=r(19963),u=r(22341),c=r(73899),a=r(49125),l=r(28598),d=30,f=9;t.ZP=function(e){var t=e.page,r=e.maxPages,d=e.onUpdate,f=e.totalPages,p=[],h=r;if(h>f)p=Array.from({length:f},(function(e,t){return t}));else{var v=Math.floor(h/2),b=t-v;t+v>=f?(b=f-h+2,h-=2):t-v<=0?(b=0,h-=2):(h-=4,b=t-Math.floor(h/2)),p=Array.from({length:h},(function(e,t){return t+b}))}return(0,l.jsx)(l.Fragment,{children:f>0&&(0,l.jsxs)(i.ZP,{alignItems:"center",children:[(0,l.jsx)(n.Z,{disabled:0===t,onClick:function(){return d(t-1)},children:(0,l.jsx)(u.Hd,{size:1.5*a.iI,stroke:s.Av})}),!p.includes(0)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{ml:1,children:(0,l.jsx)(n.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!p.includes(1)&&(0,l.jsx)(o.Z,{ml:1,children:(0,l.jsx)(n.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,l.jsx)(o.Z,{ml:1,children:(0,l.jsx)(n.Z,{backgroundColor:e===t&&c.a$,borderLess:!0,noBackground:!0,notClickable:e===t,onClick:function(){e!==t&&d(e)},children:e+1})},e)})),!p.includes(f-1)&&(0,l.jsxs)(l.Fragment,{children:[!p.includes(f-2)&&(0,l.jsx)(o.Z,{ml:1,children:(0,l.jsx)(n.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,l.jsx)(o.Z,{ml:1,children:(0,l.jsx)(n.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(f-1)},children:f})},f-1)]}),(0,l.jsx)(o.Z,{ml:1}),(0,l.jsx)(n.Z,{disabled:t===f-1,onClick:function(){return d(t+1)},children:(0,l.jsx)(u.Kw,{size:1.5*a.iI,stroke:s.Av})})]})})}},66050:function(e,t,r){"use strict";var n;r.d(t,{V:function(){return n}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running",e.UPSTREAM_FAILED="upstream_failed",e.CONDITION_FAILED="condition_failed"}(n||(n={}))},92597:function(e,t,r){"use strict";r.r(t);var n=r(77837),i=r(82394),o=r(38860),s=r.n(o),u=r(82684),c=r(34376),a=r(1210),l=r(67971),d=r(51099),f=r(97496),p=r(41788),h=r(55378),v=r(86673),b=r(19711),j=r(82531),g=r(47409),O=r(49125),m=r(33766),P=r(59e3),x=r(28598);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(){var e=(0,c.useRouter)(),t=(0,u.useState)(null),r=t[0],n=t[1],i=(0,P.iV)(),o=null!==i&&void 0!==i&&i.page?i.page:0,s={_limit:d.Q,_offset:o*d.Q,disable_retries_grouping:!0};null!==i&&void 0!==i&&i.status&&(s.status=i.status);var p=j.ZP.pipeline_runs.list(s,{refreshInterval:3e3,revalidateOnFocus:!0}),y=p.data,w=p.mutate,_=(0,u.useMemo)((function(){return(null===y||void 0===y?void 0:y.pipeline_runs)||[]}),[y]),E=(0,u.useMemo)((function(){var e;return(null===y||void 0===y||null===(e=y.metadata)||void 0===e?void 0:e.count)||[]}),[y]);return(0,x.jsxs)(a.Z,{errors:r,setErrors:n,title:"Pipeline runs",uuid:"pipeline_runs/index",children:[(0,x.jsx)(v.Z,{mx:2,my:1,children:(0,x.jsxs)(l.ZP,{alignItems:"center",children:[(0,x.jsx)(b.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}),(0,x.jsx)(v.Z,{mr:1}),(0,x.jsxs)(h.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(t){t.preventDefault(),"all"===t.target.value?e.push("/pipeline-runs"):(0,m.u7)({page:0,status:t.target.value})},paddingRight:4*O.iI,placeholder:"Select run status",value:(null===i||void 0===i?void 0:i.status)||"all",children:[(0,x.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),g.IK.map((function(e){return(0,x.jsx)("option",{value:e,children:g.Do[e]},e)}))]})]})}),(0,x.jsx)(f.Z,{fetchPipelineRuns:w,pipelineRuns:_,setErrors:n}),(0,x.jsx)(v.Z,{p:2,children:(0,x.jsx)(d.ZP,{maxPages:d.Et,onUpdate:function(t){var r=Number(t),n=Z(Z({},i),{},{page:r>=0?r:0});e.push("/pipeline-runs","/pipeline-runs?".concat((0,P.uM)(n)))},page:Number(o),totalPages:Math.ceil(E/d.Q)})})]})}w.getInitialProps=(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,p.Z)(w)},33766:function(e,t,r){"use strict";r.d(t,{O2:function(){return d},g_:function(){return p},u7:function(){return f}});var n=r(75582),i=r(82394),o=r(34376),s=r.n(o),u=r(59e3),c=r(24224);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d="_offset";function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.preserveParams,i=t.pushHistory,o=t.replaceParams,c=(0,u.iV)(),a={};r&&r.forEach((function(e){c[e]&&(a[e]=c[e])}));var d,f=o?a:c;d=window.location.pathname;var p=i?s().push:s().replace,h=l(l({},f),e);Object.entries(e).forEach((function(e){var t=(0,n.Z)(e,2),r=t[0],i=t[1];"undefined"!==typeof i&&null!==i||delete h[r]}));var v=(0,u.uM)(h);v.length>=1&&(v="?".concat(v));var b="".concat(d.split("?")[0]).concat(v),j=s().router.basePath;return j&&b.startsWith(j)&&(b=b.replace(j,"")),p(s().router.pathname,b,{shallow:!0})}function p(e,t,r){var i=r.addingMultipleValues,o=r.isList,s=r.itemsPerPage,u=r.pushHistory,a=void 0!==u&&u,p=r.resetLimitParams,h=l({},e);i?Object.entries(t).forEach((function(e){var t=(0,n.Z)(e,2),r=t[0],i=t[1];if(Array.isArray(i)){var o="".concat(r,"[]");h[o]=i.map(String)}})):o?Object.entries(t).forEach((function(e){var t=(0,n.Z)(e,2),r=t[0],i=t[1],o=String(i),s="".concat(r,"[]"),u=h[s];u&&Array.isArray(u)?(u=u.map(String)).includes(o)?h[s]=(0,c.Od)(u,(function(e){return e===o})):h[s]=u.concat(o):h[s]=[o]})):h=l(l({},h),t),p&&(h._limit=s||20,h[d]=0),f(h,{pushHistory:a})}},60710:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-runs",function(){return r(92597)}])}},function(e){e.O(0,[844,9902,1424,1005,7815,7496,9774,2888,179],(function(){return t=60710,e(e.s=t);var t}));var t=e.O();_N_E=t}]);