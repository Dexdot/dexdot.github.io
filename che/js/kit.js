!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=39)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=$(".hamburger");r.on("click",function(){$(this).toggleClass("is-active")}),t.default=r},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=0,o=0,u=$(window);u.on("scroll",function(){var e=u.scrollTop();o=e>r?1:-1,r=e}),t.default=function(){return o}},3:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var o=$(".header"),u=function(){return o.addClass("is-active")};u(),$(window).on("scroll",function(){-1===(0,r.default)()&&0===window.pageYOffset?u():-1===(0,r.default)()&&window.pageYOffset>0?u():1===(0,r.default)()&&window.pageYOffset>0&&o.removeClass("is-active")})},38:function(e,t,n){"use strict";n(3),n(1)},39:function(e,t,n){e.exports=n(38)}});