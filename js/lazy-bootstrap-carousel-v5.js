(function($){
  'use strict';
  function LazyCarousel(element){
    this.$carousel = $(element);
    this.$loading = this.$carousel.find('.loading');
    this.init();
  }
  LazyCarousel.prototype.init = function(){
    var self = this;
    this.$carousel.on('slide.bs.carousel', function(e){
      var $next = $(e.relatedTarget);
      var $img = $next.find('img[lazy-src]');
      if(!$img.length) return;
      e.preventDefault();
      self.$loading.removeClass('hide');
      $img.one('load error', function(){
        $img.removeAttr('lazy-src');
        self.$loading.addClass('hide');
        self.$carousel.carousel(e.to);
      });
      $img.attr('src', $img.attr('lazy-src'));
    });
  };

  $.fn.lazyCarousel = function(){
    return this.each(function(){
      if(!$.data(this, 'lazyCarousel')){
        $.data(this, 'lazyCarousel', new LazyCarousel(this));
      }
    });
  };
})(jQuery);
