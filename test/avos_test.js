describe('avosTDD', function() {
    it('it should display the number of deals we have', function() {
        assert.equal(howManyDeals(myString).length, 4);
    });
    it('It should convert the deals into an object', function() {
        // this test will fail - can you fix it?
        assert.deepEqual(arrayOfObject(howManyDeals(myString)), [{
                qty: '1 ',
                price: 'R3'
            },
            {
                qty: '2 ',
                price: 'R7'
            },
            {
                qty: '3 ',
                price: 'R10'
            },
            {
                qty: '5 ',
                price: 'R14.50'
            }
        ]);
    });

    it('it should display the number of deals we have', function() {
        assert.equal(howManyDeals(myString).length, 4);
    });
});
