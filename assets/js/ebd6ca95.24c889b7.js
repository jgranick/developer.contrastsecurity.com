"use strict";(self.webpackChunkcontrast_dev=self.webpackChunkcontrast_dev||[]).push([[1722],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(t),p=i,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return t?o.createElement(f,r(r({ref:n},s),{},{components:t})):o.createElement(f,r({ref:n},s))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var m=2;m<a;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3118:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var o=t(7462),i=t(3366),a=(t(7294),t(3905)),r=["components"],c={},l="Command Injection",m={unversionedId:"learn-devsec/vulnerabilities/command-injection",id:"learn-devsec/vulnerabilities/command-injection",title:"Command Injection",description:"What is Command Injection",source:"@site/docs/learn-devsec/vulnerabilities/command-injection.md",sourceDirName:"learn-devsec/vulnerabilities",slug:"/learn-devsec/vulnerabilities/command-injection",permalink:"/docs/learn-devsec/vulnerabilities/command-injection",editUrl:"https://github.com/contrastsecurity/developer.contrastsecurity.com/blob/master/docs/learn-devsec/vulnerabilities/command-injection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar2",previous:{title:"Introduction",permalink:"/docs/learn-devsec/vulnerabilities/intro"},next:{title:"Cross Site Request Forgery",permalink:"/docs/learn-devsec/vulnerabilities/csrf"}},s={},d=[{value:"What is Command Injection",id:"what-is-command-injection",level:2},{value:"When can Command Injection affect my application",id:"when-can-command-injection-affect-my-application",level:2},{value:"How do I know if/where my application has a Command Injection vulnerability",id:"how-do-i-know-ifwhere-my-application-has-a-command-injection-vulnerability",level:2},{value:"How do I fix Command Injection",id:"how-do-i-fix-command-injection",level:2},{value:"How do people attack Command Injection flaws",id:"how-do-people-attack-command-injection-flaws",level:2}],u={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-injection"},"Command Injection"),(0,a.kt)("h2",{id:"what-is-command-injection"},"What is Command Injection"),(0,a.kt)("p",null,"Command Injection occurs when attackers can control system commands. Most often this occurs when user input is used as parameters to system utility calls."),(0,a.kt)("h2",{id:"when-can-command-injection-affect-my-application"},"When can Command Injection affect my application"),(0,a.kt)("p",null,"Command Injection can affect your application when user input is passed into methods that execute system commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var input = //something that reads remote input\nvar command = "cat " + input\nexec(command)\n')),(0,a.kt)("h2",{id:"how-do-i-know-ifwhere-my-application-has-a-command-injection-vulnerability"},"How do I know if/where my application has a Command Injection vulnerability"),(0,a.kt)("p",null,"Contrast Scan can evaluate your code and determine at build time if you introduce a Command Injection vulnerability."),(0,a.kt)("p",null,"Contrast Assess can monitor your running code to determine if you have any Command Injection flaws in your code."),(0,a.kt)("p",null,"Contrast Protect can defend any SQL Injection flaws against exploitation by monitoring the Command APIs."),(0,a.kt)("h2",{id:"how-do-i-fix-command-injection"},"How do I fix Command Injection"),(0,a.kt)("p",null,"The primary method for fixing Command Injection is to either avoid adding user input to system commands, or to create a tight allow-list of what can be passed to the command."),(0,a.kt)("h2",{id:"how-do-people-attack-command-injection-flaws"},"How do people attack Command Injection flaws"),(0,a.kt)("p",null,"Command Injection flaws are exploited by adding additional commands or flags to the command that attackers figure out. Sometimes this involes the ; separator on Linux systems or the && separator on Windows. Attemping a deny-list of these characters is ineffective and difficult."))}p.isMDXComponent=!0}}]);