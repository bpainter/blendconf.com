// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
// window and document are passed through as local 
// variables rather than as globals, because this (slightly) 
// quickens the resolution process and can be more 
// efficiently minified (especially when both are 
// regularly referenced in your plugin).
;(function ( $, window, document, undefined ) {
  if(!$.blendconf){
    $.blendconf = new Object();
  };
    
  $.blendconf.tabs = function(element, options){
    // To avoid scope issues, use 'base' instead of 'this'
    // to reference this class from internal events and functions.
    var base = this;
    
    // Access to jQuery and DOM versions of element
    base.$element = $(element);
    base.element = element;
    
    // Add a reverse reference to the DOM object
    base.$element.data("blendconf.tabs", base);
    
    base.init = function(){
      base.options = $.extend({},$.blendconf.tabs.defaultOptions, options);
      
      // Variables
      var tabsNavigation = base.$element;
      var tabsContainer  = base.$element.next();
      var activeNavIndex = tabsNavigation.children('.active').index();
      
      // Setup
      // Hide tab content and show the one that should be active
      tabsContainer.children().attr('data-content-active', false);
      tabsContainer.children(':eq(' + activeNavIndex + ')').attr('data-content-active', true);

      // Click action on nav
      tabsNavigation.find('a').on({
        click: function(event) {
          activeNavIndex = $(this).parent().index();
          tabsNavigation.children().removeClass('active');
          $(this).parent().addClass('active');
          tabsContainer.children().attr('data-content-active', false);
          tabsContainer.children(':eq(' + activeNavIndex + ')').attr('data-content-active', true);
          event.preventDefault();
          event.stopPropagation(); // Stop the click event from propagating up to the parent
        }
      });
    };
    
    // Sample Function, Uncomment to use
    // base.functionName = function(paramaters){
    // 
    // };
    
    // Run initializer
    base.init();
  };
  
  $.blendconf.tabs.defaultOptions = {
    // add options here
  };
  
  $.fn.blendconf_tabs = function(options){
    return this.each(function(){
      (new $.blendconf.tabs(this, options));
    });
  };
    
})(jQuery);