let box = document.querySelector('.box');
let preNum = 0;
let opertype ='';
let values = {prev:null , new:null};
let clear = document.getElementById('c');

function getnumbers(num){
if (values.prev){
    values.new = num;
} else {
    values.prev = num;
}
 box.value=num;
}
function getoperators(oper){
    console.log(values)
    opertype= oper;
}
function calc(){
    if (!values.new)
    return;
    if(values.new&&values.prev&&opertype){
    if (opertype==='+'){
      box.value= values.prev+values.new
    }else if (opertype==='-'){
        box.value= values.prev-values.new
    }else if (opertype==='*'){
        box.value= values.prev*values.new
    }else if (opertype==='/'){
        box.value= values.prev/values.new
    }
}
}
clear.onclick= function clearf(){
    box.value= "";
}
