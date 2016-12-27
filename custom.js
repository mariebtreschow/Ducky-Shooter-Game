
var screenWidth = document.body.offsetWidth;

function createDucks(count) {
var delay = 0;

for(var i = 0; i < count; i++) {
   var duck = $('<img src="ducky.jpg">');
   duck.css({
         position: 'absolute',
         left: 0,
         top: '35%',
         width: 50 + 200 * Math.random(i * 100) + 'px'
      });

      duck.appendTo('.duck');
      delay += 900;

      duck.hide().delay(delay).show(1).animate({
         'left': screenWidth
         }, {
         duration: 3000,
         easing: "linear",
         complete: function() {
          $(this).remove();
         }
      });
      duck.click(function() {
         var audioElement = document.createElement('audio');
         audioElement.setAttribute('src', 'Quack Quack-SoundBible.com-620056916.mp3');

         audioElement.play();
         $(this).remove();
      });
   }
}

$(document).ready(function() {
   createDucks(30);
   var counter = 0;
   var missCounter= 0;

   $(document).on('click', function(event) {
   if ($(event.target).hasClass('.duck')) {
      counter++;
   $(event.target).css({ opacity: 0 });
   } else {
      missCounter++;
   }
      console.log('Ducks you shot:' + counter, 'Ducks you missed:' + missCounter);
   });
});
