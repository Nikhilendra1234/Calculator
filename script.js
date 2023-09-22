let res=document.getElementById("result");
let btn=document.querySelectorAll("button");

let result="";
 
function calcEvent(){
    
}
let btns=Array.from(btn);
 btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{

        if(e.target.innerHTML == "AC"){
            result="";
            res.value=result;
        }
        else if(e.target.innerHTML == "DEL"){
            result=result.substring(0,result.length-1);
            res.value=result;
        }
        else if(e.target.innerHTML == "=" ){
            result=eval(result);
            res.value=result;

            setTimeout(()=>{
                result="";
                res.value=result;
            },5000)
        }
        else{
            result += e.target.innerHTML;
            res.value=result;
        }

        
    })
 })