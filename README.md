lazy-load-bootstrap-carousel
============================

A lazy load version for the twitter bootstrap carousel.

A lazy load carousel delays loading of images in order to make the page load faster. 
It loads the images only if needed. It is useful for all web pages but mainly for web pages containing many large images.
Its behaviour is opposite of image preloading.

Requirements
------------
This demo is built with **Bootstrap&nbsp;5.3.7** and **jQuery&nbsp;3.7.1**. Include these exact versions to ensure the plugin works correctly.

How to use
============================

Define a `lazy-src` attribute on images that should be loaded only when their slide becomes active. The value contains the actual image path. Example markup from `index.html`:

```html
<div class="carousel-item">
  <img lazy-src="img/carousel/Jaipur-2.JPG" class="d-block w-100" alt="Jaipur" title="Jaipur picture 02">
</div>
```

Initialize the carousel and enable lazy loading with jQuery:

```javascript
$(function(){
    var element = document.getElementById('main-carousel');
    if(element){
        var carousel = new bootstrap.Carousel(element,{interval:3000, ride:true});
        $(element).lazyCarousel();
    }
});
```

The plugin loads images only when needed. I suggest using the lazy load feature starting from the second image.

I created a simple example in the patch. It is useful to understand how to create your lazy carousel.

More info can be found on http://www.maurizioconventi.com

License
============================
This code is released under the [MIT license](https://opensource.org/licenses/MIT). You are free to use and edit it.
