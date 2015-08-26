// Code goes here

// conuter should stop at August 31, 2015 23:59:59

  var currentDate = new Date().getTime(),
    eventDate = new Date("08-31-2015 23:59:59").getTime(),
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
    if (currentDate == eventDate) {
      clearInterval(timer);
    }  
  };
  
  var timer = setInterval(counter, 1000);

