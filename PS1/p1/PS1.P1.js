
//problem 1
const aplhabetSting = inString =>{
    if(typeof inString === 'string'){
        return inString.replace(/[.!?\\-]/g, '').replace(/[0-9]/g, '').toLowerCase().split('').sort().join('');
    }else{
        return null;
    }
}

console.log(aplhabetSting('cba.12'));

module.exports = {aplhabetSting};

