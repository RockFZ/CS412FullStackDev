let foo = (str, func) => {
    return func(str);
}

console.log(foo('supercalifragilisticexpialidocious',(str)=>str.replace(/c/g,' c').split(' '))) //to fix

console.table(foo('supercalifragilisticexpialidocious',(str)=>{
    let object ={
        originalString: str,
        modifiedString: str.replace(/a/g,'A'),
        numberReplaced: (str.split("a").length - 1),
        length: str.length
    }
    return object
}))

module.exports={foo}