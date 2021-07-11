var num = 1;
num = 5;

if (num === 1){
    console.log("num é igual a 1")
}else{
    console.log(" num é 5")
}

if (num === 1){
    console.log("num é igual a 1")
}else if (num === 2){
    console.log("num é igual a 2")
}else{
    console.log(" num é 5")
}
// ----------------------------------->
var mes = "janeiro";

switch (mes) {
    case "fevereiro":
        console.log("mês 2")
        break;

    case "março":
        console.log("mês 3")
        break;
    
    case "dezembro":
        console.log("mês 12")
        break;
    default:
        console.log("nenhum dos casos acima foi atendido")
}