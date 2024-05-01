var buttons = document.querySelectorAll("button");
var input = document.getElementById("input");
var input2 = document.getElementById("input2");
var string = "";

buttons.forEach((button)=>{

    button.addEventListener("click",(e)=>{
        input2.value = string;
        if(e.target.innerHTML==="AC"){
            if(input.value===null){
                input.value = 0;
            }
            else{
                string = "";
                input.value = string;
                input2.value = string;
            }
        }
        else if(e.target.innerHTML==="C"){
            if(input.value===null || input2.value===null){
                input.value = "0";
            }
            else{
                if(string.length<=1){
                    input.value = "";
                    input2.value = "0";
                }
                else{
                    string = string.substring(0,string.length-1);
                    input2.value = string;
                    input.value = eval(string);
                }
            }
        }
        else if(e.target.innerHTML==="="){
            var result = eval(string);
            input2.value = result;
            input.value = "";
        }
        else{
            string = string + e.target.innerHTML;
            input2.value = string;
            input.value = eval(string);
        }
    })
});