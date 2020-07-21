document.addEventListener('DOMContentLoaded', (event) => {
    
    var elem = document.querySelector('.grid');
    var imgLoad = imagesLoaded( elem );
    
    var iso = new Isotope( '.grid' , {
      // Isotope options...
      itemSelector: 'none',
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
      },
      visibleStyle: {
        transform: 'translateY(0)',
        opacity: 1 },
      hiddenStyle: { 
        transform: 'translateY(100px)',
        opacity: 0 },
      percentPosition: true,
      stagger: 150,
      transitionDuration: '0.55s',
    });
    
    imagesLoaded( elem, function() {
      console.log('DONE  - all images have been successfully loaded');
      elem.classList.remove('are-images-unloaded');
      var items = elem.querySelectorAll('.grid-item');
      iso.options.itemSelector = '.grid-item';
      iso.appended( items );
    });

    
    var infScroll = new InfiniteScroll( elem, {
      path: 'a.next-page',
      append: '.grid-item',
      outlayer: iso,
      status: '.page-load-status',
      prefill: true,
    });

     const btn = document.querySelector('.toggle-btn');

     btn.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar-link');
        const main = document.querySelector("html");
        const scrollWrap = document.querySelector(".scroll-top-wrap");
        navbar.classList.toggle('is-active');
        this.classList.toggle('is-active');
        console.log('toggle-nav.');
        main.classList.toggle('lock');
        scrollWrap.classList.toggle('lock');
     });
     
     const scrollBtn = document.getElementById('scroll-top');
     
     window.onscroll = function() {
       scrollFunction();  
     };
     
     function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.classList.remove('hide');
      } else {
        scrollBtn.classList.add('hide');
      }
    };
    
    scrollBtn.addEventListener('click', function(event) {
       scrollTop(); 
    });
    
    function scrollTop() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'});
    }
     
});