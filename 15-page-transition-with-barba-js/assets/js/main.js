(function($) {
  $(function() {
    // function will be invoked when a tag has been clicked
    $("nav a").on("click", function(e) {
      e.preventDefault();
    
      // specify href element - `this` will refers to click element
      const href = $(this).attr("href");
      
      // add new state in the history - stateObject, title, URL
      window.history.pushState(null, null, href);
    
      $("nav a").removeClass("active");
      $(this).addClass("active");

      $.ajax({
        // tell ajax what we wanna get
        url: href,
        success: function (data) {
          // get and replace the new data
          // section will faceout in 250ms
          $("section").fadeOut(250, function() {
            // define newPage to fetch the data
            // add filter to specify the data in `section` to convert
            const newPage = $(data).filter("section").html();
            console.log(data); // ok
            console.log($(data).filter("section").html()); // ng

            // replace the data to newPage
            $("section").html(newPage);
            //fade section back in again
            $("section").fadeIn(250)
          })
        }
      })
    });
  });
})(jQuery);
