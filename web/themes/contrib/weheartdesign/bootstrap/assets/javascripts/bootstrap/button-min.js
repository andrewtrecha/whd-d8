/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(o){"use strict";
// BUTTON PUBLIC CLASS DEFINITION
// ==============================
// BUTTON PLUGIN DEFINITION
// ========================
function s(n){return this.each(function(){var t=o(this),e=t.data("bs.button"),s="object"==typeof n&&n;e||t.data("bs.button",e=new a(this,s)),"toggle"==n?e.toggle():n&&e.setState(n)})}var a=function(t,e){this.$element=o(t),this.options=o.extend({},a.DEFAULTS,e),this.isLoading=!1};a.VERSION="3.3.6",a.DEFAULTS={loadingText:"loading..."},a.prototype.setState=function(t){var e="disabled",s=this.$element,n=s.is("input")?"val":"html",a=s.data();t+="Text",null==a.resetText&&s.data("resetText",s[n]()),
// push to event loop to allow forms to submit
setTimeout(o.proxy(function(){s[n](null==a[t]?this.options[t]:a[t]),"loadingText"==t?(this.isLoading=!0,s.addClass(e).attr(e,e)):this.isLoading&&(this.isLoading=!1,s.removeClass(e).removeAttr(e))},this),0)},a.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var s=this.$element.find("input");"radio"==s.prop("type")?(s.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==s.prop("type")&&(s.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),s.prop("checked",this.$element.hasClass("active")),t&&s.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=o.fn.button;o.fn.button=s,o.fn.button.Constructor=a,
// BUTTON NO CONFLICT
// ==================
o.fn.button.noConflict=function(){return o.fn.button=t,this}
// BUTTON DATA-API
// ===============
,o(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=o(t.target);e.hasClass("btn")||(e=e.closest(".btn")),s.call(e,"toggle"),o(t.target).is('input[type="radio"]')||o(t.target).is('input[type="checkbox"]')||t.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){o(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery);