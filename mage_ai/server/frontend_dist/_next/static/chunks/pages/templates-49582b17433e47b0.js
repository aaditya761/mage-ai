(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5240],{1210:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(82394),i=r(21831),o=r(82684),u=r(47999),s=r(49894),l=r(93461),a=r(57384),c=r(41424),d=r(72454),f=r(28598);function h(e,t){var r=e.children;return(0,f.jsx)(d.HS,{ref:t,children:r})}var p=o.forwardRef(h),v=r(32063),b=r(85019),m=r(82531),j=r(66166),w=r(3055),O=r(49125),_=r(91427),x=r(24141);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,n=e.after,h=e.afterHidden,g=e.afterWidth,P=e.afterWidthOverride,Z=e.before,k=e.beforeWidth,C=e.breadcrumbs,E=e.children,M=e.errors,S=e.headerMenuItems,T=e.headerOffset,A=e.mainContainerHeader,N=e.navigationItems,B=e.setErrors,H=e.subheaderChildren,I=e.title,W=e.uuid,D=(0,x.i)().width,R="dashboard_after_width_".concat(W),U="dashboard_before_width_".concat(W),z=(0,o.useRef)(null),F=(0,o.useState)(P?g:(0,_.U2)(R,g)),X=F[0],V=F[1],q=(0,o.useState)(!1),G=q[0],J=q[1],K=(0,o.useState)(Z?Math.max((0,_.U2)(U,k),13*O.iI):null),L=K[0],Q=K[1],Y=(0,o.useState)(!1),$=Y[0],ee=Y[1],te=(0,o.useState)(null)[1],re=m.ZP.projects.list({},{revalidateOnFocus:!1}).data,ne=null===re||void 0===re?void 0:re.projects,ie={label:function(){var e;return null===ne||void 0===ne||null===(e=ne[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];C?(r&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(C))):(null===ne||void 0===ne?void 0:ne.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return I}}]),(0,o.useEffect)((function(){null===z||void 0===z||!z.current||G||$||null===te||void 0===te||te(z.current.getBoundingClientRect().width)}),[G,X,$,L,z,te,D]),(0,o.useEffect)((function(){G||(0,_.t8)(R,X)}),[h,G,X,R]),(0,o.useEffect)((function(){$||(0,_.t8)(U,L)}),[$,L,U]);var ue=(0,j.Z)(g);return(0,o.useEffect)((function(){P&&ue!==g&&V(g)}),[P,g,ue]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:I}),(0,f.jsx)(c.Z,{breadcrumbs:oe,menuItems:S,project:null===ne||void 0===ne?void 0:ne[0],version:null===ne||void 0===ne||null===(t=ne[0])||void 0===t?void 0:t.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===N||void 0===N?void 0:N.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:N,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(v.Z,{after:n,afterHeightOffset:w.Mz,afterHidden:h,afterMousedownActive:G,afterWidth:X,before:Z,beforeHeightOffset:w.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(Z?L:0),headerOffset:T,hideAfterCompletely:!0,leftOffset:Z?d.k1:null,mainContainerHeader:A,mainContainerRef:z,setAfterMousedownActive:J,setAfterWidth:V,setBeforeMousedownActive:ee,setBeforeWidth:Q,children:[H&&(0,f.jsx)(p,{children:H}),E]})})]}),M&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===B||void 0===B?void 0:B(null)},children:(0,f.jsx)(s.Z,y(y({},M),{},{onClose:function(){return null===B||void 0===B?void 0:B(null)}}))})]})}},23478:function(e,t,r){"use strict";r.r(t);var n=r(77837),i=r(38860),o=r.n(i),u=r(82684),s=r(2485),l=r(1210),a=r(41788),c=r(57541),d=r(18908),f=r(59e3),h=r(28598);function p(){var e=(0,u.useState)(!1),t=e[0],r=e[1],n=(0,u.useState)(null),i=n[0],o=n[1],a=(0,u.useState)(null),p=a[0],v=a[1],b=(0,f.iV)();(0,u.useEffect)((function(){var e=b.new,t=b.object_type,n=b.pipeline_uuid;t&&o(t),n&&v(n),r(!!e)}),[b]);var m=(0,u.useMemo)((function(){var e=[t?"New":"Browse"];return i&&e.push(i),p&&e.push(p),e}),[t,i,p]),j=(0,u.useMemo)((function(){return d.R===i}),[i]);return(0,h.jsx)(l.Z,{addProjectBreadcrumbToCustomBreadcrumbs:t,breadcrumbs:t?[{label:function(){return"Templates"},linkProps:{href:j?"/templates?object_type=".concat(d.R):"/templates"}},{bold:!0,label:function(){return"New"}}]:null,title:"Templates",uuid:"Templates/index",children:(0,h.jsx)(s.Z,{defaultTab:j?c.A2:null,objectType:i,pipelineUUID:p,showAddingNewTemplates:t},m.join("_"))})}p.getInitialProps=(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,a.Z)(p)},87710:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates",function(){return r(23478)}])}},function(e){e.O(0,[844,9902,2599,1774,4786,6639,109,8411,1424,1005,7815,5704,8952,7722,4822,3391,1484,2485,9774,2888,179],(function(){return t=87710,e(e.s=t);var t}));var t=e.O();_N_E=t}]);