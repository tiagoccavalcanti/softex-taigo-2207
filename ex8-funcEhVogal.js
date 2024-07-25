// --> verificar se é vogal

function ehVogal(letra){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == '0' || letra == 'u'){
        return true;
    }else{
        return false;
    };
};
console.log(ehVogal('b'))