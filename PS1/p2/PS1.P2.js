let stringExpress = expression => {
    if((/[0-9]{1}[+*-/%]{1}[0-9]{1}/g.test(expression)) && (expression.length == 3)){
        // ^^ completely understand why you love js now!!
        // this is cool as hell.
        switch(expression[1]){
            case '+': return  (left, right) => left + right;
            case '*': return  (left, right) => left * right;
            case '-': return  (left, right) => left - right;
            case '/': return  (left, right) => left / right;
            case '%': return  (left, right) => left % right;
        }
    }else{
        return null;
    }
}
module.exports = {stringExpress};

