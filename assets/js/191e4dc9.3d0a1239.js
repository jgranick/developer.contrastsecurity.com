"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[9383],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return a?o.createElement(f,l(l({ref:t},u),{},{components:a})):o.createElement(f,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3574:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),l=["components"],i={slug:"SafeLog4j",title:"SafeLog4j",authors:["costlow"],tags:["java"]},s=void 0,c={permalink:"/blog/SafeLog4j",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/blog/blog/2021-12-17.md",source:"@site/blog/2021-12-17.md",title:"SafeLog4j",description:"We've recently released SafeLog4j to help teams deal with the recent Log4j issue.",date:"2021-12-17T00:00:00.000Z",formattedDate:"December 17, 2021",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:1.835,truncated:!1,authors:[{name:"Erik Costlow",title:"DevRel",imageURL:"https://github.com/erikcostlow.png",key:"costlow"}],frontMatter:{slug:"SafeLog4j",title:"SafeLog4j",authors:["costlow"],tags:["java"]},prevItem:{title:"Securing Server-Side Kotlin",permalink:"/blog/Kotlin Agent"},nextItem:{title:"Finding Log4j2 Vulnerabilities",permalink:"/blog/Finding Log4j2"}},u={authorsImageUrls:[void 0]},p=[{value:"Why SafeLog4j is necessary",id:"why-safelog4j-is-necessary",level:2},{value:"How SafeLog4j works",id:"how-safelog4j-works",level:2},{value:"Respect to the AWS Corretto Team",id:"respect-to-the-aws-corretto-team",level:2}],d={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We've recently released ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Contrast-Security-OSS/safelog4j"},"SafeLog4j")," to help teams deal with the recent Log4j issue."),(0,n.kt)("p",null,"The tool is designed to help teams deal with the emergency and obtain time to patch applications and update to the secure version of log4j (currently 2.17.0 at time of writing). SafeLog4j uses an instrumentation-based approach similar to Contrast Assess and Protect but for a single purpose. SafeLog4j is available under an Apache 2 license and can be used by anyone, without an obligation to buy anything or even fill anything out."),(0,n.kt)("h2",{id:"why-safelog4j-is-necessary"},"Why SafeLog4j is necessary"),(0,n.kt)("p",null,"Many teams dealing with software are unable to locate which applications use log4j, and then to deal with them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"log4j could be buried in a fat jar, war, or ear"),(0,n.kt)("li",{parentName:"ul"},"log4j could be shaded in another jar"),(0,n.kt)("li",{parentName:"ul"},"log4j could be included in the appserver, not the code repo"),(0,n.kt)("li",{parentName:"ul"},"log4j could be part of dynamically loaded code or plugin"),(0,n.kt)("li",{parentName:"ul"},"log4j could be many different versions with different classloaders in a single app"),(0,n.kt)("li",{parentName:"ul"},"log4j could be masked by use of slf4j or other layers"),(0,n.kt)("li",{parentName:"ul"},"log4j could be renamed, recompiled, or otherwise changed")),(0,n.kt)("p",null,"Many approaches about finding log4j applications over the network are insufficient because they perform HTTP requests, which ignore the fact that many applications that use log4j are not web applications."),(0,n.kt)("h2",{id:"how-safelog4j-works"},"How SafeLog4j works"),(0,n.kt)("p",null,"The common response to the Log4Shell vulnerability was puzzled curiousity about why Log4j was executing any code at all, when its job is simply to write data to a log or file. SafeLog4J simply disables the ",(0,n.kt)("a",{parentName:"p",href:"../docs/learn-devsec/development/java/jndi.md"},"JNDI processing")," engine that was used to load the remote code. Other logging activities proceed as normal. Security teams can still detect attacks because attack payloads are logged as plain text and not executed."),(0,n.kt)("h2",{id:"respect-to-the-aws-corretto-team"},"Respect to the AWS Corretto Team"),(0,n.kt)("p",null,"I would like to extend respect to the AWS Corretto team, who used a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/corretto/hotpatch-for-apache-log4j2"},"similar patching approach"),". When AWS performed their ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/hotpatch-for-apache-log4j/"},"rapid response work"),", they used an instrumentation-based approach to the issue. Although they own a WAF, network-based defenses are the incorrect tier for this type of issue."),(0,n.kt)("p",null,"Log4Shell is the first major vulnerability I'm aware of where instrumentation was used as the primary defense, and that's really cool."))}h.isMDXComponent=!0}}]);