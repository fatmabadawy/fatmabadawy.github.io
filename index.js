function function1() {
    alert("Added to cart");
}

function function2(){
   
    
    alert("Account made successfully.");
    
}

function show() {
    const sidebar = document.querySelector('.sidebar')  //returns the first child element that matches a specified css selector of an element
    sidebar.style.display = 'flex' 
}
function hide() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}
/*search part*/
let availablekeywords1 = [
    'clothes',
    'shoes',
    'skin care',
    'supermarket',
    'electronics devices',
    'electricity',
    'medical devices',
    'books',
];
const resultbox=document.querySelector(".result-box");
const inputbox=document.getElementById("input-box");

inputbox.onkeyup = function()
{
    let result=[];
    let input=inputbox.value;
    if(input.length){
        result=availablekeywords1.filter((keyword)=>{
            return   keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
   display(result);
    if(!result.length)
    {
        resultbox.innerHTML='';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectinput(this)>"+list+"</li>";
    });
    resultbox.innerHTML="<ul>"+ content.join('') +"</ul>";
}

function selectinput(list){
    inputbox.value=list.innerHTML;
    resultbox.innerHTML='';
}
function goButton()
{
    let search =inputbox.value.toLowerCase() ; 
    if(search.includes('clothes')){
    window.location.href ="file:///C:/clothes%20part/men%20part.html";
    }
    else if(search.includes('skin care')){
        window.location.href ="file:///C:/html/html%20project/project%201/index.html";
}
}




