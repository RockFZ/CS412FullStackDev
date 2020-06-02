function* tokenWords(sentence){
    yield* sentence.split(' ');
}

let a = tokenWords('On an exceptionally hot evening early in July a young man came out of the garret in which he lodged in S.');
let temp = a.next();
while(temp.value!= undefined){
    console.log(`${temp.value}`);
    temp=a.next();
}
