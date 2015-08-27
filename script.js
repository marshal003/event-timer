/*
  @author: Vinit Kumar Rai
  
  This is simple Javascript based timer.
  
  It uses Jquery only for DOM manipulation, but again that can be simple done
  using native APIs.
  http://plnkr.co/edit/QTLCXiqCdLgPrgbrN44d?p=preview
  
    
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
    updateDomWithRemainingTime();
    checkEventDueDate();
  };
  
  var getDateString = function(){
    var currentDate = new Date();
    var month = months[currentDate.getMonth()],
      date = currentDate.getDate(),
      year = currentDate.getFullYear();
    return month + " " + date + ", " + year;
    
  };
  
  var checkEventDueDate = function(){
    if (totalSecondsRemaining <= 0) {
      clearInterval(timer);
    }  
  };

  
  var updateDomWithRemainingTime = function(){
    var seconds = Math.floor(totalSecondsRemaining % 60),
      minutes = Math.floor(totalSecondsRemaining / 60) % 60,
      hours = Math.floor(totalSecondsRemaining / (60 * 60)) % 24,
      days = Math.floor(totalSecondsRemaining / (24 * 60 * 60));
    
    $("#days").html(days);
    $("#hours").html(hours);
    $("#seconds").html(seconds);
    $("#minutes").html(minutes);
    $("#current-date").html(getDateString());
    
  };
  
  var timer = setInterval(counter, 1000);
