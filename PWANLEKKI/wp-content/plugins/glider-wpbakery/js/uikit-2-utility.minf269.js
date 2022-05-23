/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){"use strict";var i,e,n,s=[];t.component("stackMargin",{defaults:{cls:"mdp-margin-small-top",rowfirst:!1,observe:!1},boot:function(){t.ready((function(i){t.$("[data-mdp-margin]",i).each((function(){var i=t.$(this);i.data("stackMargin")||t.stackMargin(i,t.Utils.options(i.attr("data-mdp-margin")))}))}))},init:function(){var i,e=this;t.$win.on("resize orientationchange",(i=function(){e.process()},t.$((function(){i(),t.$win.on("load",i)})),t.Utils.debounce(i,20))),this.on("display.uk.check",function(t){this.element.is(":visible")&&this.process()}.bind(this)),this.options.observe&&t.domObserve(this.element,(function(t){e.element.is(":visible")&&e.process()})),s.push(this)},process:function(){var i=this.element.children();if(t.Utils.stackMargin(i,this.options),!this.options.rowfirst||!i.length)return this;var e={},n=!1;return i.removeClass(this.options.rowfirst).each((function(i,s){s=t.$(this),"none"!=this.style.display&&(i=s.offset().left,((e[i]=e[i]||[])&&e[i]).push(this),n=!1===n?i:Math.min(n,i))})),t.$(e[n]).addClass(this.options.rowfirst),this}}),i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,s=Math.floor(n*t.data("height"));t.css({height:i<e?s:t.data("height")})}},t.component("responsiveElement",{defaults:{},boot:function(){t.ready((function(i){t.$("iframe.mdp-responsive-width, [data-mdp-responsive]",i).each((function(){var i=t.$(this);i.data("responsiveElement")||t.responsiveElement(i,{})}))}))},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",(function(){e(t)})),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce((function(){i.forEach((function(t){e(t)}))}),15)),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"mdp-margin-small-top"},e),i=t.$(i).removeClass(e.cls);var n=!1;i.each((function(i,e,s,a){"none"!=(a=t.$(this)).css("display")&&(i=a.offset(),e=a.outerHeight(),s=i.top+e,a.data({ukMarginPos:s,ukMarginTop:i.top}),(!1===n||i.top<n.top)&&(n={top:i.top,left:i.left,pos:s}))})).each((function(i){"none"!=(i=t.$(this)).css("display")&&i.data("ukMarginTop")>n.top&&i.data("ukMarginPos")>n.pos&&i.addClass(e.cls)}))},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each((function(){e=Math.max(e,t.$(this).outerHeight())})).each((function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")}))}};e.row?(i.first().width(),setTimeout((function(){var e=!1,s=[];i.each((function(){var i=t.$(this),a=i.offset().top;a!=e&&s.length&&(n(t.$(s)),s=[],a=i.offset().top),s.push(i),e=a})),s.length&&n(t.$(s))}),0)):n(i)},n={},t.Utils.inlineSvg=function(i,e){t.$(i||'img[src$=".svg"]',e||document).each((function(){var i=t.$(this),e=i.attr("src");if(!n[e]){var s=t.$.Deferred();t.$.get(e,{nc:Math.random()},(function(i){s.resolve(t.$(i).find("svg"))})),n[e]=s.promise()}n[e].then((function(e){var n=t.$(e).clone();i.attr("id")&&n.attr("id",i.attr("id")),i.attr("class")&&n.attr("class",i.attr("class")),i.attr("style")&&n.attr("style",i.attr("style")),i.attr("width")&&(n.attr("width",i.attr("width")),i.attr("height")||n.removeAttr("height")),i.attr("height")&&(n.attr("height",i.attr("height")),i.attr("width")||n.removeAttr("width")),i.replaceWith(n)}))}))},t.ready((function(i){t.Utils.inlineSvg("[data-mdp-svg]",i)})),t.Utils.getCssVar=function(t){var i,e=document.documentElement,n=e.appendChild(document.createElement("div"));n.classList.add("var-"+t);try{i=JSON.parse(i=getComputedStyle(n,":before").content.replace(/^["'](.*)["']$/,"$1"))}catch(t){i=void 0}return e.removeChild(n),i}}(UIkit2mdp);