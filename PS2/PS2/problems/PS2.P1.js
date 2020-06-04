
function* fibs(){
    let[val1, val2, result] = [0,1,0]
    while (true){
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* evenFib(){
    let a = fibs();
    while(true){
        let temp = a.next().value;
        if(temp % 2 == 0){
            yield temp;
        }
    }

}


let counter = 6; // change counter for the first n even fibnumbers
let b = evenFib();
while(counter-->0){
    console.log(`${b.next().value}`);
}