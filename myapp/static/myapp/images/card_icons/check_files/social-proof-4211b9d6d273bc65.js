(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7455],{61150:function(e,t,n){"use strict";var l,s=n(67294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}t.Z=function(e){return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),l||(l=s.createElement("path",{fill:"#5653FE",d:"M4.333 3.44C3.045 3.44 2 4.516 2 5.84c0 1.326 1.045 2.4 2.333 2.4 2.332 0 .777 4.64-2.333 4.64V14C7.551 14 9.726 3.44 4.333 3.44Zm6.72 0c-1.287 0-2.332 1.075-2.332 2.4 0 1.326 1.045 2.4 2.332 2.4 2.333 0 .778 4.64-2.332 4.64V14c5.55 0 7.725-10.56 2.332-10.56Z"})))}},68284:function(e,t,n){"use strict";var l,s=n(67294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}t.Z=function(e){return s.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),l||(l=s.createElement("path",{fill:"#5653FE",d:"M11.667 14C12.955 14 14 12.926 14 11.6c0-1.325-1.045-2.4-2.333-2.4-2.332 0-.777-4.64 2.333-4.64V3.44C8.449 3.44 6.274 14 11.667 14Zm-6.72 0c1.287 0 2.332-1.074 2.332-2.4 0-1.325-1.045-2.4-2.332-2.4-2.333 0-.778-4.64 2.332-4.64V3.44C1.73 3.44-.446 14 4.947 14Z"})))}},48593:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/v3/social-proof",function(){return n(79789)}])},79789:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return E},default:function(){return C}});var l=n(85893),s=n(11926);n(63217);var r=n(82115),a=n(50930);n(97972);var i=n(27295),c=n(3913),o=n(80222),u=n(11163),x=n(67294),p=n(8720),d=n(12628),h=n(81361);let f=()=>{let[e,t]=(0,x.useState)(!1),[n,l]=(0,x.useState)([]),s=(0,h.NQ)();return(0,x.useEffect)(()=>{if(!(null==s?void 0:s.ready))return;let e=[];Object.entries(s.getFeatures()).forEach(t=>{let[n,l]=t,r=s.evalFeature(n).experiment,a=s.evalFeature(n).experimentResult;a&&r&&e.push({experiment_name:r.key,experiment_variation_id:a.variationId,experiment_hash_value:a.hashValue,in_experiment:a.inExperiment,hash_used:a.hashUsed,feature_value:a.value})}),s.getExperiments().forEach(t=>{let n=s.run(t);n.inExperiment&&e.push({experiment_name:t.key,experiment_variation_id:n.variationId,experiment_hash_value:n.hashValue,in_experiment:n.inExperiment,hash_used:n.hashUsed})}),l(e),t(!0)},[s]),{growthBookExperimentResults:n,isGrowthBookExperimentResultsReady:e}};var m=n(13196),g=e=>{let{title:t,imageUrl:n,callout:s}=e;return(0,l.jsxs)("div",{className:"w-full space-y-2 pt-2",children:[(0,l.jsx)("h2",{className:"text-center text-[30px] font-bold label-text-all-on-secondary leading-[38px]",children:t}),(0,l.jsx)("div",{className:"w-full h-[328px] bg-no-repeat bg-center bg-contain",style:{backgroundImage:"url(".concat(n,")"),width:"calc(100%)"}}),(0,l.jsxs)("div",{className:"flex w-full py-4 px-2 items-start gap-2 rounded-lg bg-[#F1F1F1]",children:[(0,l.jsx)("div",{className:"m-h-[28px] m-w-[28px] h-[28px] w-[28px] shrink-0",style:{backgroundImage:"url(".concat(s.imageUrl,")"),backgroundSize:"contain",width:"28px"}}),(0,l.jsx)("p",{className:"flex-1 text-[14px] label-text-all-primary",children:(0,m.r)(s.htmlText)})]})]})},v=n(94184),j=n.n(v),_=e=>{let{title:t,subtitle:n,imageUrl:s,className:r}=e;return(0,l.jsxs)("div",{className:j()("w-full space-y-4 pt-6",r),children:[(0,l.jsxs)("div",{className:"space-y-1",children:[(0,l.jsx)("h1",{className:"text-center text-[28px] font-extrabold label-text-all-accent",children:t}),(0,l.jsx)("p",{className:"text-center text-lg font-medium label-text-all-primary",children:n})]}),(0,l.jsx)("div",{className:"w-full h-[330px] bg-no-repeat bg-center bg-contain",style:{backgroundImage:"url(".concat(s,")"),width:"calc(100%)"}})]})},b=n(68284),w=n(61150),N=n(63464),y=n(83147);let k=e=>{let{preloadImages:t,children:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{images:t}),(0,l.jsx)(a.Z,{}),(0,l.jsx)(s.Z,{notPadded:!0,noGap:!0,header:(0,l.jsx)(i.Z,{}),children:n})]})};var E=!0,C=e=>{let{pageProps:t,preloadImages:n,styles:s}=e,r=(0,p.Z)(),a=(0,d._)(),i=(0,u.useRouter)(),{t:h}=(0,N.$G)();(0,y.a)();let m=i.query.prc_id,{growthBookExperimentResults:v,isGrowthBookExperimentResultsReady:j}=f();(0,x.useEffect)(()=>{r.trackEvent("pr_funnel_quiz_teaser_view",{funnel_type:a,teaser_name:t.slug,growthBookExperimentResults:v});let e=new URL(window.location.href);e.pathname="/v3/quiz",i.prefetch(e.toString(),i.asPath,{locale:i.locale,priority:!0})},[]);let E=()=>{i.push({pathname:"/v3/quiz",query:{...i.query}})};if(!t)return(0,l.jsx)(l.Fragment,{});let{type:C,title:Z,subtitle:F,image:O,callout:P,button:S}=t;return"13"===m?(0,l.jsxs)(k,{preloadImages:n,children:[(0,l.jsx)("div",{className:"flex justify-center px-4 mt-4 mb-[10px] pb-[104px]",children:(0,l.jsxs)("div",{className:"px-6 pt-4 pb-8 flex flex-col justify-between w-full h-full bg-[#EEEEFF] rounded-lg max-w-[370px]",children:[(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-[#5653FE] text-[30px] font-extrabold text-center",children:(0,l.jsxs)(N.cC,{children:[" ",h("hw_social_proof.people_count")]})}),(0,l.jsx)("p",{className:"text-[#24234C] text-[16px] font-normal text-center",children:h("hw_social_proof.already_use")})]}),(0,l.jsxs)("div",{className:"flex flex-col bg-white rounded-lg pt-6 pb-4 px-3 mt-6",children:[(0,l.jsxs)("div",{className:"text-base font-extrabold leading-6 text-center px-5 relative",children:[(0,l.jsx)(b.Z,{className:"absolute -top-2 left-0"}),(0,l.jsx)("p",{className:"text-center",children:(0,l.jsx)(N.cC,{children:h("hw_social_proof.phrase")})}),(0,l.jsx)(w.Z,{className:"absolute -bottom-2 right-0"})]}),(0,l.jsx)("img",{className:"w-[110px] h-auto min-h-[38px] m-auto mt-2",src:"https://d14fbcf1p6wyzn.cloudfront.net/v3/ai/social-proof/harvard_business_social_proof.png"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{className:"text-[#24234C] font-semibold text-center m-auto",children:(0,l.jsxs)(N.cC,{children:[" ",h("hw_social_proof.mentioned_in")]})}),(0,l.jsx)("img",{className:"w-[320px] h-auto min-h-[128px] m-auto",src:"https://d14fbcf1p6wyzn.cloudfront.net/v3/ai/social-proof/ai_tools_social_proof.png"})]})]})}),(0,l.jsx)(c.Z,{children:(0,l.jsx)(o.Z,{onClick:E,children:S||"CONTINUE"})})]}):(0,l.jsxs)(k,{preloadImages:n,children:["callout"===C?(0,l.jsx)("div",{className:"px-4",children:(0,l.jsx)(g,{title:Z,imageUrl:O,callout:P})}):(0,l.jsx)(_,{title:Z,subtitle:F,imageUrl:O,className:"pb-[100px]"}),(0,l.jsx)("div",{className:" px-4 mt-6 mb-8",children:(0,l.jsx)(o.Z,{onClick:E,children:S||"CONTINUE"})})]})}},50930:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var l,s,r=n(85893),a=n(8720),i=n(43767),c=n(74870);(l=s||(s={})).facebook="facebook",l.tiktok="tiktok",l.google="google",l.google_gdn="goole_gdn",l.default="default";var o=n(25675),u=n.n(o),x=n(11163),p=n(67294),d=n(67421),h=n(4480),f=()=>{let e=(0,x.useRouter)(),{t}=(0,d.$G)(),{funnelType:n}=(0,i.i)(),[l,o]=(0,h.FV)(c.N),{trackEvent:f}=(0,a.Z)();(0,p.useEffect)(()=>{l&&f("pr_funnel_side_bar_open",{path:e.pathname})},[l]);let m=t=>{f("pr_funnel_side_bar_click",{path:e.pathname,option:t}),e.push(t)};return l?(0,r.jsx)("div",{className:"absolute z-50 bg-slate-100 max-[1024px]:max-w-[400px] vh-full mx-auto inset-x-0 lg:w-full",children:(0,r.jsxs)("div",{className:"relative h-full flex",children:[(0,r.jsx)("div",{className:"w-[10%] min-[1024px]:w-0 bg-[#000000] bg-opacity-50 "}),(0,r.jsxs)("div",{className:"w-[90%] min-[1024px]:w-[100%] flex-col p-6 min-[1024px]:p-12 surface-primary",children:[(0,r.jsx)("div",{className:"flex flex-col items-end",children:(0,r.jsx)(u(),{src:"/assets/icons/icon-cross.svg",alt:"",width:24,height:24,onClick:()=>{o(!1)},priority:!0})}),(0,r.jsx)("div",{className:"flex-col mt-[65px] label-text-primary",children:(0,r.jsxs)("div",{className:"flex flex-col text-lg font-medium mb-12 gap-4",children:[(0,r.jsx)("div",{onClick:()=>m("https://legal.coursiv.io/terms"),children:t("Terms & Conditions")}),(0,r.jsx)("div",{onClick:()=>m("https://legal.coursiv.io/privacy"),children:t("Privacy Policy")}),(0,r.jsx)("div",{onClick:()=>m("https://legal.coursiv.io/subscription"),children:t("Subscription Terms")}),!e.query.utm_source&&(0,r.jsx)("div",{onClick:()=>m("https://app.coursiv.io"),children:t("My Account")}),n!==s.tiktok&&(0,r.jsx)("div",{onClick:()=>m("https://coursiv.freshdesk.com/en/support/home?utm_source=funnel&utm_medium=link&utm_campaign=registration_Funnel"),children:t("Support Center")})]})})]})]})}):null}},74870:function(e,t,n){"use strict";n.d(t,{N:function(){return l}});let l=(0,n(4480).cn)({key:"showSidebarState",default:!1})},63217:function(e,t,n){"use strict";n.d(t,{X8:function(){return l},z8:function(){return s}}),n(34155);let l=(e,t)=>{if(e&&t)return e.replaceAll("_age_",t)},s=(e,t)=>{if(e&&t)return e.replaceAll("_gender_",t)}},97972:function(e,t,n){"use strict";n.d(t,{jB:function(){return s}}),n(45577),n(63217);let l=e=>{let t=[];return!function e(n){if("string"==typeof n)n.match(/\.(jpeg|jpg|gif|png|svg|webp|json)$/)&&t.push(n);else if(Array.isArray(n))n.forEach(t=>e(t));else if("object"==typeof n)for(let t in n)e(n[t])}(e),t},s=(e,t)=>{if(!e||+t>e.length)return[];let n=e.find(e=>e.ordering===t);return n?l(n):[]}},3913:function(e,t,n){"use strict";var l=n(85893),s=n(94184),r=n.n(s);t.Z=e=>{let{children:t,fixed:n=!0,transparentBackground:s=!1}=e;return(0,l.jsx)("div",{className:r()("mx-auto max-w-[400px]",{"fixed bottom-0 left-0 right-0":n}),children:(0,l.jsx)("div",{className:r()("px-4 py-6 flex flex-col",{"bg-white":!s,"bg-transparent":s}),children:t})})}},82115:function(e,t,n){"use strict";var l=n(85893),s=n(9008),r=n.n(s);t.Z=e=>{let{images:t}=e;return(0,l.jsx)(l.Fragment,{children:t?(0,l.jsx)(r(),{children:t.map((e,t)=>{if(e)return(0,l.jsx)("link",{rel:"preload",as:"image",href:e},"".concat(t,"_").concat(e))})}):(0,l.jsx)(l.Fragment,{})})}},11926:function(e,t,n){"use strict";var l=n(85893),s=n(94184),r=n.n(s);t.Z=e=>{let{header:t,children:n,notPadded:s,noGap:a,showHeader:i=!0}=e;return(0,l.jsxs)("div",{className:r()("mx-auto flex flex-col max-w-[400px] relative",{"pb-[104px]":!s,"gap-6":!a}),children:[i&&(0,l.jsx)("div",{children:t||null}),(0,l.jsx)("div",{className:"w-full h-full",children:n})]})}},27295:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var l,s=n(85893),r=n(4480),a=n(74870),i=n(67294);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var o=function(e){return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),l||(l=i.createElement("path",{fill:"currentColor",d:"M2 5.333C2 4.597 2.56 4 3.25 4h17.5c.69 0 1.25.597 1.25 1.333 0 .737-.56 1.334-1.25 1.334H3.25C2.56 6.667 2 6.07 2 5.333ZM2 12c0-.736.56-1.333 1.25-1.333h17.5c.69 0 1.25.597 1.25 1.333s-.56 1.333-1.25 1.333H3.25C2.56 13.333 2 12.736 2 12Zm0 6.667c0-.737.56-1.334 1.25-1.334h17.5c.69 0 1.25.597 1.25 1.334 0 .736-.56 1.333-1.25 1.333H3.25C2.56 20 2 19.403 2 18.667Z"})))},u=e=>{let{hideMenu:t}=e,[n,l]=(0,r.FV)(a.N);return(0,s.jsxs)("div",{className:"flex flex-row items-center justify-end w-full px-4 py-2 h-12 relative",children:[(0,s.jsx)("img",{className:"absolute left-1/2 -translate-x-1/2",src:"/assets/logo.svg",alt:"Coursiv",width:92,height:32}),!t&&(0,s.jsx)(o,{onClick:()=>l(!0),className:"label-icons-secondary"})]})}}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=48593)}),_N_E=e.O()}]);