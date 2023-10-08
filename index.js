function DEfunction(){
    let inputElement = document.getElementById('myInput');
    let inputValue = inputElement.value;
    return inputValue.slice(0,-1);
}

function dotfunction(){
    let inputElement = document.getElementById('myInput');
    let inputValue = inputElement.value;
    let lastdot = inputValue.lastIndexOf('.');
    let lastplus = inputValue.lastIndexOf('+');
    let lastsub = inputValue.lastIndexOf('-');
    let lastmul = inputValue.lastIndexOf('*');
    let lastdiv = inputValue.lastIndexOf('/');
    let lastmod = inputValue.lastIndexOf('%');
    let lastoperator = Math.max(lastplus,lastsub,lastmul,lastdiv);
    if (lastdot <= lastoperator){
        return inputValue + '.';
    }
    else {
        return inputValue;
    }
}
function operatorfunction(operator){
    let inputElement = document.getElementById('myInput');
    let inputValue = inputElement.value;
    let numlen = inputValue.trim().length;
    if (numlen != 0){
        endchar = inputValue.charAt(numlen-1);
        switch(endchar){
            case '/':
            case '*':
            case '+':
            case '-':
            case '.':
            case '%':
                return inputValue;
                break;
            default:
                return inputValue + operator;
        }
    }
    }
function subtructionfunction(){
        let inputElement = document.getElementById('myInput');
        let inputValue = inputElement.value;
        inputValue = inputValue + '-';
        if (inputValue.includes('--')){
            inputValue = inputValue.replace('--','+');
            return inputValue;
        }
        else{
            return inputValue;
        }
    }

function equalfunction(){
    let inputElement = document.getElementById('myInput');
    let inputValue = inputElement.value;
    function evaluate(){
        return eval(inputValue);
    }
    inputValue = evaluate();
    return inputValue;
}