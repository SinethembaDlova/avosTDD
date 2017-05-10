describe('avosTDD', function() {
    it('it should display the number of deals we have', function() {
        assert.equal(howManyDeals(myString).length, 4);
    });
    it('It should dislay the number plates from Paarl', function() {
        // this test will fail - can you fix it?
        assert.equal(4, countAllPaarl("CJ 459234, CJ Supreme, CJ 1002523, CA 5221543, CJ Gadaffi, 433-643 JHB"));
    });
});
