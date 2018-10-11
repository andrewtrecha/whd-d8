/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(d){"use strict";
// TAB CLASS DEFINITION
// ====================
// TAB PLUGIN DEFINITION
// =====================
function a(e){return this.each(function(){var t=d(this),a=t.data("bs.tab");a||t.data("bs.tab",a=new s(this)),"string"==typeof e&&a[e]()})}var s=function(t){
// jscs:disable requireDollarBeforejQueryAssignment
this.element=d(t);
// jscs:enable requireDollarBeforejQueryAssignment
};s.VERSION="3.3.6",s.TRANSITION_DURATION=150,s.prototype.show=function(){var t=this.element,a=t.closest("ul:not(.dropdown-menu)"),e=t.data("target");if(e||(e=(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var n=a.find(".active:last a"),i=d.Event("hide.bs.tab",{relatedTarget:t[0]}),r=d.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(i),t.trigger(r),!r.isDefaultPrevented()&&!i.isDefaultPrevented()){var s=d(e);this.activate(t.closest("li"),a),this.activate(s,s.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},s.prototype.activate=function(t,a,e){function n(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(t[0].offsetWidth,// reflow for transition
t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var i=a.find("> .active"),r=e&&d.support.transition&&(i.length&&i.hasClass("fade")||!!a.find("> .fade").length);i.length&&r?i.one("bsTransitionEnd",n).emulateTransitionEnd(s.TRANSITION_DURATION):n(),i.removeClass("in")};var t=d.fn.tab;d.fn.tab=a,d.fn.tab.Constructor=s,
// TAB NO CONFLICT
// ===============
d.fn.tab.noConflict=function(){return d.fn.tab=t,this}
// TAB DATA-API
// ============;
var e=function(t){t.preventDefault(),a.call(d(this),"show")};d(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery);