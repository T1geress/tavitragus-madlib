$(document).ready(function() {
  $("#libit").click(function() {
    var $holiday = $("#holiday").val();
    var $noun1 = $("#noun1").val();
    var $place = $("#place").val();
    var $name = $("#name").val();
    var $adjective1 = $("#adjective1").val();
    var $part = $("#body-part").val();
    var $verb = $("#verb").val();
    var $adjective2 = $("#adjective2").val();
    var $noun2 = $("#noun2").val();
    var $food = $("#food").val();
    var $plur = $("#plural-noun").val();
    $('#the-lib').text("I can't believe it is already " + $holiday + "!  I can't wait to put on my " + $noun1 + " and visit every " + $place + " in my neighborhood.  This year I am going to dress up as a " + $name + " with " + $adjective1 + " " + $part + ".  Before I " + $verb + ", I make sure to grab my " + $adjective2 + " " + $noun2 + " to hold all my " + $food + ".  Finally, all of my " + $plur + " are ready to go!");
  });
});
