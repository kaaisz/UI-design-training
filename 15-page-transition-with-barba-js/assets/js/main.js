(function($) {
  $(function() {
    $("a").on("click", function(e) {
      e.preventDefault();
    
      // specify href element
      const href = $(this).attr("href");
      
      // data and title would be null 
      window.history.pushState(null, null, href);
    
      $("a").removeClass("active");
      $(this).addClass("active");
    });
  });
})(jQuery);
