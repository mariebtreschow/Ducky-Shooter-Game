
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
      })
   }
}



//running the function

$(document).ready(function() {
   createDucks(20);
});
