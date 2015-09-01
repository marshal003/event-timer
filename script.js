/*
  @author: Vinit Kumar Rai
  
  This is simple Javascript based timer.
  
  It uses Jquery only for DOM manipulation, but again that can be simple done
  using native APIs.
  
    
*/
// conuter should stop at August 31, 2015 23:59:59

  var getEventDate = function() {
    // Here we can put our logic to get event date from user or
    // read from some where else.
    // for now hard coding it.
    return "08-31-2015 23:59:59";
  };
  
  var calculateDiffs = function() {
    var currentDate = new Date().getTime();
    var eventDateTimeStamp = new Date(getEventDate()).getTime();
    var totalMilliSecondsRemaining = eventDateTimeStamp - currentDate;
    return totalMilliSecondsRemaining / 1000;
  };

  var totalSecondsRemaining = calculateDiffs();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
  
  
  var counter = function(){
    totalSecondsRemaining = totalSecondsRemaining - 1;
    if (totalSecondsRemaining < 0) {
      clearInterval(timer);
      totalSecondsRemaining = 0;
    }
    updateDomWithRemainingTime();
  };
  
  var getDateString = function(){
    var currentDate = new Date();
    var month = months[currentDate.getMonth()],
      date = currentDate.getDate(),
      year = currentDate.getFullYear();
    return month + " " + date + ", " + year;
    
  };
  
  var updateDomWithRemainingTime = function(){
    var seconds = Math.floor(totalSecondsRemaining % 60),
      minutes = Math.floor(totalSecondsRemaining / 60) % 60,
      hours = Math.floor(totalSecondsRemaining / (60 * 60)) % 24,
      days = Math.floor(totalSecondsRemaining / (24 * 60 * 60));
    
    $("#days").html(days >= 10 ? days : "0" + days);
    $("#hours").html(hours >= 10 ? hours : "0" + hours);
    $("#seconds").html(seconds >= 10 ? seconds : "0" + seconds);
    $("#minutes").html(minutes >= 10  ? minutes : "0" + minutes);
    $("#current-date").html(getDateString());
    
  };
  
  var timer = setInterval(counter, 1000);
  
  

