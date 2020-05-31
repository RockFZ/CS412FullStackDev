const {describe, it} = require('mocha') // mocha.org for docs
const{expect} = require('chai')// chai.org for docs

const {stringExpress} = require('./PS1.P2') // use destructuring to  pick a
// Make sure the directory is correct| function from file being tested

describe('problem2_tests', () => {
    describe('return_correct_ans', () => {
        let array = ['4+2','5*7','6-1','9/2'];
        let ans = [6,8,2,2];
        for (let i = 0; i< array.length; i++) {
            it('should return the correct ans = ' + ans[i], function () {
                let func = stringExpress(array[i]);
                expect(func(4, 2)).to.be.equal(ans[i]);
            });
        }
    });

    it('input should always be of type int', function(){
        let func = stringExpress(40);
        expect(func).to.be.null;
    });

    it('input must be of form {digit, operator, digit}', function(){
        let ans = stringExpress('123+2');
        expect(ans).to.be.null;
    });

})