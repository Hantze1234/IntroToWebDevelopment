function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    var num3 = document.forms["numberFun"]["num3"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
   }
   if (num3 == "" || isNaN(num3)) {
       alert("Step must be filled in with a number.");
       document.forms["numberFun"]["num3"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num3"].focus();
       return false;
   }
   if (num1 < 0) {
        alert("Starting Number must be filled in with a positive number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
   if (num2 < 0) {
       alert("Ending Number must be filled in with a positive number.");
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
   }
    if (num3 < 0) {
       alert("Step must be filled in with a positive number.");
       document.forms["numberFun"]["num3"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num3"].focus();
       return false;
   }
   if (num2 < num1){
        alert("Starting Number must be less than Ending Number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
    document.getElementById("results").style.display = "block";
return false;
}