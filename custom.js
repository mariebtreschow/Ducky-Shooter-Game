
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
           top: '35%',
           width: '150px'
      });

      delay = delay + 800;
      duck.appendTo('#duck');
      duck.hide().delay(delay).show(1).animate({'left':screenWidth}, {
         duration: 5000,
         easing: "linear",
         complete: function() {
             $(this).remove()
         }
      });
      duck.click(function () {
         var audioElement = document.createElement('audio');
         audioElement.setAttribute('src', 'Quack Quack-SoundBible.com-620056916.mp3');

            audioElement.play();
            $(this).remove()
      });
   }
}

$(document).ready(function() {
   createDucks(20);
});
