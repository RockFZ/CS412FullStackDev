const {describe, it} = require('mocha') // mocha.org for docs
const{expect} = require('chai')// chai.org for docs

const {aplhabetSting} = require('./PS1.P1') // use destructuring to  pick a
// Make sure the directory is correct| function from file being tested

describe('problem1_tests', () => {
    it('should return aaacccdeefgiiiiiiillloopprrssstuux when supercalifragilisticexpialidocious is input', function(){
        let ans = aplhabetSting('supercalifragilisticexpialidocious');
        expect(ans).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('should return error for inputs not of type string', function(){
        let ans = aplhabetSting(40);
        expect(ans).to.be.null;
    });
    it('the returned string should not contain punctuation or ints', function(){
        let ans = aplhabetSting('cba.12');
        expect(ans).to.be.equal('abc');//Nan = not a number
    });

})