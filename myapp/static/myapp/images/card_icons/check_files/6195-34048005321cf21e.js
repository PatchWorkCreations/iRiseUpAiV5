"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6195],{50930:function(e,t,r){r.d(t,{Z:function(){return m}});var s,n,i=r(85893),l=r(8720),a=r(43767),c=r(74870);(s=n||(n={})).facebook="facebook",s.tiktok="tiktok",s.google="google",s.google_gdn="goole_gdn",s.default="default";var o=r(25675),u=r.n(o),d=r(11163),x=r(67294),h=r(67421),p=r(4480),m=()=>{let e=(0,d.useRouter)(),{t}=(0,h.$G)(),{funnelType:r}=(0,a.i)(),[s,o]=(0,p.FV)(c.N),{trackEvent:m}=(0,l.Z)();(0,x.useEffect)(()=>{s&&m("pr_funnel_side_bar_open",{path:e.pathname})},[s]);let f=t=>{m("pr_funnel_side_bar_click",{path:e.pathname,option:t}),e.push(t)};return s?(0,i.jsx)("div",{className:"absolute z-50 bg-slate-100 max-[1024px]:max-w-[400px] vh-full mx-auto inset-x-0 lg:w-full",children:(0,i.jsxs)("div",{className:"relative h-full flex",children:[(0,i.jsx)("div",{className:"w-[10%] min-[1024px]:w-0 bg-[#000000] bg-opacity-50 "}),(0,i.jsxs)("div",{className:"w-[90%] min-[1024px]:w-[100%] flex-col p-6 min-[1024px]:p-12 surface-primary",children:[(0,i.jsx)("div",{className:"flex flex-col items-end",children:(0,i.jsx)(u(),{src:"/assets/icons/icon-cross.svg",alt:"",width:24,height:24,onClick:()=>{o(!1)},priority:!0})}),(0,i.jsx)("div",{className:"flex-col mt-[65px] label-text-primary",children:(0,i.jsxs)("div",{className:"flex flex-col text-lg font-medium mb-12 gap-4",children:[(0,i.jsx)("div",{onClick:()=>f("https://legal.coursiv.io/terms"),children:t("Terms & Conditions")}),(0,i.jsx)("div",{onClick:()=>f("https://legal.coursiv.io/privacy"),children:t("Privacy Policy")}),(0,i.jsx)("div",{onClick:()=>f("https://legal.coursiv.io/subscription"),children:t("Subscription Terms")}),!e.query.utm_source&&(0,i.jsx)("div",{onClick:()=>f("https://app.coursiv.io"),children:t("My Account")}),r!==n.tiktok&&(0,i.jsx)("div",{onClick:()=>f("https://coursiv.freshdesk.com/en/support/home?utm_source=funnel&utm_medium=link&utm_campaign=registration_Funnel"),children:t("Support Center")})]})})]})]})}):null}},91876:function(e,t,r){r.d(t,{Z:function(){return u}});var s,n=r(85893),i=r(94184),l=r.n(i),a=r(67294);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var o=function(e){return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:21,height:20,fill:"none"},e),s||(s=a.createElement("path",{fill:"#fff",d:"M8.244 15.59a.833.833 0 0 1 0-1.18l4.41-4.41-4.41-4.41a.833.833 0 1 1 1.179-1.18l5 5a.833.833 0 0 1 0 1.18l-5 5a.833.833 0 0 1-1.179 0Z"})))},u=e=>{let{image:t,text:r,color:s,optionIdx:i,onClick:a}=e;return(0,n.jsxs)("div",{className:"flex flex-col justify-end h-[160px] w-[148px] bg-no-repeat bg-bottom bg-[length:125px] border-2 rounded-xl border-accent relative cursor-pointer",onClick:()=>a(i),children:[(0,n.jsx)("img",{className:"absolute left-1/2 -translate-x-1/2",width:"136px",height:"176px",src:t,alt:""}),(0,n.jsxs)("button",{className:l()("absolute h-10 bottom-0 left-0 right-0 p-3 rounded-b-lg flex justify-center items-center action-accent-normal border-accent"),children:[(0,n.jsx)("span",{className:"label-text-all-on-primary text-base max-[350px]:text-sm font-semibold",children:r}),(0,n.jsx)(o,{})]})]})}},27216:function(e,t,r){var s=r(85893),n=r(13196);r(67294),t.Z=e=>{let{title:t,subtitle:r,titleSize:i="base"}=e;return(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("h1",{className:"label-text-primary font-bold text-center ".concat("sm"===i?"text-2xl":"text-3xl"),children:(0,n.r)(t||"")}),(0,s.jsx)("p",{className:"label-text-all-secondary text-center text-base",children:(0,n.r)(r||"")})]})}},74870:function(e,t,r){r.d(t,{N:function(){return s}});let s=(0,r(4480).cn)({key:"showSidebarState",default:!1})},41295:function(e,t,r){r.d(t,{_:function(){return n}});var s=r(31955);let n=()=>{let e=s.Z.get("country_code");return{isCAJurisdictionHidden:"CA"===s.Z.get("region")&&"US"===e}}},63217:function(e,t,r){r.d(t,{X8:function(){return s},z8:function(){return n}}),r(34155);let s=(e,t)=>{if(e&&t)return e.replaceAll("_age_",t)},n=(e,t)=>{if(e&&t)return e.replaceAll("_gender_",t)}},82115:function(e,t,r){var s=r(85893),n=r(9008),i=r.n(n);t.Z=e=>{let{images:t}=e;return(0,s.jsx)(s.Fragment,{children:t?(0,s.jsx)(i(),{children:t.map((e,t)=>{if(e)return(0,s.jsx)("link",{rel:"preload",as:"image",href:e},"".concat(t,"_").concat(e))})}):(0,s.jsx)(s.Fragment,{})})}},11926:function(e,t,r){var s=r(85893),n=r(94184),i=r.n(n);t.Z=e=>{let{header:t,children:r,notPadded:n,noGap:l,showHeader:a=!0}=e;return(0,s.jsxs)("div",{className:i()("mx-auto flex flex-col max-w-[400px] relative",{"pb-[104px]":!n,"gap-6":!l}),children:[a&&(0,s.jsx)("div",{children:t||null}),(0,s.jsx)("div",{className:"w-full h-full",children:r})]})}},310:function(e,t,r){var s=r(85893),n=r(41664),i=r.n(n);t.Z=e=>(0,s.jsx)(i(),{href:e.to||"#",target:"_blank",title:e.title||"",className:e.className||"",children:e.children})},28977:function(e,t,r){r.d(t,{Z:function(){return h}});var s=r(85893),n=r(35002),i=r(67294),l=r(41295),a=r(63464),c=function(e){let{type:t,jurisdiction:r}=e,{t:n}=(0,a.$G)(),i=new Date().getFullYear();return(0,s.jsx)("p",{className:"label-text-all-secondary text-xs font-normal text-center min-h-[24px]",children:(0,s.jsx)(a.cC,{i18nKey:(()=>{if("main"===t)switch(r){case"COURSIV":return n("jurisdictions.main.COURSIV",{year:i});case"ARNEGEN":return n("jurisdictions.main.ARNEGEN",{year:i});case"EDULAGOON":return n("jurisdictions.main.EDULAGOON",{year:i});case"SCORPIOS":return n("jurisdictions.main.SCORPIOS",{year:i});case"ZIMRAN":return n("jurisdictions.main.ZIMRAN",{year:i})}if("start-quiz"===t)switch(r){case"COURSIV":return n("jurisdictions.start-quiz.COURSIV");case"ARNEGEN":return n("jurisdictions.start-quiz.ARNEGEN");case"EDULAGOON":return n("jurisdictions.start-quiz.EDULAGOON");case"SCORPIOS":return n("jurisdictions.start-quiz.SCORPIOS");case"ZIMRAN":return n("jurisdictions.start-quiz.ZIMRAN")}})(),components:{br:(0,s.jsx)("br",{})}})})},o=r(310),u=r(41664),d=r.n(u),x=e=>{let{renderWithTrans:t,data:r}=e;return(0,s.jsxs)("p",{className:"label-text-all-secondary text-xs font-normal text-center break-words",children:[(0,s.jsx)(a.cC,{components:{privacy:(0,s.jsx)(o.Z,{className:"underline",to:"https://legal.coursiv.io/privacy"}),terms:(0,s.jsx)(o.Z,{className:"underline",to:"https://legal.coursiv.io/terms"}),subscription:(0,s.jsx)(o.Z,{className:"underline",to:"https://legal.coursiv.io/subscription"})},children:r.text}),!t&&(0,s.jsxs)(s.Fragment,{children:["\xa0",(0,s.jsx)(d(),{className:"underline",href:"https://legal.coursiv.io/terms",target:"_blank",children:r.terms}),",\xa0",(0,s.jsx)(d(),{className:"underline",href:"https://legal.coursiv.io/privacy",target:"_blank",children:r.privacy}),",\xa0",(0,s.jsx)(d(),{className:"underline",href:"https://legal.coursiv.io/subscription",target:"_blank",children:r.subscription})]})]})},h=e=>{let{jurisdictionType:t,data:r,renderWithTrans:a=!1}=e,[o,u]=(0,i.useState)(""),d=(0,n.P)(),{isCAJurisdictionHidden:h}=(0,l._)(),p=async()=>{u((await d).jurisdiction)};return((0,i.useEffect)(()=>{p()},[]),r)?(0,s.jsx)("div",{className:"pt-6 pb-4 px-4",children:(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(x,{data:r,renderWithTrans:a}),!h&&o&&(0,s.jsx)(c,{type:t,jurisdiction:o})]})}):null}},27295:function(e,t,r){r.d(t,{Z:function(){return u}});var s,n=r(85893),i=r(4480),l=r(74870),a=r(67294);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var o=function(e){return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),s||(s=a.createElement("path",{fill:"currentColor",d:"M2 5.333C2 4.597 2.56 4 3.25 4h17.5c.69 0 1.25.597 1.25 1.333 0 .737-.56 1.334-1.25 1.334H3.25C2.56 6.667 2 6.07 2 5.333ZM2 12c0-.736.56-1.333 1.25-1.333h17.5c.69 0 1.25.597 1.25 1.333s-.56 1.333-1.25 1.333H3.25C2.56 13.333 2 12.736 2 12Zm0 6.667c0-.737.56-1.334 1.25-1.334h17.5c.69 0 1.25.597 1.25 1.334 0 .736-.56 1.333-1.25 1.333H3.25C2.56 20 2 19.403 2 18.667Z"})))},u=e=>{let{hideMenu:t}=e,[r,s]=(0,i.FV)(l.N);return(0,n.jsxs)("div",{className:"flex flex-row items-center justify-end w-full px-4 py-2 h-12 relative",children:[(0,n.jsx)("img",{className:"absolute left-1/2 -translate-x-1/2",src:"/assets/logo.svg",alt:"Coursiv",width:92,height:32}),!t&&(0,n.jsx)(o,{onClick:()=>s(!0),className:"label-icons-secondary"})]})}}}]);