const SimpleSmartContract = artifacts.require('SimpleSmartContract');

contract('SimpleSmartContract', () => {

    it('Should deploy contract correctly', async () => {

        const simpleSmartContract = await SimpleSmartContract.deployed();
        assert(simpleSmartContract.address !== '');

    });

});