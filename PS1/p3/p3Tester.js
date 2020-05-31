const {describe, it} = require('mocha') // mocha.org for docs
const{expect} = require('chai')// chai.org for docs

const {foo} = require('./PS1.P3') // use destructuring to  pick a
// Make sure the directory is correct| function from file being tested

describe('problem3_tests', () => {
    describe('base function apply', () => {
        let array = ['tim','tom','tap'];
        let func = [(str)=>str.split('').join(''), (str)=>str.toUpperCase(), (str)=>str.replace(/[a-z]/g,'2')];
        let ans = ['tim','TOM','222']
        for (let i = 0; i< array.length; i++) {
            it('should return the correct ans = ' + ans[i], function () {
                let ret = foo(array[i],func[i]);
                expect(ret).to.be.equal(ans[i]);
            });
        }
    });
})