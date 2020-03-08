$('#go').click(function(){


    function checkIfComplete(){
        if(isComplete==false){
            isComplete = true;
        }else{
            place = "second";
        }

    }
    var carWidth = $('#car1').width();
    var raceTrackWidth = $(window).width()-carWidth;
    var raceTime1 = Math.floor((Math.random()*5000)+1);
    var raceTime2 = Math.floor((Math.random()*5000)+1);
    var isComplete = false;
    var place  = "first";

    $('#car1').animate({
        left:raceTrackWidth
    },raceTime1,function(){
        checkIfComplete();
        $('#raceInfo1 span').text('Finished in ' + place + ' place ' + ' Clocked in at ' + raceTime1 + 'ms');
    });
    $('#car2').animate({
        left:raceTrackWidth
    },raceTime2,function(){
        checkIfComplete();
        $('#raceInfo2 span').text('Finished in ' + place + ' place ' + ' Clocked in at ' + raceTime2 + 'ms');
    });

    $('#reset').click(function(){
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });



});