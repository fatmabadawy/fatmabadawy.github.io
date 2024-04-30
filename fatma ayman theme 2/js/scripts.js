function myFunction() {
    alert("Added to cart");
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

  function login() {
    alert("you are successfully logged in");
  } 
  
  function mOver(obj) {
    obj.innerHTML = "20%"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Discount!"
  }