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
  
  var currentDate = new Date().getTime(),
    eventDateTimeStamp = new Date(getEventDate()).getTime(),
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
  
  
  var counter = function(){
    currentDate = new Date();
    updateDOM();
    checkEventDueDate();
  };
  
  var updateDOM = function(){
    $("#days").html(currentDate.getDate());
    $("#hours").html(currentDate.getHours());
    $("#minutes").html(currentDate.getMinutes());
    $("#seconds").html(currentDate.getSeconds());
    $("#current-date").html(getDateString());
  };
  
  var getDateString = function(){
    var month = months[currentDate.getMonth()],
      date = currentDate.getDate(),
      year = currentDate.getFullYear();
    return month + " " + date + ", " + year;
    
  };
  
  var checkEventDueDate = function(){
    if (currentDate.getTime() >= eventDateTimeStamp) {
      clearInterval(timer);
    }  
  };

  var timer = setInterval(counter, 1000);

