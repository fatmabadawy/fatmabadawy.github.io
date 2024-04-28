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
















function theme1()
{
    window.location.href="file:///C:/html/index.html";
}
function theme2()
{
    window.location.href="file:///C:/html/it%20project%20theme2.html";
}