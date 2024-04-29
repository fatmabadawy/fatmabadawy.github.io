function myFunction() {
    alert("Added to cart");
  }


  function login() {
    alert("you are successfully logged in");
  } 
  
  function buy() {
    var x=confirm("Do you want to buy this?")
    if(x){
        text="Accepted";
    }

    else{
        text="Canceled";
    }
    alert(text);
  }