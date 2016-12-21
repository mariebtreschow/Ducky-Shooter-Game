
//variable screenWidth
var screenWidth = $(document).width();


//function to create the ducks

function createDucks(count) {
var delay = 0;

for(var i = 0; i < count; i++) {
   var duck = $('<img src="ducky.png">');
   duck.css({
           position: 'absolute',
           left: 0,
           top: '25%',
           width: '150px'
      });

      duck.appendTo('#duck');
      dealy = delay + 800;
      duck.hide().duck(delay).show(1).animate({'left':screenWidth}, {
         duration: 5000,
         easing: "linear",
         complete: function() {
             $(this).remove()
         }
      });
      duck.click(function () {
            $(this).remove()
      });
   }
}



//running the function

$(document).ready(function() {
   createDucks(20);
});
